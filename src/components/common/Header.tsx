import { cn } from '~/lib/utils'
import Navbar from '../Navbar'
import ThemeLanguageControls from '../ThemeLanguageControls'

const Header = () => {
  return (
    <header className={cn('w-full bg-transparent sticky top-0 z-50 ')}>
      <div className='w-full h-full relative'>
        <ThemeLanguageControls />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
