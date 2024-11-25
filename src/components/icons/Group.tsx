import type { SVGProps } from 'react'

export function Group(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <circle cx='9.001' cy='6' r='4' fill='currentColor'></circle>
      <ellipse
        cx='9.001'
        cy='17.001'
        fill='currentColor'
        rx='7'
        ry='4'
      ></ellipse>
      <path
        fill='currentColor'
        d='M21 17c0 1.657-2.036 3-4.521 3c.732-.8 1.236-1.805 1.236-2.998c0-1.195-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6a3 3 0 0 1-4.029 2.82A5.688 5.688 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.819A3 3 0 0 1 18 6.001'
      ></path>
    </svg>
  )
}
