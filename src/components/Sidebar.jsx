import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { TbFileInfo } from "react-icons/tb";
import { VscMail, VscPreview, VscTerminalLinux } from "react-icons/vsc";
import { MdCastForEducation, MdOutlineCleaningServices } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { PiTiktokLogo } from "react-icons/pi";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [showExplorer, setShowExplorer] = useState(true);

  const tabs = [
    // { name: 'Switch', color: 'text-yellow-500', icon: <GiHamburgerMenu />  },
    { name: "Home", color: "text-yellow-500", icon: <GoHome /> },
    { name: "AboutMe", color: "text-blue-500", icon: <TbFileInfo /> },
    { name: "Skills", color: "text-purple-500", icon: <VscTerminalLinux /> },
    {
      name: "Services",
      color: "text-pink-500",
      icon: <MdOutlineCleaningServices />,
    },
    {
      name: "Education",
      color: "text-orange-500",
      icon: <MdCastForEducation />,
    },
    { name: "Projects", color: "text-green-500", icon: <VscPreview /> },
    { name: "Contact", color: "text-red-500", icon: <VscMail /> },
  ];

  return (
    <div className="flex text-[#d4d4d4]">
      {/* Desktop Sidebar */}
      <div className="flex w-full min-h-screen">
        {/* Icon Bar */}
        <div className="bg-[#333333] w-12 flex flex-col items-center py-4 space-y-6 text-xl ">
          <div>
            <GiHamburgerMenu
              className="cursor-pointer"
              onClick={() => {
                setShowExplorer((prev) => !prev);
              }}
            />
          </div>

          {tabs.map(({ name, color, icon: icon }) => (
            <div
              key={name}
              onClick={() => setActiveTab(name)}
              className={`cursor-pointer flex  transition-all duration-200 ${
                activeTab === name ? "scale-110" : ""
              }`}
            >
              {icon}
            </div>
          ))}

          <div className="mt-55">
            <IoSettingsOutline />
          </div>
        </div>
        {/* Explorer Panel (toggles) */}
        {showExplorer && (
          <div className="w-48 bg-[#202020] p-2 text-sm transition-all duration-300 ease-in-out">
            <div></div>
            <p className="mb-4"> EXPLORER</p>
            <div className="flex gap-3items-center mb-2">
              <RiArrowRightSLine className="text-xl" />
              <p>HENRY'S-PORTFOLIO</p>
            </div>

            {tabs.map(({ name, color, icon: icon }) => (
              <div
                key={name}
                onClick={() => setActiveTab(name)}
                className={`cursor-pointer px-2 py-1 rounded ${
                  activeTab === name ? "bg-[#373737]" : "hover:bg-[#2e2e2e]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={color}>{icon}</span>
                  {name}.jsx
                  {activeTab === name}
                </span>
              </div>
            ))}

            {/* ==========Socials========= */}
            <div className="mt-30 flex flex-col gap-2 ">
              <div className="flex items-center">
                <RiArrowRightSLine className="text-xl" />
                Socials
              </div>
              <div className="flex flex-col gap-1 ml-3 ">
                <a href="https://wa.me/2348109399679?text=Hello%20there%2C%20I%20saw%20your%20portfolio!" className="flex gap-1 hover:bg-[#2e2e2e]  items-center px-2 py-1 rounded cursor-pointer">
                  <FaWhatsapp />
                  <p>Whatsapp</p>
                </a>
                <a href="https://www.linkedin.com/in/henry-ojukwu-2296a0297?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiFqwaA6OTGuKLs87faTmrA%3D%3D" className="flex gap-1 hover:bg-[#2e2e2e]  items-center px-2 py-1 rounded cursor-pointer">
                  <SlSocialLinkedin />
                  <p>Linkedin</p>
                </a>
                <div className="flex gap-1 hover:bg-[#2e2e2e]  items-center px-2 py-1 rounded cursor-pointer">
                  <FaXTwitter />

                  <p>Twitter</p>
                </div>
                <a href="mailto:htechsolutionz@gmail.com" className="flex gap-1 hover:bg-[#2e2e2e]  items-center px-2 py-1 rounded cursor-pointer">
                  <MdOutlineEmail />
                  <p>Email</p>
                </a>
                <div className="flex gap-1 hover:bg-[#2e2e2e]  items-center px-2 py-1 rounded cursor-pointer">
                  <PiTiktokLogo />
                  <p>Tiktok</p>
                </div>
                <a href="https://github.com/Htech00" className="flex gap-1 hover:bg-[#2e2e2e]  items-center px-2 py-1 rounded cursor-pointer">
                  <FaGithub />
                  <p>Github</p>
                </a>
              </div>
            </div>
          </div>
        )}
           
      </div>
    </div>
  );
};

export default Sidebar;
