import React from 'react'
import profile from './assets/profile.jpeg'
import { PiHexagonThin } from "react-icons/pi";

function HeroSection() {
  return (
    <header className='flex flex-col md:flex-row justify-center items-center w-full overflow-hidden mt-11 md:mt-40 px-4 md:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center my-10  max-w-screen-xl mx-auto h-auto'>
            <div className='flex flex-col flex-wrap justify-center items-center sm:items-start w-full md:w-1/2 text-white md:items-start'>
                <div className='uppercase font-semibold text-cyan gap-4 text-lg font-special tracking-wide md:text-2xl'>Front-End Developer</div>
               <div className="py-6 w-fit whitespace-nowrap cursor-pointer transition-all ease-in duration-300 transform hover:scale-105 font-bold font-body text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-green-400 hover:via-yellow-500 hover:to-red-500 uppercase text-4xl md:text-6xl tracking-wider md:tracking-widest">
  Rishika Verma
</div>


                <div className='text-opacity-30'><p className='font-special font-lighter text:sm md:text-medium md:font-light'>A passionate and Enthusiastic Web Developer & Software Developer.</p>
                <p className='font-special font-lighter text:sm md:text-medium md:font-light '>Currently a Student pursuing  <span className='font-body font-medium text-lightOrange'>Bachelor Of Computer Application.</span></p>
                </div>
            </div>   
           
        </div>
        <div className='relative w-[400px] h-[400px] flex items-center justify-center p-2 animate-pulse'><PiHexagonThin  size={400} className="absolute top-0 left-0 text-cyan z-0 border-w-1 blur-md animate-[spin_20s_linear_infinite]"/>
       <div className="flex justify-center items-center p-2 rounded-full border-2 border-orange w-[260px] h-[260px]">
  <div className="rounded-full overflow-hidden w-[240px] h-[240px]">
    <img src={profile} alt="Profile" className="w-full h-full object-cover" />
  </div>
</div>
</div>
    </header>
  )
}

export default HeroSection