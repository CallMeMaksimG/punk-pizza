function Search({ searchValue, setSearchValue }) {
    return (
        <form action="" className="nav__search search-form">
            <input
                type="text"
                placeholder="Поиск..."
                className="search-form__input"
            />
            <div className="search-form__btn">
                <img src="./../img/icons/search.svg" alt="search" />
            </div>
        </form>
    );
}

export default Search;
