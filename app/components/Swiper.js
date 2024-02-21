import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SwiperJs() {
  const [swiperTexts] = useState([
    "Embark on a journey of knowledge at Aliko Dangote University of Science and Technology, Wudil. Explore our library, where dreams take flight and aspirations soar.",
    "Immerse yourself in a world of endless possibilities at our university library. Here, every page holds the promise of discovery and growth.",
    "Ignite your passion for learning at our vibrant library, the heart of academic excellence. Dive into a sea of books and let curiosity guide your path.",
  ]);

  return (
    <div className='bg-gray-50 py-3 sm:py-5 px-2 sm:px-10'>
      <Swiper
        className="swiper-container"
        spaceBetween={10}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {swiperTexts.map((text, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="h-[210px] md:h-[360px] overflow-hidden">
              <Image
                src={`/image-${index + 1}.${(index === 0) ? 'png' : 'jpg'}`}
                alt={`image-${index}`}
                layout="fill"
                objectFit="cover"
                priority={true}
                quality={100}
                className=""
              />
              <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
              <div className="z-50 absolute inset-0 flex flex-col items-center justify-center px-4 lg:px-6 text-center text-white select-none">
                <h1 className="animate__animated animate__slideInUp cursor-pointer text-center font-extrabold text-base md:text-2xl lg:text-3xl leading-snug mb-2 sm:mb-4 mt-2">
                  {text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperJs;
