import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, fetchProducts, setPage } from '../features/Home/homeSlice';

function Filter() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.home.category);

    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        dispatch(setCategory(newCategory));
        dispatch(setPage(1));
        dispatch(fetchProducts({ category: newCategory, totalPage: 1 }));
    };

    return (
        <div className="mb-4">
            <select
                value={category}
                onChange={handleCategoryChange}
                className="p-2 border border-gray-300 rounded"
            >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
    );
}

export default Filter;
