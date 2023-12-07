import { useState } from 'react';

function Tabs() {
    const [activeIndex, setActiveIndex] = useState(0);
 
    const onClickCategory = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className="tabs">
            <div className="tab-controls">
                <button onClick={() => onClickCategory(0)} className={activeIndex === 0 ? "tab-controls__btn tab-controls__btn--active" : "tab-controls__btn"}>
                    Все
                </button>
                <button onClick={() => onClickCategory(1)} className={activeIndex === 1 ? "tab-controls__btn tab-controls__btn--active" : "tab-controls__btn"}>
                    Пицца "Старый свет"
                </button>
                <button onClick={() => onClickCategory(2)} className={activeIndex === 2 ? "tab-controls__btn tab-controls__btn--active" : "tab-controls__btn"}>
                    Пицца "Новый свет"
                </button>
                <button onClick={() => onClickCategory(3)} className={activeIndex === 3 ? "tab-controls__btn tab-controls__btn--active" : "tab-controls__btn"}>Вегетарианская</button>
                <button onClick={() => onClickCategory(4)} className={activeIndex === 4 ? "tab-controls__btn tab-controls__btn--active" : "tab-controls__btn"}>Напитки</button>
            </div>
        </div>
    );
}

export default Tabs;
