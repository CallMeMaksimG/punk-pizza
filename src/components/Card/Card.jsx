import { useState } from 'react';

function Card({ img, title, weight, price, sizes }) {
    const [activeSize, setActiveSize] = useState(0);

    const onClickSize = (index) => {
        setActiveSize(index);
    };
    return (
        <article className="card">
            <div className="card__photo">
                <img src={img} alt={title} className="card__img" />
            </div>
            <h2 className="card__title">{title}</h2>
            <p className="card__weight">{weight[0]}г</p>
            <div className="card__pizza-size">
                {sizes && (
                    <ul className="pizza-size__list">
                        {sizes?.map((size, index) => {
                            return (
                                <li key={index}
                                    onClick={() => onClickSize(index)}
                                    className={
                                        activeSize === index
                                            ? 'pizza-size__list-item pizza-size__list-item--active'
                                            : 'pizza-size__list-item'
                                    }
                                >
                                    {size} см
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <div className="card__footer">
                <div className="card__price">от {price[0]} &#8381;</div>
                <button className="card__btn">
                    <img src="./../../img/icons/plus.svg" alt="add to cart" />
                </button>
            </div>
        </article>
    );
}

export default Card;
