import React from 'react'
import Image from 'next/image';

function Circulation() {
  return (
    <div className='bg-white py-3 sm:py-6 md:py-12 px-3 md:px-8 lg:px-16 md:w-full flex justify-between items-center flex-col-reverse md:flex-row-reverse'>
        <div className='relative w-full md:w-3/6 h-48 md:h-80 overflow-hidden'>
            <Image
                src="/image-11.jpg"
                alt=''
                layout="fill"
                objectFit="cover"
                className=''
            />
        </div>
        <div className="w-full md:w-3/6 h-full md:pr-5 px-1 py-3 lg:py-5">
            <h1 className='text-2xl lg:text-3xl font-bold tracking-[2px] mb-2 font-serif'>Circulation Unit</h1>
            <p className='text-sm sm:text-base pt-2 font-serif tracking-wider pb-4 sm:pb-0'>
                Circulation Unit is dedicated to facilitating the smooth flow of library materials into and out of the hands of eager learners and researchers. Through meticulously managed loan transactions, patrons are empowered to explore the depths of knowledge housed within the library's shelves. Whether it's a student seeking textbooks for an upcoming exam or a faculty member delving into scholarly research, the Circulation Unit ensures that every individual can access the resources they need to thrive academically.
            </p>
        </div>
    </div>
  )
}

export default Circulation
