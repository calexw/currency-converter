import React from "react";
import { roundNumber } from "./utils.js";

// react-bootstrap components
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Cards = ({ from, to, reference, amount }) => {
  const exchangeRate = roundNumber(from.rate / to.rate, 4);

  let optionItems = reference.map(currency => (
    <Dropdown.Item key={currency.name}>
      <img src={currency.flag} alt={currency.code} /> &nbsp; {currency.name}
    </Dropdown.Item>
  ));

  const currencyTitle = currency => (
    <span>
      <img src={currency.flag} alt={currency.code} width="24" /> &nbsp;{" "}
      {currency.name}
    </span>
  );

  return (
    <Col className="col" sm={12} md={6}>
      <Card>
        <Card.Body>
          <Card.Title>
            1 {from.code} = {exchangeRate} {to.code}
          </Card.Title>

          <DropdownButton
            id="dropdown-basic-button"
            size="lg"
            variant="info"
            width="400px"
            title={currencyTitle(from)}
          >
            {optionItems}
          </DropdownButton>

          <Card.Text>
            <br />
            <span className="inputArea">
              {from.symbol} &nbsp;
              <input
                className="inputAmount"
                type="number"
                defaultValue={roundNumber(amount)}
              />
            </span>
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
