import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const Erros = () => {
    const { erros } = useContext(CurrencyContext);

  return (
    <div>
      {erros.map((erro, index) => (
        <div key={index} className="alert alert-danger" role="alert">
          {erro}
        </div>
      ))}
    </div>
  );
}


export default Erros;