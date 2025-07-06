import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import henryimg from "../assets/henry.png";
import { HiOutlineClock } from "react-icons/hi2";
import { FiCheckCircle } from "react-icons/fi";
import { CiMedal } from "react-icons/ci";

const codeString = `
const developer = {
  name: 'Henry Ojukwu',
  title: 'Full Stack Developer',
  skills: ['React', 'Next.js', 'TypeScript', 'Node.js, javascript', 'HTML', 'CSS'],
  passion: 'Building beautiful web experiences'
};`;

const HomePage = () => {
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div className="space-y-8 mb-8 items-center">
          <div className="space-y-4">
            <p className="text-[#6a9955] text-2xl">// Hi I'm a Developer</p>
            <p className="text-[#425d82] text-4xl font-semibold w-[250px]">
              Welcome to my portfolio
            </p>
            <p className="text-2xl text-[#23eeb1]">{"<Portfolio />"}</p>
          </div>
          <div className="md:w-[432px] w-[250px]  rounded-md p-4 md:mb-6 border border-[#3c3c3c] font-mono">
            <pre className="whitespace-pre-wrap break-words text-xl text-[#ffffff]/70">
              <code>
                <span className="text-[#425d82]">const</span>{" "}
                <span className="text-[#3691c5]">developer</span>{" "}
                <span className="text-[#ffffff]/70">= {"{"}</span>
                {"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:{" "}
                <span className="text-[#ce9178]">'Henry Ojukwu'</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">title</span>:{" "}
                <span className="text-[#ce9178]">'Full Stack Developer'</span>,
                {"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">skills</span>:{" "}
                <span className="text-[#ffffff]/70">[</span>
                <span className="text-[#ce9178]">'React'</span>,{" "}
                <span className="text-[#ce9178]">'Laravel'</span>,{" "}
                <span className="text-[#ce9178]">'Codeignita'</span>,{" "}
                {/* <span className="text-[#ce9178]">'TypeScript'</span>,{' '} */}
                <span className="text-[#ce9178]">'Node.js, JavaScript'</span>,{" "}
                <span className="text-[#ce9178]">'HTML'</span>,{" "}
                <span className="text-[#ce9178]">'CSS'</span>
                <span className="text-[#ffffff]/70">]</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">
                  passion
                </span>:{" "}
                <span className="text-[#ce9178]">
                  'Designing and developing elegant, user-friendly web
                  interfaces.'
                </span>
                {"\n"}
                <span className="text-[#ffffff]/70">{"};"}</span>
              </code>
            </pre>
            <div className="flex items-center  gap-2 mx-auto  px-4 py-2 w-[166.8px] bg-[#3691c5] rounded-md text-white font-bold">
              Download CV
              <CgSoftwareDownload className="text-[30px]" />
            </div>
          </div>
        </div>

        <div className="md:mt-20 md:mb-0 mb-20">
          <img
            src={henryimg}
            className="bg-white rounded-md shadow-[20px_20px_10px_0px_#425d82] w-[400px] h-[400px] relative"
            alt=""
          />
        </div>
      </div>

      {/* ======================= */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 text-white">
        {/* Experience Card */}
        <div className="bg-[#1f2a2e] p-8 rounded-lg text-center shadow-md">
          <HiOutlineClock className="text-cyan-400 text-4xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-cyan-300">7+</h2>
          <p className="mt-1 text-sm text-cyan-100">Years Experience</p>
        </div>

        {/* Projects Completed Card */}
        <div className="bg-[#1a2e1b] p-8 rounded-lg text-center shadow-md">
          <FiCheckCircle className="text-green-400 text-4xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-green-300">5+</h2>
          <p className="mt-1 text-sm text-green-100">Projects Completed</p>
        </div>

        {/* Client Satisfaction Card */}
        <div className="bg-[#2e1a2e] p-8 rounded-lg text-center shadow-md">
          <CiMedal className="text-pink-400 text-4xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-pink-300">100%</h2>
          <p className="mt-1 text-sm text-pink-100">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
