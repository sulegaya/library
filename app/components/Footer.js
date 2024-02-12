import React from 'react'
import Link from 'next/link';
import { BsInstagram } from "react-icons/bs";
import { LiaFacebook } from 'react-icons/lia';
import { FiTwitter } from 'react-icons/fi';
import FooterWhatsAppButton from './FooterWhatsAppButton';

function Footer() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center pt-4 pb-3 px-2 sm:px-5 lg:px-20 font-serif select-none bg-white dark:bg-black '>
        <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide text-teal-800 dark:text-white">
          ADUST Wudil
        </h1>
        <div
         className='flex flex-row items-center'>
            <Link href="#" target='_blank' className=''>
             <FiTwitter className="text-base sm:text-xl mx-2 text-black dark:text-slate-50 hover:text-gray-500 cursor-pointer"/>
            </Link>
            <Link href="#" className=''>
             <BsInstagram className="text-base sm:text-xl mx-2 text-black dark:text-slate-50 hover:text-gray-500 cursor-pointer"/>
            </Link>
            <Link href="#" className=''>
                <LiaFacebook className="text-lg sm:text-2xl mx-2 text-black dark:text-slate-50 hover:text-gray-500 cursor-pointer"/>
            </Link>
            <FooterWhatsAppButton />
        </div>
      </div>
      <p className='text-sm sm:text-base text-black dark:text-slate-50 py-2 bg-white border-t dark:bg-gray-800 text-center font-serif'> <span className="font-sans">&#169; 2024.</span> All Rights Reserved</p>
    </div>

  )
}

export default Footer