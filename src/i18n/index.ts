import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import {
  defaultLanguage,
  defaultNamespace,
  fallbackLanguage,
  I18N_LANGUAGE_KEY,
  supportedLanguages
} from './locales/config'
import en from './locales/en.json'
import vi from './locales/vi.json'

const resources = {
  en: {
    [defaultNamespace]: en
  },
  vi: {
    [defaultNamespace]: vi
  }
}

const supportedLngs = supportedLanguages.map(({ value }) => value)

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: defaultNamespace,
    ns: [defaultNamespace],
    fallbackLng: fallbackLanguage,
    supportedLngs,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: I18N_LANGUAGE_KEY
    }
  })

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.resolvedLanguage || defaultLanguage
}

i18n.on('languageChanged', (language: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = language
  }
})

export default i18n
