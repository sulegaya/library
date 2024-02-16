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
      <div className="flex justify-center items-center flex-col py-5 sm:py-10 px-2 sm:px-10">
        <div className='relative w-full sm:w-5/6 h-48 md:h-80 overflow-hidden'>
            <Image
                src="/image-11.jpg"
                alt=''
                layout="fill"
                objectFit="cover"
                className=''
            />
        </div>
        <p className='text-sm sm:text-base py-5 sm:py-8 px-1'>
          The Collection Development Department within a university library is tasked with the strategic management of the library's collection to ensure it aligns with the academic and research needs of the institution's community. This department oversees the acquisition of new materials, including books, journals, electronic resources, and multimedia materials, while also evaluating the current collection to identify areas for improvement or removal of outdated materials. Working within budget constraints, the department negotiates with vendors and publishers to acquire resources that meet the library's selection criteria and supports the curriculum and research interests of faculty and students. Additionally, the Collection Development Department manages electronic resources, conducts assessments of usage and relevance, and promotes awareness of the library's collection through various outreach activities. By carefully curating the collection, this department plays a vital role in providing access to high-quality resources that support teaching, learning, and research endeavors within the university community.
        </p>
      </div>
      <Footer />
    </main>
  )
}

export default page
