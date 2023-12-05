function Filter() {
    return (
        <div className="filter">
            <div className="filter__btn">
                <span className="filter__btn-text">Сортировка</span>
                <img src="./../img/icons/arrow-down.svg" alt="arrow-down" className="filter__btn-img"/>
                <ul className="filter__dropdown-list">
                    <li className="filter__dropdown-list-item">По популярности</li>
                    <li className="filter__dropdown-list-item">По возрастанию цены</li>
                    <li className="filter__dropdown-list-item">По убыванию цены</li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;
