import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { infoList } from '@/assets/assets';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full px-6 md:px-[10%] py-10 scroll-mt-20">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-12 my-16">
        {/* Lottie Animation */}
        <div className="w-[500px] h-[500px] md:w-[240px] md:h-[240px] sm:w-[180px] sm:h-[180px] flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/81cbd9f9-ce6c-42ff-8ec5-d7ab90c2d153/JcVq2XUuGO.json"
            loop
            autoplay
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-gray-700 text-justify">
          <p className="leading-relaxed mb-6 text-lg sm:text-xl max-w-3xl lg:text-left">
            I am a <span className="text-black font-semibold">Full-Stack Developer & DevOps Enthusiast</span>  
            with a passion for building innovative web and mobile applications. My experience spans across  
            <span className="text-black font-semibold"> web & app development</span>,  
            <span className="text-black font-semibold"> AI/ML solutions</span>, and  
            <span className="text-black font-semibold"> cloud technologies</span>.
          </p>

          <p className="leading-relaxed text-lg sm:text-xl text-center lg:text-left">
            I have a strong background in <span className="text-black font-semibold">frontend & backend development</span>,  
            <span className="text-black font-semibold"> DevOps practices</span>, and  
            <span className="text-black font-semibold"> cloud computing</span>.  
            I enjoy working on <span className="text-black font-semibold">automation</span>,  
            optimizing performance, and implementing <span className="text-black font-semibold">CI/CD pipelines</span>  
            to streamline development workflows.
          </p>

          {/* Skills / Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mt-8 mx-auto lg:mx-0">
            {infoList.map((item, index) => (
              <li key={index} className="flex flex-col items-center text-center">
                <Image src={item.icon} alt={item.title} width={60} height={60} />
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;



