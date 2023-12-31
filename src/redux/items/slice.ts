import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFetchItemsArgs, IItem, IItemSliceState, Status } from './types';

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async (params: IFetchItemsArgs) => {
        const { order, sortBy, category, search, currentPage } = params;
        const res = await axios.get(
            `https://657421eff941bda3f2af644e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        );
        return res.data as IItem[];
    }
);

const initialState: IItemSliceState = {
    items: [],
    status: Status.LOADING,
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {
        setItems: (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchItems.fulfilled, (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
