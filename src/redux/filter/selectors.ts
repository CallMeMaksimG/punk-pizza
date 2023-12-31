import { RootState } from "../store";

export const selectCategoryFilter = (state: RootState) => state.filter.categoryId;
export const selectSortFilter = (state: RootState) => state.filter.sort;
export const selectCurrentPage = (state: RootState) => state.filter.currentPage;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;