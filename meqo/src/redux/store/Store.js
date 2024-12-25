import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import { productSlice } from '../features/productSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    products:productSlice.reducer,
  },
});
