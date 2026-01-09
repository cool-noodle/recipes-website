import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useParams } from 'react-router'
import axios from 'axios'
import Card from '../components/Card'

const Search = () => {

    const searchText = useParams();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

    if (!API_URL) {
        console.error("VITE_API_URL is not defined!");
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');

        if (queryParam) {
            setQuery(queryParam);
        }
    }, [])

    useEffect(() => {
        const fetchItems = async () => {

            if (!query) return;

            setLoading(true);
            try {
                const response = await axios.get(`${API_URL}/api/items`, {
                    params: { q: query }
                });
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

            {loading && <div>Loading...</div>}
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