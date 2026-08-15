import type { ComponentPropsWithoutRef } from 'react'
import { useScreenSize } from '~/hooks/useScreenSize'
import { cn } from '~/lib/utils'

type SectionWrapperProps = ComponentPropsWithoutRef<'section'>

const SectionWrapper = ({ children, className, ...props }: SectionWrapperProps) => {
  const { isDesktop } = useScreenSize()

  return (
    <section className={cn(' flex flex-col min-h-svh', isDesktop ? 'px-12.5' : 'px-7.5', className)} {...props}>
      {children}
    </section>
  )
}

export default SectionWrapper
