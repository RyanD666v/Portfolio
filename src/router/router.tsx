import type { RouteObject } from 'react-router'
import ErrorBoundary from '~/components/common/ErrorBoundary'
import { APP_PATHS } from '~/constants/app.paths'
import HomeRoute from './routes/HomeRoute'
import NotFoundRoute from './routes/NotFoundRoute'

type AppLayout = 'main' | 'empty'

type PageKey = 'home' | 'notFound'

type AppRouteConfig = {
  path: string
  layout: AppLayout
  page: PageKey
  element: RouteObject['element']
}

export const fixedRoutes = [
  {
    path: APP_PATHS.home,
    layout: 'main',
    page: 'home',
    element: <HomeRoute />
  }
] satisfies AppRouteConfig[]

export const notFoundRoute = {
  path: APP_PATHS.notFound,
  layout: 'empty',
  page: 'notFound',
  element: <NotFoundRoute />
} satisfies AppRouteConfig

export const appRoutes = [...fixedRoutes, notFoundRoute] satisfies AppRouteConfig[]

export const reactRouterRoutes = appRoutes.map(({ path, element }) => ({
  path,
  element,
  errorElement: <ErrorBoundary />
})) satisfies RouteObject[]
