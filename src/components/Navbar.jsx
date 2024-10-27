import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-0 w-full z-50'>
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B]' : 'bg-transparent'} w-full`}>
        <div className='container w-[74%] flex justify-between items-center py-5 mx-auto'>
          <div><img src="/images/logo.png" alt="logo" className='w-40' /></div>
          <div>
            <nav>
              <ul className='uppercase flex gap-7 text-sm font-light text-white'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/room"><li>Rooms</li></Link>
                <Link to="/reservation"><li>Reservation</li></Link>
                <Link to="/gallery"><li>Gallery</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
