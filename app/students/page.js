'use client'
import React, { useState, useEffect } from 'react';

import { auth, db, storage } from "../components/Firebase";
import Navbar from "../components/Navbar";
import Admin from "../components/Admin";
import { onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, collection, getDoc, query, where, onSnapshot  } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function page() {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [account, setAccount] = useState(false);
  const [userData, setUserData] = useState(null);
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogout = () => {
      setUserData(null);
    }; 
  
    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = (userCredential.user);
        
        setLogin(false);
        setRegister(false);
        setAccount(true);
        
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
    
        if (errorCode === "auth/invalid-credential") {
          toast.error("User not found. Please check your email or password.");
        } else if (errorCode === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else {
          toast.error(errorMessage);
        }
      }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        toast.success('Loading...', {
          icon: '⏳',
        });
      
        if (password !== confirmPassword) {
          toast.error('Passwords do not match', {});
          return;
        }
      
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
      
          const userDetails = {
            name,
            email,
            age,
            number,
            password,
          };
      
          await setDoc(doc(db, 'users', email), userDetails);
          setLogin(false);
          setRegister(false)
          setAccount(true);
      
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
      
          switch (errorCode) {
            case 'auth/email-already-in-use':
              toast.error('Email address is already in use. Please use a different email.');
              break;
            case 'auth/invalid-email':
              toast.error('Invalid email address. Please check the email format.');
              break;
            case 'auth/weak-password':
              toast.error('Weak password. Please use a stronger password.');
              break;
            default:
              toast.error(errorMessage);
              break;
          }
        }
      };
  
    if (!auth) {
      console.error('auth is undefined');
      return;
    }

    const handleRegisterLinkClick = () => {
        setLogin(false);
        setRegister(true);
        setAccount(false);
    };

    const handleLoginLinkClick = () => {
        setLogin(true);
        setRegister(false);
        setAccount(false);
    };
  
    useEffect(() => {
      let userEmail = email || (userData && userData.email);
    
      if (!userEmail) {
        
        return;
      }
    
      const userDocRef = doc(db, 'users', userEmail);
    
      const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          setUserData(docSnapshot.data());
          localStorage.setItem('userData', JSON.stringify(docSnapshot.data()));
        } else {
          
        }
      }, (error) => {
        
      });
    
      return () => unsubscribe();
    
    }, [email, userData]);  
  return (
    <div>
        <ToastContainer hideProgressBar={true} autoClose={2500}/>
        <Navbar />
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className={`${login ? "" : "hidden"}`}
        >
        <div className="flex min-h-full flex-1 flex-col justify-center px-4 pt-2 pb-20 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                className="mx-auto h-72 w-auto"
                src="/login.avif"
                alt="Your Company"
                />
                <h2 className="mt-5 text-3xl font-bold tracking-wide text-gray-900">
                Sign In
                </h2>
                <p className='text-gray-600 font-semibold text-sm sm:text-sm mt-2'>Welcome back! Enter your email and password</p>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder='example@gmail.com'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-teal-600 hover:text-teal-500">
                        Forgot password?
                        </a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                    Sign in
                    </button>
                </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <a href="#" onClick={handleRegisterLinkClick} className="font-semibold leading-6 text-teal-600 hover:text-teal-500">
                    Register now to get started
                </a>
                </p>
            </div>
        </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className={`${register ? "select-none" : "hidden"}`}
        >
          <div className="flex min-h-full flex-1 flex-col justify-center px-3 pt-3 pb-20 lg:px-8 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-72 w-auto"
                src="/register.avif"
                alt="Your Company"
              />
              <h2 className="mt-5 text-3xl font-bold tracking-wide text-gray-900">
                Create Your Account
              </h2>
              <p className='text-gray-600 font-semibold text-sm sm:text-sm mt-2'>Welcome! Please provide the following details to create your account.</p>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-lg">
                <form className="space-y-6" onSubmit={handleRegister}>
                    <div className='w-full mt-2'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder='Ahmad Sulaiman'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                <div className='flex justify-center items-center gap'>
                  <div className='w-full  mt-3'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Mobile Number
                    </label>
                    <div className="mt-2">
                        <input
                        id="number"
                        name="number"
                        placeholder='07083920465'
                        type="tel"
                        autoComplete="tel"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                  </div>
                  <div className='w-full  mt-2'>
                    <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                        Age
                    </label>
                    <div className="mt-2">
                        <input
                        id="age"
                        name="age"
                        placeholder='18'
                        type="text"
                        autoComplete="age"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                  </div>
                </div>
                <div className='w-full mt-3'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder='example@gmail.com'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className='flex justify-center items-center gap'>
                    <div className='w-full md:w-3/6'>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"

                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className='w-full md:w-3/6'>
                    <div className="flex items-center justify-between">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full rounded-md py-1.5 px-2 text-gray-900 border-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                    Register
                    </button>
                </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <a href="#" onClick={handleLoginLinkClick} className="font-semibold leading-6 text-teal-600 hover:text-teal-500">
                    Sign in here
                </a>
                </p>
            </div>
            </div>
        </motion.div>
        <div className={`${account ? "" : "hidden"}`}>
          <Admin email={email} userData={userData} onLogout={handleLogout} setUserData={setUserData} />
        </div>
    </div>
  )
}

export default page
