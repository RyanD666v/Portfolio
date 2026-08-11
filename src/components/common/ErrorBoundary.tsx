import { Link, isRouteErrorResponse, useRouteError } from 'react-router'
import { APP_PATHS } from '~/constants/app.paths'

function ErrorBoundary() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error) ? error.statusText : 'Something went wrong.'

  return (
    <section id='center'>
      <div>
        <h1>Unexpected error</h1>
        <p>{message}</p>
      </div>
      <Link className='counter' to={APP_PATHS.home}>
        Back home
      </Link>
    </section>
  )
}

export default ErrorBoundary
