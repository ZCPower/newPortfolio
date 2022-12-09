import React from 'react'
import '../Styles/Home.css'
import { videoUrl } from './videoURL'

import { motion } from 'framer-motion'

function Home() {
    return (
        <motion.div id='homeContainer' className='flex flex-col justify-center
        '
        // initial={{ y: 20 }}
        // animate={{ y: 0 }}
        // exit={{ y: 20 }}
        // transition={{ duration: 0.5 }}
        >
            {/* <video type='video/mp4' autoPlay muted loop src='../src/assets/video.mp4' /> */}

            <video autoPlay='autoplay' muted loop disablePictureInPicture controls={false} src={videoUrl} type='video/mp4' />
            <div id='intro' className='gap px-5'>
                <h2 className='text-5xl mb-5 pt-2 sm:text-6xl md:text-7xl lg:text-8xl'>Fullstack Developer</h2>
                {/* Perhaps add an effect that 'types' a couple things out randomly that describe myself. */}
                {/* <p className='text-3xl'>Fullstack Web Developer</p> */}
            </div>
        </motion.div >
    )
}

export default Home