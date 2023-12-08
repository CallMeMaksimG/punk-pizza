import { useState } from 'react';

function Tabs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = [
        'Все',
        'Пицца "Старый свет"',
        'Пицца "Новый свет"',
        'Вегетарианская',
        'Напитки',
    ];

    const onClickCategory = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="tabs">
            <div className="tab-controls">
                {categories.map((category, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => onClickCategory(index)}
                            className={
                                activeIndex === index
                                    ? 'tab-controls__btn tab-controls__btn--active'
                                    : 'tab-controls__btn'
                            }
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Tabs;
