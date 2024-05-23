import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'home/fetchProducts',
    async ({ page = 1, category = '', search = '' }, thunkAPI) => {
        const response = await fetch(
            `https://fakestoreapi.com/products/${page}&category=${category}&search=${search}`
            // `https://fakestoreapi.com/products/`
        );
        const data = await response.json();
        return data.products;
    }
);


// export const fetchProducts = createAsyncThunk(
//     'home/fetchProducts',
//     async ({ totalPage = 1, category = '', search = '' }, thunkAPI) => {
//         let url = `https://fakestoreapi.com/products`
//         const response = await fetch(url);
//         const data = await response.json();


//         if (category) {
//             url += `/category/${category}`;
//         }

//         if (totalPage) {
//             url += `/${totalPage}`;
//         }

//         if (search) {
//             return data.filter(product =>
//                 product.title.toLowerCase().includes(search.toLowerCase())
//             );
//         }

//         console.log(data);

//         return data;
//     }
// );

const initialState = {
    products: [],
    filteredProducts: [],
    status: 'idle',
    error: null,
    category: 'all',
    search: '',
    currentPage: 1,
    productsPerPage: 5
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.currentPage = 1;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            state.currentPage = 1;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setCategory, setSearch, setPage } = homeSlice.actions;

export default homeSlice.reducer;
