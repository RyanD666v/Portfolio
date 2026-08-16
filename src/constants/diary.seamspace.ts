import diaryCover from '~/assets/diary.seamespace.png'
import type { Project } from '~/types/project'

export const seamspaceDiaryProject = {
  slug: 'seamspace-diary',
  name: 'Diary Seamspace',
  subtitle: 'projectsList.seamspaceDiary.subtitle',
  descriptionKey: 'projectsList.seamspaceDiary.description',

  year: '2026',
  position: 'position',
  liveUrl: 'https://diary.seamspace.me/',

  technologies: [
    'Flutter',
    'Provider',
    'i10n',
    'QR Flutter',
    'Share Plus',
    'Go Router',
    'LocalAuthentication',
    'Secure Storage'
  ],
  contributionKeys: [
    'projectsList.seamspaceDiary.contributions.contribution1',
    'projectsList.seamspaceDiary.contributions.contribution2',
    'projectsList.seamspaceDiary.contributions.contribution3',
    'projectsList.seamspaceDiary.contributions.contribution4',
    'projectsList.seamspaceDiary.contributions.contribution5'
  ],

  coverImage: diaryCover,
  thumbnail: diaryCover,

  featured: true
} as const satisfies Project
