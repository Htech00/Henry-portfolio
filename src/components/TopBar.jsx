import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const TopBar = () => {
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  const sun = lightMode ? (
    <IoMoonOutline className="w-3 sm:w-4" />
  ) : (
    <IoSunnyOutline className="w-3 sm:w-4" />
  );

  return (
    <div className="flex items-center w-full justify-between bg-[#333333] px-4 py-2 text-white text-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 hover:opacity-70 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 hover:opacity-70 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 hover:opacity-70 rounded-full bg-green-500"></span>
        </div>
        <span className="text-gray-300 hidden md:inline">
          VS Code Portfolio
        </span>
        <span className="text-gray-300 inline md:hidden">VS Code</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 text-gray-400 text-xs cursor-pointer">
        {/* Theme Toggle */}
        <div
          onClick={() => setLightMode(!lightMode)}
          className="flex items-center gap-2 cursor-pointer"
        >
          {sun}
          <p className="sm:text-[16px] text-[12px] font-semibold">
            {lightMode ? "Dark Mode" : "Light Mode"}
          </p>
        </div>

        {/* View Switch */}
        <div className="flex rounded-full border border-white/10 bg-black/40 p-1 text-xs sm:text-sm font-medium">
          <a
            href="/client"
            className="rounded-full px-3 py-1 text-gray-300 transition-colors hover:text-white"
          >
            Client
          </a>
          <span className="rounded-full bg-[#3691c5] px-3 py-1 text-white shadow-sm">
            Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
