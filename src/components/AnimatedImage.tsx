import { motion, useScroll, useTransform } from 'motion/react'
import type { RefObject } from 'react'

type AnimatedImageProps = {
  targetRef: RefObject<HTMLDivElement | null>
  frontSrc: string
  backSrc: string
  alt?: string
}

const AnimatedImage = ({
  targetRef,
  frontSrc,
  backSrc,
  alt = ''
}: AnimatedImageProps) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  })

  const frontRotateY = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    [0, 180, 180]
  )

  const backRotateY = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    [180, 360, 360]
  )

  const width = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.65, 1],
    [250, 280, 320, 375, 375]
  )

  const height = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.65, 1],
    [250, 375, 429, 503, 503]
  )

  return (
    <motion.div
      style={{
        width,
        height,
        perspective: 1200
      }}
      className='relative'
    >
      <motion.img
        src={frontSrc}
        alt={alt}
        style={{
          rotateY: frontRotateY,
          backfaceVisibility: 'hidden'
        }}
        className='absolute inset-0 h-full w-full rounded-lg object-cover'
      />

      <motion.img
        src={backSrc}
        alt={alt}
        style={{
          rotateY: backRotateY,
          backfaceVisibility: 'hidden'
        }}
        className='absolute inset-0 h-full w-full rounded-lg object-cover'
      />
    </motion.div>
  )
}

export default AnimatedImage