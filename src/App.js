import Header from './components/Header/Header';
import { useState } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ModalInfo from './components/ModalInfo/ModalInfo';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

    const handleClickInfoIcon = () => {
        setIsModalInfoOpen(true);
    };

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="App">
            <ModalInfo
                isModalInfoOpen={isModalInfoOpen}
                setIsModalInfoOpen={setIsModalInfoOpen}
            />
            <Header handleClickInfoIcon={handleClickInfoIcon} searchValue={searchValue} setSearchValue={setSearchValue}/>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
