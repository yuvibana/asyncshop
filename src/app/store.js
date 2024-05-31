import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../features/Home/homeSlice";
import CartReducer from "../features/Cart/cartSlice";


const store = configureStore({
    reducer: {
        home: HomeReducer,
        cart: CartReducer
    }
})
export default store