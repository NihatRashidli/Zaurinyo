import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItemFromBasket: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
    },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

export default basketSlice.reducer;