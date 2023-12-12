import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ModalInfo from './components/ModalInfo/ModalInfo';

export const SearchContext = createContext();

function App() {
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

    const handleClickInfoIcon = () => {
        setIsModalInfoOpen(true);
    };

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="App">
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <ModalInfo
                    isModalInfoOpen={isModalInfoOpen}
                    setIsModalInfoOpen={setIsModalInfoOpen}
                />
                <Header handleClickInfoIcon={handleClickInfoIcon} />
                <main className="main">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
