export const APP_PATHS = {
  home: '/',
  about: '/#about',
  services: '/#services',
  techStack: '/#tech-stack',
  projects: '/projects',
  contact: '/#contact',
  projectDetail: '/projects/:slug',
  notFound: '*'
} as const

export type AppPath = (typeof APP_PATHS)[keyof typeof APP_PATHS]
