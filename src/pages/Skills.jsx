import React from "react";
import { skillGroups, practices } from "../data/skills";

const Skills = () => {
  return (
    <div
    className=" md:w-[850px] mx-auto "
    style={{
        color: "var(--text-main)"
    }}
    >
      <div className="flex flex-col">
        <p className="text-[#6a9955] text-2xl">// Skills</p>
        <p className="text-[#425d82] text-4xl font-semibold mb-4">
          Technical Proficiency
        </p>
        <div className=" rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
          <pre className="whitespace-pre-wrap break-words text-[15px]">
            <code>
              <span className="text-[#425d82]">const</span>{" "}
              <span className="text-[#3691c5]">developerSkills</span> = {"{"}
              {skillGroups.map(({ key, items }) => (
                <React.Fragment key={key}>
                  {"\n  "}
                  <span className="text-[#425d82]">{key}</span>: [
                  {items.map((item, i) => (
                    <React.Fragment key={item}>
                      <span className="text-[#ce9178]">'{item}'</span>
                      {i < items.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                  ],
                </React.Fragment>
              ))}
              {"\n"}
              {"};"}
            </code>
          </pre>
        </div>

        {/* ======================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 font-mono">
          {skillGroups.map(({ Icon, name, items }) => (
            <div
              key={name}
              className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c] w-full shadow-md transition-colors hover:border-[#3691c5]"
            >
              <div className="flex items-center gap-2 mb-4 text-[#3691c5]">
                <Icon className="text-[20px]" />
                <p className="text-lg font-semibold">// {name}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-[12px] text-[#ce9178]">
                {items.map((item) => (
                  <p key={item} className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#3f3c3c3f] p-4 mb-6 rounded-md border-1 border-[#3c3c3c] w-full font-mono shadow-md">
          <p className="text-[#3691c5] text-lg mb-4 font-semibold">
            // Engineering Practices
          </p>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-3">
            {practices.map((practice) => (
              <li key={practice}>{practice}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
