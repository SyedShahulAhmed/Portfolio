import React from "react";
import hero from "../assets/Hero/hero.png";
import { ReactTyped, Typed } from "react-typed";
const HeroSection = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
    <div className="grid md:grid-cols-2 md:mx-auto place-content-center mx-5 gap-5 py-28">
      {/* Text Section */}
      <section className="flex flex-col justify-center items-start gap-8 px-5">
        <h1 className="text-4xl font-bold text-white">
          Hi There!
          <span className="wave mx-2" role="img" aria-label="waving hand">
            👋🏻
          </span>
        </h1>
        <h1 className="text-4xl font-bold text-white">
          I'M <span className="text-[#2CEEF0]">SYED SHAHUL AHMED</span>
        </h1>
        <span className="text-4xl font-bold text-[#2CEEF0] pt-8">
          <ReactTyped
            strings={[
              "MERN Stack Developer",
              "JavaScript Enthusiast",
              "Software Developer",
              "DSA Problem Solver"
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </span>
      </section>

      {/* Image Section */}
      <div>
        <img
          src={hero}
          alt="Hero"
          className="p-12 object-cover w-full sm:w-[80%] mx-auto"
        />
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
