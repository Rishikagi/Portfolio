import React from 'react';
import { Link } from 'react-scroll';


function About() {
  return (
    <div id="about" className="w-screen overflow-hidden bg-black py-10 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-screen-xl mx-auto">

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-2 mr-3">
          <h1 className="text-cyan font-body text-4xl font-bold text-center md:text-left md:text-5xl my-6">About Me</h1>
          <p className="font-special text-white text-sm md:text-medium text-gray-300 text-justify leading-relaxed">
            I am a passionate and enthusiastic web developer with a strong foundation in full stack technologies.
            Currently pursuing a Bachelor's degree in Computer Applications, I am dedicated to honing my skills
            in web development and software engineering. My journey in the tech world has equipped me with the
            ability to create dynamic and responsive web applications, and I am always eager to learn and adapt
            to new challenges.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-2 rounded-lg border-2 border-white hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-glowOrange shadow-md mr-3">
          <img 
            src="https://media.istockphoto.com/id/1502289545/vector/technology-of-software-development-web-design-programming-concept-program-code-on-screen.jpg?s=612x612&w=0&k=20&c=IjkXl6uCuINBjLKmCq95TnhSQaHSAcJE2HzcNK42tv4=" 
            alt="About Illustration" 
            className="w-full h-full max-h-[25rem] object-cover rounded-md"
          />
        </div>

      </div>
    </div>
  );
}

export default About;
