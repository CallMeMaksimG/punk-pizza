import React from 'react';
import { useSelector } from 'react-redux';
import { selectOpenConfirmWindow } from '../../redux/slices/cart/selectors';
import { clearItems, openConfirmWindow } from '../../redux/slices/cart/slice';
import { useAppDispatch } from '../../redux/store';

const ClearCartModal: React.FC = function () {
    const dispatch = useAppDispatch();
    const isConfirmWindowOpen = useSelector(selectOpenConfirmWindow);

    function onClickConfirmClear() {
        dispatch(clearItems());
        dispatch(openConfirmWindow());
    }

    return (
        <>
            <div
                className={
                    isConfirmWindowOpen
                        ? 'clear-cart__overlay clear-cart__overlay--open'
                        : 'clear-cart__overlay'
                }
            ></div>
            <div
                className={
                    isConfirmWindowOpen
                        ? 'clear-cart clear-cart--open'
                        : 'clear-cart'
                }
            >
                <button
                    onClick={() => dispatch(openConfirmWindow())}
                    className="clear-cart__close-btn"
                >
                    <img src="./../../img/icons/close.svg" alt="close" />
                </button>
                <h3 className="clear-cart__title">Очистить корзину?</h3>
                <div className="clear-cart__buttons">
                    <button
                        onClick={onClickConfirmClear}
                        className="clear-cart__confirm-btn"
                    >
                        Да
                    </button>
                    <button
                        onClick={() => dispatch(openConfirmWindow())}
                        className="clear-cart__cancell-btn"
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </>
    );
}

export default ClearCartModal;
