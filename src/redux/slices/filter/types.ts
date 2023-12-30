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


export interface IFilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: ISort;
}
