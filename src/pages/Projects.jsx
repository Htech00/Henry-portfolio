import React from "react";
import worldApp from "../assets/worldapp.jpg";
import spaceship from "../assets/spaceship.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    name: "Spaceship Tourism",
    image: spaceship,
    description:
      "Space Tourism is a futuristic web experience that simulates the excitement of space exploration. Inspired by modern UI/UX design, the app guides users through different aspects of a fictional space travel program—highlighting destinations, crew members, technology, and more.This project emphasizes visual storytelling and immersive design, offering users an engaging journey beyond Earth.",
    tool: ["React", "Tailwind Css"],
    gitHubLink: "https://github.com/Htech00/space-tourism",
    projectLink: "https://space-tourism-bay-eta.vercel.app/",
  },
  {
    name: "World App",
    image: worldApp,
    description:
      "Country Explorer is a responsive web application that displays essential information about countries across the globe. Built with a modern tech stack and clean user interface, this project allows users to explore countries by name or region while viewing key data such as population, region, capital city, and national flags.",
    tool: ["React", "Tailwind Css", "JavaScript"],
    gitHubLink: "https://github.com/Htech00/countryworldapp",
    projectLink: "https://countryworldapp.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="max-w-4xl flex flex-col gap-8 mx-auto">
      <div className="space-y-4">
        <p className="text-[#6a9955] text-2xl">// Projects</p>
        <p className="text-[#425d82] text-4xl font-semibold ">My Work</p>
      </div>
      <p className="text-white/70">
        A glimpse into some of the projects I’ve recently brought to life
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 rounded-md mb-6 gap-10 ">
        {projects.map((project, index) => {
          return (
            <div
              className="md:w-[432px] rounded-md mb-6 border  border-[#3c3c3c] font-mono"
              key={index}
            >
              <img src={project.image} className="w-[432px] h-[190px]" alt="" />
              <div className="w-[432px] p-4 text-white/70 space-y-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-[20px] text-[#425d82]">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      className="hover:text-[#425d82] cursor-pointer"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      className="hover:text-[#425d82] cursor-pointer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="md:w-auto w-[220px]">
                  <p>{project.description}</p>
                </div>
                <div className="flex flex-wrap md:flex-row flex-col gap-2 mt-3">
                  {project.tool.map((tool, i) => {
                    return (
                      <div key={i} className="flex">
                        <p className="text-[#ce9178] bg-[#3c3c3c] rounded-md py-1 px-2 ">
                          {tool}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
