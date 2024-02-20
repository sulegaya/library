import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function ThirdSection() {
  return (
    <div className='relative my-3 sm:my-5 mx-2 sm:mx-10 select-none'>
        <div className="h-[280px] md:h-[450px] overflow-hidden">
            <Image
            src="/image-3.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            className=""
            />
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div className="z-50 absolute inset-0 flex flex-col items-center justify-center px-2 md:px-4 lg:px-6 text-center text-white">
                <h1 className="animate__animated animate__slideInUp cursor-pointer text-center font-extrabold text-3xl lg:text-5xl leading-snug mb-2 sm:mb-2">
                    Study Facilities
                </h1>
                <p class="animate__animated animate__slideInUp cursor-pointer text-center text-sm md:text-lg lg:text-xl leading-snug mb-2 sm:mb-4">
                    At the university library, you'll find a variety of spaces tailored to different study needs. From group study rooms to individual study carrels, computer labs, and more, we offer a diverse range of study environments to accommodate every student.
                    Create an <span className='text-blue-500'><Link href="/register">account here</Link></span> or login by clicking the button.
                </p>
                <Link href="/students" className='mt-1 font-bold text-sm sm:text-base lg:text-lg px-6 py-2 font-serif text-gray-50 hover:text-white bg-teal-600 hover:bg-teal-700 cursor-pointer rounded-3xl tracking-wider'>
                    Sign In
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection
