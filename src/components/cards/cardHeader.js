import React from "react";
import { getExchange } from "../../utils";
import Card from "react-bootstrap/Card";

const CardHeader = ({ from, to }) => {
  let startAmount = 1;
  let decimalPlaces = 4;
  let exchangeRate = getExchange(from, to, startAmount, decimalPlaces);

  return (
    <Card.Header>
      {startAmount} {from.code} = {exchangeRate} {to.code}
    </Card.Header>
  );
};

export default CardHeader;
