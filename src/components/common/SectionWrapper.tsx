import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '~/lib/utils'

type SectionWrapperProps = ComponentPropsWithoutRef<'section'>

const SectionWrapper = ({ children, className, ...props }: SectionWrapperProps) => {
  return (
    <section className={cn('px-12.5 flex flex-col min-h-svh', className)} {...props}>
      {children}
    </section>
  )
}

export default SectionWrapper
