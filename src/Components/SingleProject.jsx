import React from 'react'

function SingleProject({ name, description, logo, image }) {
    console.log('in the project')
    return (
        <div className='singleProject bg-black w-1/3 shrink-0 flex flex-col justify-between py-2'>
            <div className='flex justify-center gap-2 p-2 items-center border-b border-purple'>
                <h3 className='text-3xl'>{name}</h3>
                <img className='w-10' src={logo}></img>
            </div>
            <img src={image}></img>
            <p className='text-sm'>{description}</p>
            <div className='flex gap-2 justify-center pb-2'>
                <button className='text-base flex gap-2 items-center'><img className='w-8' src='https://cdn-icons-png.flaticon.com/128/919/919847.png'></img>GitHub</button>
                <button className='text-base flex gap-2 items-center'><img className='w-6' src='https://cdn-icons-png.flaticon.com/128/870/870169.png'></img>Visit Page</button>
            </div>
        </div>
    )
}

export default SingleProject