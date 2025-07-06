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
          <button className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-6 w-fit text-sm text-white font-bold rounded-lg">
            Download CV <i className="fa fa-download ml-2"></i>
          </button>
        </div>

        {/* Paragraph & Signature */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-gray-600">
          <p className="text-justify leading-relaxed">
            I’m a dedicated Software Engineer and Web Developer with over 11 years of experience,
            having transitioned into tech in 2012. My foundation was shaped through close mentorship,
            helping me develop strong skills in building scalable software and dynamic web applications.
            <br /><br />
            I have hands-on experience with a wide range of technologies including Java, PHP (Laravel, CodeIgniter),
            JavaScript, jQuery, CSS, and Tailwind CSS—giving me the flexibility to handle both frontend and backend development.
            <br /><br />
            Throughout my career, I’ve led and contributed to impactful projects like e-commerce platforms, banking systems,
            account management tools, and healthcare applications. I’m driven by the challenge of solving real-world problems
            and creating digital solutions that deliver both technical excellence and business value.
          </p>

          <img src={signImg} alt="signature" className="w-36 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
