import { useState } from 'react';

function Filter() {
    const [openFilterList, setOpenFilterList] = useState(false);

    const handleOpenFilterList = () => {
        openFilterList ? setOpenFilterList(false) : setOpenFilterList(true);
    };

    // document.addEventListener('click', function (e) {
    //     if (e.target.className !== 'filter__dropdown-list') {
    //         // setOpenFilterList(false);
    //     }
    // });

    return (
        <div className="filter">
            <button onClick={handleOpenFilterList} className="filter__btn">
                <span className="filter__btn-text">Сортировка</span>
                <img
                    src="./../img/icons/arrow-down.svg"
                    alt="arrow-down"
                    className={openFilterList ? "filter__btn-img filter__btn-img--active" : "filter__btn-img"}
                />
                <ul
                    className={
                        openFilterList
                            ? 'filter__dropdown-list filter__dropdown-list--active'
                            : 'filter__dropdown-list'
                    }
                >
                    <li className="filter__dropdown-list-item">
                        По популярности
                    </li>
                    <li className="filter__dropdown-list-item">
                        По возрастанию цены
                    </li>
                    <li className="filter__dropdown-list-item">
                        По убыванию цены
                    </li>
                </ul>
            </button>
        </div>
    );
}

export default Filter;
