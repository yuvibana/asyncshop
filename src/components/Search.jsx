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
        <div className="mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="p-2 border border-gray-300 rounded mr-2"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Search
            </button>
        </div>
    );
}

export default Search;
