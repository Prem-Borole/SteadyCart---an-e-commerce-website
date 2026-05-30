import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cart")) || []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);

            localStorage.setItem(
                "cart",
                JSON.stringify(state.cartItems)
            );
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;