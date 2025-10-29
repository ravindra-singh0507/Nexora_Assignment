import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cartitem from './components/Cartitem';
import Navbar from './components/Navbar';
import { Context } from './components/Context';
import Checkout from './components/Checkout';

const App = () => {
  const { fetchData } = useContext(Context);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartitem />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
