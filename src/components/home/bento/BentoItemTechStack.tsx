import BentoCard from './BentoCard'
import TechStacks from './TechStacks'

interface Props {
  className?: string
}

const BentoItemTechStack = (props: Props) => {
  return (
    <BentoCard {...props}>
      <div className='h-full place-content-end space-y-3 p-5 tracking-wider'>
        <TechStacks />
        <div className='space-y-2'>
          <p className='text-lg'>Tech stacks I’ve used</p>
          <p className='text-xs text-slate-400'>
            Primarily focused on the JavaScript ecosystem, but always eager to
            explore and learn new technologies.
          </p>
        </div>
      </div>
    </BentoCard>
  )
}

export default BentoItemTechStack
