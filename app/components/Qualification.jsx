import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div id="qualification" className="w-full px-6 md:px-[10%] py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-bold">Qualification</h2>
      <p className="text-center text-gray-600 text-lg mt-2">My personal journey</p>

      {/* Tabs */}
      <div className="flex justify-center gap-20 mt-8">
        <button
          className={`flex items-center gap-2 px-4 py-2 text-lg font-semibold rounded-md ${
            activeTab === "education" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap /> Education
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 text-lg font-semibold rounded-md ${
            activeTab === "experience" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          <FaBriefcase /> Experience
        </button>
      </div>

      {/* Qualification Timeline */}
      <div className="mt-12 flex justify-center">
        {activeTab === "education" ? (
          <div className="space-y-6">
            {/* Education Timeline */}
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">BSc(Hons) Computing and Information Systems</h3>
                <p className="text-gray-500">Sabaragamuwa University of Sri Lanka</p>
                <p className="text-sm text-gray-400">2023 - Present</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">High School</h3>
                <p className="text-gray-500">Royal College Polonnaruwa</p>
                <p className="text-sm text-gray-400">2019 - 2021</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Experience Timeline */}
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">UnderGraduate</h3>
                <p className="text-gray-500">Faculty Of Computing @SUSL</p>
                <p className="text-sm text-gray-400">2024 - Present</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">Tech Support Intern</h3>
                <p className="text-gray-500">GAOTek Inc.</p>
                <p className="text-sm text-gray-400">2023 - Present</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qualification;
