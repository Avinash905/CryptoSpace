import React, { useEffect, useContext, useState } from 'react';
import '../styles/cards.css';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';
import Loading from './Loading';

export const Coins = () => {
  const [page, setPage] = useState(1);
  const { arr, fetchData, loading, currSymbol, opt, setOpt } =
    useContext(AppContext);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${opt}&order=market_cap_desc&per_page=50&page=${page}&sparkline=true`;

  useEffect(() => {
    fetchData(url);
  }, [opt, page]);

  const optClick = e => {
    setOpt(e.target.id);
  };

  return (
    <>
      <section className="exchange">
        {loading ? (
          <Loading />
        ) : (
          <div className="exch-section">
            <div className="options">
              <div>
                <input
                  type="radio"
                  name="opt"
                  id="inr"
                  value="inr"
                  onChange={optClick}
                  checked={opt === 'inr'}
                />
                <label htmlFor="inr">INR</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="opt"
                  id="usd"
                  value="usd"
                  onChange={optClick}
                  checked={opt === 'usd'}
                />
                <label htmlFor="usd">USD</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="opt"
                  id="eur"
                  value="eur"
                  onChange={optClick}
                  checked={opt === 'eur'}
                />
                <label htmlFor="eur">EUR</label>
              </div>
            </div>
            <div className="exch-cont">
              {arr.map(ele => {
                return (
                  <Link key={ele.id} to={`/CryptoSpace/coin/${ele.id}`}>
                    <div
                      className="card"
                      style={{ backgroundColor: 'white', color: 'black' }}
                    >
                      <img src={ele.image} alt="coin" />
                      <strong>{ele.market_cap_rank}</strong>
                      <p>{ele.name}</p>
                      <p>
                        {currSymbol}
                        {ele.current_price}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="prev-next">
              <button
                className="prev"
                onClick={() => {
                  setPage(page - 1);
                }}
                disabled={page <= 1}
              >
                Prev
              </button>
              <button
                className="next"
                onClick={() => {
                  setPage(page + 1);
                }}
                disabled={page >= 52}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
