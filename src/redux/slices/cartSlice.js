import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
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
    },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
