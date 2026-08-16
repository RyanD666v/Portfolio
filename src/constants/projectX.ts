import projectXCover from '~/assets/projectX.png'
import type { Project } from '~/types/project'

export const projectXProject = {
  slug: 'project-x',
  name: 'Project X',
  subtitle: 'projectsList.projectX.subtitle',

  descriptionKey: 'projectsList.projectX.description',

  year: '2025',
  position: 'position',

  technologies: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'TanStack Query',
    'Zustand',
    'SignalR',
    'Axios',
    'React Hook Form',
    'Zod',
    'Tiptap',
    'Lodash',
    'Dnd kit'
  ],
  contributionKeys: [
    'projectsList.projectX.contributions.contribution1',
    'projectsList.projectX.contributions.contribution2',
    'projectsList.projectX.contributions.contribution3',
    'projectsList.projectX.contributions.contribution4',
    'projectsList.projectX.contributions.contribution5',
    'projectsList.projectX.contributions.contribution6',
  ],
  coverImage: projectXCover,
  thumbnail: projectXCover,

  githubUrl: 'https://github.com/RyanD666v/projectX',

  featured: true
} as const satisfies Project
