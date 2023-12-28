import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart/Cart';
import CartMobileBtn from '../components/CartMobileBtn/CartMobileBtn';
import { openCart, selectOpenCart } from '../redux/slices/cartSlice';
import { useAppDispatch } from '../redux/store';

const AppRigth: React.FC = () => {
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
                <Cart />
            </div>
            <CartMobileBtn handleClickCartIcon={handleClickCartIcon} />
        </>
    );
}

export default AppRigth;
