import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

function Cart({ setIsCartOpen }) {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector((state) => state.cart);
    return (
        <div className="cart-pop-up">
            <div className="cart-pop-up__header">
                <h2 className="cart-pop-up__header-title">Корзина</h2>
                <button className="cart-pop-up__header-clear-btn">
                    Очистить
                </button>
                <button
                    onClick={() => setIsCartOpen(false)}
                    className="cart-pop-up__close-btn"
                >
                    <img src="./../../img/icons/close.svg" alt="close" />
                </button>
            </div>
            <div className="cart-pop-up__main">
                <div className="cart-pop-up__items">
                    {items.length > 0 ? (<ul className="cart-pop-up__list">
                        {items.map(item => {
                            return <CartItem key={item.id} {...item}/>
                        })}
                    </ul>) : (<p className='cart-pop-up__empty'>В корзине пусто</p>)}
                    
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
                <button className="cart-pop-up__delivery">
                    <img
                        src="./../../img/icons/delivery-black.svg"
                        alt="delivery"
                    />
                    Адрес доставки
                </button>
                <button className="cart-pop-up__comment">
                    {' '}
                    <img src="./../../img/icons/comment.svg" alt="comment" />
                    Комментарий
                </button>
                <div className="cart-pop-up__total-price">
                    <span>Сумма заказа</span>
                    <span>{totalPrice} &#8381;</span>
                </div>
                <div className="cart-pop-up__waiting-time">
                    <span>Время ожидания </span>
                    <span>~35 мин</span>
                </div>
                <button className="cart-pop-up__checkout-btn">
                    Оформить заказ
                </button>
            </div>
        </div>
    );
}

export default Cart;
