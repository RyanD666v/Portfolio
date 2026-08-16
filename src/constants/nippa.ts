import nippaCover from '~/assets/nippa.png'
import type { Project } from '~/types/project'

export const nippaProject = {
  slug: 'kicc',
  name: 'Korean IT Cooperation Center',
  descriptionKey: 'projectsList.kicc.description',
  subtitle: 'projectsList.kicc.subtitle',

  year: '2026',
  position: 'position',
  liveUrl: 'https://t2.kicc.vn',

  technologies: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'styled-components',
    'Redux Toolkit',
    'i18next',
    'Axios',
    'Recharts',
    'Swiper'
  ],
  contributionKeys: [
    'projectsList.kicc.contributions.contribution1',
    'projectsList.kicc.contributions.contribution2',
    'projectsList.kicc.contributions.contribution3',
    'projectsList.kicc.contributions.contribution4',
    'projectsList.kicc.contributions.contribution5',
    'projectsList.kicc.contributions.contribution6'
  ],
  coverImage: nippaCover,
  thumbnail: nippaCover,

  featured: true
} as const satisfies Project
