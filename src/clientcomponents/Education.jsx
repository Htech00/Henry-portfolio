import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
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
    institution: "Taisolarin University of Education",
    url: "#",
    years: "2018 – 2022",
    description:
      "A Student",
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
            Education & Certifications
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
