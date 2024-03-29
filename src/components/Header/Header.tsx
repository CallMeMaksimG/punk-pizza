import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '../Search/Search';
import { useEffect, useRef } from 'react';
import { selectCart } from '../../redux/cart/selectors';

type THeaderProps = {
    handleClickInfoIcon: () => void;
    handleClickCartIcon: () => void;
};

const Header: React.FC<THeaderProps> = ({
    handleClickInfoIcon,
    handleClickCartIcon,
}) => {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce(
        (sum: number, item: any) => sum + item.count,
        0
    );
    const location = useLocation();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json);
        }
        isMounted.current = true;
    }, [items]);

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav nav">
                    <Link className="nav__link" to="/">
                        <div className="nav__logo">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/img/header/logo-pizza.png'
                                }
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
                    {!location.pathname.includes('/item') && <Search />}

                    <div className="nav__right">
                        <button
                            onClick={handleClickInfoIcon}
                            className="nav__info"
                        >
                            i
                        </button>
                        <button onClick={handleClickCartIcon} className="cart">
                            <div className="cart__total-price">
                                {totalPrice} &#8381;
                            </div>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/img/icons/cart.svg'
                                }
                                alt="cart"
                                className="cart__image"
                            />
                            <div className="cart__count">{totalCount}</div>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
