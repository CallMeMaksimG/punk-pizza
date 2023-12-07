import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';
import ModalInfo from './components/ModalInfo/ModalInfo';
import products from './data/products.json';
import { useState } from 'react';

console.log(products);

function App() {
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

    const handleClickInfoIcon = () => {
       setIsModalInfoOpen(true);
    }

    return (
        <div className="App">
            <ModalInfo isModalInfoOpen={isModalInfoOpen} setIsModalInfoOpen={setIsModalInfoOpen}/>
            
            <Header handleClickInfoIcon={handleClickInfoIcon}/>
            <main className="products">
                <div className="container">
                    <section className="products__navigate">
                        <Tabs />
                        <Filter />
                    </section>
                    <section className="cards-wrapper">
                        <h1 className="cards__title">Все</h1>
                        <div className="cards">
                            {products.map((product) => {
                                {
                                    console.log(product);
                                }
                                return (
                                    <Card
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
