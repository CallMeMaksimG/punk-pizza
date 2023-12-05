import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Filter from './components/Filter/Filter';

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
                </div>
            </main>
        </div>
    );
}

export default App;
