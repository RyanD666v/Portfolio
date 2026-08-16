import { motion } from 'motion/react'
import SectionWrapper from './common/SectionWrapper'
import { useTranslation } from 'react-i18next'
import { projects } from '~/constants/project'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
const projectViewport = {
  once: true,
  amount: 0.35
} as const

const projectMotion = {
  hidden: {
    opacity: 0,
    y: 6,
    filter: 'blur(2px)'
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
const ProjectSection = () => {
  const { t } = useTranslation()
  const featuredProjects = projects.slice(0, 4)
  return (
    <SectionWrapper id='projects' className='items-center justify-center relative bg-background'>
      <div className='max-w-295 flex-1 mx-auto relative flex w-full flex-col gap-15 py-20 justify-center'>
        <div className='flex items-end justify-between gap-4 flex-wrap'>
          <h2 className='section-title'>
            <motion.span
              className='inline-block'
              variants={projectMotion}
              initial='hidden'
              whileInView='visible'
              viewport={projectViewport}
              transition={{ ...projectTransition, delay: 0.1 }}
            >
              {t('nav.projects')}
            </motion.span>
          </h2>
          <Link to={'/projects'} className='flex gap-2.5 items-center'>
            <p className='text-body-18 font-normal'>{t('viewAll')}</p>
            <span className='flex size-8 items-center justify-center rounded-lg border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-neutral-950 group-hover:text-white'>
              <ArrowUpRight className='size-5' />
            </span>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ProjectSection
