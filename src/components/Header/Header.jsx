import { Link } from 'react-router-dom';

function Header({ handleClickInfoIcon }) {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav nav">
                    <Link className='nav__link' to="/">
                        <div className="nav__logo">
                            <img
                                src="./../img/header/logo-pizza.png"
                                alt="LOGO"
                                className="nav__logo-img"
                            />
                            <h1 className="nav__title">
                                PUNK
                                <br />
                                PIZZA
                            </h1>
                        </div>
                    </Link>
                    <form action="" className="nav__search search-form">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="search-form__input"
                        />
                        <div className="search-form__btn">
                            <img src="./../img/icons/search.svg" alt="search" />
                        </div>
                    </form>
                    <div className="nav__right">
                        <button
                            onClick={handleClickInfoIcon}
                            className="nav__info"
                        >
                            i
                        </button>
                        <div className="cart">
                            <div className="cart__total-price">
                                1000 &#8381;
                            </div>
                            <img
                                src="./../img/icons/cart.svg"
                                alt="cart"
                                className="cart__image"
                            />
                            <div className="cart__count">0</div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
