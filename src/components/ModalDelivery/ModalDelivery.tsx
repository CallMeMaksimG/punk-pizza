import { useState } from "react";

const ModalDelivery: React.FC = () => {
    const [isModalDeliveryOpen, setIsModalDeliveryOpen] = useState(false)
    return (<>
        <div className={isModalDeliveryOpen ? "overlay overlay--open" : "overlay"}></div>
        <div className={isModalDeliveryOpen ? "modal-info modal-info--open" : "modal-info"}>
            <button onClick={() => console.log('click')} className="modal-info__close-btn">
                <img src="./../../img/icons/close.svg" alt="close" />
            </button>
            <div className="delivery__content">
                <h2>Укажите адрес доставки</h2>
                <form>
                    <div className="input-address-wrapper input-wrapper">
                        <input type="text" />
                        <div className="input-label">Адрес</div>
                    </div>
                    <div className="input-flat-wrapper input-wrapper">
                        <input type="text" />
                        <div className="input-label">Квартира</div>
                    </div>
                    <div className="input-entrance-wrapper input-wrapper">
                        <input type="text" />
                        <div className="input-label">Подъезд</div>
                    </div>
                    <div className="input-doorphone-wrapper input-wrapper">
                        <input type="text" />
                        <div className="input-label">Домофон</div>
                    </div>
                    <div className="input-floor-wrapper input-wrapper">
                        <input type="text" />
                        <div className="input-label">Этаж</div>
                    </div>
                    <div className="input-comment-wrapper input-wrapper">
                        <input type="text" />
                        <div className="input-label">Комментарий</div>
                    </div>
                    <button>Сохранить</button>
                </form>
            </div>
            <div className="delivery__map"></div>
        </div>
    </>)
}

export default ModalDelivery;