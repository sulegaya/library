import React from 'react'
import Image from 'next/image';

function Reserve() {
  return (
    <div className='bg-white pt-2 pb-10 sm:py-4 md:pt-8 md:pb-16 px-3 md:px-8 lg:px-16 md:w-full flex justify-between items-center flex-col-reverse md:flex-row-reverse'>
        <div className='relative w-full md:w-3/6 h-48 md:h-80 overflow-hidden'>
            <Image
                src="/image-4.jpg"
                alt=''
                layout="fill"
                objectFit="cover"
                className=''
            />
        </div>
        <div className="w-full md:w-3/6 h-full md:pr-5 px-1 py-3 lg:py-5">
            <h1 className='text-2xl lg:text-3xl font-bold tracking-[2px] mb-2 font-serif'>Reserve Unit</h1>
            <p className='text-sm sm:text-base pt-2 font-serif tracking-wider pb-4 sm:pb-0'>
             The Reserve Collection stands as a cornerstone of accessibility within the university library, providing a specialized space where high-demand materials are made readily available to students, faculty, and researchers. Tailored to meet the unique needs of academic coursework, this curated selection of resources ensures that essential readings and materials are easily accessible, empowering learners to excel in their studies.
            </p>
        </div>
    </div>
  )
}

export default Reserve
