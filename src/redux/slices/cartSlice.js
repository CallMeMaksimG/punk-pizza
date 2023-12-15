import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'Сортировка',
        sortProperty: '',
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
       
    },
});