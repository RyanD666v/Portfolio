export const SITE_URL = 'https://portfolio-tau-one-ubj65ky9l4.vercel.app'

export const SITE_META = {
  name: 'Dang Viet Hoang Portfolio',
  author: 'Dang Viet Hoang',
  email: 'rendersignal1@gmail.com',
  role: 'Frontend Developer',
  description:
    'Portfolio of Dang Viet Hoang, a Frontend Developer focused on React.js, Next.js, TypeScript, Flutter, responsive UI, RESTful API integration, and performance optimization.',
  imagePath: '/og-image.svg'
} as const

export const getAbsoluteUrl = (path = '/'): string => {
  return new URL(path, SITE_URL).toString()
}
