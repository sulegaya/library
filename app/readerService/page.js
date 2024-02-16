"use client"
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Circulation from "../components/Circulation";
import Reference from "../components/Reference";
import Reserve from "../components/Reserve";
import Footer from "../components/Footer";

function page() {
  return (
    <main className='min-h-screen overflow-x-hidden bg-slate-50'>
      <Navbar />
      <Swiper />
      <Circulation />
      <Reference />
      <Reserve />
      <Footer />
    </main>
  )
}

export default page
