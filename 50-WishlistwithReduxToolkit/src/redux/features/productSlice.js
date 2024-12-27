import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch products from the API
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data; // The response should be an array of products
});

// Product slice
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] // Initial state is an empty array
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload; // Populate products with API response data
    });
  }
});

export default productSlice.reducer;
