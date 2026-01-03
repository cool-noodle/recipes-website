import confetti from 'canvas-confetti'
import React from 'react'
import { Link } from 'react-router'

const DesktopNav = ({ menuItems, linkNames, Logo }) => {

    let scalar = 2;
    let cakes = confetti.shapeFromText({ text: '🧁', scalar });

    const handleClick = () => {
        // confetti({
        //     particleCount: 200,
        //     startVelocity: 50,
        //     spread: 100,
        //     shapes: [cakes],
        //     scalar
        // })

        confetti({
            particleCount: 200,
            startVelocity: 50,
            spread: 100
        })
    }

    return (
        <div className='flex justify-between items-center px-6 lg:px-12 w-full py-4'>
            <a href='/' className='flex-1'>
                <img src={Logo} alt='logo' className='h-12' />
            </a>

            <div className='flex-1 flex justify-center'>
                <ul className='flex gap-7'>
                    {
                        menuItems?.map((menu, index) => (
                            <li key={index}>
                                <Link to={linkNames[index]} className='font-medium capitalize text-secondary'>{menu}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex-1 flex justify-end'>
                <button onClick={handleClick} className='text-secondary px-4 py-2 rounded cursor-pointer font-medium bg-blue-100'>🎉Party Time</button>
            </div>

            {/* login and sign up button */}
            {/* <div className='flex-1 flex justify-end'>
                <ul className='flex items-center gap-4 font-medium'>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded cursor-pointer'>Log In</button>
                    </li>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded'>Sign Up</button>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default DesktopNav