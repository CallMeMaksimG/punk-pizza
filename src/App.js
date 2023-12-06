import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';
import products from './data/products.json';

console.log(products);

function App() {
    return (
        <div className="App">
            <Header />
            <main className="products">
                <div className="container">
                    <section className="products__navigate">
                        <Tabs />
                        <Filter />
                    </section>
                    <section className="cards-wrapper">
                        <h1 className="cards__title">Все пиццы</h1>
                        <div className="cards">
                            {products.map((product) => {
                                {
                                    console.log(product);
                                }
                                return (
                                    <Card
                                        img={product.img}
                                        title={product.title}
                                        weight={product.weight20}
                                        price={product.price20}
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
