import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../../features/Cart/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);

    console.log(items);

    return (
        <div className='cart_main max-w-[1440px] m-auto p-[0 15px] text-white'>
            <h2 className='text-2xl mb-4'>Shopping Cart</h2>
            {items.length === 0 ? (
                <div>No items in cart.</div>
            ) : (
                <div className='cart_items flex flex-col gap-4'>
                    {items.map(item => (
                        <div className='cart_item flex justify-between items-center' key={item.id}>
                            <div className='cart_item_details flex items-center'>
                                <img src={item.image} className='w-[100px] h-[100px]' alt="" />
                                <div className='ml-4'>
                                    <div className='product_title'>{item.title}</div>
                                    <div className='price text-2xl'>&#x20B9; {item.totalPrice}/-</div>
                                    <div className='quantity flex gap-2 items-center'>
                                        <button className='bg-red-700 inline-block py-1 px-2 rounded-sm transition hover:bg-red-800' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className='bg-red-700 inline-block py-1 px-2 rounded-sm transition hover:bg-red-800' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-red-700 inline-block py-1 px-4 rounded-sm transition hover:bg-red-800' onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            {items.length > 0 && (
                <div className='mt-4'>
                    <h3 className='text-xl'>Total Quantity: {totalQuantity}</h3>
                    <h3 className='text-xl'>Total Price: &#x20B9; {totalPrice}/-</h3>
                    <button className='bg-red-700 inline-block py-2 px-4 mt-4 rounded-sm transition hover:bg-red-800' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
            )}
        </div>
    );
}

export default Cart;