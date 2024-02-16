import React from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AvailableBooks = () => {
  const handleDownload = (imageSrc) => {
    fetch(imageSrc)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => toast.error('Error downloading book: ' + error.message));
  };

  return (
    <div className='flex justify-center items-stretch flex-wrap px-2 sm:px-5 pt-4 sm:pt-5 pb-20 overflow-y-auto h-[98vh]'>
      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-52 mb-4 overflow-hidden'>
          <Image
            src="/image-19.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Psychology Fundamentals</h1>
        </div>
        <div onClick={() => handleDownload('/image-19.jpg')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">
          Download
        </div>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-52 mb-4 overflow-hidden'>
          <Image
            src="/image-13.Avif"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Economics Principles</h1>
        </div>
        <div onClick={() => handleDownload('/image-13.Avif')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">
          Download
        </div>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-52 mb-4 overflow-hidden'>
          <Image
            src="/image-18.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Biology Essentials</h1>
        </div>
        <div onClick={() => handleDownload('/image-18.jpg')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">
          Download
        </div>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-52 mb-4 overflow-hidden'>
          <Image
            src="/image-17.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Literature Review</h1>
        </div>
        <div onClick={() => handleDownload('/image-17.jpg')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">
          Download
        </div>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-52 mb-4 overflow-hidden'>
          <Image
            src="/image-14.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>History of Art</h1>
        </div>
        <div onClick={() => handleDownload('/image-14.jpg')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">
          Download
        </div>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-52 mb-4 overflow-hidden'>
          <Image
            src="/image-16.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Programming Fundamentals</h1>
        </div>
        <div onClick={() => handleDownload('/image-16.jpg')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">
          Download
        </div>
      </div>

      <div className='card-wrapper w-full md:w-1/2 lg:w-1/4 mx-2 sm:mx-4 shadow-md bg-slate-50/30 rounded-md p-2 my-3 border border-slate-50 flex justify-between items-center flex-col'>
        <div className='relative rounded-md w-full h-52 mb-4 overflow-hidden'>
          <Image
            src="/image-15.jpg"
            alt=''
            layout="fill"
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-gray-800 text-xl'>Introduction to Physics</h1>
        </div>
        <div onClick={() => handleDownload('/image-15.jpg')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 py-1.5 w-full mx-auto mt-3 text-white font-semibold text-center rounded-md">
          Download
        </div>
      </div>

    </div>
  )
}

export default AvailableBooks