import React from 'react'
import '../Styles/Projects.css'
import { projectArr as projects } from './ProjectObj'
import SingleProject from './SingleProject'

function Projects() {

    let mappedProjects = projects.map((x) => {
        return (
            <SingleProject name={x.name} image={x.image} link={x.link} logo={x.logo} technologies={x.technologies} description={x.description} github={x.github} preview={x.preview} />
        )
    })

    return (
        <div id='projContainer' className='bg-darkgray lg:text-6xl 2xl:text-7xl flex flex-col justify-center items-center lg:gap-y-8 gap-y-10'>
            <h2 className='text-4xl md:text-5xl xl:text-6xl lg:mt-6 2xl:my-6'>Projects</h2>
            <div id='projHouse' className=' w-3/4 h-3/4 flex gap-2' >
                {mappedProjects}
            </div>
        </div>
    )
}

export default Projects