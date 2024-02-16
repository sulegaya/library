"use client"
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import AboutVc from "./components/AboutVc";
import AboutThird from "./components/AboutThird";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <Swiper />
      <AboutVc />
      <SecondSection />
      <ThirdSection />
      <AboutThird />
      <Footer />
    </main>
  )
}
