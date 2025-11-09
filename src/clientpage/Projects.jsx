import React from "react";
import worldApp from "../assets/worldapp.jpg";
import spaceship from "../assets/spaceship.jpg";
import portfolioImage from "../assets/henryportfolio.jpg";
import tidoyImage from "../assets/adminbackendfortidoybooking.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import goalWebImage from "../assets/goalweb.jpg";
import ams from "../assets/amsImage.jpg";

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
      "Ojukwu Henry’s portfolio is a polished and professional web presence that effectively showcases his identity and expertise as a Fullstack Web Developer. Designed with clarity and user experience in mind, the homepage immediately captures attention through its clean layout and well-organized structure.",
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
    tool: ["PHP", "CSS","Bootstrap", "HTML", "AJAX", "JQUEY", "MYSQL"],
    gitHubLink: "https://github.com/Htech00/account-management-ondo-diocese",
  },
];

const Projects = () => {
  return (
    <div
      className="w-full bg-[linear-gradient(to_right,rgba(66,93,130,0.2),rgba(255,255,255,0.2))] py-10 px-4 sm:px-6 lg:px-8 scroll-mt-[80px] sm:scroll-mt-[100px]"
      id="projects"
    >
      <div className="max-w-6xl mx-auto text-gray-800">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#425d82] text-3xl sm:text-4xl font-semibold">
            My Projects
          </p>
          <div className="w-20 h-1 bg-[#425d82] mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            A glimpse into some of the projects I’ve recently brought to life
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-[#425d82] mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tool.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm font-medium mt-auto">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#425d82] hover:underline flex items-center gap-1"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#425d82] hover:underline flex items-center gap-1"
                  >
                    Code <FiGithub size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
