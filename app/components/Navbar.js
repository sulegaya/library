import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import List from '@mui/material/List';

import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";


function Navbar2() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="pt-4 pb-10 select-none"
    >
      <div className="flex justify-between items-center pb-3 pr-3 pl-2">
        <h1 className="text-xl font-semibold text-teal-600 hover:text-teal-900">
          Aliko Dangote University Of Science & Technology, Wudil 
        </h1>
        
        <IoMdClose
          onClick={toggleDrawer(anchor, false)}
          className='text-4xl font-extrabold'
        />
      </div>
      <List className='flex flex-col justify-between overflow-y-auto px-3'>
        <div className='flex flex-col'>
          <Link href="/" className='no-underline flex justify-start items-end pl-1 pb-3 border-b-2 mt-4 hover:text-black-500 hover:cursor-pointer '>
            <h1 className='text-base font-semibold ml-3'>Home</h1>
          </Link>
          <Link href="/about" className='no-underline flex justify-start items-end pl-1 pb-3 border-b-2 mt-4 hover:text-black-500 hover:cursor-pointer '>
            <h1 className='text-base font-semibold ml-3'>About Us</h1>
          </Link>
          <Link href="/admin" className='no-underline justify-start items-end pl-1 pb-3 border-b-2 mt-4 hover:text-black-500 hover:cursor-pointer '>
           <h1 className='text-base font-semibold ml-3'>Admin</h1>
          </Link>
          <Link href="/books" className='no-underline justify-start items-end pl-1 pb-3 border-b-2 mt-4 hover:text-black-500 hover:cursor-pointer '>
           <h1 className='text-base font-semibold ml-3'>Books</h1>
          </Link>
          <Link href="/students" className='no-underline flex justify-start items-end pl-1 pb-3 border-b-2 mt-4 hover:text-black-500 hover:cursor-pointer'>
            <h1 className='text-base font-semibold ml-3'>Student Login</h1>
          </Link>
        </div>
      </List>
      <div className='mt-20 px-2'>
        <h1 className='font-bold text-xl text-center mb-1'>Visit Our University Library</h1>
        <h2 className='text-base text-center'>Located opposite Facoms, ADUST Wudil</h2>
        <h2 className='text-base text-center'>Open Hours: 08:00am - 05:00pm</h2>
      </div>

      <div className='mt-10 px-2'>
        <h1 className='font-bold text-xl text-center'>Booking Requests</h1>
        <h2 className='text-base text-center'>For inquiries, please contact: +234 8101892045</h2>
      </div>
    </Box>
  );
  return (
    <nav className='bg-white py-1 pr-2 sm:px-4 w-full flex justify-between items-center z-50 border border-gray-50/70'>
      <div className='flex justify-start items-center w-4/5 lg:w-3/6 cursor-pointer'>
        <img className="w-[32] sm:w-52 h-[60px] sm:h-[100px] border border-gray-50/50" src='/logo.png' alt='logo'/>
        <h1 className='font-bold sm:font-extrabold text-teal-600 uppercase tracking-[2px] lg:tracking-[3px] text-xs md:text-lg lg:text-xl sm:ml-1'>
           Aliko Dangote University Of Science & Technology, Wudil 
        </h1>
      </div>
      <div className='hidden lg:flex'>
        <Link href="/" className="text-lg text-gray-600 font-semibold md:hover:text-gray-400 mx-2">Home</Link>

        <Link href="/about" className="text-lg text-gray-600 font-semibold md:hover:text-gray-400 mx-2">About Us</Link>

        <Link href="/admin" className="text-lg text-gray-600 font-semibold md:hover:text-gray-400 mx-2">Admin</Link>

        <Link href="/books" className="text-lg text-gray-600 font-semibold md:hover:text-gray-400 mx-2">Books</Link>

        <Link href="/students" className="text-lg text-gray-600 font-semibold md:hover:text-gray-400 mx-2">Student Login</Link>
        
  
        
      </div>
      <div className='lg:hidden'>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <IoIosMenu onClick={toggleDrawer(anchor, true)} className="text-3xl hover:opacity-70"/>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}

export default Navbar2