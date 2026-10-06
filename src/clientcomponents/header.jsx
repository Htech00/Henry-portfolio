import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const ViewSwitch = () => (
  <div className="flex rounded-full border border-gray-200 bg-gray-100 p-1 text-sm font-medium">
    <span className="rounded-full bg-[#425d82] px-3 py-1 text-white shadow-sm">
      Client
    </span>
    <a
      href="/developer"
      className="rounded-full px-3 py-1 text-gray-600 transition-colors hover:text-[#425d82]"
    >
      Developer
    </a>
  </div>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm fixed w-full z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 md:py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Henry Ojukwu logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-bold text-[#425d82]">
            Henry Ojukwu
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-7 text-gray-700 font-medium text-[15px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#425d82] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* View Switch */}
        <div className="hidden lg:block">
          <ViewSwitch />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-[#425d82] text-2xl p-1 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-1 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="block rounded-md px-2 py-2 hover:bg-[#425d82]/10 hover:text-[#425d82]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <ViewSwitch />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
