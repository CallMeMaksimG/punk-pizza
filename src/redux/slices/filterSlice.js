import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: '',
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
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
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

export const {
    setCategoryFilter,
    setSortMethod,
    setCurrentPage,
    setFilters,
    setSearchValue,
} = filterSlice.actions;

export const selectCategoryFilter = (state) => state.filter.categoryId;
export const selectSortFilter = (state) => state.filter.sort;
export const selectCurrentPage = (state) => state.filter.currentPage;
export const selectSearchValue = (state) => state.filter.searchValue;

export default filterSlice.reducer;
