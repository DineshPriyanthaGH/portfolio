"use client"; // Ensure this is a client component in Next.js 13+

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { id: 1, name: "GitHub", icon: <FaGithub />, link: "https://github.com/yourusername" },
  { id: 2, name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
  { id: 3, name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
  { id: 4, name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
];


const Header = () => {
  return (
    
    <div id="top" className="w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4">
         {/* Social Media Sidebar */}
         <div className="fixed left-0 top-1/3 flex flex-col gap-4">
        {socialLinks.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            {/* Hidden Text (Appears on Hover) */}
            <motion.span
              className="text-white bg-black px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ x: -50, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              {item.name}
            </motion.span>
            {/* Icon */}
            <motion.div
              className="text-white bg-gray-800 p-3 rounded-full text-xl hover:bg-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.div>
          </motion.a>
        ))}
      </div>
      {/* Profile Image */}
      <Image src={assets.profile_img} className="rounded-full w-40" alt="Profile Picture" />

      {/* Greeting */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi, I'm Dinesh Priyantha <Image src={assets.hand_icon} className="w-6" alt="Hand Icon" />
      </h3>

      {/* Typing Effect */}
      <h1 className="text-gray-500 font-bold text-xl sm:text-3xl lg:text-[45px]">
        As a{" "}
        <span className="text-black">
        <ReactTyped 
  strings={[
    "Full Stack Developer",
    "DevOps Enthusiast",
    "AI & ML Enthusiast",
  ]}
  typeSpeed={50}
  backSpeed={30}
  loop
/>

        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-500 max-w-2xl mx-auto">
        With expertise in <span className="text-black">Software Development</span>, I craft scalable and efficient digital solutions, from front-end experiences to back-end architecture.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
          Contact me <Image src={assets.right_arrow_white} className="w-4" alt="" />
        </a>
        <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
          My Resume <Image src={assets.download_icon} className="w-4" alt="" />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex flex-col items-center mt-10">
        <div className="text-xl text-bold">
          <a href="#about">
            <div className="flex items-center mt-2 text-gray-500 text-sm md:text-base gap-4">
              {/* Mouse Scroll Icon */}
              <div className="w-7 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1 relative animate-bounce">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-scroll"></div>
              </div>
              <div className="text-xl">Scroll Down</div>
              <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
