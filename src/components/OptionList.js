const OptionList = ({ rates }) => {
  return (
    <>
      {Object.keys(rates).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </>
  );
};

export default OptionList;
