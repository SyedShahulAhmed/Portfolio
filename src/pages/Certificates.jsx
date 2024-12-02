import React, { useEffect, useState } from "react";
import CertificateCard from "../components/CertificateCard";
import img1 from "../assets/Certification/img1.png";
import img2 from "../assets/Certification/img2.png";
import img3 from "../assets/Certification/img3.png";
import img4 from "../assets/Certification/img4.png";
import img5 from "../assets/Certification/img5.png";
import img6 from "../assets/Certification/img6.png";
import img7 from "../assets/Certification/img7.png";

const Certificates = () => {
  const [Imgcount, setImgcount] = useState(0);
  
  // Array of images
  const images = [img1, img5, img3, img4, img2, img6, img7];
  const text = [
    "Privacy and Security in Online Social Media",
    "Google Cloud Computing Foundations",
    "Data Analysis and Visualization Fundamentals",
    "DevOps on AWS",
    "Machine Learning and GenAI",
    "Data Analytics and Visualization with Excel and R",
    "Python Basics for Data Science"
  ];

  useEffect(() => {
    const Interval = setTimeout(() => {
      setImgcount((p) => (p === 6 ? 0 : p + 1)); 
    }, 7000);

    return () => clearInterval(Interval); 
  }, [Imgcount]);

  return (
    <div className="max-w-[1240px] mx-auto pt-[150px]">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center px-3 leading-relaxed">
        <span className="text-[#2CEEF0]">Professional </span>Certifications
      </h1>
      <CertificateCard
        image={images[Imgcount]}
        text={text[Imgcount]}    
        setImgcount={setImgcount}
        Imgcount={Imgcount}
      />
    </div>
  );
};

export default Certificates;
