import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect, type ReactNode } from 'react'

type LenisProviderProps = {
  children: ReactNode
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}

export default LenisProvider
