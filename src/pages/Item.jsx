import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const sizeValues = [20, 30];

function Item() {
    const [item, setItem] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(item);
    const [activeSize, setActiveSize] = useState(0);

    const onClickSize = (index) => {
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

    if (!item) {
        return 'Загрузка...';
    }
    return (
        <div className="item">
            <div className="container">
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
                            <button className="item__add-btn">
                                <img
                                    src="./../../img/icons/plus.svg"
                                    alt="add to cart"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
