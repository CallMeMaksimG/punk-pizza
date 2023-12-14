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
        setCategoryFilter: (state, action) => {
            state.categoryId = action.payload;
        },
        setSortMethod: (state, action) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action) => {
            state.currentPage = Number(action.payload.currentPage);
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
        },
    },
});

export const { setCategoryFilter, setSortMethod, setCurrentPage, setFilters } =
    filterSlice.actions;

export const selectCategoryFilter = (state) => state.filter.categoryId;
export const selectSortFilter = (state) => state.filter.sort;
export const selectCurrentPageFilter = (state) => state.filter.currentPage;
export default filterSlice.reducer;
