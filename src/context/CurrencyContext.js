// src/context/CurrencyContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useState({});
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history')) || []);

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

  return (
    <CurrencyContext.Provider value={{ rates, history, addHistory }}>
      {children}
    </CurrencyContext.Provider>
  );
};
