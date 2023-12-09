import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';
import ModalInfo from './components/ModalInfo/ModalInfo';
// import products from './data/products.json';
import { useEffect, useState } from 'react';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://657421eff941bda3f2af644e.mockapi.io/items').then((res) => {
            return res.json();
        }).then(items => setItems(items));
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
                            {items.map((product) => {
                                return (
                                    <Card
                                        key={product.id}
                                        img={product.img}
                                        title={product.title}
                                        weight={product.weight}
                                        price={product.price}
                                        sizes={product.sizes}
                                    />
                                );
                            })}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
