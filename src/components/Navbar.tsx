import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { NAV_ITEMS } from '~/constants/app.nav'
import type { AppPath } from '~/constants/app.paths'
import { cn, scrollToHomeHashSection } from '~/lib/utils'

import MotionWrapper from './common/MotionWrapper'
import { Button } from './ui/button'

const Navbar = () => {
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent): void => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [isOpen])

  const handleToggle = (): void => {
    setIsOpen((current) => !current)
  }

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, path: Exclude<AppPath, '*'>): void => {
    setIsOpen(false)

    if (scrollToHomeHashSection(path)) {
      event.preventDefault()
    }
  }

  return (
    <motion.nav
      ref={navRef}
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
        delay: 1.45,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={cn(
        'absolute top-7.5 left-1/2 z-50 mx-auto flex',
        'w-[calc(100vw-2rem)] max-w-80 -translate-x-1/2 flex-col overflow-hidden',
        'rounded-[20px] bg-nav-bg px-4 py-3',
        'transition-[height,border-radius] duration-500 ease',
        isOpen ? 'h-68' : 'h-15'
      )}
    >
      <div className='flex items-center justify-between'>
        <p className='text-title-22 font-semibold text-cream'>{t('owner')}</p>

        <Button
          type='button'
          className={cn('relative h-9 w-11 rounded-[8px]', 'bg-cream px-3 py-2 text-black', 'hover:bg-cream')}
          onClick={handleToggle}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
        >
          <Menu
            size={24}
            className={cn(
              'absolute transition-all duration-300',
              isOpen ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            )}
          />

          <X
            size={24}
            className={cn(
              'absolute transition-all duration-300',
              isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'
            )}
          />
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial='hidden' animate='visible' exit='hidden' className='flex flex-col items-start gap-2 pt-5'>
            {NAV_ITEMS.map((item, index) => (
              <MotionWrapper
                key={item.path}
                initial={{
                  opacity: 0,
                  x: -24
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -16
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <NavLink
                  to={item.path}
                  className={cn(
                    'inline-flex rounded-[8px]',
                    'bg-secondary px-3 py-2',
                    'text-body-16 font-medium',
                    'text-secondary-foreground'
                  )}
                  onClick={(event) => handleNavClick(event, item.path)}
                >
                  {t(item.labelKey)}
                </NavLink>
              </MotionWrapper>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
