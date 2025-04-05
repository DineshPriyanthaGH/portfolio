"use client"; // Ensure this is a client component in Next.js 13+

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion"; // Import Framer Motion for scroll-triggered animations

import { assets } from './../../assets/assets';

const projects = [
  {
    title: "FinMentor",
    description: "Smart Expense Tracker Web Application.",
    githubLink: "https://github.com/DineshPriyanthaGH/finmentor-ai-powered-expense-tracker",
    liveDemo: "https://finmentor-ai-powered-expense-tracker-6yd1.vercel.app/",
    mediumArticle: "https://medium.com/@dineshpriyantha200248",
    image: "/assets/work-1.png",
  },
  {
    title: "PriceSense",
    description: "AI Powered Smart Price Predictor",
    githubLink: "https://github.com/DineshPriyanthaGH/pricesense-smart-electronic-item-price-predictor",
    liveDemo: "https://yourproject-two.com",
    mediumArticle: "https://medium.com/@dineshpriyantha200248",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "VacciCare",
    description: "Family Vaccination Management system.",
    githubLink: "https://github.com/DineshPriyanthaGH/project_familyvacciguard",
    liveDemo: "https://yourportfolio.com",
    mediumArticle: "https://medium.com/@dineshpriyantha200248",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Updating",
    description: "..........",
    githubLink: "https://github.com/yourusername/project-four",
    liveDemo: "https://yourproject-four.com",
    mediumArticle: "https://medium.com/@yourusername/project-four",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Updating",
    description: "...........",
    githubLink: "https://github.com/yourusername/project-five",
    liveDemo: "https://yourproject-five.com",
    mediumArticle: "https://medium.com/@yourusername/project-five",
    image: "https://via.placeholder.com/300",
  },
];

const Portfolio = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      // Set Swiper's auto play speed when the section comes into view
      swiperInstance.params.autoplay.delay = 1000; // Set speed to 1 second for faster auto-swiping
    }
  }, [swiperInstance]);

  return (
    <div id="work" className="container mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PORTFOLIO
      </motion.h2>
      <p className="text-center text-gray-600 mb-8">Most Recent Work</p>

      {/* Swiper Carousel for Project Cards */}
      <motion.div
        className="portfolio-slider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 1000, // Set the auto-swiping speed to 1 second
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance} // Set the swiper instance when initialized
          breakpoints={{
            320: { slidesPerView: 1 }, // Show 1 project on small screens
            768: { slidesPerView: 2 }, // Show 2 projects on tablets
            1024: { slidesPerView: 3 }, // Show 3 projects on larger screens
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Portfolio;
