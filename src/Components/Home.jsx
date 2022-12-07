import React from 'react'
import '../Styles/Home.css'

function Home() {
    return (
        <div id='homeContainer' className='flex flex-col justify-center'>
            {/* <video autoPlay muted loop src='/src/assets/video.mp4'></video> */}

            <video autoPlay muted loop src='https://player.vimeo.com/external/370467553.sd.mp4?s=96de8b923370fb7fa8616d4e0b74eaf3fac9e576&profile_id=164&oauth2_token_id=57447761'></video>
            <div id='intro' className='gap'>
                <h2 className='text-7xl mb-5'>Fullstack Developer</h2>
                {/* Perhaps add an effect that 'types' a couple things out randomly that describe myself. */}
                <p>Welcome to my portfolio!</p>
            </div>
        </div >
    )
}

export default Home