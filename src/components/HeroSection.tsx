import SectionWrapper from './common/SectionWrapper'

const HeroSection = () => {
  return (
    <SectionWrapper className='relative items-center justify-center'>
      <h1 className='text-heading-1 uppercase font-bold text-center break-all'>aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa</h1>
      <h2 className='text-heading-2b font-bold absolute bottom-5 left-12.5'>
        &copy;{new Date().getFullYear()}
      </h2>
      <p className='text-body-18 font-normal absolute bottom-5 right-12.5'>
        &copy;{new Date().getFullYear()}
      </p>
    </SectionWrapper>
  )
}

export default HeroSection
