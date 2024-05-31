import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'home/fetchProducts',
    async ({ totalPage = 1, category = '', search = '' }, thunkAPI) => {
        let url = `https://fakestoreapi.com/products`;
        if (category && category !== 'all') { url += `/category/${category}`; }
        const response = await fetch(url);
        let data = await response.json();
        if (search) { data = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase())); }
        return data;
    }
);

const initialState = {
    products: [],
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