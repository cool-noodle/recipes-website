import React, { useEffect, useState } from 'react'
import axios from "axios";
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';

const Recipes = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getLatestItems = async () => {

            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/all-items`);
                setItems(response.data);
            } catch (error) {
                console.log(error.message || "Error loading data")
            }
        }

        getLatestItems();
    }, [])

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-3xl text-center font-semibold text-secondary sm:text-5xl 
                sm:leading-relaxed mb-6 sm:mb-4'>כל המתכונים
            </h1>

            <CategoryWrapper />

            <ul className=' mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    items.map((item) => (
                        <Card key={item._id} item={item} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Recipes