function Cart(setIsCartOpen) {
    return (
        <div className="cart-pop-up">
            <div className="cart-pop-up__header">
                <h2 className="cart-pop-up__header-title">Корзина</h2>
                <button className="cart-pop-up__header-clear-btn">
                    Очистить
                </button>
                <button  className="cart-pop-up__close-btn">
                    <img src="./../../img/icons/close.svg" alt="close" />
                </button>
            </div>
            <div className="cart-pop-up__main">
                <div className="cart-pop-up__items">
                    <ul className="cart-pop-up__list">
                        <li className="cart-pop-up__list-items">
                            <div className="cart-pop-up__items-img">
                                <img
                                    src="./../../img/cards/pizza/buratta.jpg"
                                    alt="items"
                                />
                            </div>
                            <div className="cart-pop-up__items-info">
                                <p className="cart-pop-up__info-title">Буратта</p>
                                <div className="cart-pop-up__items-info__footer">
                                    <p className="cart-pop-up__items-price">
                                        600 Р
                                    </p>{' '}
                                    <p className="cart-pop-up__items-weight">
                                        450г
                                    </p>
                                </div>
                            </div>
                            <div className="cart-pop-up__items-counter">
                                <button className="cart-pop-up__items-counter-plus">
                                    -
                                </button>{' '}
                                <span className="cart-pop-up__items-counter-count">
                                    1
                                </span>{' '}
                                <button className="cart-pop-up__items-counter-minus">
                                    +
                                </button>
                            </div>
                        </li>
                        <li className="cart-pop-up__list-items">
                            <div className="cart-pop-up__items-img">
                                <img
                                    src="./../../img/cards/pizza/buratta.jpg"
                                    alt="items"
                                />
                            </div>
                            <div className="cart-pop-up__items-info">
                                <p className="cart-pop-up__info-title">Буратта</p>
                                <div className="cart-pop-up__items-info__footer">
                                    <p className="cart-pop-up__items-price">
                                        600 Р
                                    </p>{' '}
                                    <p className="cart-pop-up__items-weight">
                                        450г
                                    </p>
                                </div>
                            </div>
                            <div className="cart-pop-up__items-counter">
                                <button className="cart-pop-up__items-counter-plus">
                                    -
                                </button>{' '}
                                <span className="cart-pop-up__items-counter-count">
                                    1
                                </span>{' '}
                                <button className="cart-pop-up__items-counter-minus">
                                    +
                                </button>
                            </div>
                        </li>
                        <li className="cart-pop-up__list-items">
                            <div className="cart-pop-up__items-img">
                                <img
                                    src="./../../img/cards/pizza/buratta.jpg"
                                    alt="items"
                                />
                            </div>
                            <div className="cart-pop-up__items-info">
                                <p className="cart-pop-up__info-title">Буратта</p>
                                <div className="cart-pop-up__items-info__footer">
                                    <p className="cart-pop-up__items-price">
                                        600 Р
                                    </p>{' '}
                                    <p className="cart-pop-up__items-weight">
                                        450г
                                    </p>
                                </div>
                            </div>
                            <div className="cart-pop-up__items-counter">
                                <button className="cart-pop-up__items-counter-plus">
                                    -
                                </button>{' '}
                                <span className="cart-pop-up__items-counter-count">
                                    1
                                </span>{' '}
                                <button className="cart-pop-up__items-counter-minus">
                                    +
                                </button>
                            </div>
                        </li>
                        <li className="cart-pop-up__list-items">
                            <div className="cart-pop-up__items-img">
                                <img
                                    src="./../../img/cards/pizza/buratta.jpg"
                                    alt="items"
                                />
                            </div>
                            <div className="cart-pop-up__items-info">
                                <p className="cart-pop-up__info-title">Буратта</p>
                                <div className="cart-pop-up__items-info__footer">
                                    <p className="cart-pop-up__items-price">
                                        600 Р
                                    </p>{' '}
                                    <p className="cart-pop-up__items-weight">
                                        450г
                                    </p>
                                </div>
                            </div>
                            <div className="cart-pop-up__items-counter">
                                <button className="cart-pop-up__items-counter-plus">
                                    -
                                </button>{' '}
                                <span className="cart-pop-up__items-counter-count">
                                    1
                                </span>{' '}
                                <button className="cart-pop-up__items-counter-minus">
                                    +
                                </button>
                            </div>
                        </li>
                        <li className="cart-pop-up__list-items">
                            <div className="cart-pop-up__items-img">
                                <img
                                    src="./../../img/cards/pizza/buratta.jpg"
                                    alt="items"
                                />
                            </div>
                            <div className="cart-pop-up__items-info">
                                <p className="cart-pop-up__info-title">Буратта</p>
                                <div className="cart-pop-up__items-info__footer">
                                    <p className="cart-pop-up__items-price">
                                        600 Р
                                    </p>{' '}
                                    <p className="cart-pop-up__items-weight">
                                        450г
                                    </p>
                                </div>
                            </div>
                            <div className="cart-pop-up__items-counter">
                                <button className="cart-pop-up__items-counter-plus">
                                    -
                                </button>{' '}
                                <span className="cart-pop-up__items-counter-count">
                                    1
                                </span>{' '}
                                <button className="cart-pop-up__items-counter-minus">
                                    +
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cart-pop-up__devices">
                    <div className="cart-pop-up__devices-info">
                        <img src="./../../img/icons/devices.svg" alt="devices" />
                        <p>Приборы</p>
                    </div>
                    <div className="cart-pop-up__devices-counter">
                        <button className="cart-pop-up__devices-counter-plus">
                            -
                        </button>{' '}
                        <span className="cart-pop-up__devices-counter-count">1</span>{' '}
                        <button className="cart-pop-up__devices-counter-minus">
                            +
                        </button>
                    </div>
                </div>
                <div>DELIVERY</div>
                <div>COMMENT</div>
                <div>SUMMA</div>
                <div>TIME</div>
                <div>BUTTON ORDER</div>
            </div>
        </div>
    );
}

export default Cart;
