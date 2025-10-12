import React from "react";
import { VscVscode } from "react-icons/vsc";
import { FaWindows, FaGithub } from "react-icons/fa";
import { IoLogoVercel, IoLogoFigma } from "react-icons/io5";
import { SiJupyter, SiNpm, SiPostman } from "react-icons/si";

const Tools = () => {
  return (
    <div className="max-w-[1240px] mx-auto ">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
        <span className=" text-[#2CEEF0] mb-10">Tools</span> I Use
      </h1>
      <div className="my-10 flex flex-wrap justify-center ">
        <div className="min-w-[300px]  bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <FaWindows size={100} className="text-white mx-auto py-2 " />
        </div>
        <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <VscVscode size={100} className="text-white mx-auto py-2 " />
        </div>
        <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <FaGithub size={100} className="text-white mx-auto py-2 " />
        </div>
        <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <IoLogoVercel size={100} className="text-white mx-auto py-2 " />
        </div>
        <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <IoLogoFigma size={100} className="text-white mx-auto py-2 " />
        </div>
        <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <SiJupyter size={100} className="text-white mx-auto py-2 " />
        </div>
        <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <SiPostman size={100} className="text-white mx-auto py-2" />
        </div>
        <div className="min-w-[300px] bg-transparent border-2 p-15 border-[#48cae4] gap-2 mx-auto mb-4 scale-95 hover:scale-100 rounded-md transition-all duration-300">
          <SiNpm size={100} className="text-white mx-auto py-2" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
