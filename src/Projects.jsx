import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import calc from "./assets/calculator.png";
import taskManager from "./assets/task-manager.png";
import todo from "./assets/todo.png";
import techFest from "./assets/tech-fest.png";
import skill_nova from "./assets/skill_nova.png";



function Projects() {
  const project = [
    {
      image: skill_nova,
      title: "Skill Nova",
      description: "SkillNova is your AI career guide that doesn’t guess—it analyzes. Get precise career paths, smart resume building, and ATS optimization in one place.",
      view:"https://ai-detector-frontend-qq9v.onrender.com/"
    },
    {
      image: calc,
      title: "Calculator",
      description: "Simple functional calculator using (HTML,CSS,JS) ",
      view:"https://rishikagi.github.io/Calculator/"
    },
    {
       image: taskManager,
      title: "Task Manager",
      description: "Fully functional and respomsive your task manager with multiple functionalities using (HTML,CSS,JS)",
      view:"https://rishikagi.github.io/TaskManager/"
    },
      {
       image: todo,
      title: "TO-DO App",
      description: "Fully functional your task list with multiple functionalities using (HTML,CSS,JS)",
      view:"https://rishikagi.github.io/To-Do-App/"
    },
      {
       image:"https://miro.medium.com/v2/resize:fit:1400/1*87ce_sVbWHSHpDhCMBwKtA.png",
      title: "Clone: AirBNB",
      description: "First backend project using (HTML, CSS ,JS, NODE JS, EXPRESS JS, MONGO DB, MAP INTEGRATION, CRUD OPERATIONS, AUTHENTICATION) Features.",
      view:"https://github.com/Rishikagi/AirBnb-Clone"
    },
    {
      view:"https://0virusdetect.github.io/tech_fest/",
      image: techFest,
      title: "Tech-Fest",
      description:"Made with team for college event.",
    },
  {  view:"https://rishikagi.github.io/Tic-Toe-Game/",
    title:"Tic-Toe Game",
    image: "https://www.greatfrontend.com/img/questions/tic-tac-toe/tic-tac-toe-example.png",
    description:"Fully functional game using (HTML,CSS,JS)",},
    {
      view:"https://rishikagi.github.io/Clone-of-Spotify/",
      title:"Clone: Spotify",
      image: "https://sm.pcmag.com/t/pcmag_me/review/s/spotify/spotify_wc7u.1200.png",
      description:"Simple ui based very first project using only (HTML & CSS).",
    }
  ];
  return (
    <div className="w-screen overflow-hidden bg-black py-10 px-4 ">
      <div className="flex flex-col md:flex-col justify-center items-center gap-10 max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-2 mr-3">
          <h1 className="text-cyan font-body text-4xl font-bold text-center md:text-center md:text-5xl my-6">
            Projects
          </h1>
          <p className="font-special text-white text-sm md:text-medium text-gray-300 text-start leading-relaxed">
           My project portfolio includes a mix of self-initiated personal projects built through continuous self-learning, and live, real-world websites developed during internships. These experiences reflect my ability to apply technical concepts to practical challenges, from creative UI/UX design to fully functional and responsive front-end interfaces.
          </p>
        </div>

        {/* Image Section */}
        
        {project.map((projects,index)=>(
          <div
          key={index}
    className={`flex flex-col md:flex-row items-center my-8 ${
      index % 2 !== 0 ? "md:flex-row-reverse" : ""
    }`}>
          <div className="w-full md:w-1/2 p-6 mr-3">
            <img
              src={projects.image}
              alt="About Illustration"
              className="w-full h-full max-h-[20rem] object-cover rounded-md hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-glowOrange shadow-md border-2 border-white"
            />
          </div>
          <div className="flex flex-col items-center m-4 p-2 font-body">
            <span className="text-2xl font-semibold md:font-bold md:text-3xl text-darkOrange ">
              {projects.title}
            </span>
            <p className="text-medium font-semibold md:font-bold md:text-xl text-white">
              {projects.description}
            </p>
            <a href={projects.view}>
              <div className="flex text-medium font-semibold md:font-bold md:text-xl text-cyan hover:scale-110 transition-all hover:ease-in-out duration-700 cursor-pointer">
                View{" "}
                <span className="m-1 px-1 ">
                  <IoArrowForwardSharp />
                </span>
              </div>
            </a>
          </div>
        </div>

))}
</div>
        
    </div>
  );
}

export default Projects;
