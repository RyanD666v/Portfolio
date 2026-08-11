import { Suspense, type ReactNode } from 'react'

type SuspenseWrapperProps = {
  children: ReactNode
}

function PageLoader() {
  return (
    <section id='center' aria-live='polite' aria-busy='true'>
      <div className='page-loader'>Loading...</div>
    </section>
  )
}

function SuspenseWrapper({ children }: SuspenseWrapperProps) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}

export default SuspenseWrapper
