import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="w-full px-6 md:px-[10%] py-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold">Skills</h2>
      <p className="text-center text-gray-600 text-lg mt-2">My technical level</p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Frontend Card */}
        <div className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-center mb-4">Frontend Development</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>HTML</span> <span className="text-gray-500">Basic</span>
            </li>
            <li className="flex items-center justify-between">
              <span>CSS</span> <span className="text-gray-500">Advanced</span>
            </li>
            <li className="flex items-center justify-between">
              <span>JavaScript</span> <span className="text-gray-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Bootstrap</span> <span className="text-gray-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Git</span> <span className="text-gray-500">Intermediate</span>
            </li>
          </ul>
        </div>

        {/* Backend Card */}
        <div className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-center mb-4">Backend Development</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>PHP</span> <span className="text-gray-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Node.js</span> <span className="text-gray-500">Basic</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Python</span> <span className="text-gray-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <span>MySQL</span> <span className="text-gray-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Firebase</span> <span className="text-gray-500">Intermediate</span>
            </li>
          </ul>
        </div>

        {/* Frameworks Card */}
        <div className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-center mb-4">Frameworks & Libraries</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>React.js</span> <span className="text-gray-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Next.js</span> <span className="text-gray-500">Basic</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Express.js</span> <span className="text-gray-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Tailwind CSS</span> <span className="text-gray-500">Advanced</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Material UI</span> <span className="text-gray-500">Intermediate</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
