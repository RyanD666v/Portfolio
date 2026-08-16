import type { Project } from '~/types/project'
import { seamspaceGroupProject } from './group.seamspace'
import { seamspaceDiaryProject } from './diary.seamspace'
import { nippaProject } from './nippa'
import { projectXProject } from './projectX'

export const projects: readonly Project[] = [
  seamspaceGroupProject,
  seamspaceDiaryProject,
  nippaProject,
  projectXProject
]
