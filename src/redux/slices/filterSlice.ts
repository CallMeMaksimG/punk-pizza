import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
    RATING =  'rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    DEFAULT = '',
}

export interface ISort {
    name: string;
    sortProperty: SortPropertyEnum;
};


interface IFilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: ISort;
}

const initialState: IFilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'Сортировка',
        sortProperty: SortPropertyEnum.DEFAULT,
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategoryFilter: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setSortMethod: (state, action: PayloadAction<ISort>) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action: PayloadAction<IFilterSliceState>) => {
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

export const selectCategoryFilter = (state: RootState) => state.filter.categoryId;
export const selectSortFilter = (state: RootState) => state.filter.sort;
export const selectCurrentPage = (state: RootState) => state.filter.currentPage;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;

export default filterSlice.reducer;
