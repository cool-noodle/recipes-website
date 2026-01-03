import React from 'react'
import { Link } from 'react-router';

function CategoryItem({ name, href, backgroundColor, color }) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    }
    return (
        <div>
            <Link to={href} className='rounded-full'>
                <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    )
}

function CategoryList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-8'>
            <CategoryItem name="מנות ראשונות" href="/catagories/entrees" backgroundColor="#f0f5c4" color="#59871f" />
            <CategoryItem name="ארוחות בוקר" href="/catagories/breakfast" backgroundColor="#efedfa" color="#3c3a8f" />
            <CategoryItem name="ארוחות צהריים" href="/catagories/lunch" backgroundColor="#e5f7f3" color="#1f8787" />
            <CategoryItem name="קינוחים" href="/catagories/desserts" backgroundColor="#e8f5fa" color="#397a9e" />
            <CategoryItem name="תוספות" href="/catagories/sides" backgroundColor="#feefc9" color="#d16400" />
            <CategoryItem name="משקאות" href="/catagories/drinks" backgroundColor="#ffeae3" color="#f0493e" /> 
        </div>
    )
}

const CategoryWrapper = () => {
    return (
        <div>
            <CategoryList />
        </div>
    )
}

export default CategoryWrapper