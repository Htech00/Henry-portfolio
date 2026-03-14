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
    <div className="max-w-4xl flex flex-col gap-5 mx-auto"
    style={{
        color: "var(--text-main)"
    }}
    >
      <div className="space-y-4">
        <p className="text-[#6a9955] text-2xl">// Education</p>
        <p className="text-[#425d82] text-4xl font-semibold ">
          Academic Background
        </p>
      </div>
      <p className=" md:w-auto ">
        My educational journey and continuous learning path
      </p>

      <div className=" rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
        <pre className="whitespace-pre-wrap break-words text-[16px]">
          <code>
            <span className="text-[#425d82]">const</span>{" "}
            <span className="text-[#3691c5]">education</span>{" "}
            <span className="">= {"{"}</span>
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
              'JOBITECH'
            </span>
            ,{"\n"}
            &nbsp;&nbsp;
            <span className="text-[#425d82]">certificate</span>:
            <span className="text-[#ce9178]">'Diploma in Software Development'</span>,{"\n"}
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
            <span className="text-[#ce9178]">'BSc, Business Education'</span>
            ,{"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">year</span>:
            <span className="text-[#ce9178]">'2018-2023'</span>,{"\n"}
            &nbsp;&nbsp;{"}"},{"\n"}
            &nbsp;&nbsp;{"{"}
            {"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:
            <span className="text-[#ce9178]">
              'National Youth Service Corps'
            </span>
            ,{"\n"}
            &nbsp;&nbsp;
            <span className="text-[#425d82]">certificate</span>:
            <span className="text-[#ce9178]">'NYSC'</span>
            ,{"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">year</span>:
            <span className="text-[#ce9178]">'2023-2024'</span>,{"\n"}
            &nbsp;&nbsp;{"}"},{"\n"}
            &nbsp;&nbsp;{"{"}
            {"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:
            <span className="text-[#ce9178]">
              'Tech Studio'
            </span>
            ,{"\n"}
            &nbsp;&nbsp;
            <span className="text-[#425d82]">certificate</span>:
            <span className="text-[#ce9178]">'Full-Stack Web Development Certificate'</span>
            ,{"\n"}
            &nbsp;&nbsp;<span className="text-[#425d82]">year</span>:
            <span className="text-[#ce9178]">'2025'</span>,{"\n"}
            &nbsp;&nbsp;{"}"}
            {"\n"}
            &nbsp;&nbsp;]{"\n"}
            <span className="">{"};"}</span>
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
            <span>Work Experience</span>
          </div>

          <MdKeyboardArrowDown
            className={`text-[28px] ${
              isOpenFormalEdu ? "rotate-0" : "rotate-180"
            } transition-transform duration-500 ease-in-out`}
          />
        </div>
        {isOpenFormalEdu && (
          <div className="flex flex-col rounded-md p-4 mb-3 border border-[#3c3c3c] font-mono gap-10 ">
            <div className="flex flex-col  border-l-1 border-[#3c3c3c] relative">
              <div className="rounded-full h-3 w-3 bg-[#3691c5] absolute top-[8px]"></div>
              <div className="flex justify-between px-6">
                <h3 className="text-[#3691c5]">Web Developer</h3>
                <div className="flex items-center gap-2 text-[#6a9955]">
                  <CiCalendar className="text-[22px]" />
                  <p>2015 – 2017</p>
                </div>
              </div>
              <h3 className="px-6 mb-3">
                Ntech Information System
              </h3>

              <div className="px-6 mb-3">
                <p>
                  Developed internal business tools using CodeIgniter and PHP, improving operational efficiency. Delivered mobile-first, responsive UIs using Bootstrap across multiple client projects. Led training sessions for junior developers on CodeIgniter, JavaScript, and HTML/CSS. Reviewed and optimized peer code for scalability, performance, and best practices.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#425d82] px-6">Tech Stack:</p>
                <div className="text-[#ce9178] px-6 flex gap-4 text-[12px] md:flex-row flex-col">
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    PHP
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    CodeIgniter
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    JavaScript
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Bootstrap
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    HTML/CSS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-l-1 border-[#3c3c3c] relative">
              <div className="rounded-full h-3 w-3 bg-[#3691c5] absolute top-[8px]"></div>
              <div className="flex justify-between px-6">
                <h3 className="text-[#3691c5]">Backend Developer</h3>
                <div className="flex items-center gap-2 text-[#6a9955]">
                  <CiCalendar className="text-[22px]" />
                  <p>Sep 2025 – Dec 2025</p>
                </div>
              </div>
              <h3 className="px-6 mb-3">
                SapphireCredit
              </h3>

              <div className="px-6 mb-3">
                <p>
                  Developed and maintained Laravel-based backend systems integrating Remita APIs for digital loan mandates and automated repayment cycles. Automated financial workflows, reducing manual intervention and improving processing accuracy. Optimized MySQL database performance and reliability for high-volume transaction processing. Managed background jobs and queues for large-scale financial operations. Ensured secure, efficient communication between Vue.js frontend and backend services.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#425d82] px-6">Tech Stack:</p>
                <div className="text-[#ce9178] px-6 flex gap-4 text-[12px] md:flex-row flex-col">
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Laravel
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    PHP
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    MySQL
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Remita API
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Vue.js
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-l-1 border-[#3c3c3c] relative">
              <div className="rounded-full h-3 w-3 bg-[#3691c5] absolute top-[8px]"></div>
              <div className="flex justify-between px-6">
                <h3 className="text-[#3691c5]">Backend Developer</h3>
                <div className="flex items-center gap-2 text-[#6a9955]">
                  <CiCalendar className="text-[22px]" />
                  <p>Dec 2025 – Feb 2026</p>
                </div>
              </div>
              <h3 className="px-6 mb-3">
                Gloubal Inc.
              </h3>

              <div className="px-6 mb-3">
                <p>
                  Designed and maintained secure REST APIs handling payments, transfers, withdrawals, and account management with robust authentication and authorization controls. Implemented business and financial logic covering transactions, fees, VAT, balance validation, and spending limits. Protected sensitive financial data through encryption, access controls, and secure storage. Integrated third-party financial services including payment gateways, banking APIs, KYC/AML services, and notification systems with proper failure handling and webhook security.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#425d82] px-6">Tech Stack:</p>
                <div className="text-[#ce9178] px-6 flex gap-4 text-[12px] md:flex-row flex-col">
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Node.js
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    Express.js
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    PostgreSQL
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    REST APIs
                  </p>
                  <p className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    KYC/AML
                  </p>
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
              <div className="flex justify-between text-[14px] ">
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
              <p >Udemy</p>
              <div>
                <p className="text-[#3691c5]">
                  Instructor:{" "}
                  <span 
                  style={{
                    color: "var(--text-main)"
                  }}
                  >Hitesh Choudhary</span>
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
      <div className=" rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
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
