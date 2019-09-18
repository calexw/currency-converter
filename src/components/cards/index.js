import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// card components
import CardHeader from "./cardHeader";
import CardDropdown from "./cardDropdown";
import CardInput from "./cardInput";

const Cards = ({ to, from, amount, dropdownHandler, amountHandler }) => {
  return (
    <Col className="col" md={12} lg={6}>
      <Card>
        <CardHeader currency={to} from={from} />
        <Card.Body>
          <CardDropdown currency={to} handler={dropdownHandler} />
          <CardInput currency={to} amount={amount} handler={amountHandler} />
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
};

export default Cards;
