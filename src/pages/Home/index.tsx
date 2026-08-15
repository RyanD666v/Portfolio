import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import AnimatedImage from '~/components/AnimatedImage'
import BioSection from '~/components/BioSection'
import HeroSection from '~/components/HeroSection'
import ServiceSection from '~/components/ServiceSection'
import TechStackSection from '~/components/TechStackSection'
import fontImage from '~/assets/font.jpg'
import backImage from '~/assets/back.jpg'
import { useScreenSize } from '~/hooks/useScreenSize'
import { cn } from '~/lib/utils'

const HomePage = () => {
  const { hash } = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const { isDesktop, isMobile } = useScreenSize()

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
        <div
          className={
            !isDesktop
              ? 'pointer-events-none absolute top-0 left-0 z-20 h-svh w-full'
              : 'pointer-events-none absolute inset-0 z-20'
          }
        >
          <div className={!isDesktop ? 'relative h-svh' : 'sticky top-0 h-svh'}>
            <div className={cn('absolute left-1/2 -translate-x-1/2', isMobile ? 'bottom-8' : 'bottom-5')}>
              <AnimatedImage
                targetRef={containerRef}
                frontSrc={fontImage}
                backSrc={backImage}
                alt='Dang Viet Hoang portfolio profile visual'
              />
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
