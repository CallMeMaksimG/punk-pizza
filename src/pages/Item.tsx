import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    addItem,
    selectCartItemByIdAndSize,
} from '../redux/slices/cartSlice';

const sizeValues = [20, 30];

function Item() {
    const dispatch = useDispatch();
    const [item, setItem] = useState<{
        id: string;
        img: string;
        title: string;
        description: string;
        weight: [number];
        price: [number];
        sizes: [number];
    }>();

    const { id } = useParams();
    const navigate = useNavigate();
    const [activeSize, setActiveSize] = useState(0);
    const cartItem = useSelector(
        selectCartItemByIdAndSize(id, sizeValues[activeSize])
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
        // type data =  {
        //     id: string;
        //     img: string;
        //     title: string;
        //     weight: number;
        //     price: number;
        //     size: number;
        // }
        const itemData = {
            id: item.id,
            img: item.img,
            title: item.title,
            weight: item.weight[activeSize],
            price: item.price[activeSize],
            size: item.sizes[activeSize],
        };
        dispatch(addItem(itemData));
        console.log(itemData)
    };

    if (!item) {
        return <>Загрузка...</>;
    }
    return (
        <div className="item">
            <div className="container">
                <Link to="/">
                    <button className="item__prev-btn">
                        <img
                            src="./../../img/icons/arrow-prev.svg"
                            alt="arrow-prev"
                        />
                    </button>
                </Link>
                <div className="item__wrapper">
                    <div className="item__img">
                        <img src={item.img} alt="" />
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
                            {addedCount > 0 &&
                            cartItem.size === sizeValues[activeSize] ? (
                                <button className="item__add-btn--active">
                                    <img
                                        src="./../../img/icons/minus.svg"
                                        alt="minus"
                                    />
                                    {addedCount}
                                    <img
                                        onClick={onClickAdd}
                                        src="./../../img/icons/plus.svg"
                                        alt="add to cart"
                                    />
                                </button>
                            ) : (
                                <button className="item__add-btn" onClick={onClickAdd}>
                                    <img
                                        src="./../../img/icons/plus.svg"
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
}

export default Item;
