import React, { useEffect } from "react";
import henryImg from "../assets/henry.png";
import { FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import ScrollReveal from "scrollreveal";
import { Helmet } from "react-helmet-async";

const stack = ["Node.js", "Express", "Laravel", "PostgreSQL", "MySQL", "React"];

const Home = () => {
  useEffect(() => {
    const fadeUp = {
      duration: 700,
      origin: "bottom",
      distance: "20px",
      easing: "ease-out",
      opacity: 0,
    };

    ScrollReveal().reveal(".hero-text", { ...fadeUp, delay: 100 });
    ScrollReveal().reveal(".hero-photo", { ...fadeUp, delay: 250 });
    ScrollReveal().reveal(".hero-stats", { ...fadeUp, delay: 400 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Henry Ojukwu | Backend & Full-Stack Developer (Fintech)</title>

        <meta
          name="description"
          content="Backend and full-stack developer building secure, scalable systems for fintech and marketplace platforms: REST APIs, payments, KYC/AML integrations, and real-time matching with Node.js, Laravel, PostgreSQL, and React."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://henryojukwu.com" />
      </Helmet>
      <section
        className="w-full bg-gradient-to-br from-[#425d82]/10 via-white to-white py-16 px-4 scroll-mt-[80px] sm:scroll-mt-[100px]"
        id="home"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="hero-text flex flex-col gap-6 text-center md:text-left w-full md:w-1/2 mt-10">
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium text-gray-600">Hi, I'm</p>
              <h1 className="text-[#425d82] text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight">
                Henry Ojukwu
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-800">
                Backend & Full-Stack Developer · Fintech
              </p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              I build secure, scalable backends for payment, fintech, and
              marketplace platforms, from REST APIs and financial logic to
              third-party integrations, and ship the full-stack features that
              run on top of them.
            </p>

            <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="text-sm text-[#425d82] bg-[#425d82]/10 px-3 py-1 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full items-center md:items-start">
              <a
                className="flex items-center justify-center gap-2 bg-[#425d82] text-white font-semibold rounded-full shadow-md hover:bg-[#344a68] transition-colors px-7 py-3 w-full sm:w-auto"
                href="mailto:henryojukwu1996@gmail.com"
              >
                <IoMailOutline className="text-[20px]" />
                Hire Me
              </a>
              <a
                className="flex items-center justify-center gap-2 border-2 border-[#425d82] text-[#425d82] font-semibold rounded-full hover:bg-[#425d82]/10 transition-colors px-7 py-[10px] w-full sm:w-auto"
                href="#projects"
              >
                View Projects
                <FiArrowRight className="text-[18px]" />
              </a>
              <a
                className="flex items-center justify-center text-[#425d82] hover:text-[#344a68] transition-colors p-2"
                href="https://www.linkedin.com/in/henry-ojukwu-2296a0297"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Henry Ojukwu on LinkedIn"
              >
                <FaLinkedin className="text-[36px]" />
              </a>
            </div>
          </div>

          {/* Image & Info */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img
              src={henryImg}
              alt="Henry Ojukwu, Backend & Full-Stack Developer"
              className="hero-photo object-cover w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-2xl shadow-xl mt-10"
            />

            <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 w-full max-w-[420px]">
              <InfoCard label="Experience" value="5+ Years" />
              <InfoCard label="Focus" value="Backend & Fintech" />
              <InfoCard label="Currently" value="AnyWorky" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="flex flex-col p-3 rounded-lg border border-gray-200 border-l-4 border-l-[#425d82] bg-white shadow-sm text-center sm:text-left">
    <p className="text-xs uppercase tracking-wide text-gray-500 font-medium">
      {label}
    </p>
    <p className="font-semibold text-gray-900">{value}</p>
  </div>
);

export default Home;
