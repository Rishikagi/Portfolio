import React, { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
  
import emailjs from '@emailjs/browser';

function Contact() {
  const handleViewCV = () => {
    window.open('/RishikaVerma.pdf', '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'RishikaVerma.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uf9o23s', 'template_k3gfkbv', form.current, {
        publicKey: 'JjPNQztNxpc4f1jWc',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <div className="w-screen overflow-hidden  py-10 md:px-4 px-2 pr-6 ">
      <div className="flex md:p-8 flex-col md:flex-col justify-center items-center gap-10 max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-2 mr-3">
          <h1 className="text-cyan font-body text-4xl font-bold text-center md:text-center md:text-5xl my-6">
            Contact Me
          </h1>
        </div>
        {/* Form */}
        <div className="bg-lightBrown w-full h-auto p-4 md:mx-10 justify-center rounded-lg md:p-4">
          <div className="flex gap-10 md:gap-[8rem] flex-col md:flex-row md:mx-10 ">
            <div>
              <div className="font-body text-orange text-xl md:text-2xl">
                Get In Touch
              </div>
              <div className="text-white font-body font-sm md:text-medium mb-7 ">
                <p>Feel free to reach out if you had like to collaborate.</p>
                <p>You are just a few clicks ago!!</p>
              </div>
              <div className="py-2 w-full font-body">
                <form ref={form} onSubmit={sendEmail}>
                  <span>
                    <input
                      type="text"
                      className="w-full rounded-md h-8 bg-lightGrey px-4 text-white placeholder-white mb-4"
                      placeholder="Your Name" name="title" required
                    />
                  </span>
                  <span>
                    <input
                      type="text"
                      className="w-full rounded-md h-8 bg-lightGrey px-4 text-white placeholder-white mb-4"
                      placeholder="Your Email" name="name" required
                    />
                  </span>
                  <span className="h-auto">
                    <textarea
                      className="w-full rounded-md h-24 bg-lightGrey px-4 text-white placeholder-white  placeholder:py-2 md:placeholder:max-h-[10rem] md:h-[10rem]"
                      placeholder="Your Message" name="message" required
                    />
                  </span>
                  <button className="my-4 border-2 w-full items-center p-1 bg-darkCyan border-darkCyan rounded-lg text-white hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-glowCyan shadow-sm" type="submit" value="send">Send</button>
                </form>
              </div>
            </div>
            <div className="">
              <img
                src="https://media.istockphoto.com/id/1229883762/photo/email-message-inbox-notification-on-laptop-screen-business-background.jpg?s=1024x1024&w=is&k=20&c=B7uM6ZzSvORpHeKKsy4z7N6bxW56L5gwA7dLQ2uZ6nM="
                className="object-cover md:w-[30rem] md:h-[20rem] border-2 border-white"
                alt=""
              />
              <div className="flex flex-col text-white font-body my-8 text-sm md:text-medium">
                <span className="m-1 flex items-center gap-4 ">
                  <MdOutlineEmail /> vermarishika855@gmail.com
                </span>
                <span className="m-1 flex items-center gap-4 ">
                  <FaPhone className="font-bold" /> +91 9305271519
                </span>
                <span className="m-1 flex items-center gap-4 ">
                  <SlLocationPin className="font-bold" /> Kanpur, Uttar Pradesh,
                  India
                </span>
                <div className="text-orange flex gap-10 mx-6 mt-8">
                  <a href="https://www.linkedin.com/in/vermarishika2004/">
                  <div className="border-2 rounded-full p-2 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-glowOrange shadow:md cursor-pointer">
                    <BiLogoLinkedin style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  </a>
                  <a href="https://github.com/Rishikagi/">
                  <div className="border-2 rounded-full p-2 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-glowOrange shadow:md cursor-pointer">
                    <FaGithub style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  </a>
                  <button onClick={handleViewCV}>
                    <div className="border-2 rounded-full p-2 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-glowOrange shadow:md cursor-pointer">
                      <img src="https://cdn-icons-png.flaticon.com/512/8899/8899515.png" alt="" className='w-[2rem] h-[2rem]' />
                    </div>
                  </button>
                  <button onClick={handleDownloadCV}>
                    <div className="border-2 rounded-full p-2 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-glowOrange shadow:md cursor-pointer">
                      <MdFileDownload style={{ width: "2rem", height: "2rem" }} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
