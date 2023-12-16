import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        // addItem: (state, action) => {
        //     state.items.push(action.payload);
        //     state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price, 0);
        // },
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
            if(findItem) {
                findItem.count--;
                state.totalPrice -=  action.payload.price;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload
            );
        },
        clearItems: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
