import React, { useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import ScrollReveal from "scrollreveal";
import { skillGroups, practices } from "../data/skills";

const Skills = () => {
  useEffect(() => {
    ScrollReveal().reveal(".skill-card", {
      duration: 700,
      origin: "bottom",
      distance: "20px",
      easing: "ease-out",
      opacity: 0,
      interval: 100,
    });
  }, []);

  return (
    <div
      className="w-full bg-[linear-gradient(to_right,rgba(66,93,130,0.1),rgba(255,255,255,0.2))] py-16 px-4 sm:px-6 lg:px-8 scroll-mt-[80px] sm:scroll-mt-[100px]"
      id="skills"
    >
      <div className="max-w-6xl mx-auto text-gray-800">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[#425d82] text-3xl sm:text-4xl font-semibold">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-[#425d82] mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            The tools I use to design, build, and ship reliable software,
            from the database to the user interface.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ Icon, name, items }) => (
            <div
              key={name}
              className="skill-card bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#425d82]/40 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#425d82]/10 text-[#425d82]">
                  <Icon className="text-[20px]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engineering Practices */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#425d82]">
            Engineering Practices
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {practices.map((practice) => (
              <li key={practice} className="flex items-center gap-2 text-gray-700">
                <FiCheck className="text-[#425d82] text-[18px] shrink-0" />
                {practice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
