import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutThird = () => {
  return (
    <div className='flex justify-center items-stretch flex-wrap sm:my-5 md:mx-10 px-2 sm:px-5 py-5 sm:py-7 bg-white'>
      <h1 className="text-gray-900 pb-5 w-full text-center text-xl lg:text-3xl sm:text-2xl font-semibold fot-serif">
        Discover the Diversity of Departments Available in Our University Library
      </h1>

      <p className="text-base sm:text-lg mb-3 text-center">
        Our university library houses an array of specialized departments catering to diverse academic disciplines. From literature to science, our comprehensive collection supports research, coursework, and intellectual exploration. Expert librarians are available to assist you in navigating our extensive resources, ensuring you have the tools needed for academic success.
      </p>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border bo1der-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-56 mb-4 overflow-hidden'>
          <Image
            src="/image-ew.PNG"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Reader Services</h1>
          <p className='text-start text-xs sm:text-sm mt-2'>
            Explore our university library's "Reader Services" - circulation, reference, and reserves. Borrow, research, and access high-demand materials effortlessly, enhancing your academic journey.
          </p>
        </div>
        <Link href="/readerService" className="bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">View More</Link>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border bo1der-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-56 mb-4 overflow-hidden'>
          <Image
            src="/image-4.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Serial Department</h1>
          <p className='text-start text-xs sm:text-sm mt-2'>
            Discover our university library's "Serial Department" - your gateway to periodicals, journals, and serial publications. Stay updated with the latest research and scholarly insights.
          </p>
        </div>
        <Link href="/serialDepartment" className="bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">View More</Link>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border bo1der-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-56 mb-4 overflow-hidden'>
          <Image
            src="/image-new-2.PNG"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Collection Development</h1>
          <p className='text-start text-xs sm:text-sm mt-2'>
            Experience the essence of scholarship with our "Collection Development" department at the university library. Curating a rich array of resources tailored to academic pursuits, we ensure your access to the knowledge you need.
          </p>
        </div>
        <Link href="/collectionDevelopment" className="bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">View More</Link>
      </div>
      
      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border bo1der-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-56 mb-4 overflow-hidden'>
          <Image
            src="/image-10.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>E-Library</h1>
          <p className='text-start text-xs sm:text-sm mt-2'>
            Explore boundless knowledge with our "E-Library" hub, offering a digital treasure trove of resources accessible anytime, anywhere. Dive into a world of learning at your fingertips.
          </p>
        </div>
        <Link href="/students" className="bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">View More</Link>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-1 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-56 mb-4 overflow-hidden'>
          <Image
            src="/image-12.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Administration</h1>
          <p className='text-start text-xs sm:text-sm mt-2'>
            Navigate seamlessly with our "Administration" department, ensuring the smooth operation and coordination of library services. Behind the scenes, we work tirelessly to support your academic endeavors.
          </p>
        </div>
        <Link href="/admin" className="bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">View More</Link>
      </div>

    </div>
  );
};

export default AboutThird;