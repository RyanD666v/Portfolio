import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import { NAV_ITEMS } from '~/constants/app.nav'
import { cn } from '~/lib/utils'
import MotionWrapper from './common/MotionWrapper'
import { Button } from './ui/button'

const Navbar = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = (): void => {
    setIsOpen((current) => !current)
  }

  return (
    <nav
      className={cn(
        'bg-nav-bg absolute top-7.5 left-1/2 -translate-x-1/2 px-4 py-3 rounded-[20px] flex flex-col w-80 mx-auto overflow-hidden transition-[height,border-radius] duration-500 ease',
        isOpen ? 'h-64.75' : 'h-15'
      )}
    >
      <div className='flex items-center justify-between'>
        <p className='text-title-22 text-cream font-semibold'>{t('owner')}</p>
        <Button
          className={cn('bg-cream h-9 w-11 py-2 px-3 rounded-[8px] hover:bg-cream text-black')}
          onClick={handleToggle}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          <Menu
            size={24}
            className={`
							absolute transition-all duration-300
							${isOpen ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}
						`}
          />

          <X
            size={24}
            className={`
							absolute transition-all duration-300
							${isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'}
						`}
          />
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className='flex flex-col items-start gap-2  pt-5'>
            {NAV_ITEMS.map((item, index) => (
              <MotionWrapper
                key={item.path}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <NavLink
                  to={item.path}
                  className='inline-flex rounded-[8px] bg-cream px-3 py-2 text-body-16 font-medium text-black'
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.labelKey)}
                </NavLink>
              </MotionWrapper>
            ))}
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
