import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  const [isOpenFormalEdu, setisOpenFormalEdu] = useState(true);
  const [isOpenOnlineCourse, setisOpenOnlineCourse] = useState(false);

  return (
    <div className="max-w-4xl flex flex-col gap-5 mx-auto">
      <div className="space-y-4">
        <p className="text-[#6a9955] text-2xl">// Education</p>
        <p className="text-[#425d82] text-4xl font-semibold ">
          Academic Background
        </p>
      </div>
      <p className="text-white/70 md:w-auto ">
        My educational journey and continuous learning path
      </p>

      <div className=" rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
        <pre className="whitespace-pre-wrap break-words text-[16px] text-[#ffffff]/70">
          <code>
            <span className="text-[#425d82]">const</span>{" "}
            <span className="text-[#3691c5]">education</span>{" "}
            <span className="text-[#ffffff]/70">= {"{"}</span>
            {"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">schools</span>: &nbsp;[
            {"\n"}
            &nbsp;&nbsp;{"{"}
            {"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:
            <span className="text-[#ce9178]">'Faban Fortress College'</span>,
            {"\n"}
            &nbsp;&nbsp;
            <span className="text-[#425d82]">certificate</span>:
            <span className="text-[#ce9178]">
              'First School Leaving Certificate (FSLC)'
            </span>
            ,{"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">year</span>:
            <span className="text-[#ce9178]">'1999-2005'</span>,{"\n"}
            &nbsp;&nbsp;{"}"},{"\n"}
            &nbsp;&nbsp;{"{"}
            {"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:
            <span className="text-[#ce9178]">'Faban Fortress College'</span>,
            {"\n"}
            &nbsp;&nbsp;
            <span className="text-[#425d82]">certificate</span>:
            <span className="text-[#ce9178]">
              'West African Examination Council (WAEC)'
            </span>
            ,{"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">year</span>:
            <span className="text-[#ce9178]">'2005-2011'</span>,{"\n"}
            &nbsp;&nbsp;{"}"},{"\n"}
            &nbsp;&nbsp;{"{"}
            {"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:
            <span className="text-[#ce9178]">
              'John Bosco Institute of Technology'
            </span>
            ,{"\n"}
            &nbsp;&nbsp;
            <span className="text-[#425d82]">certificate</span>:
            <span className="text-[#ce9178]">'DIPLOMA'</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">year</span>:
            <span className="text-[#ce9178]">'2012-2014'</span>,{"\n"}
            &nbsp;&nbsp;{"}"},{"\n"}
            &nbsp;&nbsp;{"{"}
            {"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:
            <span className="text-[#ce9178]">
              'Tai Solarin University of Education'
            </span>
            ,{"\n"}
            &nbsp;&nbsp;
            <span className="text-[#425d82]">certificate</span>:
            <span className="text-[#ce9178]">'Bachelor of Science (B.Sc)'</span>
            ,{"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">year</span>:
            <span className="text-[#ce9178]">'2018-2023'</span>,{"\n"}
            &nbsp;&nbsp;{"}"}
            {"\n"}
            &nbsp;&nbsp;]{"\n"}
            <span className="text-[#ffffff]/70">{"};"}</span>
          </code>
        </pre>
      </div>
      <div>
        <div
          type="button"
          className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer"
          onClick={(e) => {
            setisOpenFormalEdu((prev) => !prev);
          }}
        >
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-[28px]" />
            <span>Formal Education</span>
          </div>

          <MdKeyboardArrowDown
            className={`text-[28px] ${
              isOpenFormalEdu ? "rotate-0" : "rotate-180"
            } transition-transform duration-500 ease-in-out`}
          />
        </div>
        {isOpenFormalEdu && (
          <div className="flex flex-col rounded-md p-4 mb-3 border border-[#3c3c3c] font-mono gap-10 ">
            <div className="flex flex-col text-white/70 border-l-1 border-[#3c3c3c] relative">
              <div className="rounded-full h-3 w-3 bg-[#3691c5] absolute top-[8px]"></div>
              <div className="flex justify-between px-6">
                <h3 className="text-[#3691c5]">Tutor</h3>
                <div className="flex items-center gap-2 text-[#6a9955]">
                  <CiCalendar className="text-[22px]" />
                  <p>2014-2015</p>
                </div>
              </div>
              <h3 className="px-6 mb-3">
                John Bosco Institute of Technology Onitsha Anambra State,
                Nigeria
              </h3>

              <div className="px-6 mb-3">
                <p>
                  I previously worked as a Computer Tutor at the institution,
                  where I was responsible for teaching fundamental and advanced
                  computer skills to students.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#425d82] px-6">Certification:</p>
                <div className="text-[#ce9178] px-6 flex md:flex-row flex-col gap-4 text-[12px]">
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Certified Java Programmer
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">Oracle</p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Database Management
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">etc</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#425d82] px-6">Key Courses:</p>
                <div className="text-[#ce9178] px-6 flex md:flex-row flex-col gap-4 text-[12px]">
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Computer Architecture
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Networking Essentials
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Digital Systems
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">etc</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-white/70 border-l-1 border-[#3c3c3c] relative">
              <div className="rounded-full h-3 w-3 bg-[#3691c5] absolute top-[8px]"></div>
              <div className="flex justify-between px-6">
                <h3 className="text-[#3691c5]">Software Developer</h3>
                <div className="flex items-center gap-2 text-[#6a9955]">
                  <CiCalendar className="text-[22px]" />
                  <p>2016-2017</p>
                </div>
              </div>
              <h3 className="px-6 mb-3">
                Ntech Information System Ondo State, Nigeria
              </h3>

              <div className="px-6 mb-3">
                <p>
                  I worked as a Software and Web Developer, where I was
                  responsible for designing, developing, and maintaining
                  responsive web applications and efficient backend systems. My
                  role involved translating user requirements into functional
                  features, optimizing application performance, and ensuring
                  cross-browser and device compatibility.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#425d82] px-6">Certification:</p>
                <div className="text-[#ce9178] px-6 flex gap-4 text-[12px] md:flex-row flex-col">
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Certified PHP Developer
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    CodeIgnita & Laravel Developer
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Database Management
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">etc</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#425d82] px-6">Key Courses::</p>
                <div className="text-[#ce9178] px-6 flex gap-4 text-[12px] md:flex-row flex-col">
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Data Structures & APIs
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    CodeIgnita
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Responsive Web Design
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">Laravel</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div
          type="button"
          className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer"
          onClick={() => {
            setisOpenOnlineCourse((prev) => !prev);
          }}
        >
          <div className="flex items-center gap-2">
            <IoBookOutline className="text-[28px]" />
            <span>Online Courses</span>
          </div>

          <MdKeyboardArrowDown
            className={`text-[28px] ${
              isOpenOnlineCourse ? "rotate-0" : "rotate-180"
            } transition-transform duration-500 ease-in-out`}
          />
        </div>

        {isOpenOnlineCourse && (
          <div className="flex flex-col rounded-md p-4 mb-3 border border-[#3c3c3c] font-mono ">
            <div className="md:w-[400px] flex flex-col gap-3 bg-black/30 p-4 rounded-md">
              <div className="flex justify-between text-[14px] text-white/40">
                <p className="text-[#3691c5]">
                  Javascript: The Complete Developer's Guide
                </p>
                <a
                  href="https://www.udemy.com/user/hitesh-choudharycom/"
                  target="_blank"
                  className="hover:text-[#3691c5]"
                >
                  <FaExternalLinkAlt className="text-[14px]" />
                </a>
              </div>
              <p className="text-white/70">Udemy</p>
              <div>
                <p className="text-[#3691c5]">
                  Instructor:{" "}
                  <span className="text-white/70">Hitesh Choudhary</span>
                </p>
              </div>
              <div className="flex gap-2 text-[#6a9955]">
                <CiCalendar className="text-[22px]" />
                <p>Completed in 2025</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono text-white/70">
        <div className="space-y-6">
          <p className="text-[#3691c5] text-[20px] font-semibold">
            Continuous Learning
          </p>
          <p>
            I stay current with industry trends and evolving technologies by
            regularly taking part in online courses, hands-on workshops, and
            developer conferences. This ongoing learning helps me sharpen my
            skills and adapt quickly in a fast-moving tech landscape.
          </p>
          <button className="bg-[#6a9955] hidden md:inline py-2 px-4 rounded-md hover:bg-[#6a9955]/70 cursor-pointer">
            <div className="text-white  flex gap-2 items-center">
              <FiMessageSquare className="text-[18px]" />
              <p>Do you want to know more about my education?</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
