// src/components/Calculator.js
import React, { useState, useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const Calculator = () => {
  const { rates, addHistory } = useContext(CurrencyContext);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    const rate = rates[currency];
    if (rate) {
      const calculation = amount * rate;
      setResult(calculation);
      addHistory({ amount, currency, calculation });
    }
  };

  return (
    <div>
      <h1>Calculadora Monetária</h1>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <button onClick={handleCalculation}>Calcular</button>
      {result && <div>Resultado: {result.toFixed(2)}</div>}
    </div>
  );
};

export default Calculator;
