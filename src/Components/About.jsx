import React from 'react'
import '../Styles/About.css'

function About() {
    return (
        <div id='aboutContainer' className='bg-black flex flex-col justify-center gap-y-5 items-center'>
            <h2 className='text-purple text-7xl '>About Me</h2>
            <p className='py-2 text-xl w-3/4'>I recently graduated from a 6-month immersive web development bootcamp. During the bootcamp, I learned the fundamentals of fullstack development by buildling graded projects weekly. Since graduating, I have continued to hone my skills by building personal projects, practicing algorithms on AlgoExpert and CodeWars, and taking courses on UDemy and FreeCodeCamp. I am currently looking for my first position as a developer and I am open to freelance gigs as well as internships or full-time positions. I am eager to continue learning and progress as a developer!</p>
            <div id='icons' className='flex gap-6 justify-center'>
                <img className='h-20' src='https://img.icons8.com/color/344/html-5--v1.png'></img>
                <img className='h-20' src="https://img.icons8.com/color/344/css3.png" alt="" />
                <img className='h-20' src="https://img.icons8.com/color/344/javascript--v2.png" alt="" />
                <img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                <img className='h-20' src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="" />
                <img className='h-20' src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="" />
                <img className='h-20' src="https://img.icons8.com/color/344/git.png" alt="" />
            </div>
        </div>
    )
}

export default About