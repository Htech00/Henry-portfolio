import React from "react";
import { IoMdCode } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import { TfiMicrosoft } from "react-icons/tfi";
import { IoFlashOutline } from "react-icons/io5";
import { FaMeetup } from "react-icons/fa";




const Services = () => {
  return (
    <div className="max-w-4xl flex flex-col gap-5 mx-auto">
      <div className="space-y-4">
        <p className="text-[#6a9955] text-2xl">// Services</p>
        <p className="text-[#425d82] text-4xl font-semibold ">
          Services Rendered
        </p>
      </div>
      <p className="text-white/70">
        End-to-end development solutions designed to transform your ideas into
        reality
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 rounded-md mb-6 gap-10 ">
        <div className="border border-[#3c3c3c] rounded-md flex flex-col items-center  p-6 bg-[#3c3c3c]/10 mt-2">
             <IoMdCode className="text-[52px] text-[#425d82]" /> 
              <p className="text-[#425d82] font-semibold text-[18px] ">
                Web Development
              </p>
              <p className="text-center text-white/70 mt-4">
                Developing fast, responsive web applications using modern tools and frameworks.
              </p>
        </div>

        <div className="border border-[#3c3c3c] rounded-md flex flex-col items-center  p-6 bg-[#3c3c3c]/10 mt-2">
             <MdPhoneIphone className="text-[52px] text-[#a15eaa]" /> 
              <p className="text-[#a15eaa] font-semibold text-[18px] ">
                Mobile Development
              </p>
              <p className="text-center text-white/70 mt-4">
                Developing mobile applications that run seamlessly on both iOS and Android platforms.
              </p>
        </div>

        <div className="border border-[#3c3c3c] rounded-md flex flex-col items-center  p-6 bg-[#3c3c3c]/10 mt-2">
             <CiDatabase className="text-[52px] text-[#90f1f5]" /> 
              <p className="text-[#90f1f5] font-semibold text-[18px] ">
                Backend Development
              </p>
              <p className="text-center text-white/70 mt-4">
                Developing fast, responsive web applications using modern tools and frameworks.
              </p>
        </div>

         <div className="border border-[#3c3c3c] rounded-md flex flex-col items-center  p-6 bg-[#3c3c3c]/10 mt-2">
             <TfiMicrosoft className="text-[52px] text-[#4b632d]" /> 
              <p className="text-[#4b632d] font-semibold text-[18px] ">
                Software Testing
              </p>
              <p className="text-center text-white/70 mt-4">
                Identifying bugs and ensuring app reliability through manual and automated testing.
              </p>
          </div>

          <div className="border border-[#3c3c3c] rounded-md flex flex-col items-center  p-6 bg-[#3c3c3c]/10 mt-2">
             <IoFlashOutline className="text-[52px] text-[#6e5b05]" /> 
              <p className="text-[#6e5b05] font-semibold text-center text-[18px] ">
                Performance Optimization
              </p>
              <p className="text-center text-white/70 mt-4">
                Enhancing app speed and efficiency for a smoother user experience.
              </p>
          </div>

          <div className="border border-[#3c3c3c] rounded-md flex flex-col items-center  p-6 bg-[#3c3c3c]/10 mt-2">
             <FaMeetup className="text-[52px] text-[#faf895]" /> 
              <p className="text-[#faf895] font-semibold text-[18px] ">
                Consultation
              </p>
              <p className="text-center text-white/70 mt-4">
                Providing expert guidance on software solutions, project planning, and technology choices.
              </p>
          </div>
      </div>
    </div>
  );
};

export default Services;
