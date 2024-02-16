"use client"
import Navbar from "../components/Navbar";
import AboutSecond from "../components/AboutSecond";
import AboutThird from "../components/AboutThird";
import LastSection from "../components/LastSection";
import AboutVc from "../components/AboutVc";
import ThirdSection from "../components/ThirdSection";
import FeedBackSection from "../components/FeedBackSection";
import Footer from "../components/Footer";

function page() {
  return (
    <main className='min-h-screen overflow-x-hidden bg-gray-50'>
      <Navbar />
      <AboutVc />
      <AboutSecond />
      <ThirdSection />
      <AboutThird />
      <FeedBackSection />
      <LastSection />
      <Footer />
    </main>
  )
}

export default page
