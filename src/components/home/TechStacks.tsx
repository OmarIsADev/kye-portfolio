import Marquee from '../ui/marquee'
import techStacks from './techStacksData'

const TechStacks = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 md:shadow-xl'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {techStacks.map(({ icon: Icon, name }) => (
          <Icon width={40} height={40} key={name} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-950'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-950'></div>
    </div>
  )
}

export default TechStacks