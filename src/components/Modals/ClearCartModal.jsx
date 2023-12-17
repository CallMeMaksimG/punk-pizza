function ClearCartModal() {
    return (
        <>
            <div className="clear-cart__overlay clear-cart__overlay--open"></div>
            <div className="clear-cart clear-cart--open">
            <button  className="clear-cart__close-btn">
                    <img src="./../../img/icons/close.svg" alt="close" />
                </button>
                <h3 className="clear-cart__title">Очистить корзину?</h3>
                <div className="clear-cart__buttons">
                    <button className="clear-cart__confirm-btn">Да</button>
                    <button className="clear-cart__cancell-btn">Отмена</button>
                </div>
            </div>
        </>
    );
}

export default ClearCartModal;
