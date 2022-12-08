import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div id='navBar' className='w-full bg-black flex items-center gap-2 justify-around items-center' >
            <div id='logo' className='flex items-center gap-3'>
                <h1 className='2xl:text-3xl md:text-2xl p-2 sm:text-lg'>Zach Power</h1>
                <img className='h-8' src='https://cdn-icons-png.flaticon.com/512/7838/7838457.png'></img>
            </div>
            <nav>
                <ul className='flex gap-5 sm:text-lg md:text-xl lg:text-xl'>
                    <li className='py-3 sm:px-5  border-b-2 border-black hover:border-b-2 hover:border-purple'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='py-3 sm:px-5 hover:border-b-2 hover:border-purple'>
                        <Link to='/about'>About</Link>
                    </li>
                    <Link to='/projects'><li className='py-3 sm:px-5 hover:border-b-2 hover:border-purple'>
                        Projects
                    </li></Link>

                    <Link to='/contact'><li className='py-3 sm:px-5 hover:border-b-2 hover:border-purple'>Contact</li></Link>
                </ul>
            </nav>
        </div >
    )
}

export default Nav