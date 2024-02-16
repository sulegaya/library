import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { MdLibraryBooks } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAutoStories } from "react-icons/md";
import { MdOutlineLogout } from 'react-icons/md';
import { LuMenu } from 'react-icons/lu';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdAdminPanelSettings } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdChromeReaderMode } from "react-icons/md";


import AvailableBooks from '../components/AvailableBooks';
import Automotion from '../components/Automotion';

const StudentProfile = ({ children }) => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [eLearning, setElearning] = useState(true);
  const [automotion, setAutomotion] = useState(false);

  const showLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const hideLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  function handleAutomotion() {
    setElearning(false)
    setAutomotion(true)
  }

  function handleELearning() {
    setElearning(true)
    setAutomotion(false)
  }
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
      className="dark:bg-gray-900"
    >
      <AiOutlineCloseCircle
        onClick={toggleDrawer(anchor, false)}
        className='text-2xl font-bold my-3 mr-3 dark:text-white'
        style={{ float: 'right' }}
      />
      <div className='flex flex-col w-full dark:bg-gray-900 h-[100svh] overflow-y-auto py-2 px-3 border-r-[1px] dark:border-gray-700'>
        <div onClick={handleELearning} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdChromeReaderMode size={20} className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>E-Learing</h1>
        </div>
        <div onClick={handleAutomotion} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdOutlineAutoStories size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Automotion</h1>
        </div>
        <span className='border-b-[1px] border-gray-200 dark:border-gray-700 w-full p-2 my-2'></span>
        <Link href="/" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <IoHomeOutline  size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Home</h1>
        </Link>
        <Link href="/about" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <RxDashboard  size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>About Us</h1>
        </Link>
        <Link href="/admin" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdAdminPanelSettings  size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Admin</h1>
        </Link>
        <Link href="/readerService" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <FaBookReader  size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Reader Services</h1>
        </Link>
        <div onClick={showLogoutModal} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdOutlineLogout size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Logout</h1>
        </div>
      </div>
    </Box>
  );

  return (
    <div className='w-full flex overflow-y-hidden bg-gray-50 dark:bg-gray-900'>
      <div className='hidden sm:flex flex-col w-[230px] dark:bg-gray-900 h-[98vh] ml-2 my-auto rounded-md bg-white overflow-y-scroll lg:overflow-y-hidden py-2 px-3 border-[1px] dark:border-gray-700'>       
        <div onClick={handleELearning} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdChromeReaderMode size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>E-Learing</h1>
        </div>
        <div onClick={handleAutomotion} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdOutlineAutoStories size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Automotion</h1>
        </div>
        <span className='border-b-[1px] border-gray-200 dark:border-gray-700 w-full p-2 my-2'></span>
        <Link href="/" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <IoHomeOutline size={20} className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Home</h1>
        </Link>
        <Link href="/about" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <RxDashboard size={20} className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>About Us</h1>
        </Link>
        <Link href="/admin" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdAdminPanelSettings size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Admin</h1>
        </Link>
        <Link href="/readerService" className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <FaBookReader size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Reader Services</h1>
        </Link>
        <div onClick={showLogoutModal} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdOutlineLogout size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Logout</h1>
        </div>
      </div>
      <main className='w-full sm:w-5/6'>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className={`${eLearning ? "w-full h-screen overflow-y-scroll lg:overflow-y-hidden" : "hidden"}`}
        >
          <div className='flex justify-between sm:justify-start items-center flex-row-reverse sm:flex-row px-6 pt-4'>
            <div className='sm:hidden'>
              {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <HiMenuAlt3 onClick={toggleDrawer(anchor, true)} className="text-2xl dark:text-white hover:opacity-50"/>
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
            <h2 className='text-base sm:text-lg font-semibold mt-1 pb-2'> Discover the Diversity of Books Available in Our University Library</h2>
          </div>
          
          <AvailableBooks />

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className={`${automotion ? "min-h-screen w-full bg-gray-50 dark:bg-gray-900" : "hidden"}`}
        >
          <div className='flex justify-between sm:justify-start items-center flex-row-reverse sm:flex-row px-6 pt-3 pb-2'>
            <div className='sm:hidden'>
              {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <HiMenuAlt3 onClick={toggleDrawer(anchor, true)} className="text-2xl dark:text-white hover:opacity-50"/>
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
            <h2 className='text-xl sm:text-2xl font-semibold'>Automotion</h2>
          </div>
          <div className='p-1 sm:p-4 mb-3'>
            <Automotion className='w-full h-full ' />
          </div>
        </motion.div>  


        {/* Logout Modal */}
         {isLogoutModalOpen && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Background overlay */}
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                {/* Modal Panel */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  &#8203;
                </span>
                <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-auto sm:my-8 align-middle sm:max-w-lg w-full sm:mx-0">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        {/* Heroicon name: outline/exclamation */}
                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.937 4h13.978c-.489 0-.881-.448-1.002-.975L12 3.929 7.94 16.025c-.12.527-.514.975-1.002.975z"></path>
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Logout Confirmation
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to logout?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      onClick={() => {
                        hideLogoutModal();
                        handleLogout();
                      }}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Logout
                    </button>
                    <button
                      type="button"
                      onClick={hideLogoutModal}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
      </main>
    </div>
  );
};

export default StudentProfile;
