import React from 'react'
import '../Styles/Home.css'
import { videoUrl } from './videoURL'

function Home() {
    return (
        <div id='homeContainer' className='flex flex-col justify-center'>
            {/* <video type='video/mp4' autoPlay muted loop src='../src/assets/video.mp4' /> */}

            <video autoPlay muted loop src={videoUrl} />
            <div id='intro' className='gap'>
                <h2 className='text-5xl mb-5 pt-2 sm:text-6xl md:text-7xl lg:text-8xl'>Fullstack Developer</h2>
                {/* Perhaps add an effect that 'types' a couple things out randomly that describe myself. */}
                {/* <p className='text-3xl'>Fullstack Web Developer</p> */}
            </div>
        </div >
    )
}

export default Home