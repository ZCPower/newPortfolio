import React from 'react'
import '../Styles/Projects.css'
import { projectArr as projects } from './ProjectObj'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion'

function Projects() {

    let mappedProjects = projects.map((x) => {
        return (
            <SingleProject name={x.name} image={x.image} link={x.link} logo={x.logo} technologies={x.technologies} description={x.description} github={x.github} preview={x.preview} />
        )
    })

    return (
        <div id='projContainer' className='bg-darkgray  flex flex-col justify-center items-center lg:gap-y-4 2xl:gap-y-4'
        >


            <h2 className='lg:mt-6 mb-5 lg:mb-0 text-4xl lg:text-4xl 2xl:text-6xl 2xl:my-6 2xl:mt-0'>Projects</h2>
            <motion.div id='projHouse' className=' w-3/4 flex gap-2 lg:h-1/2'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {mappedProjects}
            </motion.div>
        </div>
    )
}

export default Projects