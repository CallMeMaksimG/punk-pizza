import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoryFilter } from '../redux/slices/filterSlice';
import Tabs from './../components/Tabs/Tabs';
import Sort from '../components/Sort/Sort';
import Skeleton from './../components/Card/Skeleton';
import Card from './../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';
import { selectSortFilter } from '../redux/slices/filterSlice';

function Home() {
    const { searchValue } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const categoryId = useSelector(selectCategoryFilter);
    const sortMethod = useSelector(selectSortFilter);

    useEffect(() => {
        setIsLoading(true);

        const order = sortMethod.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortMethod.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        fetch(
            `https://657421eff941bda3f2af644e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        )
            .then((res) => {
                return res.json();
            })
            .then((items) => {
                setItems(items);
                setIsLoading(false);
            });
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
                <Pagination onChangePage={(number) => setCurrentPage(number)} />
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
