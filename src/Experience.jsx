import React from "react";
import { GoArrowDownRight } from "react-icons/go";

function Experience() {
  const exp = [
    {
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQEo_vuy1IZKUQ/company-logo_200_200/company-logo_200_200/0/1725631637297?e=2147483647&v=beta&t=iur3CpppoGS_u1gkmwQbLpy5BxMycLpY0t36SgWiV04",
      title: "House Of Mark Tech",
      description: `Worked as intern for a role of "Front-end developer".`,
      duration: "14 May 2025-27 June 2025",
    },
  ];
  return (
    <div className="bg-black my-8">
      <div className="md:items-start md:justify-start flex flex-col justify-center items-center w-full h-auto p-8 ">
        <div className="text-4xl md:text-6xl text-center font-bold font-body text-cyan mx-10 mt-10 mb-11">
          My Experience
        </div>
        <div className="text-xl text-center font-light font-special text-white mt-10 mb-11 h-auto w-full m-2  md:flex   md:justify-start flex-wrap justify-center">
          {exp.map((expc, index) => (
            <div className="md:h-auto md:w-[20rem] w-full h-auto rounded-3xl bg-black flex  border-2 border-white hover:scale-110 transition-all duration-700 ease-in-out hover:shadow-glowOrange hover:shadow-sm mx-2 mb-4 flex-col md:mx-10 ">
              <img
                src={expc.image}
                alt=""
                className="object-cover rounded-3xl h-[20rem] w-full"
              />

              <div className="my-2 p-2 ">
                <span className="font-body font-semibold text-2xl md:3xl flex justify-center text-center items-center">
                  {expc.title}
                </span>

                <p className=" font-body font-normal text-sm md:text-lg  text-white-200 flex justify-start text-center p-5 ">
                  {expc.description}
                </p>
                <span className="font-body font-normal text-sm md:text-medium  text-white-200 flex justify-start text-center pl-5">
                  Duration: {expc.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
