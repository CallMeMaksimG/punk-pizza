import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addItem,
    selectCartItemByIdAndSize,
} from '../../redux/slices/cartSlice';

const sizeValues = [20, 30];

type TCardProps = {
    id: string;
    img: string;
    title: string;
    weight: number[];
    price: number[];
    sizes: number[];
}

const Card: React.FC<TCardProps> = ({ id, img, title, weight, price, sizes }) => {
    const [activeSize, setActiveSize] = useState<number>(0);
    const dispatch = useDispatch();
    const cartItem = useSelector(
        selectCartItemByIdAndSize(id, sizeValues[activeSize])
    );

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickSize = (e: any, index: number) => {
        e.preventDefault();
        setActiveSize(index);
    };

    const onClickAdd = (e: any) => {
        e.preventDefault();
        const item = {
            id,
            img,
            title,
            weight: weight[activeSize],
            price: price[activeSize],
            size: sizeValues[activeSize],
        };
        dispatch(addItem(item));
    };
    return (
        <article className="card">
            <div className="card__photo">
                <img src={img} alt={title} className="card__img" />
            </div>
            <h2 className="card__title">{title}</h2>
            <p className="card__weight">{weight[activeSize]}г</p>
            <div className="card__pizza-size">
                {sizes && (
                    <ul className="pizza-size__list">
                        {sizes?.map((size, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={(e) => onClickSize(e, index)}
                                    className={
                                        activeSize === index
                                            ? 'pizza-size__list-item pizza-size__list-item--active'
                                            : 'pizza-size__list-item'
                                    }
                                >
                                    {size} см
                                </button>
                            );
                        })}
                    </ul>
                )}
            </div>
            <div className="card__footer">
                <div className="card__price">{price[activeSize]} &#8381;</div>
                {addedCount > 0 && cartItem.size === sizeValues[activeSize] ? (
                    <button className="card__btn--active">
                        <img src="./../../img/icons/minus.svg" alt="minus" />
                        {addedCount}
                        <img
                            onClick={onClickAdd}
                            src="./../../img/icons/plus.svg"
                            alt="add to cart"
                        />
                    </button>
                ) : (
                    <button onClick={onClickAdd} className="card__btn">
                        <img
                            src="./../../img/icons/plus.svg"
                            alt="add to cart"
                        />
                    </button>
                )}
            </div>
        </article>
    );
}

export default Card;