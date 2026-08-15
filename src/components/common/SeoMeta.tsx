import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { APP_PATHS } from '~/constants/app.paths'
import { getAbsoluteUrl, SITE_META } from '~/constants/site'

type SeoConfig = {
  title: string
  description: string
}

const seoByPath: Record<string, SeoConfig> = {
  [APP_PATHS.home]: {
    title: 'Dang Viet Hoang - Frontend Developer Portfolio',
    description: SITE_META.description
  },
  [APP_PATHS.projects]: {
    title: 'Projects - Dang Viet Hoang Frontend Developer',
    description:
      'Selected frontend projects and case studies by Dang Viet Hoang, covering React.js, Next.js, TypeScript, UI engineering, API integration, and performance optimization.'
  }
}

const upsertMeta = (selector: string, attribute: 'content', value: string): void => {
  const element = document.head.querySelector<HTMLMetaElement>(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

const upsertLink = (rel: string, href: string): void => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }

  element.href = href
}

const SeoMeta = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const config = seoByPath[pathname] ?? seoByPath[APP_PATHS.home]
    const canonicalUrl = getAbsoluteUrl(pathname)
    const imageUrl = getAbsoluteUrl(SITE_META.imagePath)

    document.title = config.title
    upsertLink('canonical', canonicalUrl)
    upsertMeta('meta[name="description"]', 'content', config.description)
    upsertMeta('meta[property="og:title"]', 'content', config.title)
    upsertMeta('meta[property="og:description"]', 'content', config.description)
    upsertMeta('meta[property="og:url"]', 'content', canonicalUrl)
    upsertMeta('meta[property="og:image"]', 'content', imageUrl)
    upsertMeta('meta[name="twitter:title"]', 'content', config.title)
    upsertMeta('meta[name="twitter:description"]', 'content', config.description)
    upsertMeta('meta[name="twitter:image"]', 'content', imageUrl)
  }, [pathname])

  return null
}

export default SeoMeta
