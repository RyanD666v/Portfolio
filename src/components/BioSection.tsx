import { useTranslation } from 'react-i18next'
import SectionWrapper from './common/SectionWrapper'

const BioSection = () => {
  const { t } = useTranslation()
  return (
    <SectionWrapper id='about' className='items-center justify-center relative bg-secondary'>
      <div className='flex items-stretch justify-between max-w-295 w-full mx-auto flex-1 pb-5'>
        <div className='max-w-75 flex flex-col items-start justify-end gap-75'>
          <h2 className='text-heading-2 font-bold mb-4'>{t('bio.greeting')}</h2>
          <p className='text-title-22 font-normal'>
            {t('bio.intro')}
          </p>
        </div>
        <div className='max-w-75 flex flex-col items-start justify-end gap-4'>
          <p className='text-body-18 font-normal'>
            {t('bio.description')}
          </p>
          <p className='text-body-18 font-normal'>
            {t('bio.description2')}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default BioSection
