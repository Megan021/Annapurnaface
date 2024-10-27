import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,  Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import HeroBanner from "../../data/HeroBanner.json";

const Hero = () => {
  const swiperRef = useRef(null); // Create a reference for Swiper

  // const images = [
  //   "/images/ForLanding/bannerbg.jpg",
  //   "/images/ForLanding/bannerbg2.jpg",
  //   "/images/ForLanding/bannerbg3.jpg",
  // ];

  return (
    <div className="relative">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={false}
        modules={[Pagination,  Autoplay, EffectFade]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the Swiper instance
        }}
      >
        {HeroBanner.map((item, index) => (
          <SwiperSlide key={index} className="h-[100vh]">
            <div className='h-[100vh] bg-cover relative' style={{ backgroundImage: `url(${item?.image})` }}>
              <div className="w-full h-[100vh] bg-black opacity-70 absolute"></div>
              <div className="flex justify-between items-center h-full text-center w-[95%] mx-auto">
                <div className="[writing-mode:vertical-lr] text-white z-10 font-Libre">
                  <h2 className="uppercase text-[#C19D60] text-lg font-light tracking-[0.4rem]">Reservation</h2>
                  <p className="text-3xl font-light">980-1234567</p>
                </div>
                <div className="text-white z-20 leading-[4rem] mr-16">
                  <h3 className="uppercase text-sm font-Libre mb-5">est. 1995</h3>
                  <h2 className="font-Libre text-6xl">{item?.Title}</h2>
                  <h3 className="text-[#C19D60] text-4xl font-Libre mt-4">
                    {item?.Title2}
                  </h3>
                  <p className="mt-1">Kathmandu, Nepal</p>
                  <button className="p-3 px-6 border border-[#C19D60] uppercase text-sm font-light tracking-wider">
                    Check out menu
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-[44%] right-12 text-3xl text-[#C19D60] z-20 flex flex-col gap-3">
        <button onClick={() => swiperRef.current.slidePrev()}><MdKeyboardArrowUp className="" /></button>
        <button onClick={() => swiperRef.current.slideNext()}><MdKeyboardArrowDown className="" /></button>
      </div>
    </div>
  );
};

export default Hero;
