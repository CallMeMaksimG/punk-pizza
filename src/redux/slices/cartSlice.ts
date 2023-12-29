import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICartItem {
    id: string,
    img: string;
    title: string;
    price: number;
    count: number;
    size: number;
    weight: number;
    description: string;
}

interface ICartSliceState {
    totalPrice: number;
    items: ICartItem[];
    isOpen: boolean;
    isOpenConfirmWindow: boolean;
}

const initialState: ICartSliceState = {
    totalPrice: 0,
    items: [],
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
            state.totalPrice = state.items.reduce(
                (sum, obj) => sum + obj.price * obj.count,
                0
            );
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
        removeItem: (state, action: PayloadAction<{id: string; size: number; price: number}>) => {
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

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemByIdAndSize = (id: string, size: number) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id && obj.size === size);
export const selectOpenCart = (state: RootState) => state.cart.isOpen;
export const selectOpenConfirmWindow = (state: RootState) =>
    state.cart.isOpenConfirmWindow;

export const {
    addItem,
    removeItem,
    minusItem,
    clearItems,
    openCart,
    openConfirmWindow,
} = cartSlice.actions;

export default cartSlice.reducer;
