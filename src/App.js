import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';

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
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
