import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

const initialState = {
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
            state.status = 'success';
        });
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        });
    },
});

export const selectItemsData = (state) => state.items;
export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
