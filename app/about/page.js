"use client"
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import AboutSecond from "../components/AboutSecond";

function page() {
  return (
    <main className='min-h-screen overflow-x-hidden bg-gray-50'>
      <Navbar />
      <Swiper />
      <AboutSecond />
    </main>
  )
}

export default page
