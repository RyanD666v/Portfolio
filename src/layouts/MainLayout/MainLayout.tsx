import type { PropsWithChildren } from 'react'
import Header from '~/components/common/Header'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='min-h-svh flex flex-col bg-border text-foreground relative'>
      <Header />
      <main className='min-h-svh'>{children}</main>
    </div>
  )
}

export default MainLayout
