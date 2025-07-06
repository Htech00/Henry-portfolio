import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-black/70 shadow-md fixed w-full z-20">
      <div className="flex justify-between items-center px-6 py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <span className="text-xl font-semibold bg-[linear-gradient(to_right,red,white)] bg-clip-text text-transparent">
            Henry.Ojukwu Portfolio
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <a href="#home" className="hover:text-red-600">
            Home
          </a>
          <a href="#about" className="hover:text-red-600">
            About
          </a>
          <a href="#services" className="hover:text-red-600">
            Services
          </a>
          <a href="#skills" className="hover:text-red-600">
            Skills
          </a>
          <a href="#projects" className="hover:text-red-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-red-600">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Client View Dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={toggleDropdown}
            className="bg-[linear-gradient(to_right,red,white)] text-black/70 font-semibold px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer"
          >
            Client View <FaChevronDown className="text-xs mt-1" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10 cursor-pointer">
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
                Client View
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 px-6 py-4 space-y-3 text-white font-medium">
          <a href="#home" className="block hover:text-red-600">
            Home
          </a>
          <a href="#about" className="block hover:text-red-600">
            About
          </a>
          <a href="#services" className="block hover:text-red-600">
            Services
          </a>
          <a href="#skills" className="block hover:text-red-600">
            Skills
          </a>
          <a href="#projects" className="block hover:text-red-600">
            Projects
          </a>
          <a href="#contact" className="block hover:text-red-600">
            Contact
          </a>
          <div className="mt-4">
            <button
              onClick={toggleDropdown}
              className="w-full bg-[linear-gradient(to_right,red,white)] text-black/70 font-semibold px-4 py-2 rounded-md flex items-center justify-between cursor-pointer"
            >
              Client View <FaChevronDown className="text-xs" />
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white rounded-md overflow-hidden text-gray-700">
                <a
                  href="/developer"
                  className="block px-4 py-2 text-sm hover:bg-blue-100"
                >
                  Developer View
                </a>
                <a
                  href="/client"
                  className="block px-4 py-2 text-sm hover:bg-blue-100"
                >
                  Client View
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
