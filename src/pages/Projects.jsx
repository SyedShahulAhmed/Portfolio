import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { project } from '../assets/Projects/ProjectInfo'
const Projects = () => {
  return (
    <div className='w-full max-w-[1240px] mx-auto pt-[150px] text-white'>
         <h1 className="text-center text-4xl font-bold mb-2">
            My Recent <span className="font-bold text-[#2CEEF0] ">Works</span>
          </h1>
          <p className='text-center text-lg font-bold mb-10  px-3'>Below are a few of the <span className="font-bold text-[#2CEEF0] ">projects</span> I have worked on </p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 place-content-center mx-auto mb-8'>
      {project.map((item,key) =>(
        <ProjectCard key={key}
        image={item.image}
        name={item.name}
        desc={item.desc}
        github={item.github}
        preview={item.preview}
        cat={item.categories}
        button={item.button}
        />
      ))}
      </div>
    </div>
  )
}

export default Projects