import type { RouteObject } from 'react-router'
import ErrorBoundary from '~/components/common/ErrorBoundary'
import { APP_PATHS } from '~/constants/app.paths'
import MainLayout from '~/layouts/MainLayout'
import { HomeRoute, NotFoundRoute, ProjectsRoute } from './routes/pageRoutes'

type AppLayout = 'main' | 'empty'

type PageKey = 'home' | 'projects' | 'notFound'

type AppRouteConfig = {
  path: (typeof APP_PATHS)[keyof typeof APP_PATHS]
  layout: AppLayout
  page: PageKey
  element: RouteObject['element']
}

const routeErrorElement = <ErrorBoundary />

const routeLayouts = {
  main: (element) => <MainLayout>{element}</MainLayout>,
  empty: (element) => element
} satisfies Record<AppLayout, (element: RouteObject['element']) => RouteObject['element']>

export const fixedRoutes = [
  {
    path: APP_PATHS.home,
    layout: 'main',
    page: 'home',
    element: <HomeRoute />
  },
  {
    path: APP_PATHS.projects,
    layout: 'main',
    page: 'projects',
    element: <ProjectsRoute />
  }
] satisfies AppRouteConfig[]

export const notFoundRoute = {
  path: APP_PATHS.notFound,
  layout: 'empty',
  page: 'notFound',
  element: <NotFoundRoute />
} satisfies AppRouteConfig

export const appRoutes = [...fixedRoutes, notFoundRoute] satisfies AppRouteConfig[]

export const reactRouterRoutes = appRoutes.map<RouteObject>(({ path, layout, element }) => ({
  path,
  element: routeLayouts[layout](element),
  errorElement: routeLayouts[layout](routeErrorElement)
}))
