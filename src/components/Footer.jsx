import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h3>About Us</h3>
          <p>
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </p>
          <span>
            Data provided by{' '}
            <a href="https://www.coingecko.com/en/api" target="blank">
              CoinGecko
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
