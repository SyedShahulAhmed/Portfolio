import React from "react";
import EducationCard from "./EducationCard";
import nbkr from "../assets/Education/nbkr.png";
import narayana from "../assets/Education/narayana.png";
import school from "../assets/Education/school.png";
const Education = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
        <span className=" text-[#2CEEF0]">Educational </span>Journey
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-8 mt-10 gap-8 mx-6 sm:mx-auto">
        <EducationCard
          img={nbkr}
          name="NBKR Institute of Science and Technology"
          date="Aug 2022 - May 2026"
          grade="8.87 CGPA"
          content="
Pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science at NBKR Institute of Science and Technology (NBKRIST), Nellore, India. Currently in the pre-final year, gaining expertise in AI and Data Science through coursework."
        />
        <EducationCard
          img={narayana}
          name="Narayana junior college, Nellore"
          date="June 2020 - May 2022"
          grade="91.9%"
          content="Completed Intermediate in MPC at Narayana Junior College, Nellore, India. Excelled in Mathematics, Physics, and Chemistry, building a strong foundation for engineering studies"
        />
        <EducationCard
          img={school}
          name="Saint Paul's High School, Nellore"
          date="Aug 2019 - May 2020"
          grade="95.17%"
          content="Completed Secondary Education (10th grade) at Saint Paul's High School, Nellore, India. Achieved excellent grades with a focus on science and mathematics and actively participated in extracurricular activities"
        />
      </div>
    </div>
  );
};

export default Education;
