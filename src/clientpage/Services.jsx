import React, { useEffect } from "react";
import { IoMdCode } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import { TfiMicrosoft } from "react-icons/tfi";
import { IoFlashOutline } from "react-icons/io5";
import { FaMeetup } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const serviceCard = [
            {
              Icon: IoMdCode,
              title: "Web Development",
              desc: "Developing fast, responsive web applications using modern tools and frameworks.",
              color: "#425d82",
            },
            {
              Icon: MdPhoneIphone,
              title: "Mobile Development",
              desc: "Developing mobile applications that run seamlessly on both iOS and Android platforms.",
              color: "#a15eaa",
            },
            {
              Icon: CiDatabase,
              title: "Backend Development",
              desc: "Building robust server-side applications with efficient data handling and APIs.",
              color: "#096b59"
            },
            {
              Icon: TfiMicrosoft,
              title: "Software Testing",
              desc: "Identifying bugs and ensuring app reliability through manual and automated testing.",
              color: "#4b632d",
            },
            {
              Icon: IoFlashOutline,
              title: "Performance Optimization",
              desc: "Enhancing app speed and efficiency for a smoother user experience.",
              color: "#6e5b05",
            },
            {
              Icon: FaMeetup,
              title: "Consultation",
              desc: "Providing expert guidance on software solutions, project planning, and technology choices.",
              color: "#056e4f",
            },
          ]

const Services = () => {
   useEffect(() => {

      ScrollReveal().reveal(".service-con",{
      duration: 1500,
      origin: "bottom",
      distance: "500px",
      delay: 500,
      easing: "ease-in-out",
      opacity: 0,
    });

}, [])

  return (


    <div className="w-full bg-[linear-gradient(to_right,rgba(66,93,130,0.1),rgba(255,255,255,0.2))] py-10 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto scroll-mt-[80px] sm:scroll-mt-[100px]"
        id="services"
      >
        <div className="text-center  mb-8">
          <p className="text-[#425d82] text-3xl sm:text-4xl  font-semibold">
            Services Rendered
          </p>
          <div className="w-20 h-1 bg-[#425d82] mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-gray-800 text-base sm:text-lg">
            End-to-end development solutions designed to transform your ideas
            into reality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card Template */}
          {serviceCard.map(({ Icon, title, desc, color }) => (
            <div
              key={title}
              className="group bg-[#3c3c3c]/10 rounded-xl shadow-xl p-6 flex flex-col items-center hover:shadow-md cursor-pointer transition service-con"
            >
              <Icon
                className={`text-[52px] text-[${color}] group-hover:text-[${color}]/50 transition`}
              />
              <p
                className={`mt-3 text-[${color}] font-semibold text-[18px] group-hover:text-[${color}]/50`}
              >
                {title}
              </p>
              <p className="text-center text-gray-800 mt-4 text-sm sm:text-base">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
