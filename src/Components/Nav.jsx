import React from 'react'
import '../Styles/Nav.css'

function Nav() {
    return (
        <div id='navBar' className='w-full bg-black flex items-center gap-2 justify-around items-center' >
            <div id='logo' className='flex items-center gap-3'>
                <h1 className='text-3xl p-2'>Zach Power</h1>
                <img className='h-8' src='https://cdn-icons-png.flaticon.com/512/7838/7838457.png'></img>
            </div>
            <nav>
                <ul className='flex gap-5 text-xl'>
                    <li className='py-3 px-5 hover:text-purple hover:bg-darkgray'>Home</li>
                    <li className='py-3 px-5 hover:text-purple hover:bg-darkgray'>About</li>
                    <li className='py-3 px-5 hover:text-purple hover:bg-darkgray'>Projects</li>
                    <li className='py-3 px-5 hover:text-purple hover:bg-darkgray'>Contacts</li>
                </ul>
            </nav>
        </div >
    )
}

export default Nav