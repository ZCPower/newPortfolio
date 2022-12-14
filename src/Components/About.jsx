import React from 'react'
import '../Styles/About.css'
import { motion } from 'framer-motion'

function About() {
    return (
        <div id='aboutContainer' className='bg-black flex flex-col gap-y-4 justify-center md:gap-y-5 items-center 2xl:gap-y-10 xl:pt-6 2xl:pt-0'
        >
            <motion.div id='navUnderlay'
                initial={{ x: '-50vw' }}
                animate={{ x: '50vw' }}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className='text-purple text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-7xl'>About Me</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.2, y: '-100vh' }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}

                className='justify-center flex'
            >
                <p className='py-2 w-3/4 text-sm sm:text-lg lg:text-lg 2xl:text-2xl text-center'>I recently graduated from a 6-month immersive web development bootcamp. During the bootcamp, I learned the fundamentals of fullstack development by buildling graded projects weekly. Since graduating, I have continued to hone my skills by building personal projects, practicing algorithms on AlgoExpert and CodeWars, and taking courses on UDemy and FreeCodeCamp. I am currently looking for my first position as a developer and I am open to freelance gigs as well as internships or full-time positions. I am eager to continue learning and progress as a developer!</p>
            </motion.div>
            <p className='py-2 text-xl w-3/4 border-b w-1/2  md:pb-4 lg:pb-6 text-purple xl:text-2xl 2xl:text-3xl'>My current tech stack is:</p>


            <div id='icons' className='flex flex-wrap gap-6 justify-center 2xl:mt-5 2xl:gap-11'
            >


                {/* HTML */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className='h-12 sm:h-20 md:h-28 xl:h-20 2xl:h-28' src='https://img.icons8.com/color/344/html-5--v1.png'></img>
                    <h5 className='2xl:text-xl 2xl:mt-2 '>HTML</h5>
                </motion.div>

                {/* //CSS */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className='h-12 sm:h-20 md:h-24 xl:h-20  2xl:h-28' src="https://img.icons8.com/color/344/css3.png" alt="" />
                    <h5 className='2xl:text-xl 2xl:mt-2'>CSS</h5>
                </motion.div>

                {/*JavaScript  */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className='h-12 sm:h-20 md:h-24 xl:h-20 2xl:h-28' src="https://img.icons8.com/color/344/javascript--v2.png" alt="" />
                    <h5 className='2xl:text-xl 2xl:mt-2'>JavaScript</h5>
                </motion.div>

                {/* REACT */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className='h-12 sm:h-20 md:h-24 xl:h-20 2xl:h-28' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    <h5 className='2xl:text-xl 2xl:mt-2'>React</h5>
                </motion.div>

                {/* PostgreSQL */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className='h-12 sm:h-20 md:h-24 xl:h-20 2xl:h-28' src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="" />
                    <h5 className='2xl:text-xl 2xl:mt-2'>PostgreSQL</h5>
                </motion.div>

                {/* Node.JS */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className='h-12 sm:h-20 md:h-24 xl:h-20 2xl:h-28' src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="" />
                    <h5 className='2xl:text-xl 2xl:mt-2'>Node.js</h5>
                </motion.div>

                {/* Git */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                > <img className='h-12 sm:h-20 md:h-24 xl:h-20 2xl:h-28' src="https://img.icons8.com/color/344/git.png" alt="" />
                    <h5 className='2xl:text-xl 2xl:mt-2'>Git</h5>
                </motion.div>

                {/* Tailwind */}
                <motion.div className='flex flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className='h-12 sm:h-20 md:h-24 xl:h-20 2xl:h-28' src="https://img.icons8.com/color/2x/tailwindcss.png" alt="" />
                    <h5 className='2xl:text-xl 2xl:mt-2'>Tailwind</h5>
                </motion.div>
            </div>

        </div >
    )
}

export default About