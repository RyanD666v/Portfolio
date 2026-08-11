import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'

type MotionWrapperProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
} & Omit<HTMLMotionProps<'div'>, 'children'>

const MotionWrapper = ({
  children,
  className,
  delay = 0,
  duration = 0.45,
  y = 16,
  initial,
  animate,
  transition,
  ...props
}: MotionWrapperProps) => {
  return (
    <motion.div
      initial={initial ?? { opacity: 0, y }}
      animate={animate ?? { opacity: 1, y: 0 }}
      transition={transition ?? { duration, delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper
