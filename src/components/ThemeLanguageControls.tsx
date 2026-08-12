import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Languages, Moon, Sun } from 'lucide-react'
import { supportedLanguages } from '~/i18n/locales/config'
import { Button } from './ui/button'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'portfolioTheme'

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const ThemeLanguageControls = () => {
  const { i18n, t } = useTranslation()
  const [theme, setTheme] = useState<Theme>(getPreferredTheme)

  const isDarkTheme = theme === 'dark'
  const activeLanguage = i18n.resolvedLanguage || i18n.language
  const nextLanguage = supportedLanguages.find(({ value }) => value !== activeLanguage)?.value || supportedLanguages[0].value

  const handleThemeToggle = (): void => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const handleLanguageToggle = (): void => {
    void i18n.changeLanguage(nextLanguage)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [isDarkTheme, theme])

  return (
    <>
      <Button
        className='fixed top-7.5 left-4 z-50 h-9 w-9 rounded-[8px] bg-secondary p-0 text-secondary-foreground shadow-lg shadow-black/10 hover:bg-secondary/90'
        onClick={handleThemeToggle}
        aria-label={isDarkTheme ? t('controls.switchToLight') : t('controls.switchToDark')}
      >
        {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
      </Button>
      <Button
        className='fixed top-7.5 right-4 z-50 h-9 gap-1 rounded-[8px] bg-secondary px-2.5 text-secondary-foreground shadow-lg shadow-black/10 hover:bg-secondary/90'
        onClick={handleLanguageToggle}
        aria-label={t('controls.switchLanguage')}
      >
        <Languages size={18} />
        <span className='text-xs font-bold uppercase'>{nextLanguage}</span>
      </Button>
    </>
  )
}

export default ThemeLanguageControls
