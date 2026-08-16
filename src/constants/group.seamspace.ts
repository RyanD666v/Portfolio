import groupCover from '~/assets/group.seamspace.png'
import type { Project } from '~/types/project'

export const seamspaceGroupProject = {
  slug: 'seamspace-group',
  name: 'Group Seamspace',
  subtitle: 'projectsList.seamspaceGroup.subtitle',

  descriptionKey: 'projectsList.seamspaceGroup.description',

  year: '2026',
  position: 'position',

  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'MUI', 'd3-cloud', 'i18next'],
  contributionKeys: [
    'projectsList.seamspaceGroup.contributions.contribution1',
    'projectsList.seamspaceGroup.contributions.contribution2',
    'projectsList.seamspaceGroup.contributions.contribution3',
    'projectsList.seamspaceGroup.contributions.contribution4',
    'projectsList.seamspaceGroup.contributions.contribution5',
  ],
  coverImage: groupCover,
  thumbnail: groupCover,

  liveUrl: 'https://grouptest.seamspace.me',

  featured: true
} as const satisfies Project
