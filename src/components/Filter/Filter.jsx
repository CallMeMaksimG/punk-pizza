import { useState } from 'react';

function Filter({ sortMethod, setSortMethod }) {
    const sortMethodList = [
        { name: 'По популярности', sortProperty: 'rating' },
        { name: 'По возрастанию цены', sortProperty: '-price' },
        { name: 'По убыванию цены', sortProperty: 'price' },
    ];
    const [openFilterList, setOpenFilterList] = useState(false);

    const handleOpenFilterList = () => {
        setOpenFilterList(!openFilterList);
    };

    return (
        <div className="filter">
            <button onClick={handleOpenFilterList} className="filter__btn">
                <span className="filter__btn-text">{sortMethod.name}</span>
                <img
                    src="./../img/icons/arrow-down.svg"
                    alt="arrow-down"
                    className={
                        openFilterList
                            ? 'filter__btn-img filter__btn-img--active'
                            : 'filter__btn-img'
                    }
                />
                <ul
                    className={
                        openFilterList
                            ? 'filter__dropdown-list filter__dropdown-list--active'
                            : 'filter__dropdown-list'
                    }
                >
                    {sortMethodList.map((obj) => (
                        <li
                            key={obj.name}
                            onClick={() => setSortMethod(obj)}
                            className="filter__dropdown-list-item"
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul>
            </button>
        </div>
    );
}

export default Filter;
