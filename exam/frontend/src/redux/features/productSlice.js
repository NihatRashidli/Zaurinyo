import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const BASE_URL = "http://localhost:3000/api/products"

const initialState = {
    products: [],
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response?.data
})

export const deletePost = createAsyncThunk("post/deletePost", async (initialPost) => {
    const { id } = initialPost
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        if (response?.status === 200) return initialPost;
        return `${response.status} : ${response.statusText}`;
    } catch (error) {
        return error.message
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder

            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.products = action.payload;
            })

            .addCase(deletePost.fulfilled, (state, action) => {
                if (!action?.payload.id) {
                    console.log("could not delete");
                    console.log(action.payload)
                    return
                }

                const { id } = action.payload;
                const Oldproducts = state.products.filter(post =>
                    post.id !== id)
                state.products = Oldproducts
            })
    }
})

export default productSlice;