import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full bg-[linear-gradient(to_right,rgba(66,93,130,0.1),rgba(255,255,255,0.2))] py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[80px] sm:scroll-mt-[100px]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center font-semibold text-[#425d82] mb-10">
          Get In Touch
        </h2>

        <div className="bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              I'd love to hear from you. Fill out the form or reach out directly
              through the following channels:
            </p>

            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <FiMail className="text-[#425d82]" />
                htechsolutionz@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#425d82]" />
                +234 810 939 9679
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-[#425d82]" />
                Lagos, Nigeria
              </li>
            </ul>

            <div className="flex gap-4 mt-6 text-[#425d82] text-xl">
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="p-8 space-y-5">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#425d82]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#425d82]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#425d82]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#425d82] hover:bg-[#425d82]/50 text-white py-2 rounded-md transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
