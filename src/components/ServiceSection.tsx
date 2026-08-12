import { useTranslation } from 'react-i18next'
import SectionWrapper from './common/SectionWrapper'

const SERVICE_ITEMS = ['frontendDevelopment', 'uiEngineering', 'apiIntegration', 'webOptimization'] as const

const ServiceSection = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper id='services' className='items-center justify-center relative bg-background'>
      <div className='max-w-295 flex-1 mx-auto relative flex w-full flex-col gap-15 py-5 justify-center'>
        <h2 className='section-title'>{t('services.title')}</h2>
        <div className='space-y-4'>
          {SERVICE_ITEMS.map((serviceKey) => (
            <article
              key={serviceKey}
              className='rounded-[8px] border border-border bg-card p-6 text-card-foreground min-h-30 flex items-center gap-3 justify-between'
            >
              <h3 className='text-heading-3 font-medium'>{t(`services.${serviceKey}.title`)}</h3>
              <p className='text-body-18 text-black/50 dark:text-white/50'>{t(`services.${serviceKey}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ServiceSection
