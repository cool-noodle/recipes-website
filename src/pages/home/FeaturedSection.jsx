import React from 'react'
// import FeaturedImg from '../../assets/Pizza.jpg'

const FeaturedSection = () => {
    return (
        <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center
            sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
            <div className='relative'>
                <div className='absolute top-4 right-5 bg-white text-secondary px-3 py-1
                rounded-md uppercase tracking-wider'>מתכון שבועי</div>
                <img src='/apple_tart.jpg' alt='Featured Image' className='rounded-xl' />
            </div>

            <div className='text-start sm:w-1/2'>
                <h2 className='text-3xl font-semibold text-secondary sm:text-5xl 
                sm:leading-relaxed'>טארט תפוחים וקרם שקדים</h2>
                <p className='text-l md:text-xl mt-4 text-[#5c5f5c]'>
                    ראש השנה מתקרב? טארט תפוחים וקרם שקדים כמוהו לא טעמתם באמת שאין ביס נהדר כזה. עם בצק פריך חמאתי, קרם שקדים עם מתיקות מעודנת שמכינים בשנייה ומניפת תפוחים שמזכירה לנו שהחגים ממש כאן. אגב, אפשר גם להחליף באגסים.
                </p>

                <div className='lg:mt-0 lg:flex-shrink-0'>
                    <a className='mt-12 inline-flex' href='/items/68c83b3b69422b99e031187a'>
                        <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white
                        w-full transition ease-in duration-200 text-center text-base font-semibold 
                        border border-[#9c702a] focus:outline-none rounded-lg hover:cursor-pointer'>לצפייה במתכון</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection