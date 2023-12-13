import { useContext, useEffect, useRef } from 'react';
import { SearchContext } from '../../App';

function Search() {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    
    return (
        <form action="" className="nav__search search-form">
            <div className="search-form__icon">
                <img src="./../img/icons/search.svg" alt="search" />
            </div>
            <input
                ref={inputRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Поиск..."
                className="search-form__input"
            />
            {searchValue && (
                <div
                    onClick={onClickClear}
                    className="search-form__clear-btn"
                >
                    <img src="./../img/icons/clear.svg" alt="clear" />
                </div>
            )}
        </form>
    );
}

export default Search;
