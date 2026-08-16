import { useTranslation } from 'react-i18next'
import SectionWrapper from '~/components/common/SectionWrapper'
import { motion } from 'motion/react'
import { projects } from '~/constants/project'
import ProjectCard from '~/components/ProjectCard'
const projectMotion = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(3px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)'
  }
} as const

const projectTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1]
} as const

const ProjectsPage = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper className='items-center justify-center relative bg-background'>
      <div className='max-w-295 flex-1 mx-auto relative flex w-full flex-col justify-center gap-10 py-40'>
        <div className='flex flex-col gap-2'>
          <motion.h1
            variants={projectMotion}
            initial='hidden'
            animate='visible'
            transition={projectTransition}
            className='text-heading-1b font-bold'
          >
            {t('nav.projects')}
          </motion.h1>
          <motion.p
            variants={projectMotion}
            initial='hidden'
            animate='visible'
            transition={projectTransition}
            className='text-body-18 font-normal'
          >
            {t('description')}
          </motion.p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ProjectsPage
