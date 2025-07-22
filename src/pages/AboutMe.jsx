import React from "react";
import henryimg from "../assets/henry.png";

const skills = [
  { name: "JAVA", percent: 80 },
  { name: "PHP", percent: 95 },
  { name: "Laravel", percent: 90 },
  { name: "CodeIgnita", percent: 90 },
  { name: "React", percent: 85 },
  { name: "JavaScript", percent: 90 },
  { name: "Node.js", percent: 0 },
  { name: "UI/UX Design", percent: 20 },
];

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
          <div className="md:w-[432px]  rounded-md p-4 mb-6 border border-[#3c3c3c] font-mono">
            <pre className="whitespace-pre-wrap break-words text-[16px]">
              <code>
                <span className="text-[#425d82]">const</span>{" "}
                <span className="text-[#3691c5]">aboutMe</span>{" "}
                <span className="">= {"{"}</span>
                {"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">name</span>:
                <span className="text-[#ce9178]">'Henry Ojukwu'</span>,{"\n"}
                &nbsp;&nbsp;
                <span className="text-[#425d82]">role</span>:
                <span className="text-[#ce9178]">'Full Stack Developer'</span>,
                {"\n"}
                &nbsp;&nbsp;
                <span className="text-[#425d82]">location</span>:
                <span className="text-[#ce9178]">'Lagos, Island'</span>,{"\n"}
                &nbsp;&nbsp;
                <span className="text-[#425d82]">education</span>:
                <span className="text-[#ce9178]">
                  'Faban Fortress College (2005-&nbsp;&nbsp;2011) - WAEC,
                  (2012-2014) - DIPLOMA, (2018-&nbsp;&nbsp;2022) - B-Sc'
                </span>
                ,{"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">
                  experience
                </span>: <span className="">[</span>
                <span className="text-[#ce9178]">
                  {"\n"}&nbsp;&nbsp;'Internship at Jobitech (2015)'
                </span>
                ,{" "}
                <span className="text-[#ce9178]">
                  'Software &nbsp;&nbsp;developer at Ntech information
                  &nbsp;&nbsp;system &nbsp;&nbsp;(2016-2017)'
                </span>
                ]{"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">skills</span>:{" "}
                <span className="">{"{"}</span>
                {"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">
                  languages
                </span>: <span className="">[</span>
                <span className="text-[#ce9178]">
                  {"\n"}&nbsp;&nbsp;'Basic'
                </span>
                , <span className="text-[#ce9178]">'Java'</span>,{" "}
                <span className="text-[#ce9178]">'PHP'</span>,{" "}
                {/* <span className="text-[#ce9178]">'JavaScript'</span>,{' '} */}
                <span className="text-[#ce9178]">'Ajax, JavaScript'</span>,{" "}
                <span className="text-[#ce9178]">&nbsp;&nbsp;'HTML'</span>,{" "}
                <span className="text-[#ce9178]">'CSS'</span>
                <span className="">
                  {"\n"}
                  &nbsp;&nbsp;{"}"}
                </span>
                ,{"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">
                  frameworks
                </span>: <span className="">[</span>
                {"\n"}
                <span className="text-[#ce9178]">
                  &nbsp;&nbsp;'React'
                </span>, <span className="text-[#ce9178]">'Laravel'</span>,{" "}
                <span className="text-[#ce9178]">'Codeignita'</span>,{" "}
                {/* <span className="text-[#ce9178]">'JQuery'</span>,{' '} */}
                <span className="text-[#ce9178]">
                  &nbsp;&nbsp;'Node.js, JavaScript'
                </span>
                , <span className="text-[#ce9178]">'JQuery'</span>,{" "}
                <span className="">
                  {"\n"}
                  &nbsp;&nbsp;]
                </span>
                ,{"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">tools</span>:{" "}
                <span className="">[</span>
                {"\n"}
                <span className="text-[#ce9178]">&nbsp;&nbsp;'Git'</span>,{" "}
                <span className="text-[#ce9178]">'Vs Code'</span>,{" "}
                <span className="text-[#ce9178]">'Sublime Text'</span>
                {"\n"}
                &nbsp;&nbsp;<span className="">]</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-[#425d82]">bio</span>:{" "}
                <span className="text-[#ce9178]">
                  'I’m a curious and passionate web &nbsp;&nbsp;developer with
                  over seven years of &nbsp;&nbsp;experience. I love
                  transforming complex &nbsp;&nbsp;ideas into simple, elegant
                  web experiences &nbsp;&nbsp;and I'm always exploring new tools
                  and &nbsp;&nbsp;technologies.'
                </span>
                {"\n"}
                <span className="">{"};"}</span>
              </code>
            </pre>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="mt-30">
            <img
              src={henryimg}
              className="bg-white rounded-md shadow-[20px_20px_10px_0px_#425d82] w-[400px] h-[400px] relative"
              alt=""
            />
          </div>
          <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c]  w-full max-w-md font-mono shadow-md ">
            <p className="text-[#3691c5] text-lg mb-4 font-semibold">
              // About Me
            </p>
            <p className="">
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. With over 1 years of experience, I
              specialize in creating responsive, user-friendly interfaces and
              robust backend systems. My goal is to deliver high-quality
              solutions that solve real-world problems and provide exceptional
              user experiences. I'm constantly learning and exploring new
              technologies to stay at the forefront of web development.
            </p>
          </div>
        </div>

        {/* ===========About Me============== */}
      </div>

      {/* ======================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 ">
        {/* Professional Skills */}
        <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c]  w-full max-w-md font-mono shadow-md ">
          <p className="text-[#3691c5] text-lg mb-4 font-semibold">
            // Professional Skills
          </p>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between  font-bold text-sm mb-1">
                <p>{skill.name}</p>
                <p className="">{skill.percent}%</p>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div
                  className="h-2 bg-blue-400 rounded"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Interest */}
        <div className="bg-[#3f3c3c3f] p-4 rounded-md border-1 border-[#3c3c3c] w-full max-w-md font-mono shadow-md ">
          <p className="text-[#3691c5] text-lg mb-4 font-semibold">
            // Personal Interest
          </p>

          <div>
            <ul className="list-disc list-inside  flex flex-col gap-4">
              <li>Contributing to Open Source Projects</li>
              <li>Exploring and Adopting Emerging Technologies</li>
              <li>Participating in Tech Conferences and Meetups</li>
              <li>Creating and Maintaining Side Projects</li>
              <li>Collaborating on GitHub with Global Developer Communities</li>
              <li>
                Engaging in Developer Forums (e.g., Stack Overflow, Dev.to)
              </li>
              <li>Reviewing and Providing Feedback on Pull Requests</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
