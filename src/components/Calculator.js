
// src/components/Calculator.js
import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import OptionList from './OptionList';


const Calculator = () => {
  const { rates, amount, setAmount, currency, setCurrency, currencyDestino, setCurrencyDestino, calcular, result  } = useContext(CurrencyContext);

  return (
    <div id="calculator" className='imput-field'>
      <h1>Calculadora Monetária</h1>
      <input type="number" value={amount} min="1" onChange={(e) => setAmount(e.target.value)} />
      <label>Moeda origem</label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      <OptionList rates={rates} />
      </select>

      <label>Moeda destino</label>
      <select value={currencyDestino} onChange={(e) => setCurrencyDestino(e.target.value)}>
      <OptionList rates={rates} />
      </select>
      <button onClick={calcular}id="calculater" >Calcular</button>
      {result && <div>Resultado: {result.toFixed(8)}</div>}
   
    </div>
  );
};

export default Calculator;
