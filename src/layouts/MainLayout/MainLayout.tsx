import type { PropsWithChildren } from 'react'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import ScrollToTop from '~/components/common/ScrollToTop'
import SeoMeta from '~/components/common/SeoMeta'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='min-h-svh flex flex-col bg-background text-foreground relative'>
      <ScrollToTop/>
      <SeoMeta />
      <Header />
      <main className='min-h-svh'>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
