import React from 'react';
import Banner from '../components/ForRoom/RoomBanner';
import Rooms from "../data/Room.json"; // Changed the name to avoid conflict
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Room = () => {
  return (
    <div className='bg-[#F2EEE8]'>
      <Banner />
      <div className='container w-[74%] py-20 mx-auto grid grid-cols-3 gap-7 gap-y-20'>
        {Rooms.map((room, index) => {
          return ( // Added return here
            <div key={index}>
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
            </div>
          );
        })}
      </div>
      <div className='flex justify-center pb-16'>
      <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      </Stack>
      </div>
    </div>
  );
}

export default Room;
