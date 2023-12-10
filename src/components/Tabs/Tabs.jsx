import { useState } from 'react';

function Tabs({ categoryId, setCategoryId }) {
    const categories = [
        'Все',
        'Пицца "Старый свет"',
        'Пицца "Новый свет"',
        'Вегетарианская',
        'Напитки',
    ];

    const onClickCategory = (index) => {
        setCategoryId(index);
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
                                categoryId === index
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
