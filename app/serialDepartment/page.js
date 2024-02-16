"use client"
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Footer from "../components/Footer";

function page() {
  return (
    <main className='min-h-screen overflow-x-hidden bg-gray-50/50'>
      <Navbar />
      <Swiper />
      <div className="flex justify-center items-center flex-col py-5 sm:py-10 px-2 sm:px-20">
        <div className='relative w-full sm:w-5/6 h-48 md:h-80 overflow-hidden'>
            <Image
                src="/image-10.jpg"
                alt=''
                layout="fill"
                objectFit="cover"
                className=''
            />
        </div>
        <p className='text-sm sm:text-base py-5 sm:py-8 px-1'>
            The Serial Department serves as a vital gateway within our university library, offering access to a diverse array of periodicals, journals, and serial publications. It functions as a hub for staying abreast of the latest research findings, scholarly insights, and academic discourse across various fields of study. Whether you're delving into scientific breakthroughs, exploring literary criticism, or examining social trends, the Serial Department provides a curated collection of ongoing publications to support your academic pursuits. With resources continually updated and expanded, this department plays a crucial role in fostering a culture of knowledge dissemination and intellectual engagement within our academic community.
        </p>
      </div>
      <Footer />
    </main>
  )
}

export default page
