import React from 'react'

function ThirdSection() {
  return (
    <div className='flex flex-col  justify-center py-7 sm:py-10 px-2 md:px-5 lg:px-12 font-serif bg-gray-50 select-none dark:bg-black'>
      <h1 className='text-xl sm:text-2xl text-start tracking-wide font-bold sm:mb-3 text-black dark:text-white'>Student Testimonials: What Readers Are Saying?</h1>     
      <div className='flex justify-between items-stretch flex-wrap my-5'>
        <div className='rounded sm:rounded-none md:flex-1 mx-1 md:mx-2 my-2 md:my-0 bg-white dark:bg-gray-700 p-5 w-full md:w-2/6 shadow-md flex justify-between flex-col'>
          <p className='text-2xl font-bold text-black dark:text-slate-50'>
           " <span className='text-base font-normal'>
              The library at Aliko Dangote University of Science and Technology has been an invaluable resource for my academic journey. The extensive collection of books and digital resources has greatly aided my research and learning experience.
            </span> "
          </p>
          <div className='flex items-end mt-8 md:mt-4'>
            <img
              src="photo-4.avif"
              alt="image"
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-full"
            />
            <h1 className='font-bold text-lg sm:text-xl ml-3 mb-4'>Abdullahi Adamu</h1>
          </div>
        </div>
        <div className='rounded sm:rounded-none md:flex-1 mx-1 md:mx-2 my-2 md:my-0 bg-white dark:bg-gray-700 p-5 w-full md:w-2/6 shadow-md flex justify-between flex-col'>
          <p className='text-2xl font-bold text-black dark:text-slate-50'>
           " <span className='text-base font-normal'>
               I'm impressed by the modern facilities and cozy ambiance of the university library. It's not just a place for studying; it's a hub for collaboration and innovation. The supportive staff and diverse collection make it a vital part of campus life.
            </span> "
          </p>
          <div className='flex items-end mt-8 md:mt-4'>
            <img
              src="photo-6.jpg"
              alt="image"
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-full"
            />
            <h1 className='font-bold text-lg sm:text-xl ml-3 mb-4'>Musa Sulaiman</h1>
          </div>
        </div>
        <div className='rounded sm:rounded-none md:flex-1 mx-1 md:mx-2 my-2 md:my-0 bg-white dark:bg-gray-700 p-5 w-full md:w-2/6 shadow-md flex justify-between flex-col'>
          <p className='text-2xl font-bold text-black dark:text-slate-50'>
           " <span className='text-base font-normal'>
              The library staff's dedication to providing assistance and guidance has made my time at university much smoother. Whether I need help finding a specific resource or navigating through research databases, they are always ready to lend a helping hand. The library truly fosters a conducive environment for academic growth and success.
            </span> "
          </p>
          <div className='flex items-end mt-8 md:mt-4'>
            <img
              src="photo-5.png"
              alt="image"
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-full"
            />
            <h1 className='font-bold text-lg sm:text-xl ml-3 mb-4'>Idris Ibrahim</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection