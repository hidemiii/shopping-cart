import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductList from './pages/ProductList';
import CartSidebar from './components/CartSidebar';
import Checkout from './pages/Checkout';

const App = () => (
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <CartSidebar />
    </Router>
  </CartProvider>
);

export default App;
