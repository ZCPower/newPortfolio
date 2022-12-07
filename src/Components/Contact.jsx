import React from 'react'
import '../Styles/Contacts.css'

function Contact() {
    return (
        <div id='contactContainer' className='flex flex-col justify-center gap-y-5 items-center bg-black h-1/4'>
            <h2 className='text-4xl w-1/4 pb-2 border-b '>Contact</h2>
            <div>
                <ul className='flex gap-x-2'>
                    <a href='http://linkedin.com/in/zachpower' target="_blank"><li className='flex items-center gap-2 bg-darkgray p-2 hover:bg-softgray text-lg'>LinkedIn <img className='w-6' src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'></img></li></a>
                    <li className='flex items-center gap-2 bg-darkgray p-2 hover:bg-softgray text-lg'>Email <img className=' w-6' src='https://cdn-icons-png.flaticon.com/128/888/888853.png'></img></li>
                    <li className='flex items-center gap-2 bg-darkgray p-2 hover:bg-softgray text-lg'>Upwork <img className='w-6' src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/2x/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png'></img></li>

                    {/* Codewars */}
                    <a href='https://www.codewars.com/users/ZachPowerXC' target='_blank'>
                        <li className='flex items-center gap-2 bg-darkgray p-2 hover:bg-softgray text-lg'>Codewars <img className='w-6' src='https://img.icons8.com/office/2x/codewars.png'></img></li>
                    </a>
                    {/* Git Hub */}
                    <a href='http://github.com/zcpower' target='_blank'>
                        <li className='flex items-center gap-2 bg-darkgray p-2 hover:bg-softgray text-lg'>GitHub <img className='w-6' src='https://cdn-icons-png.flaticon.com/128/919/919847.png'></img>
                        </li>
                    </a>
                </ul>
            </div >
        </div >
    )
}

export default Contact