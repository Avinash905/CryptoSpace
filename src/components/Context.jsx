import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [opt, setOpt] = useState('inr');
  const [loading, setLoading] = useState(true);

  const fetchData = async url => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const jsonData = await data.json();
      setArr(jsonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const currSymbol = opt === 'inr' ? '₹' : opt === 'usd' ? '$' : '€';

  return (
    <AppContext.Provider
      value={{ arr, fetchData, loading, currSymbol, opt, setOpt, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
