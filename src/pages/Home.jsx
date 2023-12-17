import axios from 'axios';
import qs from 'qs';
import { useContext, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCategoryFilter } from '../redux/slices/filterSlice';
import Tabs from './../components/Tabs/Tabs';
import Sort, { sortMethodList } from '../components/Sort/Sort';
import Skeleton from './../components/Card/Skeleton';
import Card from './../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';
import {
    setCurrentPage,
    selectSortFilter,
    selectCurrentPageFilter,
    setFilters,
} from '../redux/slices/filterSlice';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const { searchValue } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const categoryId = useSelector(selectCategoryFilter);
    const sortMethod = useSelector(selectSortFilter);
    const currentPage = useSelector(selectCurrentPageFilter);

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page));
    };

    const fetchItems = async () => {
        setIsLoading(true);

        const order = sortMethod.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortMethod.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        try {
            const res = await axios.get(
                `https://657421eff941bda3f2af644e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
            );
            setItems(res.data);
        } catch (error) {
            alert('Ошибка при получении данных');
            console.log('ERROR', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortMethod: sortMethod.sortProperty,
                categoryId: categoryId,
                currentPage: currentPage,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sortMethod, currentPage]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = sortMethodList.find(
                (obj) => obj.sortProperty === params.sortMethod
            );
            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            fetchItems();
        }

        isSearch.current = false;
    }, [categoryId, sortMethod, searchValue, currentPage]);

    return (
        <div className="products">
            <div className="container">
                <section className="products__navigate">
                    <Tabs />
                    <Sort />
                </section>
                <section className="cards-wrapper">
                    <h1 className="cards__title">все</h1>
                    <div className="cards">
                        {isLoading
                            ? [...new Array(4)].map((_, index) => (
                                  <Skeleton key={index} />
                              ))
                            : items.map((item) => (
                                  <Card key={item.id} {...item} />
                              ))}
                    </div>
                </section>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
                <div className="cart-mobile-btn">
                    <div className="cart-mobile-btn__counter">1</div>
                    <p className="cart-mobile-btn__title">Ваш заказ</p>
                    <p className="cart-mobile-btn__price">1000 &#8381;</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
