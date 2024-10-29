import React from 'react'
import { BiSupport } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#1B1B1B] text-white'>
     <div className='lg:flex justify-between md:w-[74%] px-4 md:px-0 mx-auto gap-5 py-16 md:py-28'>
          <div className='flex-1 mb-14 lg:mb-0'>
               <h2 className='font-Libre text-3xl mb-5 text-[#C19D60]'>About Us</h2>
               <p className='text-[#777777] text-sm'>Restaurant metus dibus eudui aolicitudin istique lacus in the vestibulum congue est vitae maximus duru ne lacus in massa tristique aharetra ne ut isum.</p>
          </div>

          <div className='flex-1 mb-14 lg:mb-0 lg:text-center'>
               <h2 className='font-Libre text-3xl mb-5 text-[#C19D60]'>Contact Info</h2>
               <p className='text-[#777777]'>Kathmandu, Nepal</p>
               <p className='flex font-Libre text-xl py-4 lg:justify-center gap-2 items-center text-white'><BiSupport />9801234567</p>
               <p className='text-[#777777] underline underline-offset-4'>info@example.com</p>
               <div>
                    <ul className='flex gap-4 lg:justify-center pt-5'>
                         <li><FaFacebookF /></li>
                         <li><FaXTwitter /></li>
                         <li><FaInstagram /></li>
                    </ul>
               </div>
          </div>

          <div className='flex-1 lg:mb-0'>
               <h2 className='font-Libre text-3xl mb-5 text-[#C19D60]'>Subscribe</h2>
               <p className='text-[#777777] text-sm pb-5'>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
               <div className='border border-[#C19D60] p-1 flex justify-between'>
                    <input type="text" placeholder='Your Email' className='w-full px-3 bg-transparent focus:outline-none placeholder:text-[#777777]' />
                    <button className='p-2 px-5 bg-[#C19D60] uppercase text-sm font-light -tracking-tighter'>Subscribe</button>
               </div>
          </div>
     </div>

     <div className='w-[74%] mx-auto py-5 text-sm text-center md:text-left'>
          <p>© Copyright 2024 by WebRedox.net</p>
     </div>
    </div>
  )
}

export default Footer;