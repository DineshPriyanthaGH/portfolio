import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
  const sideMenuRef = useRef();
  const [darkMode, setDarkMode] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} className='w-full' alt='' />
      </div>

      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href=''>
          <Image src={assets.logo} className='w-28 cursor-pointer bg-transparent mr-14' alt='logo' />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li className='font-Ovo'><a href='#top' className='text-black'>Home</a></li>
          <li><a href='#about' className='text-black'>About me</a></li>
          <li><a href='#services' className='text-black'>Services</a></li>
          <li><a href='#work' className='text-black'>Portfolio</a></li>
          <li><a href='#contact' className='text-black'>Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button onClick={toggleDarkMode}>
            <Image src={darkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
            Contact <Image src={assets.arrow_icon} className='w-3' alt='contact' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* Mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li className='font-Ovo' onClick={closeMenu}><a href='#top' className='text-black'>Home</a></li>
          <li onClick={closeMenu}><a href='#about' className='text-black'>About me</a></li>
          <li onClick={closeMenu}><a href='#services' className='text-black'>Services</a></li>
          <li onClick={closeMenu}><a href='#work' className='text-black'>Portfolio</a></li>
          <li onClick={closeMenu}><a href='#contact' className='text-black'>Contact me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;