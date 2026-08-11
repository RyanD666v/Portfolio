import type { ReactNode } from 'react'
import LenisProvider from './LenisProvider'

type AppProvidersProps = {
  children: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return <LenisProvider>{children}</LenisProvider>
}

export default AppProviders
