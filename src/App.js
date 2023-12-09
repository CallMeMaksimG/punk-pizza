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

    return (
        <div className="App">
            <ModalInfo
                isModalInfoOpen={isModalInfoOpen}
                setIsModalInfoOpen={setIsModalInfoOpen}
            />
            <Header handleClickInfoIcon={handleClickInfoIcon} />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* <NotFound /> */}
            </main>
        </div>
    );
}

export default App;
