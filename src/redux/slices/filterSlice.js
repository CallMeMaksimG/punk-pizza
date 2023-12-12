import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategoryFilter: (state, action) => {
            return state = action.payload;
        },
    },
});

export const { setCategoryFilter } = filterSlice.actions;

export const selectCategoryFilter = (state) => state.filter;

export default filterSlice.reducer;
