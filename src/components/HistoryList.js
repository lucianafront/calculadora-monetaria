
// src/components/HistoryList.js
import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const HistoryList = () => {
  const { history } = useContext(CurrencyContext);

  return (
    <div>
      <h2>Histórico de Cálculos</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.amount} USD para {item.currency}: {item.calculation.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
