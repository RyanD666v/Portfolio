import createLazyRoute from './createLazyRoute'

export const HomeRoute = createLazyRoute(() => import('~/pages/Home'), 'HomeRoute')

export const ProjectsRoute = createLazyRoute(() => import('~/pages/Projects'), 'ProjectsRoute')
export const ProjectsDetailRoute = createLazyRoute(() => import('~/pages/ProjectDetail'), 'ProjectsDetailRoute')

export const NotFoundRoute = createLazyRoute(() => import('~/pages/NotFound'), 'NotFoundRoute')
