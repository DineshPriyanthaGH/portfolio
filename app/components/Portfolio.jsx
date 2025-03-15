import React from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaGithub, FaExternalLinkAlt, FaMedium } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description: "A cool web app built with React.",
    githubLink: "https://github.com/yourusername/project-one",
    liveDemo: "https://yourproject-live.com",
    mediumArticle: "https://medium.com/@yourusername/project-one",
    image: "https://via.placeholder.com/300",
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
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>
      <p className="text-center text-gray-600 mb-8">Most Recent Work</p>

      {/* Swiper Carousel for Project Cards */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3} // Show 3 projects at a time
        pagination={{ clickable: true }}
        loop={true} // Enables infinite sliding
        grabCursor={true} // Makes swiping smoother
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

