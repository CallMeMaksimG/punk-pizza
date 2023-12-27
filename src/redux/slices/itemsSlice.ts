import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async (params) => {
        const { order, sortBy, category, search, currentPage } = params;
        const res = await axios.get(
            `https://657421eff941bda3f2af644e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        );
        return res.data;
    }
);

interface IItem {
    id: string;
    img: string;
    title: string;
    description: string;
    weight: number[];
    price: number[];
    sizes: number[];
}

interface IItemSliceState {
    items: IItem[];
    status: 'loading' | 'succes' | 'error';
}

const initialState: IItemSliceState = {
    items: [],
    status: 'loading',
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'succes';
        });
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        });
    },
});

export const selectItemsData = (state: RootState) => state.items;
export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
