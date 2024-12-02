import React from 'react'
import avatar from '../assets/Hero/Avatar.svg'
const Introduction = () => {
  return (
    <div className='w-full max-w-[1240px]  mx-auto'>
      <div className='grid md:grid-cols-3 my-8'>
      <div className='p-6 text-white md:col-span-2'>
            <h1 className='text-4xl font-semibold text-white text-center my-5 pb-5'>LET ME <span className='text-[#2CEEF0]'>INTRODUCE </span>MYSELF</h1>
            <p className='font-semibold px-5 pb-7 text-lg'>Fell in love with programming, and I've learned a lot... or at least I think I have! 🤷‍♂️</p>
            <p className='font-semibold px-5 pb-4 text-lg'>I’m fluent in classics like <span className='font-bold text-[#2CEEF0] italic'>JavaScript</span> and <span className='font-bold text-[#2CEEF0] italic '>Python</span></p>
            <p className='font-semibold px-5 pb-6 text-lg'>My fields of interest are developing innovative <span className='font-bold text-[#2CEEF0] italic'>Web technologies and Products</span>, along with a focus on  <span className='font-bold text-[#2CEEF0] italic'>data science</span></p>
            <p className='font-semibold px-5 pb-6 text-lg'>In my free time, I enjoy building dynamic websites with <span className='font-bold text-[#2CEEF0] italic'>React.js</span>, while also diving into data analysis to <span className='font-bold text-[#2CEEF0] italic'>uncover insights and solve problems</span></p>
        </div>
        <div className=' p-10 flex justify-center items-center'>
           <img src={avatar} alt="" className='object-cover scale-105 hover:scale-110 transition-all duration-500'/>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Introduction