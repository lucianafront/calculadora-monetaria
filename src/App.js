// src/App.js
import React from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import Calculator from './components/Calculator';
import HistoryList from './components/HistoryList';
import Erros from './components/Erros';

const App = () => {
  return (
    <CurrencyProvider>
  
       <Calculator ></Calculator>
        <HistoryList />

      
    </CurrencyProvider>
  );
};

export default App;

