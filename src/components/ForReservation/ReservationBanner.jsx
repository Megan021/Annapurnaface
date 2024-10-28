import React from "react";

const ReservationBanner = () => {
  return (
    <>
      <div className='bg-[url("/images/ForReservation/bannerbg.jpg")] text-center bg-bottom bg-fixed'>
        <div className="bg-black bg-opacity-50 h-[80vh] text-white flex flex-col justify-center pb-12">
          <h3 className="uppercase text-sm tracking-[0.3rem] mb-2 text-[#C19D60]">
            Contact Us
          </h3>
          <h2 className="text-6xl font-Libre">Make Reservation</h2>
        </div>
      </div>
    </>
  );
};

export default ReservationBanner;
