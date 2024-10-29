import React from "react";
import { CiWifiOn } from "react-icons/ci";
import { GiCampfire } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Feature = () => {
  return (
    <>
      <div className="bg-[#1B1B1B] text-center lg:h-[80vh] text-white lg:mb-[20rem]">
        <div className="py-24">
          <h3 className="uppercase -tracking-tighter text-[#C19D60] text-sm">
            Firs-class
          </h3>
          <h2 className="font-Libre text-5xl py-3 pb-6">Our Features</h2>
          <img
            src="/images/ForFeature/tray2.png"
            alt="tray"
            className="w-6 mx-auto"
          />
        </div>

        <div className="container md:w-[74%] px-4 md:px-0 mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-6 pb-24">
          <div className='h-[50vh] md:h-[40vh] lg:h-[65vh] bg-[url("/images/ForFeature/wifi2.avif")] bg-center bg-cover w-full relative'>
            <div className="h-[50vh] md:h-[40vh] lg:h-[65vh] bg-[url('/images/ForFeature/wifi2.avif')] bg-center bg-cover w-full relative group">
              <div className="bg-black h-full bg-opacity-40">
                <div className="flex flex-col justify-end h-full pb-8">
                  <i>
                    <CiWifiOn className="w-full text-5xl text-[#C19D60] mx-auto mb-2" />
                  </i>
                  <h2 className="font-Libre text-3xl text-center">Wifi Zone</h2>
                </div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full">
                  <div className="text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="font-Libre text-2xl mb-5">Wifi Zone</h2>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, cumque!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[50vh] md:h-[40vh] lg:h-[65vh] bg-[url("/images/ForFeature/firecamp.webp")] bg-cover w-full relative group'>
            <div className="bg-black h-[50vh] md:h-[40vh] lg:h-[65vh] bg-opacity-30">
              <div className="flex flex-col justify-end h-full pb-8">
                <i className="">
                  <GiCampfire className="w-full text-5xl text-[#C19D60] mx-auto mb-2" />
                </i>
                <h2 className="font-Libre text-3xl">Camp Fire</h2>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full">
                  <div className="text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="font-Libre text-2xl mb-5">Camp Fire</h2>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, cumque!</p>
                  </div>
                </div>
            </div>
          </div>
          <div className='h-[50vh] md:h-[40vh] lg:h-[65vh] bg-[url("/images/ForFeature/support.png")] bg-cover w-full bg-left relative group'>
            <div className="bg-black h-[50vh] md:h-[40vh] lg:h-[65vh] bg-opacity-40">
              <div className="flex flex-col justify-end h-full pb-8">
                <i className="">
                  <BiSupport className="w-full text-5xl text-[#C19D60] mx-auto mb-2" />
                </i>
                <h2 className="font-Libre text-3xl">24/7 Service</h2>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full">
                  <div className="text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="font-Libre text-2xl mb-5">24/7 Service</h2>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, cumque!</p>
                  </div>
                </div>
            </div>
          </div>
          <div className='md:h-[40vh] h-[50vh] lg:h-[65vh] bg-[url("/images/ForFeature/parking2.jpg")] bg-cover bg-center w-full relative group'>
            <div className="bg-black md:h-[40vh] h-[50vh] lg:h-[65vh] bg-opacity-30">
              <div className="flex flex-col justify-end h-full pb-8">
                <img
                  src="/images/car-parking.png"
                  alt="car parking"
                  className="w-[21%] mx-auto mb-2"
                />
                <h2 className="font-Libre text-3xl">Vehicles Parking</h2>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full">
                  <div className="text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="font-Libre text-2xl mb-5">Vehicles Parking</h2>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, cumque!</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
