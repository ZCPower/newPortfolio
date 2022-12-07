import React from 'react'
import '../Styles/Projects.css'
import { projectArr as projects } from './ProjectObj'
import SingleProject from './SingleProject'

function Projects() {

    console.log(projects)

    let con = projects.map(x => console.log(x.name, x.description))

    let mappedProjects = projects.map((x) => {
        return (
            <SingleProject name={x.name} image={x.image} link={x.link} logo={x.logo} technologies={x.technologies} description={x.description} />
        )
    })

    return (
        <div id='projContainer' className='bg-darkgray text-7xl flex flex-col justify-center items-center gap-y-10'>
            <h2>Projects</h2>
            <div id='projHouse' className=' w-3/4 h-3/4 flex gap-2' >
                {mappedProjects}
            </div>
        </div>
    )
}

export default Projects