import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import SectionWrapper from './common/SectionWrapper'

const SERVICE_ITEMS = ['frontendDevelopment', 'uiEngineering', 'apiIntegration', 'webOptimization'] as const

const serviceViewport = {
  once: true,
  amount: 0.35
} as const

const serviceMotion = {
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

const serviceTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1]
} as const

const getServiceCategories = (description: string): string[] => {
  return description
    .split('\u00b7')
    .map((category) => category.trim())
    .filter(Boolean)
}

const ServiceSection = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper id='services' className='items-center justify-center relative bg-background'>
      <div className='max-w-295 flex-1 mx-auto relative flex w-full flex-col gap-15 py-5 justify-center'>
        <h2 className='section-title'>
          <motion.span
            className='inline-block'
            variants={serviceMotion}
            initial='hidden'
            whileInView='visible'
            viewport={serviceViewport}
            transition={{ ...serviceTransition, delay: 0.1 }}
          >
            {t('services.title')}
          </motion.span>
        </h2>
        <div className='w-full'>
          {SERVICE_ITEMS.map((serviceKey, index) => (
            <motion.article
              key={serviceKey}
              variants={serviceMotion}
              initial='hidden'
              whileInView='visible'
              viewport={serviceViewport}
              transition={{ ...serviceTransition, delay: 0.22 + index * 0.1 }}
              className='flex min-h-30 w-full flex-col justify-center gap-4 border-b border-border bg-card py-6 text-card-foreground first:border-t md:flex-row md:items-center md:justify-between'
            >
              <h3 className='text-heading-3 font-medium'>{t(`services.${serviceKey}.title`)}</h3>
              <div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-body-18 text-muted-foreground md:justify-end'>
                {getServiceCategories(t(`services.${serviceKey}.description`)).map((category, categoryIndex) => (
                  <span key={category} className='inline-flex items-center gap-3'>
                    {categoryIndex > 0 && <span className='size-1.5 rounded-full bg-foreground' />}
                    <span>{category}</span>
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ServiceSection
