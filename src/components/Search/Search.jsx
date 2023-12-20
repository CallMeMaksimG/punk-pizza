import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setSearchValue, selectSearchValue } from '../../redux/slices/filterSlice';

function Search() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 250),
        []
    );

    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
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
