import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function AboutVc() {
  return (
    <div className='bg-white py-3 sm:py-6 md:py-12 px-3 md:px-8 lg:px-16 md:w-full flex justify-between items-center flex-col md:flex-row-reverse'>
        <div className='relative w-full md:w-3/6 h-48 md:h-96 overflow-hidden'>
            <Image
                src="/vc.jpg"
                alt=''
                layout="fill"
                objectFit="cover"
                className=''
            />
        </div>
        <div className="w-full md:w-3/6 h-full md:pr-5 px-1 py-3 lg:py-5">
            <h1 className='text-xl md:text-base lg:text-2xl font-bold tracking-wider mb-2'>Celebrating the Leadership of Vice-Chancellor Prof. Musa Tukur Yakasai</h1>
            <p className='text-sm sm:text-base pt-2 font-serif tracking-wider'>
              Professor Musa Tukur Yakasai, our esteemed Vice-Chancellor, embodies a profound dedication to excellence, innovation, and inclusivity. With his visionary leadership, he has ushered our university into a new era of academic distinction and societal impact. Prof. Yakasai's wealth of experience and scholarly achievements serve as a beacon of inspiration for students, faculty, and staff alike. His unwavering commitment to fostering a vibrant learning environment and nurturing talent underscores his profound impact on our institution. Under his guidance, we look forward to reaching greater heights of success and contributing meaningfully to the advancement of knowledge and the betterment of society.
            </p>
        </div>
    </div>
  )
}

export default AboutVc
