import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import {
    setSortMethod,
    selectSortFilter,
    ISort,
    SortPropertyEnum,
} from '../../redux/slices/filterSlice';

export const sortMethodList: ISort[] = [
    { name: 'По умолчанию', sortProperty: SortPropertyEnum.DEFAULT },
    { name: 'По популярности', sortProperty: SortPropertyEnum.RATING },
    { name: 'По возрастанию цены', sortProperty: SortPropertyEnum.PRICE_ASC },
    { name: 'По убыванию цены', sortProperty: SortPropertyEnum.PRICE_DESC },
];

const Sort: React.FC = () => {
    const dispatch = useAppDispatch();
    const sortMethod = useSelector(selectSortFilter);
    const [openFilterList, setOpenFilterList] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    const handleOpenFilterList = () => {
        setOpenFilterList(!openFilterList);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const current = sortRef.current;
            const path = event.composedPath();
            if(current && !path.includes(current)){
                setOpenFilterList(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <button onClick={handleOpenFilterList} className="sort__btn">
                <span className="sort__btn-text">{sortMethod.name}</span>
                <img
                    src="./../img/icons/arrow-down.svg"
                    alt="arrow-down"
                    className={
                        openFilterList
                            ? 'sort__btn-img sort__btn-img--active'
                            : 'sort__btn-img'
                    }
                />
                <ul
                    className={
                        openFilterList
                            ? 'sort__dropdown-list sort__dropdown-list--active'
                            : 'sort__dropdown-list'
                    }
                >
                    {sortMethodList.map((obj) => (
                        <li
                            key={obj.name}
                            onClick={() => dispatch(setSortMethod(obj))}
                            className="sort__dropdown-list-item"
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul>
            </button>
        </div>
    );
}

export default Sort;
