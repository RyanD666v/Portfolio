import { motion, useScroll, useTransform } from 'motion/react'
import type { RefObject } from 'react'
import { useScreenSize } from '~/hooks/useScreenSize'

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
  const { isDesktop } = useScreenSize()

  const shouldAutoFlip = !isDesktop

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
      initial={{
        opacity: 0,
        y: 6,
        filter: 'blur(2px)'
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 0.95,
        delay: 1.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{
        width: shouldAutoFlip ? 250 : width,
        height: shouldAutoFlip ? 250 : height,
        perspective: 1200
      }}
      className='relative'
    >
      <motion.img
        src={frontSrc}
        alt={alt}
        initial={shouldAutoFlip ? { rotateY: 0 } : undefined}
        animate={shouldAutoFlip ? { rotateY: 180 } : undefined}
        transition={
          shouldAutoFlip
            ? {
                duration: 0.8,
                delay: 2.2,
                ease: [0.25, 0.1, 0.25, 1]
              }
            : undefined
        }
        style={
          shouldAutoFlip
            ? {
                backfaceVisibility: 'hidden'
              }
            : {
                rotateY: frontRotateY,
                backfaceVisibility: 'hidden'
              }
        }
        className='absolute inset-0 h-full w-full rounded-lg object-cover'
      />

      <motion.img
        src={backSrc}
        alt={alt}
        initial={shouldAutoFlip ? { rotateY: 180 } : undefined}
        animate={shouldAutoFlip ? { rotateY: 360 } : undefined}
        transition={
          shouldAutoFlip
            ? {
                duration: 0.8,
                delay: 2.2,
                ease: [0.25, 0.1, 0.25, 1]
              }
            : undefined
        }
        style={
          shouldAutoFlip
            ? {
                backfaceVisibility: 'hidden'
              }
            : {
                rotateY: backRotateY,
                backfaceVisibility: 'hidden'
              }
        }
        className='absolute inset-0 h-full w-full rounded-lg object-cover'
      />
    </motion.div>
  )
}

export default AnimatedImage