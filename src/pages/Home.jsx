import { useEffect, useState } from 'react';
import Tabs from './../components/Tabs/Tabs';
import Filter from './../components/Filter/Filter';
import Skeleton from './../components/Card/Skeleton';
import Card from './../components/Card/Card';

function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortMethod, setSortMethod] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://657421eff941bda3f2af644e.mockapi.io/items?category=' + categoryId)
            .then((res) => {
                return res.json();
            })
            .then((items) => {
                setItems(items);
                setIsLoading(false);
            });
    }, [categoryId]);

    return (
        <div className="products">
            <div className="container">
                <section className="products__navigate">
                    <Tabs items={items} setCategoryId={setCategoryId}/>
                    <Filter items={items} sortMethod={sortMethod}/>
                </section>
                <section className="cards-wrapper">
                    <h1 className="cards__title">Все</h1>
                    <div className="cards">
                        {isLoading
                            ? [...new Array(8)].map((_, index) => (
                                  <Skeleton key={index} />
                              ))
                            : items.map((item) => (
                                  <Card key={item.id} {...item} />
                              ))}
                    </div>
                </section>
                <div className="cart-mobile-btn">
                    <div className="cart-mobile-btn__counter">1</div>
                    <p className="cart-mobile-btn__title">Ваш заказ</p>
                    <p className="cart-mobile-btn__price">1000 Р</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
