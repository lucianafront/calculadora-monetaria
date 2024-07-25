// src/context/CurrencyContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children}) => {
  const [rates, setRates] = useState({});
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history')) || []);
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState('BRL');
  const [currencyDestino, setCurrencyDestino] = useState('USD');
  const [erros, setErros] = useState([]);

  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setRates(response.data.rates);
      } catch (error) {
        console.error('Erro ao buscar taxas de câmbio', error);
      }
    };
    fetchRates();
  }, []);

  const addHistory = (calculation) => {
    const updatedHistory = [...history, calculation];
    setHistory(updatedHistory);
    localStorage.setItem('history', JSON.stringify(updatedHistory));
  };

  const calcular = async () => {
    try {
      const response = await axios.get(
        `https://api.apilayer.com/fixer/convert?to=${currency}&from=${currencyDestino}&amount=${amount}`,
        {
          headers: {
            apikey: "xKr3vc4iD88ua2qu3n13viS2Ozj8U2Bv",
            Accept: "application/json",
          },
        }
      );
      const result = response.data.result;
      setResult(result);
      addHistory({ amount, currency, currencyDestino, result });
    } catch (error) {
      setResult(9999);
      setErros([...erros, error.response.data]);
    }
  };

  return (
    <CurrencyContext.Provider value={{ rates, history, amount, setAmount, currency, setCurrency, currencyDestino, setCurrencyDestino, calcular, erros, result }}>
      {children}

    </CurrencyContext.Provider>
  );
};
