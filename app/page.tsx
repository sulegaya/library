"use client"
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import SecondSection from "./components/SecondSection";
import FeedBackSection from "./components/FeedBackSection";
import ThirdSection from "./components/ThirdSection";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <Swiper />
      <SecondSection />
      <ThirdSection />
      <FeedBackSection />
      <LastSection />
      <Footer />
    </main>
  )
}
