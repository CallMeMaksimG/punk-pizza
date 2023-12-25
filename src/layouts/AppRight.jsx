import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './../components/Cart/Cart';
import CartMobileBtn from './../components/CartMobileBtn/CartMobileBtn';
import { openCart, selectOpenCart } from './../redux/slices/cartSlice';

function AppRigth() {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectOpenCart);
    const [isModalClearCartOpen, setIsModalClearCartOpen] = useState(false);


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
                <Cart setIsModalClearCartOpen={setIsModalClearCartOpen} />
            </div>
            <CartMobileBtn handleClickCartIcon={handleClickCartIcon} />
        </>
    );
}

export default AppRigth;
