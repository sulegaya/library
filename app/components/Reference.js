import React from 'react'
import Image from 'next/image';

function Reference() {
  return (
    <div className='bg-white py-2 sm:py-4 md:py-8 px-3 md:px-8 lg:px-16 md:w-full flex justify-between items-center flex-col-reverse md:flex-row'>
        <div className='relative w-full md:w-3/6 h-48 md:h-80 overflow-hidden'>
            <Image
                src="/image-12.jpg"
                alt=''
                layout="fill"
                objectFit="cover"
                className=''
            />
        </div>
        <div className="w-full md:w-3/6 h-full md:pl-5 px-1 py-3 lg:py-5">
            <h1 className='text-2xl lg:text-3xl font-bold tracking-[2px] mb-2 font-serif'>Reference Unit</h1>
            <p className='text-sm sm:text-base pt-2 font-serif tracking-wider pb-4 sm:pb-0'>
             At the heart of the Reference Unit lies an extensive collection of foundational references, including encyclopedias, dictionaries, and handbooks. These venerable volumes serve as gateways to comprehensive knowledge, offering patrons instant access to authoritative information spanning a multitude of subjects and disciplines. Whether seeking definitions, background information, or contextual understanding, patrons can rely on these indispensable resources to lay the groundwork for their research endeavors.
            </p>
        </div>
    </div>
  )
}

export default Reference
