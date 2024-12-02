import React from 'react'
import { Link } from 'react-router-dom'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin
  } from "react-icons/ai";
  import { FaXTwitter } from "react-icons/fa6";
const Find = () => {
  return (
    <div className='max-w-[640px] mx-auto '>
        <div className='text-white flex  flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-5xl font-semibold mb-3'>FIND <span className='text-[#2CEEF0] '>ME</span> ON</h1>
            <p className='text-lg lg:text-xl font-semibold mb-14'>Feel free to <span className='text-[#2CEEF0] '>connect</span>  with me</p>
            <ul className='flex justify-between items-center w-[300px] mb-10'>
                <Link to={'https://github.com/SyedShahulAhmed'}><li><AiFillGithub size={40} className='bg-white p-2 rounded-full text-blue-600 hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.7)] transition-shadow duration-300'/></li></Link>
                <Link to={'https://x.com/ShahulAhmed17?t=Kk665GXRLquOrucnSvkTew&s=09'}><li><FaXTwitter size={40} className='bg-white p-2 rounded-full text-blue-600 hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.7)] transition-shadow duration-300'/></li></Link>
                <Link to={'https://www.linkedin.com/in/shahul-ahmed/'}><li><AiFillLinkedin size={40} className='bg-white p-2 rounded-full text-blue-600 hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.7)] transition-shadow duration-300'/></li></Link>
                <Link to={'https://www.instagram.com/vincenzo_773/'}><li><AiFillInstagram size={40} className='bg-white p-2 rounded-full text-blue-600 hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.7)] transition-shadow duration-300'/></li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Find