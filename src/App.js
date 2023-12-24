import Header from './components/Header/Header';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ModalInfo from './components/ModalInfo/ModalInfo';
import Cart from './components/Cart/Cart';
import ClearCartModal from './components/Modals/ClearCartModal';
import CartMobileBtn from './components/CartMobileBtn/CartMobileBtn';
import Item from './pages/Item';
import { openCart, selectOpenCart } from './redux/slices/cartSlice';

function App() {
    const dispatch = useDispatch();
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const [isModalClearCartOpen, setIsModalClearCartOpen] = useState(false);
    const isCartOpen = useSelector(selectOpenCart);

    const handleClickCartIcon = () => {
        dispatch(openCart());
    };

    const handleClickInfoIcon = () => {
        setIsModalInfoOpen(true);
    };

    return (
        <div className="App">
            <div
                className={
                    isCartOpen
                        ? 'cart-pop-up__overlay cart-pop-up__overlay--open'
                        : 'cart-pop-up__overlay'
                }
            ></div>
            <div
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
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/item/:id" element={<Item />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
            <div
                className={
                    isCartOpen ? 'App__right App__right--open' : 'App__right'
                }
            >
                <Cart setIsModalClearCartOpen={setIsModalClearCartOpen} />
            </div>
            <CartMobileBtn handleClickCartIcon={handleClickCartIcon} />
        </div>
    );
}

export default App;
