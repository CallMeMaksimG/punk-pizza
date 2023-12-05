function Tabs() {
    return (
        <section className="tabs">
            <div className="tab-controls">
                <button className="tab-controls__btn tab-controls__btn--active">Все</button>
                <button className="tab-controls__btn">Пицца "Новый свет"</button>
                <button className="tab-controls__btn">Пицца "Старый свет"</button>
                <button className="tab-controls__btn">Вегитарианская</button>
                <button className="tab-controls__btn">Напитки</button>
            </div>
        </section>
    )
}

export default Tabs;