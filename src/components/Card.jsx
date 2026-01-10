import React from 'react'
import { Link } from 'react-router'
import { GoClock } from "react-icons/go";


const Card = ({ item }) => {

    const categoryStyles = {
        entrees: { backgroundColor: "#f0f5c4", color: "#59871f" },
        breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
        lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
        desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
        sides: { backgroundColor: "#feefc9", color: "#d16400" },
        drinks: { backgroundColor: "#ffeae3", color: "#f0493e" },
        default: { backgroundColor: "#fff", color: "#000" }
    }

    const categoryNames = {
        entrees: "מנות ראשונות",
        breakfast: "ארוחות בוקר",
        lunch: "ארוחות צהריים",
        desserts: "קינוחים",
        sides: "תוספות",
        drinks: "משקאות",
        default: "לא מוגדר"
    }

    const getCategoryStyle = (category) => {
        return categoryStyles[category] || categoryStyles.default
    }
    const categoryStyle = getCategoryStyle(item?.category);

    return (
        <div className='container mx-auto flex justify-center md:justify-start'>
            <div className='max-w-sm'>
                <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg w-[19.5rem]'>
                    <img src={item?.thumbnail_image} alt='thumbnail_image' className='rounded-t-lg h-[190px] object-cover object-center w-full' />
                    <div className='py-6 px-5 rounded-lg bg-white'>
                        <Link to={`/items/${item._id}`}>
                            <div className='h-22'>
                                <h1 className='line-clamp-1 text-gray-700 font-bold text-[1.4rem] hover:text-gray-900
                                    hover:cursor-pointer'>{item?.name}
                                </h1>
                                <p className='line-clamp-2 mt-2 text-sm leading-relaxed'>{item?.description}</p>
                                {/* <p className='mt-2 text-sm'>{item?.more.servings}</p> */}
                            </div>
                        </Link>

                        {/* category and preparation time */}
                        <div className='flex justify-between items-center flex-wrap'>
                            <button className={`mt-6 py-2 px-4 font-medium rounded-lg shadow-md 
                                hover:shadow-lg transition duration-300`} style={{
                                    backgroundColor: categoryStyle.backgroundColor,
                                    color: categoryStyle.color
                                }}>{categoryNames[item?.category] || categoryNames.default}
                            </button>

                            <div className='flex items-center py-2 mt-6'>
                                <GoClock />
                                <span className='mr-1'>{item?.more.prep_time}</span>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-2 left-2 py-2 px-4 bg-white rounded-lg w-fit'>
                        <span className='font-medium'>{item?.more.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card