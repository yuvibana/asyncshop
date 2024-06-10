import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../../features/Cart/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);

    return (
        <div className='cart_main max-w-[1440px] m-auto p-4 text-gray-700 min-h-[89vh]'>
            <h2 className='text-3xl font-bold mb-6'>Shopping Cart</h2>
            {items.length === 0 ? (
                <div className='text-center text-xl'>
                    <p>No items in cart.</p>
                    <Link to="../home" className='text-1xl capitalize bg-red-700 inline-block py-1 px-4 rounded text-white transition hover:bg-red-800'>Shop Now</Link>
                </div>
            ) : (
                <div className='cart_items grid grid-cols-1 gap-6'>
                    {items.map(item => (
                        <div className='cart_item flex justify-between items-center border-b pb-4' key={item.id}>
                            <div className='cart_item_details flex items-center'>
                                <img src={item.image} className='w-[100px] h-[100px] object-cover rounded-md' alt={item.title} />
                                <div className='ml-4'>
                                    <div className='product_title text-lg font-semibold'>{item.title}</div>
                                    <div className='price text-xl font-bold mt-1'>&#x20B9; {Math.ceil(item.totalPrice)}/-</div>
                                    <div className='quantity flex gap-2 items-center mt-2'>
                                        <button
                                            className='bg-red-700 text-white py-1 px-2 rounded transition hover:bg-red-800'
                                            onClick={() => dispatch(decrementQuantity(item.id))}
                                        >
                                            -
                                        </button>
                                        <span className='font-semibold'>{item.quantity}</span>
                                        <button
                                            className='bg-red-700 text-white py-1 px-2 rounded transition hover:bg-red-800'
                                            onClick={() => dispatch(incrementQuantity(item.id))}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className='bg-red-700 text-white py-2 px-4 rounded transition hover:bg-red-800'
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {items.length > 0 && (
                <div className='mt-6 border-t pt-4'>
                    <h3 className='text-xl font-semibold'>Total Quantity: {totalQuantity}</h3>
                    <h3 className='text-xl font-semibold mt-1'>Total Price: &#x20B9; {Math.ceil(totalPrice)}/-</h3>
                    <button
                        className='bg-red-700 text-white py-2 px-6 mt-4 rounded transition hover:bg-red-800'
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
