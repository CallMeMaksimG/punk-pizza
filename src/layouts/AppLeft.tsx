import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import ModalInfo from '../components/ModalInfo/ModalInfo';
import ClearCartModal from '../components/Modals/ClearCartModal';
import { selectOpenCart } from '../redux/slices/cart/selectors';
import { openCart } from '../redux/slices/cart/slice';
import { useAppDispatch } from '../redux/store';

const AppLeft = () => {
    const dispatch = useAppDispatch();
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const isCartOpen = useSelector(selectOpenCart);

    const handleClickCartIcon = () => {
        dispatch(openCart());
    };

    const handleClickInfoIcon = () => {
        setIsModalInfoOpen(true);
    };
    return (
        <div className={isCartOpen ? 'App__left App__left--open' : 'App__left'}>
            <ClearCartModal />
            <ModalInfo
                isModalInfoOpen={isModalInfoOpen}
                setIsModalInfoOpen={setIsModalInfoOpen}
            />
            <Header
                handleClickInfoIcon={handleClickInfoIcon}
                handleClickCartIcon={handleClickCartIcon}
            />
            <Outlet />
        </div>
    );
};

export default AppLeft;
