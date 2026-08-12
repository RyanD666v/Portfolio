import { useEffect, useState } from 'react'

const SCREEN_BREAKPOINTS = {
  tablet: 768,
  desktop: 1024
} as const

type ScreenSize = {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

const getScreenSize = (): ScreenSize => {
  const width = window.innerWidth
  const height = window.innerHeight

  return {
    width,
    height,
    isMobile: width < SCREEN_BREAKPOINTS.tablet,
    isTablet: width >= SCREEN_BREAKPOINTS.tablet && width < SCREEN_BREAKPOINTS.desktop,
    isDesktop: width >= SCREEN_BREAKPOINTS.desktop
  }
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize)

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize())

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}
