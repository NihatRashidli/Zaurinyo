import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const existProduct = state.basket.find(
        (product) => product._id === action.payload._id
      );
      if (!existProduct) state.basket.push({ ...action.payload, count: 1 });
      else {
        existProduct.count += 1;
      }
    },

    deleteBasket: (state, action) => {
      state.basket = state.basket.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});
export const { addBasket, deleteBasket } = basketSlice.actions;
export default basketSlice;
