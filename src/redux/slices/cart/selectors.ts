import { RootState } from "../../store";

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemByIdAndSize =
    (id: string, size: number) => (state: RootState) =>
        state.cart.items.find((obj) => obj.id === id && obj.size === size);
export const selectOpenCart = (state: RootState) => state.cart.isOpen;
export const selectOpenConfirmWindow = (state: RootState) =>
    state.cart.isOpenConfirmWindow;