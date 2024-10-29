import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for mobile menu

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='fixed top-0 w-full z-50'>
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B]' : 'bg-transparent'} w-full`}>
        <div className='container md:w-[74%] px-4 md:px-0 flex justify-between items-center py-5 mx-auto'>
          <div><Link to="/"><img src="/images/logo.png" alt="logo" className='w-40' /></Link></div>
          
          {/* Desktop navigation */}
          <nav className='hidden lg:block'>
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

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button onClick={toggleMobileMenu}>
                <CgMenuRight className='text-white text-3xl' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sliding menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[70%] bg-[#1B1B1B] transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button onClick={toggleMobileMenu}><CgClose className='text-white text-3xl absolute right-4 top-5' /></button>
        <ul className='uppercase flex flex-col gap-6 text-sm font-light text-white p-6 mt-16'>
          <Link to="/" onClick={toggleMobileMenu}><li>Home</li></Link>
          <Link to="/about" onClick={toggleMobileMenu}><li>About</li></Link>
          <Link to="/menu" onClick={toggleMobileMenu}><li>Menu</li></Link>
          <Link to="/room" onClick={toggleMobileMenu}><li>Rooms</li></Link>
          <Link to="/reservation" onClick={toggleMobileMenu}><li>Reservation</li></Link>
          <Link to="/gallery" onClick={toggleMobileMenu}><li>Gallery</li></Link>
          <Link to="/contact" onClick={toggleMobileMenu}><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
