import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

function CartItem({ id, img, title, price, count, size, weight }) {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
                size,
            })
        );
    };

    const onClickMinus = () => {
        if (count > 1) {
            dispatch(
                minusItem({
                    id,
                    size,
                    price,
                })
            );
        } else {
            dispatch(removeItem({id, size, price}));
        }
    };

    return (
        <li className="cart-pop-up__list-items">
            <div className="cart-pop-up__items-img">
                <img src={img} alt="items" />
            </div>
            <div className="cart-pop-up__items-info">
                <h3 className="cart-pop-up__info-title">
                    {title} <span>{size}см</span>
                </h3>
                <div className="cart-pop-up__items-info__footer">
                    <p className="cart-pop-up__items-price">
                        {price * count} &#8381;
                    </p>{' '}
                    <p className="cart-pop-up__items-weight">{weight}г</p>
                </div>
            </div>
            <div className="cart-pop-up__items-counter">
                <button
                    onClick={onClickMinus}
                    className="cart-pop-up__items-counter-plus"
                >
                    <img src="./../img/icons/minus-dark.svg" alt="minus" />
                </button>{' '}
                <span className="cart-pop-up__items-counter-count">
                    {count}
                </span>{' '}
                <button
                    onClick={onClickPlus}
                    className="cart-pop-up__items-counter-minus"
                >
                    <img src="./../img/icons/plus-dark.svg" alt="plus" />
                </button>
            </div>
        </li>
    );
}

export default CartItem;
