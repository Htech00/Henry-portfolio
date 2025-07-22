import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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

        {/* View Switch Dropdown */}
        <div className="flex relative">
          <button
            onClick={toggleDropdown}
            className="bg-black/40 text-white/70 font-semibold px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer"
          >
            Dev View <FaChevronDown className="text-xs mt-1" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden top-8 z-10 cursor-pointer">
              <a
                href="/developer"
                className="block px-4 py-2 text-sm hover:bg-blue-100 text-gray-700"
              >
                Developer View
              </a>
              <a
                href="/client"
                className="block px-4 py-2 text-sm hover:bg-blue-100 text-gray-700"
              >
                Client view
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
