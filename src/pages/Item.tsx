import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectCartItemByIdAndSize } from '../redux/cart/selectors';
import { ICartItem } from '../redux/cart/types';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import Loader from '../components/Loader/Loader';

const sizeValues = [20, 30];

const Item: React.FC = function () {
    const dispatch = useAppDispatch();
    const [item, setItem] = useState<{
        id: string;
        img: string;
        title: string;
        description: string;
        weight: number[];
        price: number[];
        sizes: number[];
    }>();

    const { id } = useParams();
    const navigate = useNavigate();
    const [activeSize, setActiveSize] = useState(0);
    const cartItem = useSelector(
        selectCartItemByIdAndSize(id ?? '', sizeValues[activeSize])
    );
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickSize = (index: number) => {
        setActiveSize(index);
    };
    useEffect(() => {
        async function fetchItems() {
            try {
                const { data } = await axios.get(
                    `https://657421eff941bda3f2af644e.mockapi.io/items/${id}`
                );
                setItem(data);
            } catch (error) {
                alert('Ошибка при получении данных');
                console.log(error);
                navigate('/');
            }
        }
        fetchItems();
    }, []);

    const onClickAdd = () => {
        if (item) {
            if (item.sizes) {
                const itemData: ICartItem = {
                    id: item.id,
                    img: item.img,
                    title: item.title,
                    weight: item.weight[activeSize],
                    price: item.price[activeSize],
                    size: item.sizes[activeSize],
                    count: 0,
                    description: item.description,
                };
                dispatch(addItem(itemData));
            } else {
                const itemData = {
                    id: item.id,
                    img: item.img,
                    title: item.title,
                    weight: item.weight[activeSize],
                    price: item.price[activeSize],
                    count: 0,
                    description: item.description,
                };
                dispatch(addItem(itemData as ICartItem));
            }
        }
    };

    const onClickMinus = () => {
        const count = cartItem?.count;
        const id = cartItem?.id;
        const size = cartItem?.size;
        const price = cartItem?.price;

        if (count && count > 1) {
            dispatch(
                minusItem({
                    id,
                    size,
                    price,
                } as ICartItem)
            );
        } else {
            dispatch(removeItem({ id, size, price } as ICartItem));
        }
    };

    if (!item) {
        return <Loader />;
    }
    return (
        <div className="item">
            <div className="container">
                <Link to="/">
                    <button className="item__prev-btn">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/img/icons/arrow-prev.svg'
                            }
                            alt="arrow-prev"
                        />
                    </button>
                </Link>
                <div className="item__wrapper">
                    <div className="item__img">
                        <img src={process.env.PUBLIC_URL + item.img} alt="item" />
                    </div>
                    <div className="item__info">
                        <h1 className="item__title">{item.title}</h1>
                        <p className="item__weight">
                            {item.weight[activeSize]}г
                        </p>
                        <p className="item__description">{item.description}</p>
                        <div className="item__size">
                            {item.sizes && (
                                <ul className="item__size-list">
                                    {item.sizes?.map((size, index) => {
                                        return (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    onClickSize(index)
                                                }
                                                className={
                                                    activeSize === index
                                                        ? 'item__size-list-item item__size-list-item--active'
                                                        : 'item__size-list-item'
                                                }
                                            >
                                                {size} см
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                        <div className="item__footer">
                            <p className="item__price">
                                {item.price[activeSize]} &#8381;
                            </p>
                            {(addedCount > 0 &&
                                cartItem?.size === sizeValues[activeSize]) ||
                            addedCount > 0 ? (
                                <div className="item__add-btn--active">
                                    <button onClick={onClickMinus}>
                                        <img
                                            src={process.env.PUBLIC_URL + "/img/icons/minus.svg"}
                                            alt="minus"
                                        />
                                    </button>
                                    {addedCount}
                                    <button onClick={onClickAdd}>
                                        <img
                                            src={process.env.PUBLIC_URL + "/img/icons/plus.svg"}
                                            alt="add to cart"
                                        />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="item__add-btn"
                                    onClick={onClickAdd}
                                >
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/icons/plus.svg"}
                                        alt="add to cart"
                                    />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
