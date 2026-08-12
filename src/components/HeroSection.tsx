import { useTranslation } from 'react-i18next'
import SectionWrapper from './common/SectionWrapper'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper className='items-center justify-center relative bg-background'>
      <div className='max-w-295 flex-1 mx-auto relative flex items-center justify-center flex-col'>
        <h1 className='text-heading-1 uppercase font-bold text-center wrap-break-word'>{t('position')}</h1>
        <h2 className='text-heading-2b font-bold absolute bottom-5 left-12.5'>&copy;{new Date().getFullYear()}</h2>
        <p className='text-body-18 font-normal absolute bottom-5 right-12.5'>{t('creatingSince')}</p>
      </div>
    </SectionWrapper>
  )
}

export default HeroSection
