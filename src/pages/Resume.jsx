import React from "react";
import ResumePdf from "../components/ResumePdf";
import { HiDownload } from "react-icons/hi";
import resume from "../assets/Resume/resume.pdf";
import { toast } from "react-toastify";
const Resume = () => {
  const DownloadMsg = () => {
    toast.success("Resume downloaded!");
  };
  return (
    <div className="max-w-[900px] pt-[150px] mx-auto flex justify-center flex-col ">
      <button  onClick={DownloadMsg} className="py-2 mb-10 px-4 bg-[#00b4d8] font-semibold text-white shadow-md  rounded-lg scale-100 hover:scale-105 transition-all duration-300 mx-auto flex items-center gap-1">
        <span>
          <HiDownload size={20} />
        </span>
        <a href={resume} download="Resume">
          Download CV
        </a>
      </button>
      <ResumePdf />
      <button
        onClick={DownloadMsg}
        className="py-2 px-4 rounded-lg scale-100 hover:scale-105 transition-all duration-300 mx-auto border-2 border-[#00b4d8] bg-transparent font-semibold text-white shadow-md mb-8 flex items-center gap-1"
      >
        <span>
          {" "}
          <HiDownload size={20} />
        </span>
        <a href={resume} download="Resume">
          Download CV
        </a>
      </button>
    </div>
  );
};

export default Resume;
