import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Filter from './components/Filter/Filter';
import Skeleton from './components/Card/Skeleton';
import Card from './components/Card/Card';
import ModalInfo from './components/ModalInfo/ModalInfo';
import { useEffect, useState } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://657421eff941bda3f2af644e.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((items) => {
                setItems(items);
                setIsLoading(false)
            });
    }, []);

    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

    const handleClickInfoIcon = () => {
        setIsModalInfoOpen(true);
    };

    return (
        <div className="App">
            <ModalInfo
                isModalInfoOpen={isModalInfoOpen}
                setIsModalInfoOpen={setIsModalInfoOpen}
            />
            <Header handleClickInfoIcon={handleClickInfoIcon} />
            <main className="products">
                <div className="container">
                    <section className="products__navigate">
                        <Tabs />
                        <Filter />
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
                </div>
            </main>
        </div>
    );
}

export default App;
