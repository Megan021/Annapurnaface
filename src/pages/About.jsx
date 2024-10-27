import React from 'react'
import AboutBanner from '../components/ForAbout/AboutBanner'
import { CiPlay1 } from "react-icons/ci";
import Teams from '../components/ForAbout/Teams';
import Service from '../components/ForAbout/Service';
import Reservation from '../components/Reservation';

const About = () => {
  return (
    <>
    <AboutBanner />
     <div className='w-[74%] mx-auto'>
          <div className='text-center w-[65%] mx-auto pt-20'>
               <h3 className='text-sm uppercase text-[#C19D60] pb-3'>Swiss Heritage Meets Modern Luxury</h3>
               <h2 className='font-Libre capitalize text-3xl leading-10'>CozyStay in the heart of the mountains is an architectural masterpiece offering contemporary accommodations with unrivalled ski and hiking trails.</h2>
          </div>
          <div className='bg-[url("/images/ForAbout/videobg.jpg")] overflow-hidden bg-cover border-2 bg-center border-gray-200 shadow-md rounded-2xl my-12'>
          <i className='flex items-center justify-center h-[70vh] bg-black bg-opacity-50 text-gray-300'><CiPlay1 className='border border-gray-300 p-12 rounded-full text-9xl' /></i>
          </div>
     </div>

     <div className='flex gap-5 py-16 pb-24 w-[74%] mx-auto items-center'>
          <div className='flex-1'>
               <h3 className='text-[#C19D60] uppercase text-sm'>Seeking a truly peaceful experience</h3>
               <h2 className='text-5xl font-Libre capitalize tracking-[0.2rem] py-7'>Indulge, escape & relax in the mountains</h2>
               <p className='pb-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
               <button className='p-3 px-6 border border-[#C19D60]'>Discover More</button>
          </div>

          <div className='flex-1'>
               <div className='flex items-center gap-5'>
               <div><img src="/images/ForAbout/about1.jpg" alt="" className='w-[50rem]' /></div>
               <div><img src="/images/ForAbout/about2.jpg" alt="" className='w-[45rem]' /></div>
               </div>
          </div>
     </div>

     <Teams />
     <Service />
     <Reservation />
    </>
  )
}

export default About