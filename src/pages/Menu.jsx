import React from "react";
import MenuBanner from "../components/ForMenu/MenuBanner";
import MenuItem from "../data/Menu.json";
import Reservation from "../components/Reservation";

const Menu = () => {
  return (
    <>
      <MenuBanner />
      <div className="bg-[#1B1B1B]">
        <div className="w-[74%] mx-auto py-20 text-white">
          <div className="flex items-center">
            <div className="flex-1">
              <img src="/images/ForMenu/maindish.jpg" alt="main dish" />
            </div>
            <div className="flex-1">
              <div className="p-8 flex flex-col gap-4 h-[50vh] overflow-y-scroll custom-scrollbar mr-5">
                
                {/* Corrected map function */}
                {MenuItem.categories.dishes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex gap-5 items-center">
                      <div>
                        <img src={item.image} alt={item.name} className="w-16 rounded-full" />
                      </div>
                      <div className="w-[50%]">
                        <h2 className="font-Libre text-xl">{item.name}</h2>
                        <p className="line-clamp-1 text-[#b1b1b1]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque.
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#C19D60] text-lg">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>

          {/* Sections for desserts and wines */}
          <div className="flex items-center">
            <div className="flex-1">
            <div className="p-8 flex flex-col gap-4 h-[50vh] overflow-y-scroll custom-scrollbar mr-5">
                
                {/* Corrected map function */}
                {MenuItem.categories.desserts.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex gap-5 items-center">
                      <div>
                        <img src={item.image} alt={item.name} className="w-16 rounded-full" />
                      </div>
                      <div className="w-[50%]">
                        <h2 className="font-Libre text-xl">{item.name}</h2>
                        <p className="line-clamp-1 text-[#b1b1b1]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque.
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#C19D60] text-lg">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
            <div className="flex-1">
              <img src="/images/ForMenu/dessert.jpg" alt="dessert" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <img src="/images/ForMenu/wine.jpg" alt="wine" />
            </div>
            <div className="flex-1">
            <div className="p-8 flex flex-col gap-4 h-[50vh] overflow-y-scroll custom-scrollbar mr-5">
                
                {/* Corrected map function */}
                {MenuItem.categories.wines.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex gap-5 items-center">
                      <div>
                        <img src={item.image} alt={item.name} className="w-16 rounded-full" />
                      </div>
                      <div className="w-[50%]">
                        <h2 className="font-Libre text-xl">{item.name}</h2>
                        <p className="line-clamp-1 text-[#b1b1b1]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque.
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#C19D60] text-lg">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reservation />
    </>
  );
};

export default Menu;
