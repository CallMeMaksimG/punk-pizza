function Card() {
    return <article className="card">
        <div className="card__photo"><img src="./../img/cards/pizza/4cheeses.jpg" alt="4cheeses" className="card__img"/></div>
        <h2 className="card__title">Четыре сыра</h2>
        <p className="card__weight">330г</p>
        <div className="card__pizza-size">
            <ul className="pizza-size__list">
                <li className="pizza-size__list-item pizza-size__list-item--active">20 см</li>
                <li className="pizza-size__list-item">30 см</li>
            </ul>
        </div>
        <div className="card__footer">
            <div className="card__price">от 390 р</div>
            <button className="card__btn">
                <img src="./../../img/icons/plus.svg" alt="add to cart" />
            </button>
        </div>
    </article>;
}

export default Card;
