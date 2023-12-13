import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    pageCount: 1,
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
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload;
        }
    },
});

export const { setCategoryFilter, setSortMethod, setPageCount } = filterSlice.actions;

export const selectCategoryFilter = (state) => state.filter.categoryId;
export const selectSortFilter = (state) => state.filter.sort;
export const selectPageCountFilter = (state) => state.filter.pageCount;
 

export default filterSlice.reducer;
