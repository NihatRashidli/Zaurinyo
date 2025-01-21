import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const existProducts = state.basket.find(
        (item) => item._id === action.payload._id
      );
      if (!existProducts) {
        state.basket.push({ ...action.payload, count: 1 });
      } else {
        existProducts.count += 1;
      }
    },
    plusBtnBasket: (state, action) => {
      const existProducts = state.basket.find(
        (item) => item._id === action.payload._id
      );
      if (existProducts) {
        existProducts.count += 1;
      }
    },
    minusBtnBasket: (state, action) => {
      const existProducts = state.basket.find(
        (item) => item._id === action.payload._id
      );
      if (existProducts.count > 1) {
        existProducts.count -= 1;
      }
    },
    deleteBasket: (state, action) => {
      const existProducts = state.basket.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addBasket, plusBtnBasket, minusBtnBasket, deleteBasket } =
  basketSlice.actions;
export default basketSlice;
