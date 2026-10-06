import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "Diploma in Software Development",
    institution: "JOBITECH",
    url: "#",
    years: "2012 – 2014",
    description: "Diploma in Software Development, building a foundation in programming and web technologies.",
  },
  {
    title: "Computer Tutor",
    institution: "John Bosco Institute of Technology Onitsha",
    url: "#",
    years: "2014 – 2015",
    description:
      "I previously worked as a Computer Tutor at the institution,where I was responsible for teaching fundamental and advanced computer skills to students.",
  },
  {
    title: "Computer Engineer",
    institution: "De Master Computer Center",
    url: "#",
    years: "2016",
    description:
      "Trained in computer hardware, networking, and embedded systems.",
  },
  {
    title: "Software Developer",
    institution: "Ntech System",
    url: "#",
    years: "2016 – 2017",
    description:
      "I worked as a Software and Web Developer, where I was responsible for designing, developing, and maintaining responsive web applications and efficient backend systems. My role involved translating user requirements into functional features, optimizing application performance, and ensuring cross-browser and device compatibility.",
  },
  {
    title: "Business Education",
    institution: "Tai Solarin University of Education",
    url: "#",
    years: "2018 – 2023",
    description: "Bachelor of Science (B.Sc) Degree in Business Education",
  },
  {
    title: "NYSC",
    institution: "National Youth Service Corps",
    url: "#",
    years: "2023 – 2024",
    description: "Completed the mandatory National Youth Service Corps program.",
  },
  {
    title: "Full-Stack Web Development Certificate",
    institution: "Tech Studio",
    url: "#",
    years: "2025",
    description: "Full-Stack Web Development certification covering modern frontend and backend technologies.",
  },
  {
    title: "Backend Developer",
    institution: "SapphireCredit",
    url: "#",
    years: "Sep 2025 – Dec 2025",
    description: "I developed and maintained Laravel-based backend systems integrating Remita APIs for loan mandates and repayments, automated financial workflows to improve processing accuracy and reduce manual intervention, optimized MySQL databases for performance and reliability, managed background jobs and queues for high-volume transaction processing, and ensured secure, efficient communication between the Vue.js frontend and backend services.",
  },
  {
    title: "Backend Developer",
    institution: "Gloubal Inc.",
    url: "#",
    years: "Dec 2025 – Feb 2026",
    description: "I designed and maintained secure REST APIs handling payments, transfers, withdrawals, and account management with robust authentication and authorization controls, implemented financial logic covering transactions, fees, VAT, balance validation, and spending limits, protected sensitive financial data through encryption, access controls, and secure storage in compliance with regulatory standards, designed efficient database schemas with safeguards against double-spending, and integrated third-party services including payment gateways, banking APIs, KYC/AML services, and notification systems with proper failure handling and webhook security.",
  },
  {
    title: "Backend Developer",
    institution: "AnyWorky",
    url: "#",
    years: "Apr 2026 – Present",
    description: "I am building the backend infrastructure for an on-demand local services marketplace that connects customers with verified service providers through real-time availability, matching, and request management. I designed and built REST APIs for customer, provider, and service workflows, developed logic for real-time provider availability and job matching, implemented authentication, authorization, and secure account management, and modeled marketplace data for users, providers, categories, requests, and bookings, with a strong focus on reliability, scalability, and maintainability.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto text-gray-800">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#425d82]">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-[#425d82] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md border-l-4 border-[#425d82]"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <span className="text-sm text-gray-500">{edu.years}</span>
              </div>
              <a
                href={edu.url}
                className="text-[#425d82] text-sm hover:underline block mb-2"
              >
                {edu.institution}
              </a>
              <p className="text-sm text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
