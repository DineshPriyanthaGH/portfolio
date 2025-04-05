"use client"; // Ensure this is a client component in Next.js 13+

import React from "react";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaDatabase, FaCloud, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";  // Added relevant icons
import { motion } from "framer-motion"; // Import framer-motion for scroll-triggered animations

const Skills = () => {
  return (
    <div id="skills" className="w-full px-6 md:px-[10%] py-16 bg-gray-50">
      {/* Section Title */}
      <motion.h2
        className="text-center text-xl sm:text-3xl lg:text-[45px] font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SKILLS
      </motion.h2>
      <p className="text-center text-gray-600 text-lg mt-4">
        MERN Stack | DevOps | AI/ML
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        
        {/* Frontend Card */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition-all"
          initial={{ opacity: 0, x: -50 }} // Move from left
          whileInView={{ opacity: 1, x: 0 }} // Final position
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2"> 
            <span>Frontend Development</span>
          </h3>

          <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <FaReact className="text-blue-500" />
              <FaJsSquare className="text-yellow-500" />
              <FaHtml5 className="text-orange-600" />
              <FaCss3Alt className="text-blue-500" />
            </div>
          </h3>

          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>React.js</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full w-3/4"></div> {/* 75% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>Next.js</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full w-2/3"></div> {/* 60% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>Tailwind CSS</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div> {/* 80% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>HTML5</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div> {/* 80% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>CSS3</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div> {/* 80% Progress */}
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 50 }} // Move from bottom
          whileInView={{ opacity: 1, y: 0 }} // Final position
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2"> 
            <span>Backend Development</span>
          </h3>

          <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <FaNodeJs className="text-green-600" />
              <FaDatabase className="text-blue-500" />
              <FaPython className="text-yellow-500" />
            </div>
          </h3>

          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>Node.js</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full w-3/4"></div> {/* 75% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>Express.js</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full w-2/3"></div> {/* 60% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>SQL</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full w-3/4"></div> {/* 75% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>MongoDB</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full w-3/4"></div> {/* 75% Progress */}
              </div>
            </li>
          </ul>
        </motion.div>

        {/* DevOps & AI/ML Card */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition-all"
          initial={{ opacity: 0, x: 50 }} // Move from right
          whileInView={{ opacity: 1, x: 0 }} // Final position
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2">  
            <span>DevOps & AI/ML</span>
          </h3>

          <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <FaDocker className="text-blue-400" />
              <FaAws className="text-orange-600" />
              <FaGitAlt className="text-orange-600" />
              <FaPython className="text-yellow-500" />
            </div>
          </h3>

          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>Docker</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-400 h-2.5 rounded-full w-2/3"></div> {/* 60% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>Kubernetes</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div> {/* 50% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>AWS (EC2, S3)</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-600 h-2.5 rounded-full w-2/3"></div> {/* 60% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>Git & Version Control</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-600 h-2.5 rounded-full w-3/4"></div> {/* 75% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>Python (ML Libraries)</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full w-2/3"></div> {/* 60% Progress */}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span>TensorFlow / Keras</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full w-1/2"></div> {/* 50% Progress */}
              </div>
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;
