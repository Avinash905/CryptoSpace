import React from 'react';
import image from '../assets/btc.png';
import '../styles/home.css';

export const Home = () => {
  return (
    <>
      <section className="hero">
        <div>
          <img src={image} alt="btc" />
          <h1>CryptoSpace</h1>
        </div>
      </section>
    </>
  );
};
