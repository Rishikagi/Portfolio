import React from 'react';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-scroll';

function Footer() {
  
  return (
    <div className='bg-black border-t-2 border-white text-white h-auto w-full  font-body flex-col  p-4'>
      
      {/* Name */}
      <div className='text-orange text-xl font-semibold '>
        Rishika Verma
      </div>

      {/* Navigation Links */}
      <div className='flex flex-col items-center justify-center w-full gap-2 md:flex-row'>
        <div className='flex flex-col md:flex-row md:gap-10 gap-3 justify-evenly'>
           <Link to="about" smooth={true} duration={500} offset={-70}>
          <span className='hover:scale-105 transition-all duration-500 ease-in-out hover:text-cyan hover:border-b-2 hover:border-darkCyan hover:shadow-white cursor-pointer shadow-md'>About Us</span></Link>
           <Link to="skills" smooth={true} duration={500} offset={-70}>
          <span className='hover:scale-105 transition-all duration-500 ease-in-out hover:text-cyan hover:border-b-2 hover:border-darkCyan hover:shadow-white cursor-pointer shadow-md'>Skills</span> </Link>
           <Link to="experience" smooth={true} duration={500} offset={-70}>
          <span className='hover:scale-105 transition-all duration-500 ease-in-out hover:text-cyan hover:border-b-2 hover:border-darkCyan hover:shadow-white cursor-pointer shadow-md'>Experience</span></Link>
           <Link to="projects" smooth={true} duration={500} offset={-70}>
          <span className='hover:scale-105 transition-all duration-500 ease-in-out hover:text-cyan hover:border-b-2 hover:border-darkCyan hover:shadow-white cursor-pointer shadow-md'>Projects</span></Link>
           <Link to="contact" smooth={true} duration={500} offset={-70}>
          <span className='hover:scale-105 transition-all duration-500 ease-in-out hover:text-cyan hover:border-b-2 hover:border-darkCyan hover:shadow-white cursor-pointer shadow-md'>Contact Us</span></Link>
          <Link to="certifications" smooth={true} duration={500} offset={-70}>
          <span className='hover:scale-105 transition-all duration-500 ease-in-out hover:text-cyan hover:border-b-2 hover:border-darkCyan hover:shadow-white cursor-pointer shadow-md'>Certifications</span></Link>
        </div>
      </div>
      

      {/* Visit Section */}
      <div className='flex flex-col items-center mt-4 gap-2 w-full'>
        <p className='text-sm'>Visit on:</p>
        <div className='flex gap-6 justify-center'>
          <span className='border-2 rounded-full p-2 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-glowOrange shadow-md cursor-pointer'>
           <a href="https://www.linkedin.com/in/vermarishika2004/"> <BiLogoLinkedin style={{ width: "1rem", height: "1rem" }} /></a>
          </span>
          <span className='border-2 rounded-full p-2 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-glowOrange shadow-md cursor-pointer'>
            <a href="https://github.com/Rishikagi/"><FaGithub style={{ width: "1rem", height: "1rem" }} /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
