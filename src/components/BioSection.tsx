import SectionWrapper from './common/SectionWrapper'

const BioSection = () => {
  return (
    <SectionWrapper className='items-center justify-center relative bg-[#F1EEE8]'>
      <div className='flex items-stretch justify-between max-w-7xl w-full mx-auto flex-1 pb-5'>
        <div className='max-w-75 flex flex-col items-start justify-end gap-65'>
          <h2 className='text-heading-2 font-bold mb-4'>About Me</h2>
          <p className='text-body-18 font-normal'>
            I am a passionate developer with experience in creating engaging web applications.
          </p>
        </div>
        <div className='max-w-75 flex flex-col items-start justify-end gap-65'>
          <h2 className='text-heading-2 font-bold mb-4'>About Me</h2>
          <p className='text-body-18 font-normal'>
            I am a passionate developer with experience in creating engaging web applications.
          </p>
        </div>

      </div>
    </SectionWrapper>
  )
}

export default BioSection
