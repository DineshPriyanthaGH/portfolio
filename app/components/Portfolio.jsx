import React from "react";
import ProjectCard from "./ProjectCard";
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
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>
      <p className="text-center text-gray-600 mb-8">Most Recent Work</p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    
    </div>
  );
};

export default Portfolio;
