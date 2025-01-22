import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/products";

const initialState = {
  products: [],
  allProducts: [],
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
});

export const addProducts = createAsyncThunk("addProducts", async (product) => {
  const { data } = await axios.post(BASE_URL, product);
  return data;
});

export const deleteProducts = createAsyncThunk("deleteProducts", async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortLow: (state, action) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },

    sortHigh: (state, action) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },

    searchInput: (state, action) => {
      state.products = state.allProducts.filter((item) => 
        item.name.toLowerCase().includes(action.payload.toLowerCase().trim())
      );
    },
  },
  extraReducers(builder) {
    builder

      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.allProducts = action.payload;
      })

      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push({ ...action.payload });
      })

      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

export const { sortHigh, sortLow, searchInput } = productSlice.actions;
export default productSlice;
