import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useParams } from 'react-router'
import axios from 'axios'
import Card from '../components/Card'
import { ThreeDots } from 'react-loader-spinner'

const Search = () => {

    const searchText = useParams();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('q') || params.get('query') || '';

        if (queryParam) {
            setQuery(queryParam);
        }
    }, [])

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        };

        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://recipes-website-backend-production.up.railway.app/api/items",
                    {
                        params: { q: query }
                    }
                );
                setResults(response.data);

            } catch (error) {
                setError(error.message || 'Error fetching data')
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
    }, [query])

    const handleSearch = (event) => {
        setQuery(event.target.value);

        // const params = new URLSearchParams(window.location.search);
        // if (value) {
        //     params.set("q", value);
        // } else {
        //     params.delete("q");
        // }

        // window.history.replaceState(
        //     {},
        //     "",
        //     `${window.location.pathname}?${params.toString()}`
        // );
    }

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>חיפוש</h1>
            <div className='bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
                <IoSearchOutline className='w-5 h-5 ml-2 text-neutral-300' />
                <input value={query} onChange={handleSearch}
                    className='outline-none w-full placeholder:text-[#1b2629]' name='query' type='search'
                    placeholder='חפשו מתכון' id='search' required="" />
            </div>

            {loading && <div className='flex items-center justify-center'>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#00aaff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ margin: '20px' }}
                    wrapperClass="custom-loader"
                    visible={true}
                /></div>}
            {error && <div>Unknown Error...</div>}

            <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    results && results?.map((item) => (
                        <Card item={item} key={item._id}></Card>
                    ))
                }
            </ul>
        </div>
    )
}

export default Search