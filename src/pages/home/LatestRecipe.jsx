import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../../components/Card';
import { Link } from 'react-router';
import { ThreeDots } from 'react-loader-spinner';

const LatestRecipe = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getLatestItems = async () => {

            try {
                const response = await axios.get(`https://recipes-website-backend-production.up.railway.app/api/all-items`);
                setItems(response.data);
            } catch (error) {
                console.log(error.message || "Error loading data")
            }
        }

        getLatestItems();
    }, [])

    return (
        <div className='px-5 lg:px-10 py-16 sm:py-2'>
            <h2 className='text-3xl font-semibold text-secondary sm:text-5xl 
                sm:leading-relaxed mb-4'>נוספו לאחרונה</h2>

            {/* get all items */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    items.length > 0 ? items.slice(-4).map((item, index) => (
                        <Card key={item._id} item={item} />
                    )) : <div>
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#00aaff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{ margin: '20px' }}
                            wrapperClass="custom-loader"
                            visible={true}
                        />
                    </div>
                }
            </div>

            <div className='sm:w-64 mx-auto mt-16'>
                <Link to="/recipes">
                    <button type='button' className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white
                        w-full transition ease-in duration-200 text-center text-base font-semibold 
                        border border-[#9c702a] focus:outline-none rounded-lg hover:cursor-pointer'>לצפייה בכל המתכונים
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default LatestRecipe