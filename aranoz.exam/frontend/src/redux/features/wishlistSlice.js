import { createSlice } from "@reduxjs/toolkit";

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
          count: 1
        });
      } else {
        existProduct.count += 1;

      }
    },
    deleteWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload._id
      );
    },
    plusBtn: (state, action) => {
      const existProduct = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (existProduct) {
        existProduct.count += 1;

      }
    }, minusBtn: (state, action) => {
      const existProduct = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (existProduct.count > 1) {
        existProduct.count -= 1;

      }
    }
  },
});

export const { addWishlist, deleteWishlist, plusBtn, minusBtn } = wishlistSlice.actions;
export default wishlistSlice;
