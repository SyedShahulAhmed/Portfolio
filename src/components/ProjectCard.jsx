import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";

const ProjectCard = ({ image, name, desc, github, preview, cat, button }) => {
  return (
    <div className="max-w-[380px] border-[#48cae4] flex flex-col justify-center items-center p-3 mx-5 md:mx-0 border-2 shadow-lg shadow-blue-700 scale-100 hover:scale-105 hover:shadow-blue-500 mb-8 rounded-lg transition-all duration-500">
      <img src={image} alt={name} className=" object-cover p-2 rounded-xl" />
      <div className="flex justify-center items-center gap-3 flex-wrap mt-3">
        {cat.map((item, key) => (
          <span
            key={key}
            className="py-2 text-sm font-semibold text-slate-200 px-3 border-2 rounded-full border-[#80ced7] cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center px-3 py-2">
        <h1 className="text-2xl font-bold text-yellow-300 my-2 text-center tracking-wide">
          {name}
        </h1>
        <p className="text-sm text-justify tracking-wide leading-relaxed py-1 text-gray-300">
          {desc}
        </p>
        <div className="my-2 flex justify-center items-center gap-4">
          <Link to={github}>
            <button className="py-2 px-3 bg-[#072ac8] my-1.5  rounded border-[#9f9fed] flex justify-center items-center gap-2 font-semibold hover:bg-[#002fff]">
              <FaGithub />
              Github
            </button>
          </Link>
          {button && (
            <Link to={preview}>
              <button className="py-2 px-3 bg-[#072ac8] hover:bg-[#002fff] rounded border-[#9f9fed] flex justify-center items-center gap-2 font-semibold">
                <BsRocketTakeoff /> Preview
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
