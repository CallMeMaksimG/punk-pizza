import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectors';
import { openCart, openConfirmWindow } from '../../redux/cart/slice';
import { ICartItem } from '../../redux/cart/types';
import { useAppDispatch } from '../../redux/store';
import CartItem from '../CartItem/CartItem';

interface ICartProps {
    setIsModalDeliveryOpen: (value: boolean) => void;
}

const Cart: React.FC<ICartProps> = ({ setIsModalDeliveryOpen }) => {
    const { items, totalPrice } = useSelector(selectCart);
    const dispatch = useAppDispatch();

    const onClickClear = () => {
        dispatch(openConfirmWindow());
    };

    function closeCart() {
        dispatch(openCart());
    }

    return (
        <>
            <div className="cart-pop-up">
                <div className="cart-pop-up__header">
                    <h2 className="cart-pop-up__header-title">Корзина</h2>
                    {items.length > 0 && (
                        <button
                            onClick={onClickClear}
                            className="cart-pop-up__header-clear-btn"
                        >
                            Очистить
                        </button>
                    )}

                    <button
                        onClick={closeCart}
                        className="cart-pop-up__close-btn"
                    >
                        <img src="./../../img/icons/close.svg" alt="close" />
                    </button>
                </div>
                <div className="cart-pop-up__main">
                    <div className="cart-pop-up__items">
                        {items.length > 0 ? (
                            <ul className="cart-pop-up__list">
                                {items.map((item: ICartItem) => {
                                    return (
                                        <CartItem
                                            key={item.id + item.size}
                                            {...item}
                                        />
                                    );
                                })}
                            </ul>
                        ) : (
                            <p className="cart-pop-up__empty">
                                В корзине пусто
                            </p>
                        )}
                    </div>
                    <div className="cart-pop-up__devices">
                        <div className="cart-pop-up__devices-info">
                            <img
                                src="./../../img/icons/devices.svg"
                                alt="devices"
                            />
                            <p>Приборы</p>
                        </div>
                        <div className="cart-pop-up__devices-counter">
                            <button className="cart-pop-up__devices-counter-plus">
                                <img
                                    src="./../img/icons/minus-dark.svg"
                                    alt="minus"
                                />
                            </button>{' '}
                            <span className="cart-pop-up__devices-counter-count">
                                1
                            </span>{' '}
                            <button className="cart-pop-up__devices-counter-minus">
                                <img
                                    src="./../img/icons/plus-dark.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsModalDeliveryOpen(true)}
                        className="cart-pop-up__delivery"
                    >
                        <img
                            src="./../../img/icons/delivery-black.svg"
                            alt="delivery"
                        />
                        Адрес доставки
                    </button>
                    <button className="cart-pop-up__comment">
                        {' '}
                        <img
                            src="./../../img/icons/comment.svg"
                            alt="comment"
                        />
                        Комментарий
                    </button>
                    <div className="cart-pop-up__total-price">
                        <span>Сумма заказа</span>
                        <span className="cart-pop-up__total-price-value">
                            {totalPrice} &#8381;
                        </span>
                    </div>
                    <div className="cart-pop-up__waiting-time">
                        <span>Время ожидания </span>
                        <span className="cart-pop-up__time-value">~35 мин</span>
                    </div>
                    <button className="cart-pop-up__checkout-btn">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
