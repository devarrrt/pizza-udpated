import React from 'react';
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import { Home, Cart } from './pages';

import './styles/app.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="" element={<Home />} />
      <Route
        path="cart"
        element={
          <Cart />
        }
      />
    </Routes>
  );
}

export default App;
