import React from "react";
import Card from "react-bootstrap/Card";

import { getExchange } from "../../utils";

const CardHeader = ({ currency, from }) => {
  const startAmount = 1;
  const decimalPlaces = 4;
  const exchangeRate = getExchange(currency, from, startAmount, decimalPlaces);

  return (
    <Card.Header>
      {startAmount} {currency.code} = {exchangeRate} {from.code}
    </Card.Header>
  );
};

export default CardHeader;
