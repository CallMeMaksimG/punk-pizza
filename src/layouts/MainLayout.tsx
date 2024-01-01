import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectOpenCart } from '../redux/cart/selectors';
import AppLeft from './AppLeft';
import AppRigth from './AppRight';

const MainLayout: React.FC = () => {
    const isCartOpen = useSelector(selectOpenCart);
    const [isModalDeliveryOpen, setIsModalDeliveryOpen] = useState(false);

    return (
        <div className="App">
            <div
                className={
                    isCartOpen
                        ? 'cart-pop-up__overlay cart-pop-up__overlay--open'
                        : 'cart-pop-up__overlay'
                }
            ></div>
            <AppLeft
                isModalDeliveryOpen={isModalDeliveryOpen}
                setIsModalDeliveryOpen={setIsModalDeliveryOpen}
            />
            <AppRigth setIsModalDeliveryOpen={setIsModalDeliveryOpen} />
        </div>
    );
};

export default MainLayout;
