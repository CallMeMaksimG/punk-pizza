import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface IFetchItemsArgs {
    order: string;
    sortBy: string;
    category: string;
    search: string;
    currentPage: number;
}

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
    status: 'loading' | 'success' | 'error';
}

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
    status: 'loading',
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
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchItems.fulfilled, (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload;
            state.status = 'success';
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
