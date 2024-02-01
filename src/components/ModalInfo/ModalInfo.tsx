type TModalInfoProps = {
    isModalInfoOpen: boolean;
    setIsModalInfoOpen: (value: boolean) => void;
    setIsModalDeliveryOpen: (value: boolean) => void;
};

const ModalInfo: React.FC<TModalInfoProps> = ({
    isModalInfoOpen,
    setIsModalInfoOpen,
    setIsModalDeliveryOpen,
}) => {
    const handleClickCloseModalWindow = () => {
        setIsModalInfoOpen(false);
    };
    return (
        <>
            <div
                className={
                    isModalInfoOpen ? 'overlay overlay--open' : 'overlay'
                }
            ></div>
            <div
                className={
                    isModalInfoOpen
                        ? 'modal-info modal-info--open'
                        : 'modal-info'
                }
            >
                <button
                    onClick={handleClickCloseModalWindow}
                    className="modal-info__close-btn"
                >
                    <img src={process.env.PUBLIC_URL + "/img/icons/close.svg"} alt="close" />
                </button>
                <h2 className="modal-info__title">Условия доставки</h2>
                <ul className="modal-info__list">
                    <li className="modal-info__list-item">
                        <p>Минимальный заказ</p>
                        <p>от 990 &#8381;</p>
                    </li>
                    <li className="modal-info__list-item">
                        <p>Стоимость доставки</p>
                        <p>бесплатно</p>
                    </li>
                    <li className="modal-info__list-item">
                        <p>Время доставки</p>
                        <p>от 30 минут</p>
                    </li>
                </ul>
                <button
                    className="modal-info__btn"
                    onClick={() => setIsModalDeliveryOpen(true)}
                >
                    Указать адрес доставки
                </button>
            </div>
        </>
    );
};

export default ModalInfo;
