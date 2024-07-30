
// src/components/HistoryList.js
import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const HistoryList = () => {
  const { history, erros } = useContext(CurrencyContext);

  return (
    <div id="historico">
      <h2>Histórico de Cálculos</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.amount} {item.currency} para {item.currencyDestino}: { item.result !== undefined ?item.result.toFixed(8) : "Erro"} 
          </li>
        ))}
      </ul>
{/* 
        <h2>Histórico de Cálculos</h2>
      <ul>
        {erros.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul> */}

    </div>
  );
};

export default HistoryList;
