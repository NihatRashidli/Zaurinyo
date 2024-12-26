import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    status: 'idle',
    error: null,
    value: 0,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get("https://react-fast-pizza-api.jonas.io/api/menu");
    return response.data.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        increment: (state) => {
            
            state.value += 1
          },
          decrement: (state) => {
            state.value -= 1
            if(state.value < 0){
                state.value = 0
            }
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

export const { setProducts ,increment ,decrement} = productsSlice.actions;

export default productsSlice.reducer;