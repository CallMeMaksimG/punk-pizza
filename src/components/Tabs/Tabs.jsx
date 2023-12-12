import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter, selectCategoryFilter } from '../../redux/slices/filterSlice';

function Tabs() {
    const categories = [
        'Все',
        'Пицца "Старый свет"',
        'Пицца "Новый свет"',
        'Вегетарианская',
        'Напитки',
    ];

    const onClickCategory = (index) => {
        dispatch(setCategoryFilter(index));
    };
    const dispatch = useDispatch();
    const categoryId = useSelector(selectCategoryFilter);

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
