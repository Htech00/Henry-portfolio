import React, { useEffect } from "react";
import henryImg from "../assets/henry.png";
import { FaRegEye } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import ScrollReveal from "scrollreveal";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(".partners", {
      duration: 1500,
      origin: "left",
      distance: "800px",
      delay: 500,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".elipse", {
      duration: 200,
      origin: "left",
      distance: "800px",
      delay: 500,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".card", {
      duration: 500,
      origin: "right",
      distance: "200px",
      delay: 1000,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".laptop", {
      duration: 800,
      origin: "top",
      distance: "100px",
      delay: 500,
      easing: "cubic-bezier(1, -1, 0.5, 3.55)",
      opacity: 0,
    });

    ScrollReveal().reveal(".hotspot", {
      duration: 800,
      origin: "right",
      distance: "100px",
      delay: 500,
      easing: "cubic-bezier(1, -1, 0.5, 3.55)",
      opacity: 0,
    });

    ScrollReveal().reveal(".watch", {
      duration: 800,
      origin: "right",
      distance: "100px",
      delay: 500,
      easing: "cubic-bezier(1, -1, 0.5, 3.55)",
      opacity: 0,
    });

    ScrollReveal().reveal(".diamond", {
      duration: 100,
      origin: "bottom",
      distance: "100px",
      delay: 100,
      easing: "cubic-bezier(1, -1, 0.5, 3.55)",
      opacity: 0,
    });
  }, []);

  return (
    <>
     <Helmet>
        <title>Henry Ojukwu | FullStack Developer</title>
          
        <meta name="description" content="Fullstack developer skilled in building responsive, scalable web applications. Passionate about clean code, intuitive UI/UX, and solving real-world problems using modern JavaScript, React, Node.js, and databases." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://henry-portfolio-henna.vercel.app/" />
      </Helmet>
      <section
        className="w-full bg-[linear-gradient(to_right,rgba(255,0,0,0.07),rgba(255,255,255,0.2))] py-16 px-4 scroll-mt-[80px] sm:scroll-mt-[100px]"
        id="home"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-5 text-center md:text-left w-full md:w-1/2 order-1 mt-10">
            <p className="text-sm sm:text-base font-normal sm:font-semibold">
              Hi I'm, ____________
            </p>
            <h1 className="text-[#425d82] text-2xl sm:text-[70px] font-semibold">
              Ojukwu Henry
            </h1>

            <p className="text-sm font-normal text-gray-700">
              I am a skilled Full-Stack Web Developer specializing in building
              responsive, scalable, and efficient web applications using modern
              technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                className="bg-[#425d82] text-white font-medium rounded-full shadow-lg hover:bg-[#425d82]/80 p-4 md:w-[200px] w-full "
                href="https://www.linkedin.com/in/henry-ojukwu-2296a0297?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiFqwaA6OTGuKLs87faTmrA%3D%3D"
              >
                <div className="font-bold flex items-center gap-2 justify-center">
                  <p>in</p>
                  <p>LinkedIn</p>
                </div>
              </a>
              <a
                className="bg-[#c7a108] text-white font-medium rounded-full shadow-lg hover:bg-[#856e08] p-4 w-full md:w-[200px]"
                href="https://vercel.com/htechs-projects"
              >
                <div className="flex items-center gap-2 justify-center">
                  <p className="font-semibold ">View My Work</p>
                  <FaRegEye className="text-[30px]" />
                </div>
              </a>
            </div>
          </div>

          {/* Image & Info */}
          <div className="flex flex-col items-center w-full md:w-1/2 order-2 sm:order-none">
            <div
              className="bg-cover bg-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-md shadow-xl diamond mt-10"
              style={{ backgroundImage: `url(${henryImg})` }}
            ></div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 laptop items-center">
              <InfoCard label="Born in" value="Nigeria" color="red" />
              <InfoCard label="Experience" value="11+ Years" color="#70a5fa" />
              <InfoCard
                label="Date Of Birth"
                value="12 Jul 1995"
                color="purple"
              />
            </div>

            <a
              className="bg-[#4fbd65] mt-6 py-3 px-8 text-white rounded-3xl shadow-lg md:w-[200px] w-full hover:bg-[#4fbd65]/80"
              href="mailto:htechsolutionz@gmail.com"
            >
              <div className="flex gap-2 justify-center items-center ">
                <IoMailOutline className="text-[22px]" />
                <p className="text-[18px]">Hire Me</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ label, value, color }) => (
  <div
    className={`flex flex-col p-4 border-2 border-l-4 rounded-md shadow-md bg-white`}
    style={{ borderLeftColor: color }}
  >
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="font-semibold text-black">{value}</p>
  </div>
);

export default Home;
