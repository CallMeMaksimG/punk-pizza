function Search({ searchValue, setSearchValue }) {

    return (
        <form action="" className="nav__search search-form">
            <div className="search-form__icon">
                <img src="./../img/icons/search.svg" alt="search" />
            </div>
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Поиск..."
                className="search-form__input"
            />
            {searchValue && (<div onClick={() => setSearchValue('')} className="search-form__clear-btn">
                <img src="./../img/icons/clear.svg" alt="clear" />
            </div>)}
            
        </form>
    );
}

export default Search;
