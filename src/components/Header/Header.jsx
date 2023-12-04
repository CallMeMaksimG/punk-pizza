function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav nav">
                    <div className="nav__logo">
                        <img
                            src="./../img/header/logo-pizza.png"
                            alt="LOGO"
                            className="nav__logo-img"
                        />
                        <h1 className="nav__title">PUNK<br/>PIZZA</h1>
                    </div>
                    <form action="" className="nav__search search-form">
                        <input type="text" placeholder="Поиск..." className="search-form__input" />
                    </form>
                    <div className="cart">
                        <div className="cart__total-price">1000 P</div>
                        <img src="./../img/icons/cart.svg" alt="cart" className="cart__image" />
                        <div className="cart__count">0</div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
