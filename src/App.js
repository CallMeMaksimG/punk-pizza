import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ModalInfo from './components/ModalInfo/ModalInfo';
import Cart from './components/Cart/Cart';
import ClearCartModal from './components/Modals/ClearCartModal';
import CartMobileBtn from './components/CartMobileBtn/CartMobileBtn';

export const SearchContext = createContext();

function App() {
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const [isModalClearCartOpen, setIsModalClearCartOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleClickCartIcon = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleClickInfoIcon = () => {
        setIsModalInfoOpen(true);
    };

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="App">
            <div
                className={
                    isCartOpen ? 'App__left App__left--open' : 'App__left'
                }
            >
                <ClearCartModal
                    isModalClearCartOpen={isModalClearCartOpen}
                    setIsModalClearCartOpen={setIsModalClearCartOpen}
                />
                <SearchContext.Provider value={{ searchValue, setSearchValue }}>
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
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                </SearchContext.Provider>
            </div>
            <div
                className={
                    isCartOpen ? 'App__right App__right--open' : 'App__right'
                }
            >
                <Cart
                    setIsModalClearCartOpen={setIsModalClearCartOpen}
                    setIsCartOpen={setIsCartOpen}
                />
            </div>
            <CartMobileBtn handleClickCartIcon={handleClickCartIcon}/>
        </div>
    );
}

export default App;
