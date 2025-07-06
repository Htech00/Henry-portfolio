import React from "react";
import henryimg from "../assets/henry.png";
import { MdOutlineMail } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiMessageSquare } from "react-icons/fi";

const ContactMe = () => {
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div className="md:space-y-8 mb-4 items-center">
          <div className="space-y-4">
            <p className="text-[#6a9955] text-2xl">// Contact</p>
            <p className="text-[#425d82] text-4xl font-semibold ">
              Get In Touch
            </p>
            <p className="text-white">
              Have a project in mind? Let's work together!
            </p>
          </div>
          <div className="md:w-[432px]  rounded-md p-4 md:mb-6 border border-[#3c3c3c] font-mono">
            <form action="" className="flex flex-col gap-4 text-[#3691c5]">
              <div className="flex gap-1 items-center text-[#3691c5]">
                <MdOutlineMail />
                <p>Contact Form</p>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="cursor-pointer">
                  name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-[#3c3c3c] border bg-[#3f3c3c3f] rounded-md p-1 placeholder:text-white/70 focus:outline-[#3691c5] focus:outline-2"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="cursor-pointer">
                  email:
                </label>
                <input
                  type="text"
                  id="email"
                  className="border-[#3c3c3c] border bg-[#3f3c3c3f] rounded-md p-1 placeholder:text-white/70 focus:outline-[#3691c5] focus:outline-2"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="cursor-pointer">
                  message:
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="border-[#3c3c3c] border bg-[#3f3c3c3f] rounded-md p-1 h-40 resize-none placeholder:text-white/70 focus:outline-[#3691c5] focus:outline-2"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button className="text-white bg-[#3691c5] px-2 py-1 w-[100px] rounded-md hover:bg-[#3691c5]/80 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <BiMailSend className="text-[30px]" />
                  <p className="text-semibold">Submit</p>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-4">
          <div className="md:w-[432px]  rounded-md mb-6 border border-[#3c3c3c] font-mono md:mt-40 h-[484px]">
            <div className="bg-[#3f3c3c3f] py-2 px-4">
              <p className="text-white">Terminal</p>
            </div>
            <div className="p-4">
              <div className="leading-[20px] text-white/70">
                <p>$ init contact-form</p>
                <p className="text-[#c8f58e]">
                  {">"} Contact form initialized successfully.
                </p>
              </div>
              <div className="font-mono text-white/70 flex items-center mt-3 gap-2">
                <p>user@machine:~$</p>
                <span className="blinking-cursor h-4 w-3 bg-white/70"></span>
              </div>
            </div>

            <div className="bg-[#425d82] py-1  md:mt-77.5 mt-68 w-full">
              <p className="px-4 text-[12px] text-white">
                Contact Terminal — node v18.0.0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-md p-4 flex flex-col gap-2 mb-8 bg-[#3f3c3c3f] border border-[#3c3c3c] font-mono text-white/70">
        <p className="text-[#3691c5]">// Other Ways to Connect</p>
        <div className="grid md:grid-cols-3 grid-cols-1 sm:text-[16px] text-[12px]">
          <div className="flex gap-2 items-center ">
            <a
              href="mailto:htechsolutionz@gmail.com"
              className="hover:text-[#3691c5]"
              target="_blank"
            >
              <div className="flex gap-2 items-center">
                <MdOutlineMail className="text-[22px]" />
                <p>Htechsolutionz@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href="https://github.com/Htech00"
              className="hover:text-[#3691c5]"
              target="_blank"
            >
              <div className="flex gap-2 items-center">
                <FaGithub className="text-[22px]" />
                <p>GitHub</p>
              </div>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href="https://linkedin.com/in/henry-ojukwu-2296a0297"
              className="hover:text-[#3691c5]"
              target="_blank"
            >
              <div className="flex gap-2 items-center">
                <SlSocialLinkedin className="text-[22px]" />
                <p>LinkedIn</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className=" rounded-md p-6 flex flex-col gap-2 mb-6 bg-[#25d366]/10 border border-[#25d366] font-mono text-white/70">
        <div className="flex text-[20px] items-center gap-4 font-semibold">
          <FiMessageSquare className="text-[#25d366]" />
          <p className="text-[#25d366] ">Whatsapp Me Directly</p>
        </div>
        <p className="text-white/70">
          For quick responses and real-time communication, feel free to reach
          out to me on WhatsApp.
        </p>
        <button
          className=" w-[180px] mt-7 bg-[#25d366] py-4 px-4 text-white rounded-md hover:bg-[#25d366]/50"
          onClick={() =>
            window.open(
              "https://wa.me/2348109399679?text=Hello%20there%2C%20I%20saw%20your%20portfolio!",
              "_blank"
            )
          }
        >
          <div className="flex items-center gap-2">
            <FiMessageSquare className="text-[16px]" />
            <p className="text-[14px] font-semibold">Chat on whatsapp</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
