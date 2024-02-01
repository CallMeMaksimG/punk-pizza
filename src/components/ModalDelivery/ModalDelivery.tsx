import { useState } from 'react';
import Maps from '../Map/Map';

interface IMobileDeliveryProps {
    isModalDeliveryOpen: boolean;
    setIsModalDeliveryOpen: (value: boolean) => void;
}

const ModalDelivery: React.FC<IMobileDeliveryProps> = ({
    isModalDeliveryOpen,
    setIsModalDeliveryOpen,
}) => {
    const [address, setAddress] = useState('');
    const [addressActive, setAddressActive] = useState(false);
    const [flat, setFlat] = useState('');
    const [flatActive, setFlatActive] = useState(false);
    const [entrance, setEntrance] = useState('');
    const [entranceActive, setEntranceActive] = useState(false);
    const [doorPhone, setDoorPhone] = useState('');
    const [doorPhoneActive, setDoorPhoneActive] = useState(false);
    const [floor, setFloor] = useState('');
    const [floorActive, setFloorActive] = useState(false);
    const [comment, setComment] = useState('');
    const [commentActive, setCommentActive] = useState(false);

    const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const flatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFlat(e.target.value);
    };

    const entranceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEntrance(e.target.value);
    };

    const doorPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDoorPhone(e.target.value);
    };

    const floorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFloor(e.target.value);
    };

    const commentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            switch (e.target.name) {
                case 'address':
                    setAddressActive(false);
                    break;
                case 'flat':
                    setFlatActive(false);
                    break;
                case 'entrance':
                    setEntranceActive(false);
                    break;
                case 'doorPhone':
                    setDoorPhoneActive(false);
                    break;
                case 'floor':
                    setFloorActive(false);
                    break;
                case 'comment':
                    setCommentActive(false);
                    break;
            }
        }
    };

    return (
        <>
            <div
                className={
                    isModalDeliveryOpen ? 'overlay overlay--open' : 'overlay'
                }
            ></div>
            <div
                className={
                    isModalDeliveryOpen
                        ? 'modal-delivery modal-delivery--open'
                        : 'modal-delivery'
                }
            >
                <button
                    onClick={() => setIsModalDeliveryOpen(false)}
                    className="modal-delivery__close-btn"
                >
                    <img src={process.env.PUBLIC_URL + "/img/icons/close.svg"} alt="close" />
                </button>
                <div className="delivery__content">
                    <h2>Укажите адрес доставки</h2>
                    <form className="delivery__form">
                        <div className="input-address-wrapper input-wrapper">
                            <input
                                value={address}
                                onChange={(e) => addressHandler(e)}
                                onFocus={() => setAddressActive(true)}
                                name="address"
                                onBlur={(e) => blurHandler(e)}
                                type="text"
                                autoComplete="off"
                            />
                            <div
                                className={
                                    addressActive
                                        ? 'input-label input-label--active'
                                        : 'input-label'
                                }
                            >
                                Адрес
                            </div>
                        </div>
                        <div className="input__underwrap">
                            <div className="input-flat-wrapper input-wrapper">
                                <input
                                    value={flat}
                                    onChange={(e) => flatHandler(e)}
                                    onFocus={() => setFlatActive(true)}
                                    name="flat"
                                    onBlur={(e) => blurHandler(e)}
                                    type="text"
                                    autoComplete="off"
                                />
                                <div
                                    className={
                                        flatActive
                                            ? 'input-label input-label--active'
                                            : 'input-label'
                                    }
                                >
                                    Квартира
                                </div>
                            </div>
                            <div className="input-entrance-wrapper input-wrapper">
                                <input
                                    value={entrance}
                                    onChange={(e) => entranceHandler(e)}
                                    onFocus={() => setEntranceActive(true)}
                                    name="entrance"
                                    onBlur={(e) => blurHandler(e)}
                                    type="text"
                                    autoComplete="off"
                                />
                                <div
                                    className={
                                        entranceActive
                                            ? 'input-label input-label--active'
                                            : 'input-label'
                                    }
                                >
                                    Подъезд
                                </div>
                            </div>
                        </div>
                        <div className="input__underwrap">
                            <div className="input-doorphone-wrapper input-wrapper">
                                <input
                                    value={doorPhone}
                                    onChange={(e) => doorPhoneHandler(e)}
                                    onFocus={() => setDoorPhoneActive(true)}
                                    name="doorPhone"
                                    onBlur={(e) => blurHandler(e)}
                                    type="text"
                                    autoComplete="off"
                                />
                                <div
                                    className={
                                        doorPhoneActive
                                            ? 'input-label input-label--active'
                                            : 'input-label'
                                    }
                                >
                                    Домофон
                                </div>
                            </div>
                            <div className="input-floor-wrapper input-wrapper">
                                <input
                                    value={floor}
                                    onChange={(e) => floorHandler(e)}
                                    onFocus={() => setFloorActive(true)}
                                    name="floor"
                                    onBlur={(e) => blurHandler(e)}
                                    type="text"
                                    autoComplete="off"
                                />
                                <div
                                    className={
                                        floorActive
                                            ? 'input-label input-label--active'
                                            : 'input-label'
                                    }
                                >
                                    Этаж
                                </div>
                            </div>
                        </div>
                        <div className="input-comment-wrapper input-wrapper">
                            <input
                                value={comment}
                                onChange={(e) => commentHandler(e)}
                                onFocus={() => setCommentActive(true)}
                                name="comment"
                                onBlur={(e) => blurHandler(e)}
                                type="text"
                                autoComplete="off"
                            />
                            <div
                                className={
                                    commentActive
                                        ? 'input-label input-label--active'
                                        : 'input-label'
                                }
                            >
                                Комментарий
                            </div>
                        </div>
                        <button className="modal-delivery__btn">
                            Сохранить
                        </button>
                    </form>
                </div>
                <div className="delivery__map">
                    <Maps />
                </div>
            </div>
        </>
    );
};

export default ModalDelivery;
