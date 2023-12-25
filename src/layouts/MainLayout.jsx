// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Header from './../components/Header/Header';
// import ModalInfo from './../components/ModalInfo/ModalInfo';
// import Cart from './../components/Cart/Cart';
// import ClearCartModal from './../components/Modals/ClearCartModal';
// import CartMobileBtn from './../components/CartMobileBtn/CartMobileBtn';
import { openCart, selectOpenCart } from './../redux/slices/cartSlice';

import { Outlet } from 'react-router-dom';
import AppLeft from './AppLeft';
import AppRigth from './AppRight';
import Home from '../pages/Home';

function MainLayout() {
    // const dispatch = useDispatch();
    // const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    // const [isModalClearCartOpen, setIsModalClearCartOpen] = useState(false);
    const isCartOpen = useSelector(selectOpenCart);

    // const handleClickCartIcon = () => {
    //     dispatch(openCart());
    // };

    // const handleClickInfoIcon = () => {
    //     setIsModalInfoOpen(true);
    // };

    return (
        <div className="App">
            <div
                className={
                    isCartOpen
                        ? 'cart-pop-up__overlay cart-pop-up__overlay--open'
                        : 'cart-pop-up__overlay'
                }
            ></div>
            <AppLeft />
            <AppRigth />
            {/* <div
                className={
                    isCartOpen ? 'App__left App__left--open' : 'App__left'
                }
            >
                <ClearCartModal
                    isModalClearCartOpen={isModalClearCartOpen}
                    setIsModalClearCartOpen={setIsModalClearCartOpen}
                />
                <ModalInfo
                    isModalInfoOpen={isModalInfoOpen}
                    setIsModalInfoOpen={setIsModalInfoOpen}
                />
                <Header
                    handleClickInfoIcon={handleClickInfoIcon}
                    handleClickCartIcon={handleClickCartIcon}
                />
                </div> */}
            {/* <div
                    className={
                        isCartOpen
                            ? 'App__right App__right--open'
                            : 'App__right'
                    }
                >
                    <Cart setIsModalClearCartOpen={setIsModalClearCartOpen} />
                </div>
                <CartMobileBtn handleClickCartIcon={handleClickCartIcon} />
                */}
        </div>
    );
}

export default MainLayout;
