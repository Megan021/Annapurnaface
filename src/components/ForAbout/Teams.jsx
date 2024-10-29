import React from "react";
import Team from "../../data/Teams.json";

const Teams = () => {
  return (
    <>
      <div className="bg-[#1B1B1B] text-center lg:h-[80vh] text-white lg:mb-[20rem]">
        <div className="py-24">
          <h3 className="uppercase -tracking-tighter text-[#C19D60] text-sm">our experts</h3>
          <h2 className="font-Libre text-5xl py-3 pb-6">Meet Our Team</h2>
          <img src="/images/ForFeature/tray2.png" alt="tray" className="w-6 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3  w-[74%] mx-auto gap-5 md:gap-y-5">
          {Team.map((item, index) => {
               return (
                    <div key={index} >
                    <div style={{backgroundImage: `url(${item?.image})`}} className="bg-cover relative h-[65vh] md:h-[42vh] lg:h-[65vh] mb-20">
                         <div className="pt-[25.3rem]">
                         <div className="text-black w-[75%]  mx-auto p-5 px-12 bottom-0 bg-[#F1EDE7] flex flex-col">
                              <h2 className="font-Libre pb-1 text-xl">{item.name}</h2>
                              <p>{item.position}</p>
                         </div>
                         </div>
                    </div>
               </div>
               )
          })}
        </div>
      </div>
    </>
  );
};

export default Teams;
