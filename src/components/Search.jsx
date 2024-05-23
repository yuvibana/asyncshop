import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch, fetchProducts, setPage } from '../features/Home/homeSlice';


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(setSearch(searchTerm));
        dispatch(setPage(1));
        dispatch(fetchProducts({ search: searchTerm, page: 1 }));
    };


    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search