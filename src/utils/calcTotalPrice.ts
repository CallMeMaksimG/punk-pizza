import { ICartItem } from "../redux/slices/cart/types";

export const calcTotalPrice = (items: ICartItem[]) => {
    return items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
};
