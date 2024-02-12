import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { MdLibraryBooks } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { BiBookAdd } from 'react-icons/bi';
import { IoStatsChartOutline } from 'react-icons/io5';
import { LiaUsersCogSolid } from 'react-icons/lia';
import { MdOutlineLogout } from 'react-icons/md';
import { LuMenu } from 'react-icons/lu';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import ThemeSwitcher from "./ThemeSwitcher";
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import Transactions from '../components/Transactions';

const Sidebar = ({ children }) => {

  const [dashboard, setDashboard] = useState(true);
  const [transactions, setTransactions] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);

  function handleDashboard() {
    setDashboard(true)
    setTransactions(false)
    setNotifications(false)
    setProfileEdit(false)
  }

  function handletransactions() {
    setDashboard(false)
    setTransactions(true)
    setNotifications(false)
    setProfileEdit(false)
  }

  function handleNotifications() {
    setDashboard(false)
    setTransactions(false)
    setProfileEdit(false)
    setNotifications(true)
  }

  function handleProfileEdit() {
    setDashboard(false)
    setTransactions(false)
    setNotifications(false)
    setProfileEdit(true)
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
        <div onClick={handleDashboard} className='flex justify-start items-center w-full bg-gray-900 hover:bg-gray-500 dark:bg-blue-900 dark:hover:bg-blue-800 cursor-pointer p-3 rounded-md mt-3'>
          <RxDashboard size={20} className='text-gray-50 dark:text-gray-50'/>
          <h1 className='text-gray-50 dark:text-gray-50 text-lg ml-3 font-semibold'>Dashboard</h1>
        </div>
        <span className='border-b-[1px] border-gray-200 dark:border-gray-700 w-full p-2 my-2'></span>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdLibraryBooks size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Books Record</h1>
        </div>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <IoStatsChartOutline size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Add Book</h1>
        </div>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <BiBookAdd size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Add Product</h1>
        </div>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <LiaUsersCogSolid size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Users</h1>
        </div>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdOutlineLogout size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Logout</h1>
        </div>
      </div>
    </Box>
  );
  return (
    <div className='w-full flex h-[100svh] overflow-y-hidden bg-gray-50 dark:bg-gray-900'>
      <div className='hidden sm:flex flex-col w-[230px] dark:bg-gray-900 h-[98vh] ml-2 my-auto rounded-md bg-white overflow-y-auto py-2 px-3 border-[1px] dark:border-gray-700'>
        <div onClick={handleDashboard} className='flex justify-start items-center w-full bg-gray-900 hover:bg-gray-500 dark:bg-blue-900 dark:hover:bg-blue-800 cursor-pointer p-3 rounded-md mt-5'>
          <RxDashboard size={20} className='text-gray-50 dark:text-gray-50'/>
          <h1 className='text-gray-50 dark:text-gray-50 text-lg ml-3 font-semibold'>Dashboard</h1>
        </div>
        <span className='border-b-[1px] border-gray-200 dark:border-gray-700 w-full p-2 my-2'></span>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdLibraryBooks size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Books Record</h1>
        </div>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <BiBookAdd size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Add Books</h1>
        </div>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <LiaUsersCogSolid size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Manage Users</h1>
        </div>
        <div onClick={handletransactions} className='flex justify-start items-center w-full dark:border-none hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer p-3 rounded-md mt-3'>
          <MdOutlineLogout size={20}  className='text-gray-600 dark:text-gray-50'/>
          <h1 className='text-gray-600 dark:text-gray-50 text-lg ml-3 font-semibold'>Logout</h1>
        </div>
      </div>
      <main className='w-full sm:w-5/6'>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className={`${dashboard ? "w-full h-screen overflow-y-scroll lg:overflow-y-hidden" : "hidden"}`}
        >
          <div className='flex justify-between sm:justify-start items-center flex-row-reverse sm:flex-row px-6 pt-4 pb-3'>
            <div className='sm:hidden'>
              {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <LuMenu onClick={toggleDrawer(anchor, true)} className="text-2xl dark:text-white hover:opacity-50"/>
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
            <h2 className='text-xl sm:text-2xl font-semibold'>Dashboard</h2>
          </div>
          <div className='p-1 sm:p-4 sm:grid lg:grid-cols-5 grid-cols-1 gap-2 w-full overflow-x-auto sm:overflow-x-hidden mb-5 sm:mb-0'>
            <BarChart />
            <RecentOrders />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className={`${transactions ? "min-h-screen w-full bg-gray-50 dark:bg-gray-900" : "hidden"}`}
        >
          <div className='flex justify-between sm:justify-start items-center flex-row-reverse sm:flex-row px-6 pt-3 pb-2'>
            <div className='sm:hidden'>
              {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <LuMenu onClick={toggleDrawer(anchor, true)} className="text-2xl dark:text-white hover:opacity-50"/>
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
            <h2 className='text-xl sm:text-2xl font-semibold'>Books Record</h2>
          </div>
          <div className='p-1 sm:p-4 mb-3'>
            <Transactions className='w-full h-full ' />
          </div>
        </motion.div>  
      </main>
    </div>
  );
};

export default Sidebar;
