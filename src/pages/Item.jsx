import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Item() {
    const [item, setItem] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

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
                <div className="item__img">
                    <img src={item.img} alt="" />
                </div>
                <div className="item__info">
                    <h1 className="item__title">{item.title}</h1>
                    <p className="item__weight">{item.weight[0]}</p>
                    <div className="item__size">{item.size}</div>
                    <p className="item__description">DESCRIPTION</p>
                    <p className="item__price">{item.price[0]}</p>
                    <button className="item__add-btn">ADD</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
