import { lazy } from 'react'
import SuspenseWrapper from '~/components/common/SuspenseWrapper'

const HomePage = lazy(() => import('~/pages/Home'))

function HomeRoute() {
  return (
    <SuspenseWrapper>
      <HomePage />
    </SuspenseWrapper>
  )
}

export default HomeRoute
