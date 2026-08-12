import { useTranslation } from 'react-i18next'
import SectionWrapper from './common/SectionWrapper'

const TECH_STACK_ITEMS = [
  'core',
  'frontend',
  'frameworks',
  'uiStyling',
  'stateManagement',
  'dataFetching',
  'formsValidation',
  'animation',
  'testing',
  'buildTools',
  'developmentTools',
  'designTools',
  'deployment'
] as const

const TechStackSection = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper className='items-center justify-center relative bg-secondary'>
      <div className='max-w-295 flex-1 mx-auto relative flex w-full flex-col justify-center gap-12 py-20'>
        <h2 className='section-title'>{t('techStack.title')}</h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {TECH_STACK_ITEMS.map((techStackKey) => (
            <article
              key={techStackKey}
              className='rounded-[8px] border border-border bg-card p-5 text-card-foreground'
            >
              <h3 className='text-heading-6 font-bold'>{t(`techStack.${techStackKey}.title`)}</h3>
              <p className='mt-3 text-body-16 text-muted-foreground'>{t(`techStack.${techStackKey}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default TechStackSection
