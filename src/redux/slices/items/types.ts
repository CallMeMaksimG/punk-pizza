export interface IFetchItemsArgs {
    order: string;
    sortBy: string;
    category: string;
    search: string;
    currentPage: number;
};

export interface IItem {
    id: string;
    img: string;
    title: string;
    description: string;
    weight: number[];
    price: number[];
    sizes: number[];
};

export interface IItemSliceState {
    items: IItem[];
    status: Status;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
};

export type TSearchItemParams = {
    order: string;
    sortMethod: string;
    categoryId: string;
    search: string; 
    currentPage: string;
};