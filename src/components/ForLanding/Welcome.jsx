import React from 'react'

const Welcome = () => {
  return (
    <>
     <div className='flex container w-[74%] mx-auto gap-12 py-20 items-center'>
          <div className='flex-1'>
               <h3 className='uppercase text-[#C19D60]'>Annapurnaface Resturant</h3>
               <h2 className='font-Libre text-5xl py-2 pb-6'>Few Words About Us</h2>
               <p className='mb-5 font-light'>Annapurna Face Guest House welcomes all of the guests visiting this natural paradise.  Annapurna Face Guest House is established with a motive to provide food and lodging service to the people visiting Bandipur.</p>
               <p className='mb-5 font-light'>Annapurna Face Guest House Provides various services regarding food and lodging to their customers. You can experience delicious food, lovely serivce and natural beauty throughout your stay.</p>
               <p className=' font-light'>Besides we have a transportation service for our guests. We offer pick-up and drop service to our guest form/to destination.</p>
          </div>
          <div className='flex-1 relative h-[66vh]'>
               <img src="/images/ForLanding/welcome1.jpg" alt="welcome pic 1" className='w-64 absolute bottom-0' />
               <img src="/images/ForLanding/welcome2.jpg" alt="welcome pic 2" className='w-64 absolute right-0' />
          </div>
     </div>
    </>
  )
}

export default Welcome