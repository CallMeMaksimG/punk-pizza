import { useState } from 'react';

function Filter() {
    const sortMethodList = [
        'По популярности',
        'По возрастанию цены',
        'По убыванию цены',
    ];
    const [openFilterList, setOpenFilterList] = useState(false);
    const [selected, setSelected] = useState('Сортировка');

    const handleOpenFilterList = () => {
        setOpenFilterList(!openFilterList);
    };

    // document.addEventListener('click', function (e) {
    //     if (e.target.className !== 'filter__dropdown-list') {
    //         // setOpenFilterList(false);
    //     }
    // });

    return (
        <div className="filter">
            <button onClick={handleOpenFilterList} className="filter__btn">
                <span className="filter__btn-text">{selected}</span>
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
                    {sortMethodList.map((method) => (
                        <li
                            onClick={(e) => setSelected(method)}
                            className="filter__dropdown-list-item"
                        >
                            {method}
                        </li>
                    ))}
                </ul>
            </button>
        </div>
    );
}

export default Filter;
