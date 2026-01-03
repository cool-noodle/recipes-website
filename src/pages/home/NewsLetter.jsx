import React, { useState } from 'react'

const NewsLetter = () => {
    return (
        <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10 sm:mt-10'>
            <h3 className='text-secondary font-semibold text-center text-4xl'>הירשמו לעדכונים שבועיים!</h3>
            <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>
                מייל שבועי עם המתכונים המעודכנים, טיפים לבישול והצעות נוספות.<br /> זה לוקח רק כמה דקות!
            </p>

            <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20'>
                <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none 
                placeholder:text-[#1b2629] bg-white' type='text' placeholder='name' />
                <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none 
                placeholder:text-[#1b2629] bg-white' type='text' placeholder='Email Adress' />

                <button className='mt-2 md:mt-0 md:mr-2 bg-btnColor hover:text-secondary
                outline-none border hover:border-btnColor hover:bg-[#f9f7f3] text-white
                shadow-lg rounded px-8 py-4 hover:cursor-pointer'>בואו נתחיל
                </button>
            </div>
        </div>
    )
}

export default NewsLetter