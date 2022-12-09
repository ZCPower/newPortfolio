import React from 'react'
import { motion } from 'framer-motion'

function SingleProject({ name, description, logo, image, link, github, preview }) {
    console.log('in the project')
    return (
        <motion.div className='singleProject bg-black w-full sm:full md:w-1/2 xl:w-1/3 shrink-0 flex flex-col justify-between'>
            <div className='flex justify-center gap-2 p-2 items-center border-b border-purple'>
                <h3 className='lg:text-xl 2xl:text-3xl'>{name}</h3>
                <img className='w-10' src={logo}></img>
            </div>
            {preview ? <img className='projectPreview' src={preview}></img> : <img src={image}></img>}
            <p className='text-base h-32 2xl:text-xl 2xl:px-4'>{description}</p>
            <div id='projButtons' className='flex gap-x-2 justify-center items-center pb-2 2xl:pb-6'>
                {github && link ?
                    <>
                        <a href={github} target='_blank'><button className='text-base flex gap-2 items-center 2xl:text-2xl lg:text-sm'><img className='w-8' src='https://cdn-icons-png.flaticon.com/128/919/919847.png'></img>GitHub</button></a>

                        <a href={link} target='_blank'><button className='text-base flex gap-2 items-center 2xl:text-2xl lg:text-sm'><img className='w-8' src='https://cdn-icons-png.flaticon.com/128/870/870169.png'></img>Visit Page</button></a></> : <h4 className='text-xl text-purple pb-3'>Currently under construction!</h4>
                }
                {/* PERHAPS BUILD SOMETHING THAT SO WHEN YOU CLICK ON A PROJECT ANYWHERE THATS NOT A BUTTON, YOU CAN VIEW ALL THE DATA OF THE PROJECT i.e. What it was built with... */}
            </div>
        </motion.div >
    )
}

export default SingleProject