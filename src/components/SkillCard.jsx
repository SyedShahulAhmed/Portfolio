import React from "react";
import { IoIosGitBranch } from "react-icons/io";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNumpy, SiExpress, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const SkillCard = () => {
  return (
    <div className="my-10 flex flex-wrap justify-center ">
      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <FaReact size={100} className="text-white mx-auto py-2 " />
      </div>

      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <AiOutlineJavaScript size={100} className="text-white mx-auto py-2" />
      </div>

      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <RiTailwindCssFill size={100} className="text-white mx-auto py-2" />
      </div>

      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <FaPython size={100} className="text-white mx-auto py-2" />
      </div>

      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <SiNumpy size={100} className="text-white mx-auto py-2" />
      </div>

      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <DiNodejs size={100} className="text-white mx-auto py-2" />
      </div>

      {/* ✅ Added Express.js */}
      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <SiExpress size={100} className="text-white mx-auto py-2" />
      </div>

      {/* ✅ Added MongoDB */}
      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <SiMongodb size={100} className="text-white mx-auto py-2" />
      </div>

      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <IoIosGitBranch size={100} className="text-white mx-auto py-2" />
      </div>

      <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
        <FaJava size={100} className="text-white mx-auto py-2" />
      </div>
    </div>
  );
};

export default SkillCard;
