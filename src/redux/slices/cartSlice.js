import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
    isOpen: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size
            );
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
            state.totalPrice = state.items.reduce(
                (sum, obj) => sum + obj.price * obj.count,
                0
            );
        },
        minusItem: (state, action) => {
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size
            );
            if (findItem) {
                findItem.count--;
                state.totalPrice -= action.payload.price;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (obj) =>
                    obj.id !== action.payload.id ||
                    obj.size !== action.payload.size
            );
            state.totalPrice -= action.payload.price;
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        openCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const selectCart = (state) => state.cart;
export const selectCartItemByIdAndSize = (id, size) => (state) =>
    state.cart.items.find((obj) => obj.id === id && obj.size === size);
export const selectOpenCart = (state) => state.cart.isOpen;

export const { addItem, removeItem, minusItem, clearItems, openCart } =
    cartSlice.actions;

export default cartSlice.reducer;
