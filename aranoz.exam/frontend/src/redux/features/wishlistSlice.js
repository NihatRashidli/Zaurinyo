import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const existProduct = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (!existProduct) {
        state.wishlist.push({
          ...action.payload,
        });
      }
    },
    deleteWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addWishlist, deleteWishlist } = wishlistSlice.actions;
export default wishlistSlice;
