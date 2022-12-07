import React from 'react'

function SingleProject({ name, description, logo, image, link, github }) {
    console.log('in the project')
    return (
        <div className='singleProject bg-black w-1/3 shrink-0 flex flex-col justify-between py-2'>
            <div className='flex justify-center gap-2 p-2 items-center border-b border-purple'>
                <h3 className='text-3xl'>{name}</h3>
                <img className='w-10' src={logo}></img>
            </div>
            <img src={image}></img>
            <p className='text-base h-32 '>{description}</p>
            <div id='projButtons' className='flex gap-2 justify-center items-center pb-2'>
                {github && link ?
                    <>
                        <a href={github} target='_blank'><button className='text-base flex gap-2 items-center'><img className='w-8' src='https://cdn-icons-png.flaticon.com/128/919/919847.png'></img>GitHub</button></a>

                        <a href={link} target='_blank'><button className='text-base flex gap-2 items-center'><img className='w-8' src='https://cdn-icons-png.flaticon.com/128/870/870169.png'></img>Visit Page</button></a></> : <h4 className='text-xl text-purple'>Currently under construction!</h4>
                }
                {/* PERHAPS BUILD SOMETHING THAT SO WHEN YOU CLICK ON A PROJECT ANYWHERE THATS NOT A BUTTON, YOU CAN VIEW ALL THE DATA OF THE PROJECT i.e. What it was built with... */}
            </div>
        </div >
    )
}

export default SingleProject