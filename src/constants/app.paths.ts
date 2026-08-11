export const APP_PATHS = {
  home: '/',
  notFound: '*'
} as const

export type AppPath = (typeof APP_PATHS)[keyof typeof APP_PATHS]
