import qs from 'qs';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tabs, { categories } from '../components/Tabs/Tabs';
import Sort, { sortMethodList } from '../components/Sort/Sort';
import Skeleton from '../components/Card/Skeleton';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import { useAppDispatch } from '../redux/store';
import {
    selectCategoryFilter,
    selectSortFilter,
    selectCurrentPage,
    selectSearchValue,
} from '../redux/filter/selectors';
import { setCurrentPage, setFilters } from '../redux/filter/slice';
import { selectItemsData } from '../redux/items/selectors';
import { fetchItems } from '../redux/items/slice';
import { TSearchItemParams } from '../redux/items/types';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const categoryId = useSelector(selectCategoryFilter);
    const sortMethod = useSelector(selectSortFilter);
    const currentPage = useSelector(selectCurrentPage);
    const searchValue = useSelector(selectSearchValue);

    const { items, status } = useSelector(selectItemsData);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getItems = async () => {
        const order = sortMethod.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortMethod.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchItems({
                order,
                sortBy,
                category,
                search,
                currentPage,
            })
        );
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
            const params = qs.parse(
                window.location.search.substring(1)
            ) as unknown as TSearchItemParams;
            const sort = sortMethodList.find(
                (obj) => obj.sortProperty === params.sortMethod
            );
            dispatch(
                setFilters({
                    searchValue: params.search,
                    categoryId: Number(params.categoryId),
                    currentPage: Number(params.currentPage),
                    sort: sort || sortMethodList[0],
                })
            );
            isSearch.current = true;
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            getItems();
        }

        isSearch.current = false;
    }, [categoryId, sortMethod, searchValue, currentPage]);

    return (
        <main className="main">
            <div className="products">
                <div className="container">
                    <section className="products__navigate">
                        <Tabs />
                        <Sort />
                    </section>
                    <section className="cards-wrapper">
                        <h1 className="cards__title">
                            {categories[categoryId]}
                        </h1>
                        {status === 'error' ? (
                            <div className="cards__error">
                                <h2 className="cards__error-title">
                                    Ошибка получения данных
                                </h2>
                                <p className="cards__error-description">
                                    К сожалению, не удалось загрузить данные.
                                    <br /> Повторите попытку позже.
                                </p>
                            </div>
                        ) : (
                            <div className="cards">
                                {status === 'loading'
                                    ? [...new Array(4)].map((_, index) => (
                                          <Skeleton key={index} />
                                      ))
                                    : items.map((item: any) => (
                                          <Link
                                              key={item.id}
                                              to={`/item/${item.id}`}
                                          >
                                              <Card {...item} />
                                          </Link>
                                      ))}
                            </div>
                        )}
                    </section>
                    <Pagination
                        currentPage={currentPage}
                        onChangePage={onChangePage}
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;
