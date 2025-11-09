import React from "react";
import signImg from "../assets/sign.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 lg:px-8 scroll-mt-[80px] sm:scroll-mt-[100px] pt-20"
    >
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-center justify-center">
        {/* Text Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h2 className="text-[#425d82] text-3xl sm:text-4xl font-semibold">
            About Me
          </h2>
          <p className="font-semibold text-gray-500">
            I really love to create amazing products.
          </p>
          <a href="/HENRY OJUKWU CV.pdf" className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-6 w-fit text-sm text-white font-bold rounded-lg">
            Download CV <i className="fa fa-download ml-2"></i>
          </a>
        </div>

        {/* Paragraph & Signature */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-gray-600">
         <p>
         I am a seasoned Software Engineer and Web Developer with over a decade of hands-on experience in building scalable, secure, and user-focused digital solutions. My expertise spans across Java, PHP, JavaScript, React, Node.js, Laravel, and CodeIgniter. I specialize in transforming complex business requirements into efficient, high-performing applications that align technology with strategic goals across diverse industries.
         </p>

          <img src={signImg} alt="signature" className="w-36 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
