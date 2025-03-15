import React from "react";
import { FaGithub, FaExternalLinkAlt, FaMedium } from "react-icons/fa";

const ProjectCard = ({ title, description, githubLink, liveDemo, mediumArticle, image }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden p-4">
      {/* Project Image */}
      <div className="relative group w-full">
        <img src={image} alt={title} className="w-full h-60 object-cover rounded-lg" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-semibold flex items-center gap-2"
          >
            <FaGithub className="text-2xl" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Icons Below the Card */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-black transition"
        >
          <FaExternalLinkAlt size={22} />
        </a>
        <a
          href={mediumArticle}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800 transition"
        >
          <FaMedium size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
