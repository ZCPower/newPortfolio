import React, { useState, useEffect } from 'react'
import '../Styles/Home.css'
import { videoUrl } from './videoURL';


import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
function Home() {
    let textArr = [
        "Hi, I'm Zach.",
        "I'm a Fullstack Developer. ",
        "I love to build web apps.",
        "I can build you one?"
    ];

    const [greeting, setGreeting] = useState(textArr[0]);
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const timerId = setInterval(
    //         () => setIndex((i) => (i + 1) % textArr.length), // <-- increment index
    //         5000
    //     );
    //     return () => clearInterval(timerId);
    // }, []);


    // useEffect(() => {
    //     setGreeting(textArr[index]); // <-- update media state when index updates
    // }, [index]);


    return (
        <motion.div id='homeContainer' className='flex flex-col justify-center
        '
        >

            <video autoPlay='autoplay' muted loop disablePictureInPicture controls={false} src={videoUrl} type='video/mp4' />
            <div id='intro' className='gap px-5'>
                <h2 className='text-3xl mb-5 my-4 py-2 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl type' ><Typewriter
                    options={{
                        strings: ["Hi, I'm Zach.", "I'm a Fullstack developer.", "I love to build web apps."],
                        autoStart: true,
                        loop: true,
                    }}
                /></h2>
                {/* Perhaps add an effect that 'types' a couple things out randomly that describe myself. */}
                {/* <p className='text-3xl'>Fullstack Web Developer</p> */}
            </div>
        </motion.div >
    )
}

export default Home