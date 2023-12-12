import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortMethod, selectSortFilter } from '../../redux/slices/filterSlice';

function Sort() {
    const sortMethodList = [
        { name: 'По популярности', sortProperty: 'rating' },
        { name: 'По возрастанию цены', sortProperty: '-price' },
        { name: 'По убыванию цены', sortProperty: 'price' },
    ];
    const [openFilterList, setOpenFilterList] = useState(false);

    const handleOpenFilterList = () => {
        setOpenFilterList(!openFilterList);
    };

    const dispatch = useDispatch();
    const sortMethod = useSelector(selectSortFilter);

    return (
        <div className="sort">
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
