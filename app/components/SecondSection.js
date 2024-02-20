import React from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
function SecondSection() {
  return (
    <div className='flex flex-col md:flex-row items-stretch justify-between gap-2 py-3 sm:py-5 px-2 sm:px-10 select-none'>
      <div className='h-[250px] md:h-[400px] lg:h-[500px] w-full md:w-3/6 lg:w-3/6 shadow-md overflow-hidden relative'>
        <img className="w-full h-full" src='/image-22.jpg' alt=''/>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <div className="z-50 absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end px-2 sm:px-5 lg:px-10 text-white">
          <h1 className="animate__animated animate__slideInUp font-extrabold text-4xl lg:text-7xl tracking-wide mb-4 sm:mb-7 mt-2">
           Recollect your past for the future.
          </h1>
        </div>
      </div>
      <div className='w-full md:w-3/6 lg:w-3/6 h-full px-6 py-7'>
        <h1 className='font-extrabold text-xl tracking-wide'>
          Library Guides
        </h1>
        <p className='text-base text-gray-600 mt-2'>
          Find books, media, databases, e-journals and digital resources.
        </p>
        <div className='flex items-center mt-2'>
          <Link href="/students" className="text-lg font-semibold text-teal-600 hover:text-teal-500 mr-1.5">Read More </Link>
          <FaArrowRightLong className="text-lg font-semibold text-teal-600 hover:text-teal-500 " />
        </div>

        <h1 className='font-extrabold text-xl tracking-wide mt-7'>
          Borrow, Reserve, Renew
        </h1>
        <p className='text-base text-gray-600 mt-2'>
          Get advanced research assistance in dozens of subject areas.
        </p>
        <div className='flex items-center mt-2'>
          <Link href="/students" className="text-lg font-semibold text-teal-600 hover:text-teal-500 mr-1.5">Read More </Link>
          <FaArrowRightLong className="text-lg font-semibold text-teal-600 hover:text-teal-500 " />
        </div>
 
        <h1 className='font-extrabold text-xl tracking-wide mt-7'>
          Study Spaces & PCs
        </h1>
        <p className='text-base text-gray-600 mt-2'>
          Deposit data, papers, and other resources for long-term access.
        </p>
        <div className='flex items-center mt-2'>
          <Link href="/students" className="text-lg font-semibold text-teal-600 hover:text-teal-500 mr-1.5">Read More </Link>
          <FaArrowRightLong className="text-lg font-semibold text-teal-600 hover:text-teal-500 " />
        </div>
      </div>
    </div>
  )  
}

export default SecondSection