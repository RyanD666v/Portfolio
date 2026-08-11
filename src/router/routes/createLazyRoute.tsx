import { lazy, type ComponentType } from 'react'
import SuspenseWrapper from '~/components/common/SuspenseWrapper'

type LazyPageModule = {
  default: ComponentType
}

const createLazyRoute = (loadPage: () => Promise<LazyPageModule>, displayName: string) => {
  const Page = lazy(loadPage)

  const LazyRoute = () => {
    return (
      <SuspenseWrapper>
        <Page />
      </SuspenseWrapper>
    )
  }

  LazyRoute.displayName = displayName

  return LazyRoute
}

export default createLazyRoute
