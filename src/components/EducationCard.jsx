import React from 'react'

const EducationCard = ({img, name, date, grade, content }) => {
  return (
    <div className='max-w-[400px] bg-transparent border-2 border-[#90e0ef] rounded-lg px-3 py-5 font-mono text-white shadow-lg hover:scale-105 transition-all duration-300 mx-5 sm:mx-auto '>
        <div className='flex justify-start items-center gap-4 '>
            <img src={img} alt="" className='w-14 h-14 bg-white rounded-lg p-1 hover:scale-105 transition-all duration-300'/>
            <div>
                <p className='font-bold tracking-wide'>{name}</p>
                <p className='text-xs text-[#2CEEF0]'>{date}</p>
            </div>
        </div>
        <h1 className='text-lg font-semibold1 py-3 font-bold'>Grade : <span className='text-yellow-500'>{grade}</span></h1>
        <p className='leading-relaxed text-justify text-gray-500'>{content}</p>
    </div>
  )
}

export default EducationCard