import React from 'react';
import henryImg from "../assets/henry.png";

const Home = () => {
  return (
    <section
      className="w-full bg-[linear-gradient(to_right,rgba(255,0,0,0.07),rgba(255,255,255,0.2))] py-16 px-4 scroll-mt-[80px] sm:scroll-mt-[100px]"
      id="home"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex flex-col gap-5 text-center md:text-left w-full md:w-1/2">
          <p className="text-sm sm:text-base font-normal sm:font-semibold">Hi I'm, ____________</p>
          <h1 className="text-[#425d82] text-2xl sm:text-[50px] font-bold">Ojukwu Henry</h1>
          <p className="text-sm font-normal text-gray-700">I am a Professional Fullstack Web Developer</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="bg-[#425d82] text-white font-medium rounded-3xl shadow-lg hover:bg-[#425d82]/80 p-4 w-full sm:w-auto">
              <span className="font-bold">in</span> LinkedIn
            </button>
            <button className="bg-[#c7a108] text-white font-medium rounded-3xl shadow-lg hover:bg-[#856e08] p-4 w-full sm:w-auto">
              Send Message
            </button>
          </div>
        </div>

        {/* Desktop Image & Info */}
        <div className="hidden sm:flex flex-col items-center w-full md:w-1/2">
          <div
            className="bg-cover bg-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-md shadow-xl"
            style={{ backgroundImage: `url(${henryImg})` }}
          ></div>

          <div className="flex gap-4 mt-6">
            <InfoCard label="Born in" value="Nigeria" color="red" />
            <InfoCard label="Experience" value="11+ Years" color="#70a5fa" />
            <InfoCard label="Date Of Birth" value="12 Jul 1995" color="purple" />
          </div>

          <button className="bg-[#4fbd65] mt-6 py-3 px-8 text-white font-bold rounded-3xl shadow-lg">
            Hire Me
          </button>
        </div>

        {/* Mobile Image & Info */}
        <div className="flex sm:hidden flex-col items-center w-full gap-4">
          <div
            className="bg-cover bg-center w-[300px] h-[300px] rounded-full"
            style={{ backgroundImage: `url(${henryImg})` }}
          ></div>

          <InfoCard label="Born in" value="Nigeria" color="red" />
          <InfoCard label="Experience" value="11+ Years" color="#70a5fa" />
          <InfoCard label="Date Of Birth" value="12 Jul 1995" color="purple" />

          <button className="bg-[#4fbd65] mt-3 py-3 px-8 text-white font-bold rounded-3xl shadow-lg w-full max-w-sm">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

// Reusable Info Card Component
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
