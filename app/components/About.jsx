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
            I am a <span className="text-black font-semibold">Full-Stack Developer</span> specializing in
            <span className="text-black font-semibold"> web and mobile app development</span>,
            <span className="text-black font-semibold"> AI & Machine Learning</span>, and
            <span className="text-black font-semibold"> scalable system architecture</span>. Passionate about
            building cutting-edge digital solutions, I focus on delivering high-performance, user-friendly,
            and efficient applications.
          </p>

          <p className="leading-relaxed text-lg sm:text-xl text-center lg:text-left">
            My expertise spans <span className="text-black font-semibold">front-end and back-end development</span>,
            leveraging <span className="text-black font-semibold">React.js, Next.js, Python, and Java</span> to
            build seamless and interactive user experiences. I also specialize in
            <span className="text-black font-semibold"> AI/ML model training</span> using Python and
            <span className="text-black font-semibold"> cloud computing</span> for scalable deployments.
            With a strong foundation in <span className="text-black font-semibold">UI/UX design</span>, I ensure
            intuitive and visually engaging applications.
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

