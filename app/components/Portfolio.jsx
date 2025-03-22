import React from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { assets } from './../../assets/assets';


const projects = [
  {
    title: "FinMentor",
    description: "Smart Expense Tracker Web Application.",
    githubLink: "https://github.com/DineshPriyanthaGH/finmentor-ai-powered-expense-tracker",
    liveDemo: "https://finmentor-ai-powered-expense-tracker-6yd1.vercel.app/",
    mediumArticle: "https://medium.com/@yourusername/project-one",
    image: "/assets/work-1.png",
  },
  {
    title: "Project Two",
    description: "An AI-powered chatbot system.",
    githubLink: "https://github.com/yourusername/project-two",
    liveDemo: "https://yourproject-two.com",
    mediumArticle: "https://medium.com/@yourusername/project-two",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Three",
    description: "A portfolio website using React.",
    githubLink: "https://github.com/yourusername/project-three",
    liveDemo: "https://yourportfolio.com",
    mediumArticle: "https://medium.com/@yourusername/portfolio",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Four",
    description: "A mobile app for task management.",
    githubLink: "https://github.com/yourusername/project-four",
    liveDemo: "https://yourproject-four.com",
    mediumArticle: "https://medium.com/@yourusername/project-four",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Five",
    description: "An e-commerce website for digital products.",
    githubLink: "https://github.com/yourusername/project-five",
    liveDemo: "https://yourproject-five.com",
    mediumArticle: "https://medium.com/@yourusername/project-five",
    image: "https://via.placeholder.com/300",
  },
];

const Portfolio = () => {
  return (
    <div  id="work" className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>
      <p className="text-center text-gray-600 mb-8">Most Recent Work</p>

      {/* Swiper Carousel for Project Cards */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // Show 1 project on small screens
          768: { slidesPerView: 2 }, // Show 2 projects on tablets
          1024: { slidesPerView: 3 }, // Show 3 projects on larger screens
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
