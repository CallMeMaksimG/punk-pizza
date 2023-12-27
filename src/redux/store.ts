import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import itemsSlice from './slices/itemsSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        items: itemsSlice
    },
});


export type RootState = ReturnType<typeof store.getState>;
export default store;
