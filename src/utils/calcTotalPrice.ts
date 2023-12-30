import { ICartItem } from '../redux/slices/cartSlice';

export const calcTotalPrice = (items: ICartItem[]) => {
    return items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
};
