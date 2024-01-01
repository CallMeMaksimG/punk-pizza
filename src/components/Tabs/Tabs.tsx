import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { useCallback } from 'react';
import { selectCategoryFilter } from '../../redux/filter/selectors';
import { setCategoryFilter } from '../../redux/filter/slice';

export const categories = [
    'Все',
    'Пицца "Старый свет"',
    'Пицца "Новый свет"',
    'Вегетарианская',
    'Напитки',
];

const Tabs: React.FC = () => {
    const dispatch = useAppDispatch();

    const onClickCategory = useCallback((index: number) => {
        dispatch(setCategoryFilter(index));
    }, []);

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
};

export default Tabs;
