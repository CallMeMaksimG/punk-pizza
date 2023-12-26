import { useSelector } from 'react-redux';
import { selectOpenCart } from '../redux/slices/cartSlice';
import AppLeft from './AppLeft';
import AppRigth from './AppRight';

const MainLayout: React.FC = () => {
    const isCartOpen = useSelector(selectOpenCart);

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
        </div>
    );
}

export default MainLayout;
