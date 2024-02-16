import React from 'react'
import { LuBookOpenCheck } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";

function AboutSecond() {
  return (
    <div className='sm:my-5 md:mx-10 px-2 sm:px-5 py-5 sm:py-7 bg-white'>
      <h1 className='text-gray-800 font-serif font-bold text-center text-2xl md:text-3xl lg:text-4xl'>
        Our Institutional Standing
      </h1>
      <div className="w-full flex justify-center items-center flex-wrap sm:flex-no-wrap gap-2 sm:gap-4 pt-5 sm:pt-10">
        <div className='w-full sm:w-4/6 md:w-1/4 h-32 sm:h-40 flex justify-between items-center py-4 px-4 sm:px-6 bg-teal-600'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-gray-50 font-semibold text-xl'>
                    Courses
                </h1>
                <h1 className='text-white text-3xl font-bold'>
                    452
                </h1>
            </div>
            <LuBookOpenCheck className="text-4xl sm:text-5xl text-gray-50" />
        </div>
        <div className='w-full sm:w-4/6 md:w-1/4 h-32 sm:h-40 flex justify-between items-center py-4 px-4 sm:px-6 bg-yellow-600'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-gray-50 font-semibold text-xl'>
                    Students
                </h1>
                <h1 className='text-white text-3xl font-bold'>
                    7985
                </h1>
            </div>
            <PiStudentBold className="text-4xl sm:text-5xl text-gray-50" />
        </div>
        <div className='w-full sm:w-4/6 md:w-1/4 h-32 sm:h-40 flex justify-between items-center py-4 px-4 sm:px-6 bg-emerald-600'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-gray-50 font-semibold text-xl'>
                    Staffs
                </h1>
                <h1 className='text-white text-3xl font-bold'>
                    300
                </h1>
            </div>
            <GiTeacher className="text-4xl sm:text-5xl text-gray-50" />
        </div>
        <div className='w-full sm:w-4/6 md:w-1/4 h-32 sm:h-40 flex justify-between items-center py-4 px-4 sm:px-6 bg-cyan-600'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-gray-50 font-semibold text-xl'>
                    Academic Materials
                </h1>
                <h1 className='text-white text-3xl font-bold'>
                    80000
                </h1>
            </div>
            <SlChemistry className="text-4xl sm:text-5xl text-gray-50" />
        </div>
      </div>
    </div>
  )
}

export default AboutSecond
