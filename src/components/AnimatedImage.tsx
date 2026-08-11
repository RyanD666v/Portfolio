import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import type { RefObject } from 'react'

type AnimatedImageProps = {
  targetRef: RefObject<HTMLDivElement | null>
  src: string
  alt?: string
}

const AnimatedImage = ({ targetRef, src, alt = '' }: AnimatedImageProps) => {
    const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  })

  const rawY = useTransform(scrollYProgress, [0, 0.75, 1], [0, 1, 1])
  const rawRotate = useTransform(scrollYProgress, [0, 0.75, 1], [0, 360, 360])
  const rawScale = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1.8, 1.8])

  const smoothY = useSpring(rawY, {
    stiffness: 100,
    damping: 30
  })

  const rotate = useSpring(rawRotate, {
    stiffness: 100,
    damping: 30
  })

  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30
  })

  const y = useTransform(smoothY, value => `${value * 100}svh`)

  return (
    <motion.img
      src={src}
      alt={alt}
      style={{
        y,
        rotate,
        scale
      }}
      className='pointer-events-none absolute bottom-[calc(100svh+20px)] left-1/2 z-20 w-62.5 -translate-x-1/2'
    />
  )
}

export default AnimatedImage
