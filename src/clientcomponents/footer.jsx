import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left section */}
        <div className="text-center md:text-left text-sm">
          <p>&copy; {new Date().getFullYear()} Henry Ojukwu. All rights reserved.</p>
        </div>

        {/* Right section */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#privacy" className="hover:text-red-500 transition duration-300">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-red-500 transition duration-300">
            Terms of Use
          </a>
          <a href="mailto:htechsolutionz@gmail.com" className="hover:text-red-500 transition duration-300 hidden sm:inline">
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
