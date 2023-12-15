import { Link } from 'react-router-dom';
import Search from '../Search/Search';

function Header({ handleClickInfoIcon, handleClickCartIcon }) {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav nav">
                    <Link className="nav__link" to="/">
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
                    <Search />
                    <div className="nav__right">
                        <button
                            onClick={handleClickInfoIcon}
                            className="nav__info"
                        >
                            i
                        </button>
                        <button onClick={handleClickCartIcon} className="cart">
                            <div className="cart__total-price">
                                1000 &#8381;
                            </div>
                            <img
                                src="./../img/icons/cart.svg"
                                alt="cart"
                                className="cart__image"
                            />
                            <div className="cart__count">0</div>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
