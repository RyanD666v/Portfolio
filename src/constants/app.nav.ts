import { APP_PATHS, type AppPath } from '~/constants/app.paths'

export type NavLabelKey = 'nav.about' | 'nav.services' | 'nav.projects' | 'nav.contact'

type NavItem = {
  labelKey: NavLabelKey
  path: Exclude<AppPath, '*'>
}

export const NAV_ITEMS = [
  {
    labelKey: 'nav.about',
    path: APP_PATHS.about
  },
  {
    labelKey: 'nav.services',
    path: APP_PATHS.services
  },
  {
    labelKey: 'nav.projects',
    path: APP_PATHS.projects
  },
  {
    labelKey: 'nav.contact',
    path: APP_PATHS.contact
  }
] satisfies NavItem[]
