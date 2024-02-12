import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiLocationOn } from 'react-icons/ci';
import { BsFillTelephoneFill, BsGlobeAmericas } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';

function LastSection() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_7nrjujv', 'template_4nqcalh', form.current, 'f9W8uTslwTazQAdkD')
        .then((result) => {
            toast.success("Email successfully sent.", {
                position: toast.POSITION.TOP_CENTER,
              });
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Internet connectivity poor", {
                    position: toast.POSITION.TOP_CENTER,
                });
                setLoading(false);
            });
            };

    return (
        <>
            <ToastContainer hideProgressBar={true} />
            <div className='flex flex-col justify-center py-12 px-2 sm:px-5 lg:px-20 font-serif select-none bg-gray-50 dark:bg-black '>
            <h1 className='text-2xl md:text-3xl md:text-start tracking-wider font-bold sm:mb-3 text-black dark:text-white'>Contact Us</h1>     
                <div className='w-full flex flex-col mt-2 sm:mt-5'>
                    <form className="w-full" ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-10'>
                            <span className='flex flex-col w-full sm:w-3/6 my-3'>
                                <label className='font-bold'>Full Name:</label>
                                <input type="text" name="user_name" className='border-b-2 p-2 mt-2 bg-gray-50 dark:bg-black' placeholder="Abdullahi Musa"/>
                            </span>

                            <span className='flex flex-col w-full sm:w-3/6 my-3'>
                                <label htmlFor="emailFrom" className='font-bold'>Email Address:</label>
                                <input type="email" className="border-b-2 p-2 mt-2 bg-gray-50 dark:bg-black" placeholder="person@example.com" name="user_email" />
                            </span>
                        </div>

                        <span className='flex flex-col w-full my-3'>
                            <label htmlFor="message" className='font-bold'>Message:</label>
                            <textarea className="border-b-2 p-2 mt-2 bg-gray-50 dark:bg-black" placeholder="message" name="message" />
                        </span>

                        <div className='w-full flex justify-start items-center'>
                            <button
                                type="submit"
                                className={`font-bold text-white text-xs sm:text-base bg-teal-600 hover:bg-teal-700 font-serif mt-5 py-3 px-4 sm:px-8 rounded-md sm:rounded-full shadow-md dark:border-none`}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LastSection;