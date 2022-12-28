import React, { useEffect, useContext } from 'react';
import '../styles/cards.css';
import { AppContext } from './Context';
import Loading from './Loading';

export const Exchanges = () => {
  const { arr, fetchData, loading } = useContext(AppContext);

  const url = 'https://api.coingecko.com/api/v3/exchanges';

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <section className="exchange">
        {loading ? (
          <Loading />
        ) : (
          <div className="exch-cont">
            {arr.map(ele => {
              return (
                <a key={ele.id} href={ele.url} target="blank">
                  <div
                    className="card"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  >
                    <img src={ele.image} alt="coin" />
                    <strong>{ele.trust_score_rank}</strong>
                    <p>{ele.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};
