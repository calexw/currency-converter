import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// card components
import CardHeader from "./cardHeader";
import CardDropdown from "./cardDropdown";
import CardInput from "./cardInput";

const Cards = ({ from, to, amount, dropdownHandler, amountHandler }) => {
  return (
    <Col className="col" sm={12} md={6}>
      <Card>
        <CardHeader from={from} to={to} />
        <Card.Body>
          <CardDropdown currency={from} handler={dropdownHandler} />
          <CardInput currency={from} amount={amount} handler={amountHandler} />
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
};

export default Cards;
