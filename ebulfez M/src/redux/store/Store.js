import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../store/feature/productsSlice';
import basketReducer from '../store/feature/basketSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: basketReducer,
    },
});