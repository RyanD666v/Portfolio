import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import heroDecoration from '~/assets/money.png'
import SectionWrapper from './common/SectionWrapper'

const heroEntranceTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1]
} as const

const heroWordTransition = {
  duration: 1.1,
  ease: [0.25, 0.1, 0.25, 1]
} as const

const HeroSection = () => {
  const { t } = useTranslation()
  const positionWords = t('position').split(' ')

  return (
    <SectionWrapper id='hero-section' className='items-center justify-center relative bg-background'>
      <div className='max-w-295 flex-1 mx-auto relative flex items-center justify-center flex-col'>
        <div className='relative flex items-center justify-center'>
          <motion.img
            src={heroDecoration}
            alt=''
            draggable={false}
            initial={{ opacity: 0, y: 4, rotate: 12, filter: 'blur(2px)' }}
            animate={{ opacity: 0.42, y: 0, rotate: 16, filter: 'blur(0px)' }}
            transition={{ ...heroEntranceTransition, delay: 2.15 }}
            className='pointer-events-none absolute -top-18 -left-10 hidden size-32 select-none object-contain md:block'
          />
          <motion.img
            src={heroDecoration}
            alt=''
            draggable={false}
            initial={{ opacity: 0, y: 4, rotate: -8, filter: 'blur(2px)' }}
            animate={{ opacity: 0.32, y: 0, rotate: -10, filter: 'blur(0px)' }}
            transition={{ ...heroEntranceTransition, delay: 2.25 }}
            className='pointer-events-none absolute -right-2 -bottom-9 hidden size-28 select-none object-contain md:block'
          />
          <h1 className='relative z-10 text-heading-1 uppercase font-bold text-center wrap-break-word'>
            {positionWords.map((word, index) => (
              <motion.span
                key={`${word}-${index.toString()}`}
                initial={{ opacity: 0, y: 6, filter: 'blur(2px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...heroWordTransition, delay: 0.45 + index * 0.18 }}
                className='inline-block'
              >
                {word}
                {index < positionWords.length - 1 ? '\u00a0' : null}
              </motion.span>
            ))}
          </h1>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 4, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...heroEntranceTransition, delay: 1.95 }}
          className='text-heading-2b font-bold absolute bottom-5 left-12.5'
        >
          &copy;{new Date().getFullYear()}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 4, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...heroEntranceTransition, delay: 2.05 }}
          className='text-body-18 font-normal absolute bottom-5 right-12.5'
        >
          {t('creatingSince')}
        </motion.p>
      </div>
    </SectionWrapper>
  )
}

export default HeroSection
