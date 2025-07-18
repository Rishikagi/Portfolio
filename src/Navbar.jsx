import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GoArrowDownRight } from "react-icons/go";
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'About Me', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },  
    { name: 'Contact', to: 'contact' },
    { name: 'Certifications', to: 'certifications' }
  ];

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black flex flex-col'>
      {/* Desktop Navbar */}
      <div className='hidden md:flex text-white border-2 border-lightBrown justify-between items-center p-8 my-4 mx-[10%] rounded-[100px]'>
        <div className='font-body font-semibold text-2xl'>Rishika Verma</div>
        <ul className='flex font-body text-xl'>
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className='p-2 px-3 cursor-pointer hover:scale-110 transition-all duration-200 hover:border-b-4 hover:border-b-cyan'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link  to="contact"
        smooth={true}
        duration={500}
        offset={-70}>
        <div className='border-2 bg-lightBrown h-auto w-70 p-2 border-cyan bg-gradient-to-r from-cyan to-orange flex justify-center text-sm font-medium items-center rounded-2xl cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out hover:shadow-cyanShadow'>
          Hire Me <GoArrowDownRight />
        </div>
        </Link>
      </div>

      {/* Mobile Navbar Header */}
      <div className='w-full flex justify-between items-center md:hidden px-6 py-4 border-b border-lightBrown'>
        <div className='text-white font-body font-semibold text-2xl'>RV</div>
        <div className='flex items-center gap-4'>
          <Link  to="contact"
        smooth={true}
        duration={500}
        offset={-70}>
          <div className='text-white border border-cyan bg-gradient-to-r from-cyan to-orange text-sm font-medium px-3 py-1 rounded-2xl cursor-pointer hover:scale-110 transition duration-200 hover:shadow-cyanShadow'>
            Hire Me <GoArrowDownRight />
          </div> </Link>
          <button onClick={toggleMenu} className='text-white border-2 border-lightBrown bg-black rounded-full h-10 w-10 flex items-center justify-center'>
            {isOpen ? <IoMdClose size={24} /> : <span className='text-xl'>&#x2630;</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col bg-black border-t border-lightBrown text-white font-body text-lg px-6 py-4 space-y-4 absolute w-full z-40'>
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className='block text-center cursor-pointer hover:scale-110 transition duration-200 hover:border-b-4 hover:border-cyan'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

