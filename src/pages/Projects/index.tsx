import { useTranslation } from 'react-i18next'
import SectionWrapper from '~/components/common/SectionWrapper'

const ProjectsPage = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper className='items-center justify-center relative bg-background'>
      <div className='max-w-295 flex-1 mx-auto relative flex w-full flex-col justify-center gap-4 py-20'>
        <h1 className='section-title'>{t('nav.projects')}</h1>
        <p className='text-body-18 text-muted-foreground'>{t('projects.description')}</p>
      </div>
    </SectionWrapper>
  )
}

export default ProjectsPage
