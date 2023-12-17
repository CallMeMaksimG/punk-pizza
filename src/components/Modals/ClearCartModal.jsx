function ClearCartModal({ isModalClearCartOpen, setIsModalClearCartOpen }) {
    return (
        <>
            <div
                className={
                    isModalClearCartOpen
                        ? 'clear-cart__overlay clear-cart__overlay--open'
                        : 'clear-cart__overlay'
                }
            ></div>
            <div
                className={
                    isModalClearCartOpen
                        ? 'clear-cart clear-cart--open'
                        : 'clear-cart'
                }
            >
                <button
                    onClick={() => setIsModalClearCartOpen(false)}
                    className="clear-cart__close-btn"
                >
                    <img src="./../../img/icons/close.svg" alt="close" />
                </button>
                <h3 className="clear-cart__title">Очистить корзину?</h3>
                <div className="clear-cart__buttons">
                    <button className="clear-cart__confirm-btn">Да</button>
                    <button
                        onClick={() => setIsModalClearCartOpen(false)}
                        className="clear-cart__cancell-btn"
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </>
    );
}

export default ClearCartModal;
