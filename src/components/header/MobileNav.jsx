import React from 'react'
import { HiBars3BottomLeft, HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri"
import { Link } from 'react-router';
import confetti from 'canvas-confetti'


const MobileNav = ({ menuItems, linkNames, Logo, onClose, hideRight, onOpen }) => {

    let scalar = 2;
    let cakes = confetti.shapeFromText({ text: '🧁', scalar });

    const handleClick = () => {
        confetti({
            particleCount: 200,
            startVelocity: 50,
            spread: 100
        })
    }

    return (
        <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
            <a href='/'>
                <img src={Logo} alt='logo' className='h-12' />
            </a>
            <button onClick={onOpen} className='border border-primary rounded cursor-pointer'>
                <HiBars3BottomLeft className='w-7 h-7' />
            </button>

            <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideRight} flex justify-center items-center`}>
                <button onClick={onClose} className='absolute left-8 top-6 cursor-pointer'>
                    <HiBars3BottomRight className='w-7 h-7' />
                </button>

                <div>
                    <ul className='flex flex-col gap-5'>
                        {
                            menuItems?.map((menu, index) => (
                                <li key={index} onClick={onClose}>
                                    <Link to={linkNames[index]} className='font-medium capitalize text-secondary text-2xl'>{menu}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className='font-medium mt-10'>
                        <button onClick={handleClick} className='text-secondary px-2 py-2 rounded cursor-pointer border-2 border-blue-200 font-medium bg-blue-100'>🎉 Party Time</button>
                    </div>

                    {/* login and sign up button */}
                    {/* <ul className='flex items-center gap-4 font-medium mt-10'>
                        <li>
                            <button className='text-secondary px-4 py-2 rounded border'>Log In</button>
                        </li>
                        <li>
                            <button className='text-secondary px-4 py-2 rounded border'>Sign Up</button>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default MobileNav