import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setPage } from '../../features/Home/homeSlice';
import { addToCart } from '../../features/Cart/cartSlice';
import ShimmerCard from '../ShimmerCard';
import { useNavigate } from 'react-router';

function ProductList() {
    const [animate, setAnimate] = useState(false);
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const { products, status, error, currentPage, productsPerPage, category, search } = useSelector(state => state.home);

    useEffect(() => {
        dispatch(fetchProducts({ totalPage: currentPage, category, search }));
    }, [dispatch, currentPage, category, search]);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 500);
        return () => clearTimeout(timeout);
    }, [currentPage, category, search]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        Navigate('../cart/');
    };

    if (status === 'loading') {
        return <ShimmerCard />;
    }

    if (status === 'failed') {
        return <div className='text-3xl text-white text-center'>{error}</div>;
    }

    return (
        <div className='product_listing_main max-w-[1440px] m-auto p-[0 15px] text-white'>
            {currentProducts.length === 0 ? (
                <div>No products found.</div>
            ) : (
                <div className={`procuct_card_main flex flex-wrap gap-5 transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}>
                    {currentProducts.map(product => (
                        <div className='procuct_card_inner flex flex-wrap gap-3 lg:w-[49%] w-[100%]' key={product.id}>
                            <figure
                                style={{ lineHeight: '0' }}
                                className='lg:w-[50%] w-[100%]'
                            ><img src={product.image} className='w-[100%] h-[300px]' alt="" loading='lazy' /></figure>
                            <div className='content_div lg:w-[48%] w-[100%]'>
                                <div className='product_title text-2xl'>{product.title}</div>
                                <p>{product.description.slice(1,150)}</p>
                                <div className='price flex gap-4 mb-2'>
                                    <span className='price text-2xl line-through text-gray-500'>&#x20B9; {product.price - 10}</span>
                                    <span className='price text-2xl'>&#x20B9; {product.price}/-</span>
                                </div>
                                <div className='buy_btns flex gap-4'>
                                    <button
                                        className='bg-red-700 inline-block py-1 px-4 rounded-sm transition hover:bg-red-800'
                                        onClick={() => handleAddToCart(product)}
                                    >Add To Cart</button>
                                    <button
                                        className='bg-red-700 inline-block py-1 px-4 rounded-sm transition hover:bg-red-800'
                                    >Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className='flex gap-3 my-2'>
                <button
                    className='bg-red-700 inline-block py-1 px-4 hover:bg-red-800 rounded-sm disabled:opacity-50 disabled:cursor-no-drop'
                    onClick={() => dispatch(setPage(currentPage - 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className='text-white'>{currentPage} / {totalPages}</span>
                <button
                    className='bg-red-700 inline-block py-1 px-4 hover:bg-red-800 rounded-sm disabled:opacity-50 disabled:cursor-no-drop'
                    onClick={() => dispatch(setPage(currentPage + 1))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProductList;