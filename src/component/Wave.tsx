import React from 'react'
// import Image from 'next/image'
import wave from '../app/images/wave.svg'

interface WaveProps {
  title1: string
  subtitle: string
}

export default function Wave ({ title1, subtitle }: WaveProps) {
  return (
    <div className='relative top-[-65px]'>
      <div className='w-full xl:h-[40vh] lg:h-[40vh] md:h-[50vh] sm:h-[50vh] h-[50vh] bg-[#495f80]'>
        <div className='w-full h-full flex flex-col items-center justify-center z-10'>
          <h1 className='capitalize z-1 logo text-white mx-auto font-bold mt-40 xl:text-[2.8rem] lg:text-[2.5rem] md:text-[2rem] sm:text-[2rem] text-[2rem] px-10 text-center'>
            {title1} {/* Now using the prop here */}
          </h1>
          <p className='z-1 text-gray-200 mt-5 text-center tracking-wider not-italic text-lg xl:px-50 lg:px-50 md:px-20 sm:px-10 px-10'>
            {subtitle}
          </p>
        </div>
      </div>
      <div className='bg-white w-full h-[40vh] block'>
        <img
          src={wave.src}
          
          alt='Wave Image'
          className='xl:mt-[-80px] lg:mt-[-35px] md:mt-[-50px] sm:mt-[-30px] mt-[-20px]'
        />
      </div>
    </div>
  )
}
