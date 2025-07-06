import React from "react";
import { FaCodeBranch, FaCheck, FaBell, FaAlignLeft } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";
import {
  IoTrailSignOutline,
  IoCheckmarkDone,
  IoWarningOutline,
} from "react-icons/io5";
import { BiCodeCurly } from "react-icons/bi";
import { VscDebugAlt } from "react-icons/vsc";
import { LuBellDot } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgRemote } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="flex  justify-between items-center px-4 py-1 text-sm bg-[#425d82] text-blue-300 font-mono">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1v text-xl">
          <CgRemote />
        </div>
        <div className="flex items-center gap-1">
          <IoIosCloseCircleOutline />
          <span>1</span>
        </div>
        <div className="flex items-center gap-1">
          <IoWarningOutline />
          <span>0</span>
        </div>
        <div className="flex items-center gap-1">
          <VscDebugAlt />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <p>Ln 25, Col 28</p>
        <p>Spaces: 4</p>
        <p>UTF-8</p>
        <p>CRLF</p>
        <div className="flex items-center gap-0.5">
          <BiCodeCurly />
          <p>JavaScript</p>
        </div>

        <div className="flex items-center gap-0.5">
          <IoTrailSignOutline />
          <p>Signed out</p>
        </div>

        <div className="flex items-center gap-0.5">
          <CgLivePhoto />
          <p>Go Live</p>
        </div>
        <div className="flex items-center gap-0.5">
          <IoCheckmarkDone />
          <p>Prettier</p>
        </div>

        <div className="flex items-center gap-1">
          <LuBellDot />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
