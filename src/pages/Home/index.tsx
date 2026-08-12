import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import AnimatedImage from '~/components/AnimatedImage'
import BioSection from '~/components/BioSection'
import HeroSection from '~/components/HeroSection'
import ServiceSection from '~/components/ServiceSection'
import TechStackSection from '~/components/TechStackSection'
import fontImage from '~/assets/font.jpg'
import backImage from '~/assets/back.jpg'
const HomePage = () => {
  const { hash } = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hash) {
      return
    }

    const section = document.getElementById(hash.slice(1))

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [hash])

  return (
    <>
      <div ref={containerRef} className='relative'>
        <div className='pointer-events-none absolute inset-0 z-20'>
          <div className='sticky top-0 h-svh'>
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
              <AnimatedImage targetRef={containerRef} frontSrc={fontImage} backSrc={backImage} alt='Product' />
            </div>
          </div>
        </div>

        <HeroSection />
        <BioSection />
      </div>
      <ServiceSection />
      <TechStackSection />
    </>
  )
}

export default HomePage
