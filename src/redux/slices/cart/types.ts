export interface ICartItem {
    id: string;
    img: string;
    title: string;
    price: number;
    count: number;
    size: number;
    weight: number;
    description: string;
}

export interface ICartSliceState {
    totalPrice: number;
    items: ICartItem[];
    isOpen: boolean;
    isOpenConfirmWindow: boolean;
}
