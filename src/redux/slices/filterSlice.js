import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sort: {
        name: 'Сортировка',
        sortProperty: '',
    }
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategoryFilter: (state, action) => {
            state.categoryId = action.payload;
        },
        setSortMethod: (state, action) => {
            state.sort = action.payload;
        }
    },
});

export const { setCategoryFilter, setSortMethod } = filterSlice.actions;

export const selectCategoryFilter = (state) => state.filter.categoryId;
export const selectSortFilter = (state) => state.filter.sort;
 

export default filterSlice.reducer;
