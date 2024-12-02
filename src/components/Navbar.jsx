import React, { useState, useEffect } from "react";
import img1 from "../assets/NavIcons/home.png";
import img2 from "../assets/NavIcons/about.png";
import img3 from "../assets/NavIcons/project.png";
import img4 from "../assets/NavIcons/resume.png";
import img5 from "../assets/NavIcons/certificates.png";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 right-0 left-0 ${
        scrolled ? "bg-[#023e8a] bg-opacity-100" : "bg-transparent"
      } transition-colors duration-300 z-50`}
    >
      <div className="max-w-[1240px] md:mx-auto mx-5 flex justify-between items-center text-white py-5">
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-wide text-[#2CEEF0] ml-3">
            Sa.
          </h1>
        </Link>
        <button
          className="md:hidden flex  items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <MdOutlineClose size={50} className="text-[#2CEEF0]" />
          ) : (
            <HiBars3BottomRight size={50} className="text-[#2CEEF0]" />
          )}
        </button>
        <ul
          className={`fixed items-center md:static text-xl top-0 left-0 w-full mt-20
            md:mt-0 md:w-auto md:flex bg-[#023e8a] md:bg-transparent transition-all duration-500 ${
            menuOpen ? "translate-y-0 mt-0" : "-translate-y-full mt-[0px]"
          } md:translate-y-0 z-40 md:z-auto`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className=" hover:scale-95">
            <li className="flex items-center p-5 md:p-0  md:mx-4">
              <img src={img1} alt="icon" className="w-5 h-5 mr-2 invert " />
              <span className="text-white font-semibold">Home</span>
            </li>
          </Link>
          <Link to="about" onClick={() => setMenuOpen(false)} className=" hover:scale-95">
            <li className="flex items-center p-5 md:p-0 md:mx-4">
              <img src={img2} alt="icon" className="w-5 h-5 mr-2 invert" />
              <span className="text-white font-semibold">About</span>
            </li>
          </Link>
          <Link to="projects" onClick={() => setMenuOpen(false)} className=" hover:scale-95">
            <li className="flex items-center p-5 md:p-0 md:mx-4">
              <img src={img3} alt="icon" className="w-5 h-5 mr-2 invert" />
              <span className="text-white font-semibold">Projects</span>
            </li>
          </Link>
          <Link to="resume" onClick={() => setMenuOpen(false)} className=" hover:scale-95">
            <li className="flex items-center p-5 md:p-0 md:mx-4">
              <img src={img4} alt="icon" className="w-5 h-5 mr-2 invert" />
              <span className="text-white">Resume</span>
            </li>
          </Link>
          <Link to="certificates" onClick={() => setMenuOpen(false)} className=" hover:scale-95">
            <li className="flex items-center p-5 md:p-0 md:mx-4">
              <img src={img5} alt="icon" className="w-5 h-5 mr-2 invert" />
              <span className="text-white font-semibold">Certificates</span>
            </li>
          </Link>
          <Link to="contact" onClick={() => setMenuOpen(false)} className=" hover:scale-95">
            <li className="p-5 md:p-0 md:mx-4 ">
              <button className="bg-[#90E0EF] px-3 py-2 rounded-md text-slate-900 font-bold">
                Contact
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
