import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage';
import { ICartItem, ICartSliceState } from './types';

const { items, totalPrice } = getCartFromLocalStorage();

const initialState: ICartSliceState = {
    totalPrice,
    items,
    isOpen: false,
    isOpenConfirmWindow: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
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
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem: (state, action: PayloadAction<ICartItem>) => {
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
        removeItem: (
            state,
            action: PayloadAction<{ id: string; size: number; price: number }>
        ) => {
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
        openConfirmWindow: (state) => {
            state.isOpenConfirmWindow = !state.isOpenConfirmWindow;
        },
    },
});

export const {
    addItem,
    removeItem,
    minusItem,
    clearItems,
    openCart,
    openConfirmWindow,
} = cartSlice.actions;

export default cartSlice.reducer;
