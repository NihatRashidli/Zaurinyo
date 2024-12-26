import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarProvider } from './NavbarContext';
import Home from './components/home/HomePage';
import Products from './components/products/Products';
import Basket from './Basket';

function App() {
    return (
        <NavbarProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/basket" element={<Basket />} />
                </Routes>
            </Router>
        </NavbarProvider>
    );
}

export default App;