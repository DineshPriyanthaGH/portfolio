import React, { useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaMedium, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

/* Bubble Background Component */
const BubbleBackground = () => {
  const bubbles = new Array(20).fill(0);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-20 overflow-hidden pointer-events-none">
      {bubbles.map((_, i) => {
        const size = Math.random() * 40 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;

        return (
          <div
            key={i}
            className="absolute bottom-0 bg-white rounded-full opacity-20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animation: `floatBubble ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const sideMenuRef = useRef();
  const [darkMode, setDarkMode] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      {/* Bubble Background */}
      <BubbleBackground />

      {/* Background Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} className="w-full" alt="" />
      </div>

      {/* Navigation Bar */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* Logo */}
        <a href="">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer bg-transparent mr-14"
            alt="logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li className="font-Ovo">
            <a href="#top" className="text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black">
              About me
            </a>
          </li>
          <li>
            <a href="#skills" className="text-black">
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="text-black">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode}>
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="contact" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li className="font-Ovo" onClick={closeMenu}>
            <a href="#top" className="text-black">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about" className="text-black">
              About me
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#skills" className="text-black">
              Skills
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#work" className="text-black">
              Portfolio
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact" className="text-black">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      

      {/* Social Media Links */}
      <div className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        <SocialLink href="https://medium.com/@dineshpriyantha" icon={<FaMedium />} label="Medium" />
        <SocialLink href="https://www.linkedin.com/in/dinesh-priyantha" icon={<FaLinkedinIn />} label="LinkedIn" />
        <SocialLink href="https://github.com/DineshPriyanthaGH" icon={<FaGithub />} label="GitHub" />
        <SocialLink href="https://twitter.com" icon={<FaTwitter />} label="Twitter" />
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-2 text-white hover:text-gray-900 transition-all"
    >
      <span className="absolute left-10 opacity-0 group-hover:opacity-100 bg-white text-black px-3 py-1 rounded-md transition-opacity">
        {label}
      </span>
      <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full transition-transform group-hover:scale-110">
        {icon}
      </div>
    </a>
  );
};

export default Navbar;
