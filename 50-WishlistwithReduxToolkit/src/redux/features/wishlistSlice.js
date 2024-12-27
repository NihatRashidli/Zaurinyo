import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURl = "http://localhost:3000/users";

export const getUser = createAsyncThunk("wishlist/getUser", async () => {
  const { data } = await axios.get(baseURl);
  const existUser = data.find((user) => user.isLogin === true);
  return existUser;
});

export const updateWishlist = createAsyncThunk(
  "wishlist/updateWishlist",
  async (product, { getState }) => {
    const state = getState();
    const user = state.wishlist.user;
    
    const updatedWishlist = user.Wishlist.find((item) => item.id === product.id)
      ? user.Wishlist.filter((item) => item.id !== product.id)
      : [...user.Wishlist, product];
      
    await axios.patch(`${baseURl}/${user.id}`, {
      Wishlist: updatedWishlist,
    });

    return updatedWishlist;
  }
);

const initialState = {
  user: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateWishlist.fulfilled, (state, action) => {
      state.user.wishlist = action.payload;
    });
  },
});

export default wishlistSlice.reducer;
