import { motion } from 'motion/react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

import { Card, CardContent } from './ui/card'
import type { Project } from '~/types/project'
import { cn } from '~/lib/utils'

type ProjectCardProps = {
  project: Project
  index?: number
}

const projectViewport = {
  once: true,
  amount: 0.25
} as const

const projectMotion = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)'
  }
} as const

const projectImageMotion = {
  hidden: {
    scale: 1.04,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1
  }
} as const

const projectTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1]
} as const

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const { t } = useTranslation()

  return (
    <motion.div
      variants={projectMotion}
      initial='hidden'
      whileInView='visible'
      viewport={projectViewport}
      transition={{
        ...projectTransition,
        delay: 0.12 + index * 0.1
      }}
    >
      <Card
        className={cn('group overflow-hidden rounded-none border-0', 'bg-transparent p-0 shadow-none outline-0 ring-0')}
      >
        <CardContent className='border-0 p-0'>
          <Link to={`/projects/${project.slug}`} className='block'>
            <div className='overflow-hidden rounded-[20px] bg-neutral-200'>
              <motion.img
                src={project.coverImage}
                alt={project.slug}
                loading='lazy'
                variants={projectImageMotion}
                initial='hidden'
                whileInView='visible'
                viewport={projectViewport}
                transition={{
                  duration: 1.1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.18 + index * 0.1
                }}
                whileHover={{
                  scale: 1.04
                }}
                className={cn('aspect-5/3 w-full rounded-lg object-cover', 'will-change-transform')}
              />
            </div>

            <motion.div className='pt-3'>
              <h3 className='text-heading-3 font-medium'>{t(project.name)}</h3>

              <p className='text-body-16 font-normal text-muted-foreground'>{t(project.subtitle)}</p>
            </motion.div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
