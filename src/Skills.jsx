import React from 'react'
import system from './assets/system.jpg'
import mongo from "./assets/mongo.png";

const skills =[
  {
  
    name: 'HTML',
    icon: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'},
    {
    name: 'CSS',
    icon: 'https://png.pngtree.com/png-clipart/20230804/original/pngtree-vector-css-icon-code-black-button-vector-picture-image_9512792.png'},
    {
    name: 'JavaScript',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPreLI2PF7pZqQNAixmvUthOb4pvZHBkeXw&s'},
    {
    name: 'C/C++',  
    icon: 'https://img.icons8.com/?size=512&id=44328&format=png'},
    {
    name: 'React Js', 
    icon: 'https://getdrawings.com/free-icon/react-icon-58.png'
  },
  {
    name: 'Node Js', 
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png'
  },
  {
    name:"MongoDB",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s"
  }
    
    
]

function Skills() {
  return (
    <div>
        <div>
            <div className='text-4xl md:text-5xl text-center font-bold font-body text-cyan mt-10 mb-11'>
                My Skills
            </div>
            <div className='md:text-xl text-medium text-center font-light font-special text-white mt-10 mb-11 p-8'>
                <p>Skilled in front-end development with expertise in <b> HTML, CSS, JavaScript, React.js, Node.js, and MongoDB</b>. Proficient in <b>C++, Python (basic), and software tools like MS Office and design software</b>.Strong foundation in problem-solving, team collaboration, and project management, with experience in real-world technical projects.</p>
            </div>

            {/* Desktop View */}
            <div className='hidden md:flex flex-wrap justify-center items-center mb-0 mt-10'>
              {skills.map((skill, index) => (
              <div className='border-2 border-darkOrange mx-2  py-2  h-[12em] w-[6em] rounded-t-full bg-orange hover:scale-y-[1.12] hover:shadow-lg hover:shadow-glowOrange hover:transition-all duration-200 ease-in-out transform origin-bottom' >
                <div className='ml-[5.5px] rounded-full border-2 border-cyan h-[5rem] w-[5rem] mb-6'>
                  <img src={skill.icon} alt="" className='rounded-full'/>
                  </div><span className='text-medium  text-white font-body p-4 justify-center py-11'>{skill.name}</span>
                  </div>))}
              </div>

              {/* mobile view */}
            <div className='md:hidden flex flex-wrap justify-center items-center mb-0 '>
              {skills.map((skill, index) => (
                <div className='my-8 p-2'>
                  <div className=' w-[10rem] h-auto p-4 flex flex-col justify-center items-center mx-3 '>
                  <span className='text-medium text-white font-body font-semibold text-3xl  p-4 justify-center py-11'>{skill.name}</span>
                  <div className='ml-[5.5px] rounded-full border-2 border-cyan bg-orange h-[8rem] w-[8rem] mb-6  hover:shadow-lg hover:shadow-glowOrange hover:scale-110 hover:transition-all duration-200 ease-in-out'>
                  <img src={skill.icon} alt="" className='rounded-full'/>
                  </div>
                  </div>
                </div>
              ))}</div>
            <div className='w-full h-[5rem]'>
              <img src={system} alt="" className='w-full h-[5rem] object-cover' />
            </div>
            
        </div>
    </div>
  )
}

export default Skills