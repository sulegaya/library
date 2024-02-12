import React from 'react'
import { TfiStatsUp } from 'react-icons/tfi';
import { MdCalendarMonth } from 'react-icons/md';
import { TbCoins } from 'react-icons/tb';

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-4 px-2 sm:px-4 py-2'>
        <div className='lg:col-span-2 col-span-1 flex items-center w-full py-3 px-5 rounded-md cursor-pointer border dark:border-none bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800'>
            <TbCoins size={50}  className='text-gray-600 dark:text-gray-700 p-3 bg-gray-50 mr-5 rounded-full'/>
            <div className='flex flex-col'>
                <p className='text-2xl font-bold text-gray-700 dark:text-gray-50'>$7,846</p>
                <p className='text-gray-400 dark:text-gray-200 mt-1'>Sales Today</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 flex items-center w-full py-3 px-5 rounded-md cursor-pointer border dark:border-none bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800'>
            <TfiStatsUp size={50}  className='text-gray-600 dark:text-gray-700 p-3 bg-blue-100 mr-5 rounded-full'/>
            <div className='flex flex-col'>
                <p className='text-2xl font-bold text-gray-700 dark:text-gray-50'>$1,437,876</p>
                <p className='text-gray-400 dark:text-gray-200 mt-1'>Total Sales This Month</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 flex items-center w-full py-3 px-5 rounded-md cursor-pointer border dark:border-none bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800'>
            <MdCalendarMonth size={50}  className='text-gray-600 dark:text-gray-700 p-3 bg-orange-100 mr-5 rounded-full'/>
            <div className='flex flex-col'>
                <p className='text-2xl font-bold text-gray-700 dark:text-gray-50'>11,437</p>
                <p className='text-gray-400 dark:text-gray-200 mt-1'>Last Month Sales </p>
            </div>
        </div>
    </div>
  )
}

export default TopCards