import Header from './../components/Header/Header';
import ModalInfo from './../components/ModalInfo/ModalInfo';
import Cart from './../components/Cart/Cart';
import ClearCartModal from './../components/Modals/ClearCartModal';
import CartMobileBtn from './../components/CartMobileBtn/CartMobileBtn';

function MainLayout({
    isCartOpen,
    isModalClearCartOpen,
    setIsModalClearCartOpen,
    isModalInfoOpen,
    setIsModalInfoOpen,
    handleClickCartIcon,
    handleClickInfoIcon,
    setIsCartOpen
}) {
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
                <ModalInfo
                    isModalInfoOpen={isModalInfoOpen}
                    setIsModalInfoOpen={setIsModalInfoOpen}
                />
                <Header
                    handleClickInfoIcon={handleClickInfoIcon}
                    handleClickCartIcon={handleClickCartIcon}
                />
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
            <CartMobileBtn handleClickCartIcon={handleClickCartIcon} />
        </div>
    );
}

export default MainLayout;
