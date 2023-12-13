import { useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

function Search() {
    const [value, setValue] = useState('');
    const { setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();

    const onClickClear = () => {
        setValue('');
        setSearchValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 250),
        []
    );

    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value)
    };

    return (
        <form action="" className="nav__search search-form">
            <div className="search-form__icon">
                <img src="./../img/icons/search.svg" alt="search" />
            </div>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                type="text"
                placeholder="Поиск..."
                className="search-form__input"
            />
            {value && (
                <div onClick={onClickClear} className="search-form__clear-btn">
                    <img src="./../img/icons/clear.svg" alt="clear" />
                </div>
            )}
        </form>
    );
}

export default Search;
