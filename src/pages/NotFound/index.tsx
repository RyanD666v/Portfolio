import { Link } from 'react-router'
import { APP_PATHS } from '~/constants/app.paths'

const NotFoundPage = () => {
  return (
    <section id='center'>
      <div>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
      <Link className='counter' to={APP_PATHS.home}>
        Back home
      </Link>
    </section>
  )
}

export default NotFoundPage
