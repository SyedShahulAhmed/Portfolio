import React from "react";
import main from "../assets/About/main.png";
import arrow from '../assets/About/arrow.png'
const Main = () => {
  return (
    <div className="pt-[150px] w-full max-w-[1240px] mx-auto">
      <div className="grid md:grid-cols-2 ">
        <div className=" p-5 flex flex-col justify-center item-start text-white tracking-wider leading-relaxed">
          <h1 className="text-center text-4xl font-bold mb-8">
            Know Who <span className="font-bold text-[#2CEEF0] ">I'M</span>
          </h1>
          <p className="text-lg px-5 font-semibold mb-2">
            Hi Everyone,I’m <span className="font-bold text-[#2CEEF0] italic ">Shahul Ahmed</span> from
            <span className="font-bold text-[#2CEEF0] italic "> Nellore, India</span>
          </p>
          <p className="text-lg px-5 font-semibold mb-2">
            I’m currently in my final year at 
            <span> NBKR Institute of Science and Technology</span>
          </p>
          <p className="text-lg px-5 font-semibold">
            I’m pursuing a B.Tech in
            <span className="font-bold text-[#2CEEF0] italic "> Artificial Intelligence and Data Science</span>
          </p>
          <p className="text-lg px-5 font-semibold mt-6">Apart from <span className="font-bold text-[#2CEEF0] italic ">coding</span>, I enjoy spending time on things that <span className="font-bold text-[#2CEEF0] italic ">inspire</span> and relax me.</p>
          <ul className="px-5 mt-5 flex flex-col gap-2">
            <li className="flex justify-start items-center gap-3 font-semibold"><img src={arrow} alt="" className="w-4 h-4"/><span>Playing Video Games</span></li>
            <li className="flex justify-start items-center gap-3 font-semibold"><img src={arrow} alt="" className="w-4 h-4"/>Listening to music</li>
            <li className="flex justify-start items-center gap-3 font-semibold"><img src={arrow} alt="" className="w-4 h-4 "/>Video Editing</li>
          </ul>
        </div>
        <div className="p-10 md:p-14">
          <img src={main} alt="" className="w-full mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default Main;
