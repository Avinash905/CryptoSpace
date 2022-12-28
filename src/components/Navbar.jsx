import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav>
        <h2>CryptoSpace</h2>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/CryptoSpace">Home</NavLink>
            </li>
            <li>
              <NavLink to="/CryptoSpace/exchanges">Exchanges</NavLink>
            </li>
            <li>
              <NavLink to="/CryptoSpace/coins">Coins</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
