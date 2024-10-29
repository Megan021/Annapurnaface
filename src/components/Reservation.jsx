import React from 'react'

const Reservation = () => {
  return (
    <>
     {/* <div className='flex gap-5 py-12 px-12'>
          <div className='w-[70%] h-[60vh]'>
               <img src="/images/ForReservation/bg.jpg" alt="" className='w-full h-full object-cover object-bottom rounded' />
          </div>

          <div className='w-[30%] border border-gray-300 shaodw rounded p-12 bg-[#1b1b1b] text-white flex flex-col justify-center'>
               <h2 className='uppercase text-sm text-[#C19D60]'>Make Reservation</h2>
               <p className='text-3xl font-Libre py-6 pb-12 capitalize'>Book online today and look forward to a relaxing stay with us</p>
               <button className=' uppercase border border-[#C19D60] text-[#C19D60] p-3 text-sm px-6 font-light tracking-wider'>Book Now</button>
          </div>
     </div> */}

     <div className='bg-[url("/images/ForReservation/bg.jpg")] text-center text-white bg-cover bg-bottom bg-fixed'>
          <div className='py-16 md:py-32 bg-black bg-opacity-50'>
          <h3 className='uppercase text-sm text-[#C19D60]'>Make Reservation</h3>
          <h2 className='font-Libre text-xl md:text-4xl tracking-[0.1rem] capitalize md:w-[80%] lg:w-[50%] px-4 md:px-0 mx-auto py-3 pb-6'>Book online today and look forward to a relaxing stay with us</h2> <hr className='w-[20%] md:w-[6%] mx-auto border border-[#C19D60]' />
          <button className='mt-12 border border-[#C19D60] text-white p-3 uppercase text-sm px-6 font-light tracking-wider'>Book Now</button>
          </div>
     </div>
    </>
  )
}

export default Reservation