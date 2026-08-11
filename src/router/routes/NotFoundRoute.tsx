import { lazy } from 'react'
import SuspenseWrapper from '~/components/common/SuspenseWrapper'

const NotFoundPage = lazy(() => import('~/pages/NotFound'))

function NotFoundRoute() {
  return (
    <SuspenseWrapper>
      <NotFoundPage />
    </SuspenseWrapper>
  )
}

export default NotFoundRoute
