import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product-details/:id" element={<ProductDetail/>} />
      </Routes>

  );
}

export default App;
