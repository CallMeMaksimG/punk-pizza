import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader/Loader';
import React from 'react';

const Item = React.lazy(
    () => import(/* webpackChunkName: "Item" */ './pages/Item')
);
const NotFound = React.lazy(
    () => import(/* webpackChunkName: "NotFound" */ './pages/NotFound')
);

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route
                    path="/item/:id"
                    element={
                        <Suspense fallback={<Loader />}>
                            <Item />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<Loader />}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
