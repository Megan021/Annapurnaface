import React from 'react'
import { CiWifiOn } from "react-icons/ci";
import { GiCampfire } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Feature = () => {
  return (
    <>
     <div className='bg-[#1B1B1B] text-center h-[80vh] text-white mb-[20rem]'>
          <div className='py-24'>
          <h3 className='uppercase -tracking-tighter text-[#C19D60] text-sm'>Firs-class</h3>
          <h2 className='font-Libre text-5xl py-3 pb-6'>Our Features</h2>
          <img src="/images/ForFeature/tray2.png" alt="tray" className='w-6 mx-auto' />
          </div>

          <div className='container w-[74%] mx-auto flex gap-5 pb-24'>
               <div className='h-[65vh] bg-[url("/images/ForFeature/wifi2.avif")] bg-center bg-cover w-full relative'>
                    <div className='bg-black h-[65vh] bg-opacity-40'>
                         <div className='flex flex-col justify-end h-full pb-8'>
                         <i className=''><CiWifiOn className='w-full text-5xl text-[#C19D60] mx-auto mb-2' /></i>
                              <h2 className='font-Libre text-3xl'>Wifi Zone</h2>
                         </div>
                    </div>
               </div>
               <div className='h-[65vh] bg-[url("/images/ForFeature/firecamp.webp")] bg-cover w-full relative'>
                    <div className='bg-black h-[65vh] bg-opacity-30'>
                         <div className='flex flex-col justify-end h-full pb-8'>
                         <i className=''><GiCampfire className='w-full text-5xl text-[#C19D60] mx-auto mb-2' /></i>
                              <h2 className='font-Libre text-3xl'>Camp Fire</h2>
                         </div>
                    </div>
               </div>
               <div className='h-[65vh] bg-[url("/images/ForFeature/support.png")] bg-cover w-full bg-left relative'>
                    <div className='bg-black h-[65vh] bg-opacity-40'>
                         <div className='flex flex-col justify-end h-full pb-8'>
                         <i className=''><BiSupport className='w-full text-5xl text-[#C19D60] mx-auto mb-2' /></i>
                              <h2 className='font-Libre text-3xl'>24/7 Service</h2>
                         </div>
                    </div>
               </div>
               <div className='h-[65vh] bg-[url("/images/ForFeature/parking2.jpg")] bg-cover bg-center w-full relative'>
                    <div className='bg-black h-[65vh] bg-opacity-30'>
                         <div className='flex flex-col justify-end h-full pb-8'>
                         <img src="/images/car-parking.png" alt="car parking" className='w-[21%] mx-auto mb-2' />
                              <h2 className='font-Libre text-3xl'>Vehicles Parking</h2>
                         </div>
                    </div>
               </div>
          </div>
     </div>
    </>
  )
}

export default Feature