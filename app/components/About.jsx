import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { infoList } from '@/assets/assets';
import Image from 'next/image';
import { infoList } from '@/assets/assets';


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-bold'>About Me</h2>

      <div className='flex flex-col lg:flex-row items-center gap-20 my-20'>
        {/* Lottie Animation */}
        <div className='w-200 h-200 sm:w-100 sm:h-80 flex justify-center items-center'>
          <DotLottieReact
            src="https://lottie.host/81cbd9f9-ce6c-42ff-8ec5-d7ab90c2d153/JcVq2XUuGO.json"
            loop
            autoplay
          />
        </div>

        {/* About Text */}
        <div className='flex-1 text-lg text-gray-700'>
          <p className='leading-relaxed mb-10 max-2xl '>
            I am a <span className='text-black font-semibold'>passionate Software Developer</span>  
            dedicated to building innovative and efficient solutions.  
            With experience in <span className='text-black font-semibold'>full-stack development</span>,  
            <span className='text-black font-semibold'>mobile applications</span>, and  
            <span className='text-black font-semibold'>scalable system architecture</span>,  
            I thrive on crafting seamless and high-performing digital experiences.
          </p>
          <p className='mt-5 leading-relaxed'>
            My expertise spans <span className='text-black font-semibold'>frontend and backend technologies</span>,  
            <span className='text-black font-semibold'>database management</span>, and  
            <span className='text-black font-semibold'>cloud computing</span>.  
            I love tackling <span className='text-black font-semibold'>complex challenges</span>,  
            optimizing performance, and continuously learning to stay ahead in the ever-evolving tech landscape.
          </p>
          <ul>
            {infoList.map(({icon,iconDark,title,description,index})=>(
                <li key={index}>
              <Image src='icon' alt=''/>
                </li>

            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default About
