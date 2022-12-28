import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Exchanges } from './components/Exchanges';
import { Coins } from './components/Coins';
import Footer from './components/Footer';
import { Error } from './components/Error';
import CoinData from './components/CoinData';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/CryptoSpace" element={<Home />} />
        <Route path="/CryptoSpace/exchanges" element={<Exchanges />} />
        <Route path="/CryptoSpace/coins" element={<Coins />} />
        <Route path="/CryptoSpace/coin/:id" element={<CoinData />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
