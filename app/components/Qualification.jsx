"use client"; // Ensure this is a client component in Next.js 13+

import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaHandsHelping } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  const sections = {
    education: [
      { title: "BSc(Hons) Computing and Information Systems", place: "Sabaragamuwa University of Sri Lanka", year: "2023 - Present" },
      { title: "High School", place: "Royal College Polonnaruwa", year: "2019 - 2021" }
    ],
    experience: [
      { title: "Undergraduate", place: "Faculty Of Computing @SUSL", year: "2024 - Present" },
      { title: "Tech Support Intern", place: "GAOTek Inc.", year: "2023 - Present" }
    ],
    volunteering: [
      { title: "Technical Activities Committee | IEEE WIE SL SAC", place: "IEEE WIE Sri Lanka Section", year: "Mar 2025 - Present" },
      { title: "Organizer Committee Member | VisionX", place: "IEEE WIE Student Branch Affinity Group of SUSL", year: "May 2024 - Present" },
      { title: "Volunteer", place: "IEEE Student Branch of SUSL", year: "Jul 2023 - Present" }
    ]
  };

  return (
    <div id="qualification" className="w-full px-6 md:px-[10%] py-16 bg-gray-50">
      <motion.h2
        className="text-center text-xl sm:text-3xl lg:text-[45px] font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        QUALIFICATION
      </motion.h2>
      <p className="text-center text-gray-600 text-lg mt-2">My personal journey</p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
        {[
          { id: "education", label: "Education", icon: <FaGraduationCap /> },
          { id: "experience", label: "Experience", icon: <FaBriefcase /> },
          { id: "volunteering", label: "Volunteering", icon: <FaHandsHelping /> }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            className={`flex items-center gap-2 px-4 py-2 text-lg font-semibold rounded-md ${activeTab === tab.id ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab(tab.id)}
            initial={{ opacity: 0, x: tab.id === "education" ? -100 : tab.id === "volunteering" ? 100 : 0, y: tab.id === "experience" ? -50 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            {tab.icon} {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Qualification Timeline */}
      <div className="mt-12 flex flex-col items-center w-full">
        {/* Desktop View */}
        <div className="hidden md:block space-y-6 max-w-lg w-full">
          {sections[activeTab].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.place}</p>
                <p className="text-sm text-gray-400">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Swiper */}
        <div className="block md:hidden w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {sections[activeTab].map((item, index) => (
              <SwiperSlide key={index} className="p-6 bg-white rounded-lg shadow-md">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.place}</p>
                  <p className="text-sm text-gray-400">{item.year}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
