import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Item from './pages/Item';
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                 <Route path='' element={<Home />}/>
                 <Route path="/item/:id" element={<Item />} />
                 <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
