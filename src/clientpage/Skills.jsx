import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js", level: 75 },
];

const otherTechnologies = [
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "JAVA",
  "MongoDB",
  "Express",
  "Firebase",
  "Vite",
  "Git",
  "GitHub",
  "Laravel",
  "Tailwind CSS",
  "Node.js",
  "CodeIgnita",
  "Ajax",
  "Jquery",
];

const Skills = () => {
  return (
    <div
      className="w-full bg-[linear-gradient(to_right,rgba(66,93,130,0.2),rgba(255,255,255,0.2))] py-10 px-4 sm:px-6 lg:px-8 scroll-mt-[80px] sm:scroll-mt-[100px]"
      id="skills"
    >
      <div className="max-w-6xl mx-auto text-gray-800">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#425d82] text-3xl sm:text-4xl font-semibold">My Skills</p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="py-6 px-6 shadow-md rounded-xl bg-white"
            >
              <div className="font-semibold mb-6 flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Technologies */}
        <div className="mt-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-[#425d82]">
            Other Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
