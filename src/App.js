import Header from './components/Header/Header';
import Tabs from './components/Tabs';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="products">
                <div className="container">
                    <div className="products__navigate">
                        <Tabs />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
