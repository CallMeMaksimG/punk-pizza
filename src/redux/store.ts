import { configureStore } from '@reduxjs/toolkit';
import { useDispatch} from 'react-redux'
import filterReducer from './filter/slice';
import cartReducer from './cart/slice';
import itemsSlice from './items/slice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        items: itemsSlice
    },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch;

export default store;
