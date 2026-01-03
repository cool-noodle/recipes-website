import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


const Hero = () => {
    return (
        <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
            <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2a3342] leading-normal xl:leading-relaxed'>כל המתכונים במקום
                <span className='text-orange-400'> אחד</span></h1>
            <form action="/search" className='bg-white p-4 rounded relative flex items-center'>
                <IoSearchOutline className='w-5 h-5 ml-2 text-neutral-300' />
                <input className='outline-none w-full placeholder:text-[#1b2629]' name='query' type='search' placeholder='מה תרצו להכין היום?' id='search' required=""/>
            </form>
        </div>
    )
}

export default Hero