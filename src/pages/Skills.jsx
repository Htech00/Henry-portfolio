import React from "react";
import henryimg from "../assets/henry.png";

const frontEnd = [
  { name: "React", percent: 85, color: "#f5e942" },
  { name: "JavaScript", percent: 90, color: "#f54e42" },
  { name: "UI/UX Design", percent: 20, color: "#78f542" },
  { name: "Html", percent: 95, color: "#42bcf5" },
  { name: "Vanilla CSS", percent: 95, color: "#5742f5" },
  { name: "Tailwind", percent: 95, color: "green" },
];

const backEnd = [
  { name: "BASIC", percent: 95, color: "#5442f5" },
  { name: "JAVA", percent: 80, color: "#428df5" },
  { name: "PHP", percent: 95, color: "#f54242" },
  { name: "MySql", percent: 95, color: "#f5e942" },
  { name: "Laravel", percent: 90, color: "#42bcf5" },
  { name: "CodeIgnita", percent: 90, color: "#f5e942" },
  { name: "Node.js", percent: 0, color: "green" },
  { name: "Express", percent: 20, color: "#5742f5" },
  { name: "MongoDB", percent: 20, color: "#78f542" },
];

const devOps = [
  { name: "Git", percent: 95, color: "#5442f5" },
  { name: "Vercel", percent: 98, color: "#428df5" },
  { name: "Netlify", percent: 95, color: "#f54242" },
];

const otherSkills = [
  { name: "UI/UX", percent: 25, color: "#a7f542" },
  { name: "Figma", percent: 10, color: "#428df5" },
  { name: "Testing", percent: 75, color: "#f54242" },
  { name: "Performance Optimization", percent: 80, color: "#f5e942" },
  { name: "Responsive Design", percent: 90, color: "green" },
  { name: "Accessibility", percent: 75, color: "#f5e942" },
  { name: "Debugging", percent: 60, color: "42bcf5" },
];

const Skills = () => {
  return (
    <div className=" md:w-[850px] mx-auto ">
      <div className="flex flex-col">
        <p className="text-[#6a9955] text-2xl">// Skills</p>
        <p className="text-[#425d82] text-4xl font-semibold ">
          Technical Proficiency
        </p>
        <div className=" rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
          <pre className="whitespace-pre-wrap break-words text-[16px] text-[#ffffff]/70">
            <code>
              <span className="text-[#425d82]">const</span>{" "}
              <span className="text-[#3691c5]">developerSkills</span>{" "}
              <span className="text-[#ffffff]/70">= {"{"}</span>
              {"\n"}
              &nbsp;&nbsp;<span className="text-[#425d82]">frontend</span>:
              <span className="text-[#ce9178]">
                &nbsp;<span className="text-[#ffffff]/70">[</span>'React'
                <span className="text-[#ffffff]/70">,</span> 'Tailwind'
                <span className="text-[#ffffff]/70">,</span> 'Javascript'
                <span className="text-[#ffffff]/70">]</span>
              </span>
              ,{"\n"}
              &nbsp;&nbsp;<span className="text-[#425d82]">backend</span>:
              <span className="text-[#ce9178]">
                &nbsp;<span className="text-[#ffffff]/70">[</span>'PHP'
                <span className="text-[#ffffff]/70">,</span> 'Node.js'
                <span className="text-[#ffffff]/70">,</span> 'Express'
                <span className="text-[#ffffff]/70">,</span>'MongoDB'
                <span className="text-[#ffffff]/70">]</span>
              </span>
              ,{"\n"}
              &nbsp;&nbsp;<span className="text-[#425d82]">devOps</span>:
              <span className="text-[#ce9178]">
                &nbsp;<span className="text-[#ffffff]/70">[</span>'Git'
                <span className="text-[#ffffff]/70">,</span> 'Vercel'
                <span className="text-[#ffffff]/70">,</span> Netlify
                <span className="text-[#ffffff]/70">]</span>
              </span>
              ,{"\n"}
              &nbsp;&nbsp;<span className="text-[#425d82]">other</span>:
              <span className="text-[#ce9178]">
                &nbsp;<span className="text-[#ffffff]/70">[</span>'Testing'
                <span className="text-[#ffffff]/70">,</span> 'Debugging'
                <span className="text-[#ffffff]/70">]</span>
              </span>
              {"\n"}
              <span className="text-[#ffffff]/70">{"}"}</span>
            </code>
          </pre>
        </div>

        {/* ======================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 ">
          {/* Frontend Development*/}

          <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c]  w-full max-w-md font-mono shadow-md ">
            <p className="text-[#3691c5] text-lg mb-4 font-semibold">
              // Frontend Development
            </p>
            {frontEnd.map(({ name, percent, color }, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-gray-300 font-bold text-sm mb-1">
                  <p>{name}</p>
                  <p className="text-gray-300">{percent}%</p>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="h-2 rounded"
                    style={{ width: `${percent}%`, background: `${color}` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Backend Development */}

          <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c] text-white w-full max-w-md font-mono shadow-md ">
            <p className="text-[#3691c5] text-lg mb-4 font-semibold">
              // Backend Development
            </p>

            {backEnd.map(({ name, percent, color }, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-gray-300 font-bold text-sm mb-1">
                  <p>{name}</p>
                  <p className="text-gray-300">{percent}%</p>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="h-2 bg-blue-400 rounded"
                    style={{ width: `${percent}%`, background: `${color}` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* DevOps & Deployment */}

          <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c]  w-full max-w-md font-mono shadow-md ">
            <p className="text-[#3691c5] text-lg mb-4 font-semibold">
              // DevOps & Deployment
            </p>
            {devOps.map(({ name, percent, color }, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-gray-300 font-bold text-sm mb-1">
                  <p>{name}</p>
                  <p className="text-gray-300">{percent}%</p>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="h-2 bg-blue-400 rounded"
                    style={{ width: `${percent}%`, background: `${color}` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* // Other Skills*/}

          <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c] text-white w-full max-w-md font-mono shadow-md ">
            <p className="text-[#3691c5] text-lg mb-4 font-semibold">
              // Other Skills
            </p>

            {otherSkills.map(({ name, percent, color }, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-gray-300 font-bold text-sm mb-1">
                  <p>{name}</p>
                  <p className="text-gray-300">{percent}%</p>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="h-2 bg-blue-400 rounded"
                    style={{ width: `${percent}%`, background: `${color}` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========Skill Breakdown===========
        <div className=" rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
          <div className="p-4 w-[200px] bg-white">
            <div className="mb-5">
                
            </div>


          </div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
