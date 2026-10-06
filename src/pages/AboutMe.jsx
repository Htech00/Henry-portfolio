import React from "react";
import henryimg from "../assets/henry.png";

const skillGroups = [
  { name: "languages", items: ["JavaScript", "PHP", "Java", "SQL"] },
  { name: "backend", items: ["Node.js", "Express", "NestJS", "Laravel", "CodeIgniter"] },
  { name: "databases", items: ["PostgreSQL", "MySQL"] },
  { name: "integrations", items: ["Payment Gateways", "Banking APIs", "KYC/AML", "Remita", "Webhooks"] },
  { name: "frontend", items: ["React", "Vue.js", "Tailwind CSS", "HTML/CSS", "jQuery"] },
  { name: "tools", items: ["Git", "VS Code"] },
];

const interests = [
  "Contributing to open source and side projects",
  "Exploring emerging backend and fintech technologies",
  "Attending tech conferences and meetups",
  "Engaging in developer communities (Stack Overflow, Dev.to)",
  "Reviewing code and giving feedback on pull requests",
];

const S = ({ children }) => <span className="text-[#ce9178]">{children}</span>;
const K = ({ children }) => <span className="text-[#425d82]">{children}</span>;

const AboutMe = () => {
  return (
    <div
    className=" max-w-4xl mx-auto"
    style={{
        color: "var(--text-main)"
    }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-8 mb-8 items-center">
          <div className="space-y-4">
            <p className="text-[#6a9955] text-2xl">// About Me</p>
            <p className="text-[#425d82] text-4xl font-semibold ">
              Developer Profile
            </p>
          </div>
          <div className="md:w-[432px] rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
            <pre className="whitespace-pre-wrap break-words text-[15px]">
              <code>
                <K>const</K> <span className="text-[#3691c5]">aboutMe</span> = {"{"}
                {"\n  "}<K>name</K>: <S>'Henry Ojukwu'</S>,
                {"\n  "}<K>role</K>: <S>'Backend & Full-Stack Developer'</S>,
                {"\n  "}<K>focus</K>: <S>'Fintech & Marketplaces'</S>,
                {"\n  "}<K>location</K>: <S>'Lagos Island, Nigeria'</S>,
                {"\n  "}<K>experience</K>: [
                {"\n    "}<S>'Backend Developer @ AnyWorky (2026 – present)'</S>,
                {"\n    "}<S>'Backend Developer @ Gloubal Inc. (2025 – 2026)'</S>,
                {"\n    "}<S>'Backend Developer @ SapphireCredit (2025)'</S>,
                {"\n    "}<S>'Software Developer @ Ntech Information System (2016 – 2017)'</S>,
                {"\n  "}],
                {"\n  "}<K>education</K>: [
                {"\n    "}<S>'B.Sc, Tai Solarin University of Education'</S>,
                {"\n    "}<S>'Diploma in Software Development, JOBITECH'</S>,
                {"\n  "}],
                {"\n"}{"};"}
              </code>
            </pre>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="md:mt-30">
            <img
              src={henryimg}
              className="bg-white rounded-md shadow-[20px_20px_10px_0px_#425d82] w-[400px] h-[400px] relative"
              alt="Henry Ojukwu, Backend & Full-Stack Developer"
            />
          </div>
          <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c]  w-full max-w-md font-mono shadow-md ">
            <p className="text-[#3691c5] text-lg mb-4 font-semibold">
              // Bio
            </p>
            <p className="leading-relaxed">
              I'm a backend and full-stack developer with 5+ years of
              experience building secure, scalable web applications. I focus
              on fintech and marketplace platforms: payment and transfer APIs,
              financial logic, KYC/AML and banking integrations, and real-time
              matching systems. I care about correctness, security, and
              maintainable code, and I enjoy turning complex business rules
              into software teams can rely on.
            </p>
          </div>
        </div>
      </div>

      {/* ======================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 ">
        {/* Technical Skills */}
        <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c]  w-full max-w-md font-mono shadow-md ">
          <p className="text-[#3691c5] text-lg mb-4 font-semibold">
            // Technical Skills
          </p>
          <div className="flex flex-col gap-4">
            {skillGroups.map((group) => (
              <div key={group.name}>
                <p className="text-[#425d82] text-sm mb-2">{group.name}:</p>
                <div className="flex flex-wrap gap-2 text-[12px] text-[#ce9178]">
                  {group.items.map((item) => (
                    <p key={item} className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interest */}
        <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c] w-full max-w-md font-mono shadow-md ">
          <p className="text-[#3691c5] text-lg mb-4 font-semibold">
            // Personal Interests
          </p>

          <ul className="list-disc list-inside flex flex-col gap-4">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
