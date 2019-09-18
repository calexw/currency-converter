import React from "react";
import Card from "react-bootstrap/Card";

const CardInput = ({ currency, amount, handler }) => {
  return (
    <Card.Text>
      <br />
      <span className="inputArea">
        <span className="inputSymbol">{currency.symbol}</span>
        <input
          className="inputAmount"
          type="number"
          min="0"
          max="99999999"
          value={amount}
          onChange={handler}
        />
      </span>
    </Card.Text>
  );
};

export default CardInput;
