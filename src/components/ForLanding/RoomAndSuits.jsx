import React, { useRef } from 'react';
import { BsBuildings } from "react-icons/bs";
import Room from "../../data/Room.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const RoomAndSuits = () => {
  const swiperRef = useRef(null); // Create a reference for Swiper

  return (
    <>
     <div className='bg-[#F2EEE8]'>
          <div className='text-center py-20'>
          <h3 className='uppercase text-sm -tracking-tighter text-[#C19D60]'>Should you try</h3>
          <h2 className='font-Libre text-5xl py-3 pb-6'>Rooms & Suits</h2>
          <i><BsBuildings className='w-7 mx-auto text-[#C19D60] text-2xl' /></i>
          </div>

          <div className='container w-[74%] mx-auto pb-20'>
               <Swiper
                    ref={swiperRef} // Attach the ref to Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    loop={true}
                    slidesPerView={3} // Adjust this number based on the number of visible slides
                    breakpoints={{
                         // Adjust the number of slides for different screen sizes
                         640: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                         },
                         768: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                         },
                         1024: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                         },
                    }}
               >
                    {Room.map((room, index) => (
                         <SwiperSlide key={index}>
                              <div className='relative'>
                                   <img src={room?.image} alt="room" className='h-[50vh] object-cover rounded' />
                                   <div className='absolute bottom-4 left-4'>
                                   <button className='uppercase p-3 px-7 text-xl backdrop-blur-md text-white'>from {room?.price}</button>
                                   </div>
                              </div>
                              <div className='mt-6'>
                                   <h2 className='font-Libre text-3xl tracking-wide'>{room?.name}</h2>
                                   <ul className='py-4 pb-6 leading-7'>
                                        <li className='flex items-center gap-1'><IoMdCheckmarkCircleOutline />Non-Attached Bathroom</li>
                                        <li className='flex items-center gap-1'><IoMdCheckmarkCircleOutline />One Single and One Double Bed</li>
                                        <li className='flex items-center gap-1'><IoMdCheckmarkCircleOutline />Hot-Cold Shower, Wi-Fi, Laundry Service</li>
                                   </ul>
                                   <button className='underline underline-offset-4 uppercase text-sm font-semibold'>Book Suite</button>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>

               <div className='flex gap-3 pt-12 justify-center text-4xl'>
                    <button onClick={() => swiperRef.current.swiper.slidePrev()}><MdKeyboardArrowLeft className='rounded-full text-[#C19D60] border border-[#C19D60] p-2' /></button>
                    <button onClick={() => swiperRef.current.swiper.slideNext()}><MdKeyboardArrowRight className='rounded-full text-[#C19D60] border border-[#C19D60] p-2' /></button>
               </div>
          </div>
     </div>
    </>
  )
}

export default RoomAndSuits;
