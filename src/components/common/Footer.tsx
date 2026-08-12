import { useTranslation } from 'react-i18next'
import type { MouseEvent } from 'react'
import { NavLink } from 'react-router'
import { NAV_ITEMS } from '~/constants/app.nav'
import type { AppPath } from '~/constants/app.paths'
import { scrollToHomeHashSection } from '~/lib/utils'
const NAME = 'RYAN'
const Footer = () => {
  const { t } = useTranslation()

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, path: Exclude<AppPath, '*'>): void => {
    if (scrollToHomeHashSection(path)) {
      event.preventDefault()
    }
  }

  return (
    <footer id='contact' className='bg-black relative px-12.5 w-full pt-30 overflow-hidden pb-75'>
      <div className='max-w-295 w-full mx-auto flex items-end gap-30'>
        <h2 className='text-heading-2b text-cream w-95 wrap-break-word font-bold'>{t('footer.tagline')}</h2>
        <div className='flex items-start gap-30 flex-1 z-20'>
          <div className='flex flex-col gap-5 items-start max-w-75'>
            <p className='text-heading-4 text-cream font-bold'>/{t('footer.quickLinks')}</p>
            <div className='w-full flex items-center gap-2.5 flex-wrap'>
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.labelKey}
                  to={item.path}
                  className='inline-flex rounded-[8px] bg-secondary px-3 py-2 text-body-16 font-medium text-secondary-foreground'
                  onClick={(event) => handleNavClick(event, item.path)}
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-5 items-start max-w-75'>
            <p className='text-heading-4 text-cream font-bold'>/{t('nav.contact')}</p>
            <p className='text-body-18 text-cream'>{t('footer.email')}</p>
          </div>
        </div>
      </div>
      <div className='z-10 select-none absolute w-[94%] max-w-300 left-1/2 -translate-x-1/2 -bottom-35 flex items-center justify-center'>
        <p
          style={{
            fontSize: 'clamp(180px, 31vw, 700px)',
            letterSpacing: '7px'
          }}
          className=' text-cream/10 text-heading-2b'
        >
          {NAME}
        </p>
      </div>
    </footer>
  )
}

export default Footer
