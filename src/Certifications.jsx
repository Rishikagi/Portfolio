import React from 'react';
import aws from "./assets/aws.png";
import code from "./assets/code.png";
import isro from "./assets/isro.png";
import web from "./assets/web.png";
import internship from "./assets/internship.png";
import letter from "./assets/letter.png";

const links = [
  { view: internship },
  { view: letter },
  { view: code },
  { view: web },
  { view: isro },
  { view: aws },
  
];

function Certifications() {
  return (
    <div className="w-screen overflow-hidden py-10 px-2">
      {/* Text Section */}
      <div className="w-full flex justify-center items-center">
        <h1 className="text-cyan font-body text-4xl font-bold text-center md:text-5xl my-6">
          Certifications
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-10">
        {links.map((link, index) => (
          <div
            key={index}
            className="border-2 h-auto w-full sm:w-[22rem] md:w-[25rem] lg:w-[27rem]"
          >
            <img
              src={link.view}
              alt="Certificate"
              className="w-full h-full max-h-[25rem] object-cover rounded-md hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-glowOrange shadow-md border-2 border-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
