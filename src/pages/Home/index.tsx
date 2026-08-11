import { useRef } from 'react'
import AnimatedImage from '~/components/AnimatedImage'
import BioSection from '~/components/BioSection'
import HeroSection from '~/components/HeroSection'

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <div ref={containerRef} className='relative'>
        <HeroSection />
        <BioSection />
        <AnimatedImage targetRef={containerRef} src='https://github.com/shadcn.png' alt='Product' />
      </div>
    </>
  )
}

export default HomePage
