import React from 'react'
import { IoIosClose} from "react-icons/io";
import { FaRegFileCode } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { TbFileInfo } from "react-icons/tb";
import { VscMail, VscPreview, VscTerminalLinux  } from "react-icons/vsc";
import { MdCastForEducation, MdOutlineCleaningServices } from "react-icons/md";

const tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { name: 'Home', color: 'text-yellow-500', icon: <GoHome />  },
        { name: 'AboutMe', color: 'text-blue-500', icon: <TbFileInfo /> },
        { name: 'Skills', color: 'text-purple-500', icon: <VscTerminalLinux /> },
        { name: 'Services', color: 'text-pink-500', icon: <MdOutlineCleaningServices /> },
        { name: 'Education', color: 'text-orange-500', icon: <MdCastForEducation /> },
        { name: 'Projects',  color: 'text-green-500', icon: <VscPreview />  },
        { name: 'Contact',  color: 'text-red-500', icon: <VscMail /> },
    ];

  return (
    <div className="flex bg-[#2D2D30]">
      {tabs.map(({name, color, icon: icon}) => (
        <button
          key={name}
          onClick={() => setActiveTab(name)}
          className={`px-3 py-1 bg-[#425d82] 
            ${activeTab === name 
                ?  ' border-b-2 border-[#425d82] bg-[#252526] text-white' 
                : 'border-r-[#2D2D30] border-r-2 text-[#d4d4d4] hover:bg-[#425d82]/80'} cursor-pointer`}
        >
          
          <span className='flex items-center gap-2'>
            <span className={color}>{icon }</span>
            <span className='md:inline hidden'>
              {name}.jsx
            </span>
            <span className='md:inline hidden' >
               {activeTab === name && <IoIosClose className='text-[22px]' />}
            </span>
           
          </span>
          
        </button>
      ))}
    </div>
  )
}

export default tabs
