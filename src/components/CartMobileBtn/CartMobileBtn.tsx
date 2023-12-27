import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';
 
type TCartMobileBtnProps = {
    handleClickCartIcon: () => void;
}

const CartMobileBtn: React.FC<TCartMobileBtnProps> = ({ handleClickCartIcon }) => {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
    return (
        <div onClick={handleClickCartIcon} className="cart-mobile-btn">
            <div className="cart-mobile-btn__counter">{totalCount}</div>
            <p className="cart-mobile-btn__title">Ваш заказ</p>
            <p className="cart-mobile-btn__price">{totalPrice} &#8381;</p>
        </div>
    );
}

export default CartMobileBtn;
