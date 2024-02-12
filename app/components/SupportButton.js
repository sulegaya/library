import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const EmailButton = ({ recipientEmail, subject }) => {
  const redirectToEmail = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div onClick={redirectToEmail}  className="flex justify-start items-center">
        <HiOutlineMail className="text-xl sm:text-2xl mx-2 text-black dark:text-slate-50" />
        <h3 className='hidden md:inline-flex text-sm sm:text-base text-black dark:text-slate-50'>
          Get In Touch
        </h3>
    </div> 
  );
};

export default EmailButton;
