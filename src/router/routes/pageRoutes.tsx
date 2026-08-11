import createLazyRoute from './createLazyRoute'

export const HomeRoute = createLazyRoute(() => import('~/pages/Home'), 'HomeRoute')

export const NotFoundRoute = createLazyRoute(() => import('~/pages/NotFound'), 'NotFoundRoute')
