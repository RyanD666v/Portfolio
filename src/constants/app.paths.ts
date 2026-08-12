export const APP_PATHS = {
  home: '/',
  about: '/#about',
  services: '/#services',
  projects: '/projects',
  contact: '/#contact',
  notFound: '*'
} as const

export type AppPath = (typeof APP_PATHS)[keyof typeof APP_PATHS]
