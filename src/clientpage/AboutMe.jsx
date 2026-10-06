import React from "react";
import { FiDownload, FiCheckCircle } from "react-icons/fi";
import signImg from "../assets/sign.png";

const highlights = [
  "Built payment, transfer, and withdrawal APIs with KYC/AML and banking integrations at Gloubal Inc.",
  "Automated loan mandates and repayment workflows with Remita APIs at SapphireCredit.",
  "Building real-time provider matching for AnyWorky's on-demand services marketplace.",
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 lg:px-8 scroll-mt-[80px] sm:scroll-mt-[100px] py-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* Heading & CTA */}
        <div className="flex flex-col gap-5 w-full md:w-5/12">
          <div>
            <h2 className="text-[#425d82] text-3xl sm:text-4xl font-semibold">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#425d82] mt-2 rounded-full"></div>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-snug">
            I help businesses grow by building secure, dependable software
            that scales with them.
          </p>
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 bg-[#425d82] hover:bg-[#344a68] transition-colors py-3 px-6 w-fit text-sm text-white font-semibold rounded-full shadow-md"
          >
            <FiDownload className="text-[18px]" />
            Download CV
          </a>
        </div>

        {/* Bio, Highlights & Signature */}
        <div className="flex flex-col gap-6 w-full md:w-7/12 text-gray-600 leading-relaxed">
          <p>
            I'm a backend and full-stack developer with 5+ years of experience
            building secure, scalable web applications. Today I focus on
            fintech and marketplace platforms, where accuracy, security, and
            uptime matter most. I work mainly with Node.js, Laravel,
            PostgreSQL, and React, and I enjoy turning complex business rules
            into software that's dependable and easy to maintain.
          </p>

          <ul className="flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <FiCheckCircle className="text-[#425d82] text-[20px] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <img src={signImg} alt="Henry Ojukwu's signature" className="w-36 opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
