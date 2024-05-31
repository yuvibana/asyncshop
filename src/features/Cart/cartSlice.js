import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += action.payload.price;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price
                });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        incrementQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += existingItem.price;
                state.totalQuantity += 1;
                state.totalPrice += existingItem.price;
            }
        },
        decrementQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
            } else if (existingItem && existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload);
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
