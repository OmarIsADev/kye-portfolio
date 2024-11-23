import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion'
import React from 'react'

import { cn } from '@/lib/utils'

interface ScrollProgressBarType {
  type?: 'circle' | 'bar'
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
  color?: string
  strokeSize?: number
  showPercentage?: boolean
  targetId?: string
}

const getContainerElement = (id?: string) => {
  if (!id) return null

  return document.getElementById(id)
}

export default function ScrollProgressBar({
  type = 'circle',
  position = 'bottom-right',
  color = 'azure',
  strokeSize = 2,
  showPercentage = true,
  targetId
}: Readonly<ScrollProgressBarType>) {
  const spanRef = React.useRef<HTMLSpanElement>(null)
  const targetRef = React.useRef<HTMLElement | null>(null)

  targetRef.current = getContainerElement(targetId)

  const { scrollYProgress } = useScroll({
    ...(targetRef.current && {
      target: targetRef,
      offset: ['start center', 'end end']
    })
  })

  const widthValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scrollPercentage = useTransform(widthValue, [0, 1], [0, 100])

  useMotionValueEvent(scrollPercentage, 'change', (latest) => {
    if (!spanRef.current) return

    if (type === 'bar') {
      spanRef.current.style.width = `${latest}%`
      return
    }

    spanRef.current.textContent = `${Math.round(latest)}%`
  })

  if (type === 'bar') {
    return (
      <span
        ref={spanRef}
        className={cn(
          'pointer-events-none fixed end-0 start-0 top-0 z-30',
          'w-0 overflow-clip rounded-full'
        )}
        style={{ height: `${strokeSize + 2}px` }}
      >
        <span
          style={{ backgroundColor: color }}
          className='bg-primary-gradient absolute block h-full w-screen'
        ></span>
      </span>
    )
  }

  return (
    <div
      className={cn('fixed z-30 flex items-center justify-center', {
        'end-0 top-0': position === 'top-right',
        'bottom-0 end-0': position === 'bottom-right',
        'start-0 top-0': position === 'top-left',
        'bottom-0 start-0': position === 'bottom-left'
      })}
    >
      {/* {percentage > 0 && (
        <> */}
      <svg width='100' height='100' viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='30' fill='none' strokeWidth={strokeSize} />
        <motion.circle
          cx='50'
          cy='50'
          r='30'
          pathLength='1'
          stroke={color}
          fill='none'
          strokeDashoffset='0'
          strokeWidth={strokeSize}
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      {showPercentage && (
        <span ref={spanRef} className='absolute mx-auto text-sm'></span>
      )}
      {/* </>
      )} */}
    </div>
  )
}
