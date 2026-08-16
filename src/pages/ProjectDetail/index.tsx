import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Navigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

import SectionWrapper from '~/components/common/SectionWrapper'
import { projects } from '~/constants/project'
import type { TechIcon } from '~/components/TechStackSection'

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
const iconUrlByName = Object.fromEntries(
  Object.entries(
    import.meta.glob<string>('/src/assets/tech-icons/*.svg', {
      eager: true,
      query: '?url',
      import: 'default'
    })
  ).map(([path, iconUrl]) => [path.split('/').at(-1)?.replace('.svg', ''), iconUrl])
) as Record<string, string>
const TECH_ICON_ROWS = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS', icon: 'css' },
  { name: 'React', icon: 'react' },
  { name: 'Vue', icon: 'vue' },
  { name: 'Svelte', icon: 'svelte' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Nuxt', icon: 'nuxt' },
  { name: 'SvelteKit', icon: 'svelte' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Dart', icon: 'dart' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'MUI', icon: 'mui' },
  { name: 'Ant Design', icon: 'ant-design' },
  { name: 'styled-components', icon: 'sass' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'shadcn/ui', icon: 'shadcnui' },
  { name: 'Redux Toolkit', icon: 'redux' },
] satisfies TechIcon[]
const getTechnologyIcon = (technology: string) => {
  const tech = TECH_ICON_ROWS.find((item) => item.name === technology)

  if (!tech) {
    return undefined
  }

  return iconUrlByName[tech.icon]
}
const ProjectDetail = () => {
  const { slug } = useParams()
  const { t } = useTranslation()

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to='/404' replace />
  }

  return (
    <SectionWrapper className='bg-background'>
      <div className='mx-auto w-full max-w-295 py-40'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col justify-between gap-30'>
            <motion.h1
              variants={projectMotion}
              initial='hidden'
              animate='visible'
              transition={projectTransition}
              className='text-heading-1b font-bold'
            >
              {t(project.name)}
            </motion.h1>

            <motion.div
              variants={projectMotion}
              initial='hidden'
              animate='visible'
              transition={{
                ...projectTransition,
                delay: 0.1
              }}
              className='flex flex-wrap items-end gap-8 justify-between'
            >
              <div className='flex items-end gap-5'>
                <div className='space-y-1'>
                  <p className='text-body-16 font-normal text-black/50 dark:text-white/50'>{t('position1')}</p>
                  <p className='text-body-18 font-medium text-black dark:text-white'>{t(project.position)}</p>
                </div>
                <p className='text-body-18 font-normal text-black dark:text-white'>/</p>
                <div>
                  <p className='text-body-16 font-normal text-black/50 dark:text-white/50'>{t('year')}</p>
                  <p className='text-body-18 font-medium text-black dark:text-white'>{project.year}</p>
                </div>
                <p className='text-body-18 font-normal text-black dark:text-white'>/</p>
                {(project?.liveUrl || project?.githubUrl) && (
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2.5 text-body-18 font-medium text-black dark:text-white'
                  >
                    {t('liveLink')}

                    <ArrowUpRight className='size-4' />
                  </a>
                )}
              </div>
              <p className='max-w-xl text-body-18 leading-relaxed text-muted-foreground'>{t(project.descriptionKey)}</p>
            </motion.div>
          </div>

          <motion.div
            variants={projectMotion}
            initial='hidden'
            animate='visible'
            transition={{
              ...projectTransition,
              delay: 0.25
            }}
            className='overflow-hidden rounded-[24px]'
          >
            <img src={project.coverImage} alt={project.name} className='aspect-video w-full object-cover' />
          </motion.div>
        </div>

        <motion.div
          variants={projectMotion}
          initial='hidden'
          whileInView='visible'
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={projectTransition}
          className='flex flex-col mt-10 gap-5 '
        >
          <p className='text-heading-3 font-bold'>{t('nav.techStack')}</p>

          <div className='flex flex-wrap gap-2'>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((technology) => {
                const iconUrl = getTechnologyIcon(technology)

                return (
                  <div key={technology} className='inline-flex h-9 items-center gap-2 rounded-full border px-4'>
                    {iconUrl && <img src={iconUrl} alt='' aria-hidden='true' className='size-3.5 shrink-0' />}

                    <span className='text-body-16 leading-none'>{technology}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={projectMotion}
          initial='hidden'
          whileInView='visible'
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={projectTransition}
          className='mt-16 flex flex-col gap-6'
        >
          <div className='flex items-end justify-between gap-4'>
            <p className='text-heading-3 font-semibold'>{t('contributions')}</p>

            <span className='text-body-14 text-muted-foreground'>
              {String(project.contributionKeys.length).padStart(2, '0')}
            </span>
          </div>

          <div className='border-t border-border'>
            {project.contributionKeys.map((key, index) => (
              <motion.div
                key={key}
                variants={projectMotion}
                initial='hidden'
                whileInView='visible'
                viewport={{
                  once: true,
                  amount: 0.3
                }}
                transition={{
                  ...projectTransition,
                  delay: index * 0.08
                }}
                className='group grid grid-cols-[48px_1fr] gap-4 border-b border-border py-5 transition-colors duration-300 hover:bg-muted/40 md:grid-cols-[80px_1fr]'
              >
                <span className='text-body-14 font-medium text-muted-foreground'>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className='flex items-start justify-between gap-6'>
                  <p className='max-w-3xl text-body-18 leading-relaxed text-foreground'>{t(key)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default ProjectDetail
