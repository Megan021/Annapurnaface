import React from 'react'
import ReservationBanner from '../components/ForReservation/ReservationBanner'

const Reservation = () => {
  return (
     <div className='bg-gray-100 pb-20'>
     <ReservationBanner />

     <div className='lg:flex gap-16 w-[90%] md:w-[83%] mx-auto p-5 md:p-16 -mt-20 bg-[white]  items-center border border-gray-300 shadow rounded-xl'>

      <div className='lg:w-[50%]'>
        <h2 className='font-Libre text-5xl tracking-wide'>Get In Touch</h2>
        <div className='grid md:grid-cols-2 gap-6 gap-y-14 py-12'>
          <div className='col-span-2 md:col-span-1'><input type="text" placeholder='First Name' className='w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
          <div className='col-span-2 md:col-span-1'><input type="text" placeholder='Last Name' className='w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
          <div className='col-span-2'><input type="email" placeholder='Your Email' className=' w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
          <div className='col-span-2'><input type="text" placeholder='Your Phone' className=' w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
          <div className='col-span-2 md:col-span-1'><input type="number" placeholder='No of Rooms' className='w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
          <div className='col-span-2 md:col-span-1'><input type="number" placeholder='No of Pax' className='w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
          <div className='col-span-2 md:col-span-1'><input type="date" placeholder='Check-in date' className='w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
          <div className='col-span-2 md:col-span-1'><input type="date" placeholder='Check-out date' className='w-full bg-transparent border-b border-black focus:outline-none p-1' /></div>
        </div>
        <button className='p-2 w-full text-white bg-[#1b1b1b]'>Submit</button>
      </div>

      <div className='lg:w-[50%] mt-12 lg:mt-0 h-[40vh] lg:h-[85vh]'>
        {/* <img src="/images/ForReservation/bg2.jpg" alt="" className='w-[60%] h-[75vh] absolute right-0 object-cover' /> */}
        <img src="/images/ForReservation/bg3.jpg" alt="" className='w-[100%] h-full object-cover rounded-xl' />
      </div>

     </div>
    </div>
  )
}

export default Reservation