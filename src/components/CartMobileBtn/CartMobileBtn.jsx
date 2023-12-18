import { useSelector } from 'react-redux';

function CartMobileBtn() {
    const {items, totalPrice} = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    return (
        <div className="cart-mobile-btn">
            <div className="cart-mobile-btn__counter">{totalCount}</div>
            <p className="cart-mobile-btn__title">Ваш заказ</p>
            <p className="cart-mobile-btn__price">{totalPrice} &#8381;</p>
        </div>
    );
}

export default CartMobileBtn;
