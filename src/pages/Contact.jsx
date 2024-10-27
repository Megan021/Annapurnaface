import React from 'react'
import ContactBanner from '../components/ForContact/ContactBanner'

const Contact = () => {
  return (
    <>
     <ContactBanner />
     <div className='flex gap-12 w-[74%] mx-auto py-20'>
          <div className='w-[60%]'>
               <img src="/images/ForContact/contact.jpg" alt="" className='h-full object-cover' />
          </div>

          <div className='w-[40%] text-center py-4'>
               <h3 className='text-[#C19D60] uppercase text-sm'>Contact Us to Get More Details</h3>
               <h2 className='font-Libre text-6xl py-6 capitalize tracking-[0.3rem]'>Let's start a conversation</h2>
               <p className='pb-12'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</p>

               <div>
                    <input type="text" placeholder='Your Name' className='p-3 w-full border border-gray-300 placeholder:text-black mb-5' />
                    <input type="email" placeholder='Your Email' className='p-3 w-full border border-gray-300 placeholder:text-black mb-5' />
                    <textarea type="text" placeholder='Your Message' className='p-3 border border-gray-300 placeholder:text-black w-full size-32 mb-5' />
                    <button className='w-full p-3 bg-[#C19D60] text-white '>Send Your Message</button>
               </div>
          </div>
     </div>

     <div className='flex w-[74%] mx-auto'>
          <div className='flex-1 border-r border-[#C19D60] p-12 text-center'>
          <h3 className='text-[#C19D60] uppercase text-sm'>General Inquiries</h3>
          <h2 className='font-Libre text-4xl py-6 capitalize tracking-[0.2rem]'>Hotel Info Center</h2>
          <ul className='pb-8 leading-7'>
               <li>Business Hours: Monday – Sunday, 9 am – 5 pm</li>
               <li>Telephone: +9801234567</li>
               <li>Email: info@example.com</li>
          </ul>
               <a href="https://www.google.com/maps" target='blank'><button className='border-b border-[#C19D60]'>Get Directions</button></a>
          </div> 
          <div className='flex-1 p-12 text-center'>
          <h3 className='text-[#C19D60] uppercase text-sm'>Reservation Details</h3>
          <h2 className='font-Libre text-4xl py-6 capitalize tracking-[0.2rem]'>Direct Reservations</h2>
          <ul className='pb-8 leading-7'>
               <li>Business Hours: Monday – Sunday, 9 am – 5 pm</li>
               <li>Telephone: +9801234567</li>
               <li>Email: info@example.com</li>
          </ul>
               <a href="https://www.google.com/maps" target='blank'><button className='border-b border-[#C19D60]'>Get Directions</button></a>
          </div>
     </div>
     <div className='relative'>
          <img src="/images/ForAbout/videobg.jpg" alt="" className='h-[90vh] w-full object-cover object-center' />
          <div className='w-full h-[7vh] absolute top-0 bg-gradient-to-b from-white to-white bg-black opacity-70 blur-sm'></div>
     </div>
    </>
  )
}

export default Contact