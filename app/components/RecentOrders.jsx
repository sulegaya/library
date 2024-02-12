import React from 'react';
import { data } from '../data/data.js';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-2 relative m-auto mt-5 sm:mt-0 px-1 rounded-md overflow-x-hidden border bg-white dark:bg-gray-900 dark:border-gray-700'>
      <h1 className='px-3 py-3'>Recently Ordered Books</h1>
      <ul className='recent overflow-y-auto md:h-[63vh] lg:h-[63vh] h-[45vh] px-3'>
        {data.map((order) => (
          <li
            key={order.id}
            className='flex justify-between items-center dark:border-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-md my-3 px-3 py-2 cursor-pointer'
          >
            <div className='text-center'>
              <p className='text-gray-800 dark:text-slate-50 font-semibold text-xs'>
                {order.name.first}
              </p>
            </div>
            <div className='pl-4 text-center'>
              <p className='text-gray-800 dark:text-slate-50 text-xs'>{order.book}</p>
            </div>
            <p className='text-xs'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
