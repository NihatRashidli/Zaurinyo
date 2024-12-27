import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalPrice: 0,
}


const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            console.log(action.payload)
            const existProduct = state.products.find((product) => product.id === action.payload.id)
            if (!existProduct) {
                state.products.push({ ...action.payload, quantity: 1 })
            } else {
                existProduct.quantity += 1
            }
        }
    }
})

export const {addBasket} = basketSlice.actions;
export default basketSlice.reducer;