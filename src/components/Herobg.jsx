import React from 'react'
import bg from '../assets/Hero/herobg.png'
const Herobg = () => {
  return (
    <div className='w-full '>
        <img src={bg} alt="" className='w-full opacity-10  object-cover absolute md:h-[600px] h-[800px] top-0 right-0 left-0'/>
    </div>
  )
}

export default Herobg