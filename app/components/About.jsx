"use client"; // Ensure this is a client component in Next.js 13+

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { infoList } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full px-6 md:px-[10%] py-10 scroll-mt-20">
      {/* Section Title */}
      <motion.h2
        className="text-center text-xl sm:text-3xl lg:text-[45px] font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ABOUT ME
      </motion.h2>

      {/* Introduction Card */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-12 my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Lottie Animation Card */}
        <motion.div
          className="w-[700px] h-[700px] sm:w-[100px] sm:h-[100px] md:w-[300px] md:h-[300px] lg:w-[600px] lg:h-[600px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <DotLottieReact
            src="https://lottie.host/81cbd9f9-ce6c-42ff-8ec5-d7ab90c2d153/JcVq2XUuGO.json"
            loop
            autoplay
          />
        </motion.div>

        {/* About Text Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-4">
            Hello, I'm [Your Name]
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            I am an undergraduate student currently pursuing a Bachelor's
            degree in Computing and Information Systems at Sabaragamuwa
            University of Sri Lanka. My academic journey has provided me with
            a solid foundation in full-stack development, data analysis, and
            cloud technologies. I am passionate about learning and applying
            new technologies to solve real-world challenges.
          </p>
          <p className="text-lg text-gray-700">
            I'm focused on enhancing my skills in web development, AI/ML, and
            cloud computing, with a goal of building innovative and impactful
            digital solutions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
