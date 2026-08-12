import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { cn } from '~/lib/utils'
import SectionWrapper from './common/SectionWrapper'

const TECH_STACK_ITEMS = [
  'languages',
  'frontendFrameworks',
  'mobile',
  'uiStyling',
  'stateManagement',
  'apiIntegration',
  'localizationAuth',
  'dataVisualization',
  'performance',
  'developmentTools'
] as const

type TechIcon = {
  name: string
  icon: string
}

const TECH_ICON_ROWS = [
  [
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
    { name: 'Redux Toolkit', icon: 'redux' }
  ],
  [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'GitLab', icon: 'gitlab' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Express.js', icon: 'express' },
    { name: 'NestJS', icon: 'nestjs' },
    { name: 'Django', icon: 'django' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Vite', icon: 'vite' },
    { name: 'npm', icon: 'npm' }
  ]
] satisfies TechIcon[][]

const techIconModules = import.meta.glob<string>('../assets/tech-icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default'
})

const TECH_ICON_PATHS = Object.fromEntries(
  Object.entries(techIconModules).map(([path, iconUrl]) => {
    const iconName = path.split('/').at(-1)?.replace('.svg', '') || ''

    return [iconName, iconUrl]
  })
) as Record<string, string>

const getIconPath = (icon: string): string => TECH_ICON_PATHS[icon] || `/tech-icons/${icon}.svg`

const techStackViewport = {
  once: true,
  amount: 0.25
} as const

const techStackMotion = {
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

const techStackTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1]
} as const

const TechStackSection = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper
      id='tech-stack'
      className='items-center justify-center relative bg-secondary text-secondary-foreground'
    >
      <div className='max-w-295 flex-1 mx-auto relative flex w-full flex-col justify-center gap-12 py-20'>
        <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <motion.h2
            className='section-title'
            variants={techStackMotion}
            initial='hidden'
            whileInView='visible'
            viewport={techStackViewport}
            transition={{ ...techStackTransition, delay: 0.1 }}
          >
            {t('techStack.title')}
          </motion.h2>
          {/* <motion.p
            className='max-w-95 text-body-18 text-muted-foreground'
            variants={techStackMotion}
            initial='hidden'
            whileInView='visible'
            viewport={techStackViewport}
            transition={{ ...techStackTransition, delay: 0.22 }}
          >
            {t('techStack.summary', {
              count: TECH_STACK_ITEMS.length.toString().padStart(2, '0')
            })}
          </motion.p> */}
        </div>

        <motion.div
          className='space-y-4 overflow-hidden rounded-[8px] border border-border bg-background py-5 shadow-sm'
          variants={techStackMotion}
          initial='hidden'
          whileInView='visible'
          viewport={techStackViewport}
          transition={{ ...techStackTransition, delay: 0.34 }}
        >
          {TECH_ICON_ROWS.map((row, rowIndex) => (
            <div key={rowIndex.toString()} className='tech-marquee'>
              <div className={cn('tech-marquee-track', rowIndex % 2 === 1 && 'tech-marquee-track-reverse')}>
                {[...row, ...row].map((tech, index) => (
                  <div
                    key={`${tech.icon}-${index.toString()}`}
                    className='tech-icon-card'
                    aria-hidden={index >= row.length}
                  >
                    <span className='grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-white shadow-sm'>
                      <img
                        src={getIconPath(tech.icon)}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className='h-6 w-6 object-contain'
                        loading='lazy'
                      />
                    </span>
                    <span className='text-body-16 font-medium text-foreground'>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className='grid overflow-hidden rounded-[8px] border border-border bg-card text-card-foreground shadow-sm lg:grid-cols-2'>
          {TECH_STACK_ITEMS.map((techStackKey, index) => (
            <motion.article
              key={techStackKey}
              variants={techStackMotion}
              initial='hidden'
              whileInView='visible'
              viewport={techStackViewport}
              transition={{ ...techStackTransition, delay: 0.42 + index * 0.06 }}
              className={cn(
                'grid min-h-31 gap-5 border-border px-6 py-6 transition-colors hover:bg-muted/60 sm:grid-cols-[2.5rem_1fr] md:px-8',
                index < TECH_STACK_ITEMS.length - 1 && 'border-b',
                index >= TECH_STACK_ITEMS.length - 2 && 'lg:border-b-0',
                index % 2 === 0 && index < TECH_STACK_ITEMS.length - 1 && 'lg:border-r',
                index % 2 === 0 && index === TECH_STACK_ITEMS.length - 1 && 'lg:border-r'
              )}
            >
              <span className='pt-1 text-body-16 font-semibold text-muted-foreground'>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div>
                <h3 className='text-heading-6 font-bold tracking-normal'>{t(`techStack.${techStackKey}.title`)}</h3>
                <p className='mt-2! max-w-125 text-body-16 text-muted-foreground'>
                  {t(`techStack.${techStackKey}.description`)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default TechStackSection
