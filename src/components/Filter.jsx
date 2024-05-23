import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, fetchProducts, setPage } from '../features/Home/homeSlice';


function Filter() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.home.category);
    console.log(category);
    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        dispatch(setCategory(newCategory));
        dispatch(setPage(1));
        dispatch(fetchProducts({ category: newCategory }));
    }

    return (
        <div>
            <select value={category} onChange={handleCategoryChange}>
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="books">Mens</option>
            </select>
        </div>
    )
}

export default Filter