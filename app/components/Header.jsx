import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { Ovo } from 'next/font/google';
import { Outfit } from 'next/font/google';



const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4'>



        <>
            <Image src={assets.profile_img} className='rounded-full w-40' alt=''/>
            
            
        </>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi I'm Dinesh Priyantha <Image src={assets.hand_icon} className=' w-6' alt=''/> </h3>
        
        
        <h1 className='text-gray-500 font-bold text-xl sm:text-3xl lg:text-[45px]'>As a  <span className='text-black'>Full Stack Developer
        </span>    
            </h1> 
        
        
        <p className='text-gray-500 max-w-2xl mx-auto'>with expertise in <span className='text-black'>Software Development</span>, I craft scalable and efficient digital solutions, from front-end experiences to back-end architecture.</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'> Contact me<Image src={assets.right_arrow_white} className=' w-4' alt=''/> </a>
        <a href='/sample-resume.pdf' download  className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> My Resume<Image src={assets.download_icon} className=' w-4' alt=''/> </a>
        

        </div>
        <div className="flex flex-col items-center mt-10">
 

  {/* Scroll Down Text */}
  <div className="flex items-center mt-2 text-gray-500 text-sm md:text-base gap-4">
     {/* Mouse Icon */}
  <div className="w-7 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1 relative animate-bounce">
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-scroll"></div>
  </div>
    <span className='text-xl'>Scroll down</span>
    <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
</div>
        
    </div>
  )
}

export default Header