import React from 'react'
// import FeaturedImg from '../../assets/Pizza.jpg'

const FeaturedSection = () => {
    return (
        <div className='overflow-hidden flex lg:flex-row flex-col justify-between items-center
            sm:my-20 my-4 lg:gap-20 gap-12 px-5 lg:px-10'>
            <div className='relative'>
                <div className='absolute top-4 right-5 bg-white text-secondary px-3 py-1
                rounded-md uppercase tracking-wider'>מתכון שבועי</div>
                <img src='/almond_butter_cookies.jpg' alt='Featured Image' className='rounded-xl w-fit md:max-w-2xl' />
            </div>

            <div className='text-start md:w-3/4 lg:w-1/2'>
                <h2 className='text-3xl font-semibold text-secondary sm:text-5xl 
                sm:leading-relaxed'>עוגיות שקדים לימוניות</h2>
                <p className='text-l lg:text-xl mt-4 text-[#5c5f5c]'>
                  אל תכינו את העוגיות האלה. באמת, פשוט אל. אני בעצמי לא יודעת למה הכנתי אותן, כי ברגע שהמגש הראשון יצא מהתנור והתקרר לא יכולתי שלא לקחת "רק אחת" בכל פעם שהגעתי לבדוק מה קורה עם המגש השני שהיה באפייה.
                </p>

                <div className='lg:mt-0 lg:flex-shrink-0'>
                    <a className='mt-12 inline-flex' href='/items/696ccc51cb7c0c28e47a61f4'>
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