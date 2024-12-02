import React from 'react';
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const customTheme = {
    dark: ["#e7ecef", "#48cae4", "#00b4d8", "#0096c7", "#0077b6"], // Custom theme colors
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Days I <span className="text-[#2CEEF0]">Code</span>
      </h1>
      <div className="text-yellow-500 md:w-fulloverflow-x-hidden object-contain font-bold mx-auto mb-8 flex justify-center items-center ">
        <GitHubCalendar
          username="SyedShahulAhmed"
          blockSize={15} 
          blockMargin={5} 
          theme={customTheme}
          fontSize={14} 
        />
      </div>
    </div>
  );
};

export default Github;
