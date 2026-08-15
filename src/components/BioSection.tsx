import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { APP_PATHS } from '~/constants/app.paths'
import SectionWrapper from './common/SectionWrapper'
import { cn } from '~/lib/utils'
import { useScreenSize } from '~/hooks/useScreenSize'

const bioViewport = {
  once: true,
  amount: 0.45
} as const

const bioTextMotion = {
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

const bioTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1]
} as const

const BioSection = () => {
  const { t } = useTranslation()
  const { isDesktop } = useScreenSize()

  return (
    <SectionWrapper id='about' className='items-center justify-center relative bg-secondary'>
      <div
        className={cn('flex items-stretch justify-between flex-wrap max-w-295 w-full mx-auto gap-20 pb-5', isDesktop ? 'flex-1' : '')}
      >
        <div className={cn('max-w-75 flex flex-col items-start', isDesktop ? 'justify-end gap-75' : 'justify-center gap-20')}>
          <h2 className='text-heading-2 font-bold mb-4'>
            <motion.span
              className='inline-block'
              variants={bioTextMotion}
              initial='hidden'
              whileInView='visible'
              viewport={bioViewport}
              transition={{ ...bioTransition, delay: 0.1 }}
            >
              {t('bio.greeting')}
            </motion.span>
          </h2>
          <motion.p
            className='text-title-22 font-normal'
            variants={bioTextMotion}
            initial='hidden'
            whileInView='visible'
            viewport={bioViewport}
            transition={{ ...bioTransition, delay: 0.28 }}
          >
            {t('bio.intro')}
          </motion.p>
        </div>
        <div className='max-w-75 flex flex-col items-start justify-end gap-4'>
          <motion.p
            className='text-body-18 font-normal'
            variants={bioTextMotion}
            initial='hidden'
            whileInView='visible'
            viewport={bioViewport}
            transition={{ ...bioTransition, delay: 0.42 }}
          >
            {t('bio.description')}
          </motion.p>
          <motion.p
            className='text-body-18 font-normal'
            variants={bioTextMotion}
            initial='hidden'
            whileInView='visible'
            viewport={bioViewport}
            transition={{ ...bioTransition, delay: 0.54 }}
          >
            {t('bio.description2')}
          </motion.p>
          <motion.div
            variants={bioTextMotion}
            initial='hidden'
            whileInView='visible'
            viewport={bioViewport}
            transition={{ ...bioTransition, delay: 0.68 }}
          >
            <Link
              to={APP_PATHS.projects}
              className='mt-6 inline-flex items-center gap-3 text-body-18 font-medium text-foreground'
            >
              <span>{t('bio.viewProjects')}</span>
              <span className='grid size-10 place-items-center rounded-[8px] border border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background'>
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default BioSection
