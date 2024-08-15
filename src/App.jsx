
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cartitem from './components/Cartitem';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { Context } from './components/Context';

const App = () => {

  const { fetchData } = useContext(Context);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartitem />} />
      </Routes>
    </div>
  );
};

export default App;
