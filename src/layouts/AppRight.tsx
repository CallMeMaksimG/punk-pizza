import { useSelector } from 'react-redux';
import Cart from '../components/Cart/Cart';
import CartMobileBtn from '../components/CartMobileBtn/CartMobileBtn';
import { selectOpenCart } from '../redux/cart/selectors';
import { openCart } from '../redux/cart/slice';
import { useAppDispatch } from '../redux/store';

interface IAppRightProps {
    setIsModalDeliveryOpen: (value: boolean) => void;
}

const AppRigth: React.FC<IAppRightProps> = ({ setIsModalDeliveryOpen }) => {
    const dispatch = useAppDispatch();
    const isCartOpen = useSelector(selectOpenCart);

    const handleClickCartIcon = () => {
        dispatch(openCart());
    };

    return (
        <>
            <div
                className={
                    isCartOpen ? 'App__right App__right--open' : 'App__right'
                }
            >
                <Cart setIsModalDeliveryOpen={setIsModalDeliveryOpen} />
            </div>
            <CartMobileBtn handleClickCartIcon={handleClickCartIcon} />
        </>
    );
};

export default AppRigth;
