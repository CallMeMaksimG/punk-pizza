import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ModalDelivery from '../components/ModalDelivery/ModalDelivery';
import ModalInfo from '../components/ModalInfo/ModalInfo';
import ClearCartModal from '../components/Modals/ClearCartModal';
import { selectOpenCart } from '../redux/cart/selectors';
import { openCart } from '../redux/cart/slice';
import { useAppDispatch } from '../redux/store';

interface IAppLeftProps {
    isModalDeliveryOpen: boolean;
    setIsModalDeliveryOpen: (value: boolean) => void;
}

const AppLeft: React.FC<IAppLeftProps> = ({
    isModalDeliveryOpen,
    setIsModalDeliveryOpen,
}) => {
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
                setIsModalDeliveryOpen={setIsModalDeliveryOpen}
            />
            <ModalDelivery
                isModalDeliveryOpen={isModalDeliveryOpen}
                setIsModalDeliveryOpen={setIsModalDeliveryOpen}
            />
            <Header
                handleClickInfoIcon={handleClickInfoIcon}
                handleClickCartIcon={handleClickCartIcon}
            />
            <Outlet />
            <Footer />
        </div>
    );
};

export default AppLeft;
