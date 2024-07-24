// src/App.js
import React from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import Calculator from './components/Calculator';
import HistoryList from './components/HistoryList';

const App = () => {
  return (
    <CurrencyProvider>
      <div>
        <Calculator />
        <HistoryList />
      </div>
    </CurrencyProvider>
  );
};

export default App;

