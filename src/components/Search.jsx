import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch, fetchProducts, setPage } from '../features/Home/homeSlice';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(setSearch(searchTerm));
        dispatch(setPage(1));
        dispatch(fetchProducts({ search: searchTerm, totalPage: 1 }));
    };

    return (
        <div className="mb-4 flex">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="p-2 outline-0 border border-gray-300 rounded mr-2 w-[70%]"
            />
            <button
                onClick={handleSearch}
                className='bg-red-700 inline-block py-1 px-4 rounded text-white transition hover:bg-red-800 w-[30%]'
            >Search</button>
        </div>
    );
}

export default Search;