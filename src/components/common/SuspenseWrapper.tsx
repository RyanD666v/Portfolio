import { Suspense, type ReactNode } from 'react'
import { Spinner } from '../ui/spinner'
type SuspenseWrapperProps = {
  children: ReactNode
}

const PageLoader = () => {
  return (
    <section className='flex min-h-svh items-center justify-center' aria-live='polite' aria-busy='true'>
      <Spinner />
    </section>
  )
}

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}

export default SuspenseWrapper
