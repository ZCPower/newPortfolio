import React from 'react'
import '../Styles/Contacts.css'

function Contact() {
    return (
        <div id='contactContainer' className='flex flex-col justify-center gap-y-5 items-center bg-black'>
            <h2 className='text-4xl w-1/4 pb-2 border-b 2xl:text-5xl md:pb-5'>Contact</h2>
            <div>
                <ul className='flex flex-wrap justify-center gap-x-6 gap-y-4 sm:flex-row sm:gap-x-4 2xl:gap-x-6 md:mt-2'>
                    {/* LinkedIn Button */}
                    <a href='http://linkedin.com/in/zachpower' target="_blank">
                        <li className='flex items-center gap-2 bg-darkgray 2xl:p-4 2xl:text-2xl p-2 hover:bg-softgray sm:text-lg'>LinkedIn <img className='w-6 2xl:w-8 ' src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'></img>
                        </li>
                    </a>

                    {/* Email Button */}
                    <li className='flex items-center gap-2 bg-darkgray 2xl:p-4 2xl:text-2xl p-2 hover:bg-softgray text-lg'>Email
                        <img className=' w-6 2xl:w-8' src='https://cdn-icons-png.flaticon.com/128/888/888853.png'></img></li>


                    {/* Upwork Button */}
                    <li className='flex items-center gap-2 bg-darkgray 2xl:p-4 2xl:text-2xl p-2 hover:bg-softgray text-lg'>Upwork <img className='w-6 2xl:w-8' src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/2x/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png'></img></li>


                    {/* Codewars */}
                    <a href='https://www.codewars.com/users/ZachPowerXC' target='_blank'>
                        <li className='flex items-center gap-2 bg-darkgray 2xl:p-4 2xl:text-2xl p-2 hover:bg-softgray text-lg'>Codewars <img className='w-6 2xl:w-8' src='https://img.icons8.com/office/2x/codewars.png'></img></li>
                    </a>

                    {/* Git Hub */}
                    <a href='http://github.com/zcpower' target='_blank'>
                        <li className='flex items-center gap-2 bg-darkgray 2xl:p-4 2xl:text-2xl p-2 hover:bg-softgray text-lg'>GitHub <img className='w-6 2xl:w-8' src='https://cdn-icons-png.flaticon.com/128/919/919847.png'></img>
                        </li>
                    </a>
                </ul>
            </div >
        </div >
    )
}

export default Contact