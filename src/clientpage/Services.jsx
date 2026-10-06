import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { services } from "../data/services";

const Services = () => {
  useEffect(() => {
    ScrollReveal().reveal(".service-con", {
      duration: 700,
      origin: "bottom",
      distance: "20px",
      easing: "ease-out",
      opacity: 0,
      interval: 100,
    });
  }, []);

  return (
    <div className="w-full bg-[linear-gradient(to_right,rgba(66,93,130,0.1),rgba(255,255,255,0.2))] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto scroll-mt-[80px] sm:scroll-mt-[100px]"
        id="services"
      >
        <div className="text-center mb-10">
          <h2 className="text-[#425d82] text-3xl sm:text-4xl font-semibold">
            Services
          </h2>
          <div className="w-20 h-1 bg-[#425d82] mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            From secure payment backends to complete web applications, I build
            systems that are reliable, scalable, and ready for real users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc, tags }) => (
            <div
              key={title}
              className="service-con group flex flex-col bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#425d82]/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#425d82]/10 text-[#425d82] transition-colors group-hover:bg-[#425d82] group-hover:text-white">
                <Icon className="text-[24px]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                {desc}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
