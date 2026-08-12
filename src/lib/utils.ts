import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { AppPath } from '~/constants/app.paths'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToHomeHashSection(path: Exclude<AppPath, '*'>): boolean {
  if (!path.startsWith('/#') || window.location.pathname !== '/') {
    return false
  }

  const section = document.getElementById(path.slice(2))

  if (!section) {
    return false
  }

  window.history.pushState(null, '', path)
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  return true
}
