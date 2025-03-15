import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Dinesh Priyantha</h2>
          <p className="text-gray-400 text-sm">
            Full-Stack Developer | AI Enthusiast | Open Source Contributor
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/DineshPriyanthaGH" target="_blank" className="hover:text-gray-400">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/dinesh-priyantha" target="_blank" className="hover:text-gray-400">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" className="hover:text-gray-400">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} DineshPriyantha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
