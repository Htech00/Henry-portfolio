import React from "react";
import { services } from "../data/services";

const Services = () => {
  return (
    <div className="max-w-4xl flex flex-col gap-5 mx-auto"
    style={{
        color: "var(--text-main)"
    }}
    >
      <div className="space-y-4">
        <p className="text-[#6a9955] text-2xl">// Services</p>
        <p className="text-[#425d82] text-4xl font-semibold ">
          What I Build
        </p>
      </div>
      <p>
        From secure payment backends to complete web applications, I build
        systems that are reliable, scalable, and ready for real users.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-6 gap-6 font-mono">
        {services.map(({ Icon, title, desc, tags }) => (
          <div
            key={title}
            className="group flex flex-col border border-[#3c3c3c] rounded-md p-6 bg-[#3c3c3c]/10 transition duration-300 hover:-translate-y-1 hover:border-[#3691c5]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#3c3c3c] text-[#3691c5] transition-colors group-hover:border-[#3691c5]">
              <Icon className="text-[22px]" />
            </div>
            <h3 className="mt-4 text-[#3691c5] font-semibold text-[17px]">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed">{desc}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5 text-[12px] text-[#ce9178]">
              {tags.map((tag) => (
                <p key={tag} className="bg-[#3c3c3c] py-1 px-2 rounded-md">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
