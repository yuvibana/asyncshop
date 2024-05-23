import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, setPage } from '../../features/Home/homeSlice'

function productList() {
    const dispatch = useDispatch();
    const { products, status, error, currentPage, totalPages } = useSelector(state => state.home);

    useEffect(() => {
        dispatch(fetchProducts({ page: currentPage }))
    }, [dispatch, currentPage])

    if (status === 'Loading') {
        return <div>Loading...</div>
    }

    if (status === 'faild') {
        return <div>{error}</div>
    }

    return (
        <div className='text-white'>
            {products.length === 0 ? (
                <div>No products found.</div>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}
            <div>
                <button onClick={() => dispatch(setPage(currentPage - 1))} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={() => dispatch(setPage(currentPage + 1))} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default productList