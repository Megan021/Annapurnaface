import React from 'react'
import { HiOutlineWifi } from "react-icons/hi2";
import { GiCampfire } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Service = () => {
  return (
    <>
          <div className='flex flex-col-reverse lg:flex-row gap-12 py-14 pt-20 lg:pt-16 lg:py-16 lg:pb-24 md:w-[74%] px-4 md:px-0 mx-auto items-center'>
          <div className='flex-1'>
               <div className='hidden lg:flex items-center gap-5'>
               <div><img src="/images/ForAbout/service1.jpg" alt="" className='w-[45rem]' /></div>
               <div><img src="/images/ForAbout/service2.jpg" alt="" className='w-[50rem]' /></div>
               </div>
          </div>
          <div className='flex-1'>
               <h3 className='text-[#C19D60] uppercase text-sm'>Discover the Services we offered</h3>
               <h2 className='text-5xl font-Libre capitalize tracking-[0.2rem] py-6 pb-12'>The Service</h2>
               <div className='grid md:grid-cols-2 gap-7'>
                    <div className='flex gap-4'>
                         <div><i><HiOutlineWifi className='text-4xl text-[#C19D60]' /></i></div>
                         <div>
                              <h2 className='font-Libre text-2xl pb-2'>Wifi Zone</h2>
                              <p className='text-gray-400 text-sm'>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                         </div>
                    </div>
                    <div className='flex gap-4'>
                         <div><i><GiCampfire className='text-4xl text-[#C19D60]' /></i></div>
                         <div>
                              <h2 className='font-Libre text-2xl pb-2'>Camp Fire</h2>
                              <p className='text-gray-400 text-sm'>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                         </div>
                    </div>
                    <div className='flex gap-4'>
                         <div><i><BiSupport className='text-4xl text-[#C19D60]' /></i></div>
                         <div>
                              <h2 className='font-Libre text-2xl pb-2'>24/7 Service</h2>
                              <p className='text-gray-400 text-sm'>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                         </div>
                    </div>
                    <div className='flex gap-4'>
                         {/* <div><i><HiOutlineWifi className='text-4xl text-[#C19D60]' /></i></div> */}
                         <div><img src="/images/car-parking.png" alt="" className='w-[4.3rem]' /></div>
                         <div>
                              <h2 className='font-Libre text-2xl pb-2'>Vehicles Parking</h2>
                              <p className='text-gray-400 text-sm'>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                         </div>
                    </div>
               </div>
          </div>

     </div>
    </>
  )
}

export default Service