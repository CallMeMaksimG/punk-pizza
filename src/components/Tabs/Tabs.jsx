function Tabs() {
    return (
        <div className="tabs">
            <div className="tab-controls">
                <button className="tab-controls__btn tab-controls__btn--active">Все</button>
                <button className="tab-controls__btn">Пицца "Старый свет"</button>
                <button className="tab-controls__btn">Пицца "Новый свет"</button>
                <button className="tab-controls__btn">Вегетарианская</button>
                <button className="tab-controls__btn">Напитки</button>
            </div>
        </div>
    )
}

export default Tabs;