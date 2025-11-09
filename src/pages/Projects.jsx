import React from "react";
import worldApp from "../assets/worldapp.jpg";
import spaceship from "../assets/spaceship.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import portfolioImage from "../assets/henryportfolio.jpg";
import goalWebImage from "../assets/goalweb.jpg";
import tidoyImage from "../assets/adminbackendfortidoybooking.jpg";
import ams from "../assets/amsImage.jpg";

const projects = [
  {
    name: "Spaceship Tourism",
    image: spaceship,
    description:
      "Space Tourism is a futuristic web experience that simulates the excitement of space exploration. Inspired by modern UI/UX design, the app guides users through different aspects of a fictional space travel program—highlighting destinations, crew members, technology, and more.",
    tool: ["React", "Tailwind Css"],
    gitHubLink: "https://github.com/Htech00/space-tourism",
    projectLink: "https://space-tourism-bay-eta.vercel.app/",
  },
  {
    name: "World App",
    image: worldApp,
    description:
      "Country Explorer is a responsive web application that displays essential information about countries across the globe. Built with a modern tech stack and clean user interface.",
    tool: ["React", "Tailwind Css", "JavaScript"],
    gitHubLink: "https://github.com/Htech00/countryworldapp",
    projectLink: "https://countryworldapp.vercel.app/",
  },
  {
    name: "Goal App",
    image: goalWebImage,
    description:
      "The goal app is a simple task manager, much like a to-do list, helping users set, track, and achieve goals easily.",
    tool: ["React", "Tailwind Css", "Node.js", "Express.js", "Mongoose"],
    gitHubLink: "https://github.com/Htech00/goalweb_frontend",
    projectLink: "https://goalweb-frontend.vercel.app",
  },
  {
    name: "Henry Portfolio",
    image: portfolioImage,
    description:
      "Ojukwu Henry’s portfolio is a polished and professional web presence that showcases his identity and expertise as a Fullstack Web Developer.",
    tool: ["React", "Tailwind Css", "HTML"],
    gitHubLink: "https://github.com/Htech00/Henry-portfolio",
    projectLink: "https://henry-portfolio-henna.vercel.app/",
  },
  {
    name: "Admin Dashboard – Tidoy Booking App",
    image: tidoyImage,
    description:
      "I developed an Admin Dashboard for the Tidoy Booking App, a property management platform designed to handle and monitor data related to hotels, apartments, and villas.",
    tool: [
      "React",
      "Tailwind Css",
      "HTML",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Socket.io",
    ],
    gitHubLink: "https://github.com/Htech00/admin-booking",
    projectLink: "https://admin-booking-jade.vercel.app/",
  },

  {
    name: "Catholic Diocese of Ondo – Financial Management System",
    image: ams,
    description:
      "The Catholic Diocese of Ondo Monthly Returns System is a robust account management web application designed to efficiently manage and monitor all financial transactions within the diocese. The system provides a comprehensive solution for tracking income, expenditures, and administrative activities, ensuring transparency, accountability, and ease of financial reporting.",
    tool: ["PHP", "CSS", "HTML", "AJAX", "JQUEY", "MYSQL"],
    gitHubLink: "https://github.com/Htech00/account-management-ondo-diocese",
    projectLink: "",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl flex flex-col gap-8 mx-auto px-4">
      <div className="space-y-4">
        <p className="text-[#6a9955] text-2xl">// Projects</p>
        <p className="text-[#425d82] text-4xl font-semibold">My Work</p>
      </div>
      <p
        className=""
        style={{
          color: "var(--text-main)",
        }}
      >
        A glimpse into some of the projects I’ve recently brought to life
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-md border border-[#3c3c3c] font-mono w-full max-w-full"
          >
            <img
              src={project.image}
              className="w-full h-[190px] object-cover rounded-t-md"
              alt={project.name}
            />
            <div className="p-4  space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[20px] text-[#425d82]">
                  {project.name}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#425d82]"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#425d82]"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-main)",
                }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tool.map((tool, i) => (
                  <span
                    key={i}
                    className="text-[#ce9178] bg-[#3c3c3c] rounded-md py-1 px-2 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
