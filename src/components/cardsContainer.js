import React, { Component } from "react";
import Cards from "./cards";
import DataReference from "../api/reference.js";
import { sortObectArray } from "./utils.js";

// react-bootstrap components
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      reference: sortObectArray(DataReference),
      inputOne: {
        currency: "USD",
        amount: "2.47"
      },
      inputTwo: {
        currency: "EUR",
        amount: "2"
      }
    };
  }

  render() {
    const reference = this.state.reference;
    const inputOne = this.state.inputOne;
    const inputTwo = this.state.inputTwo;

    const currencyOne = reference.find(
      currency => currency.code === inputOne.currency
    );
    const currencyTwo = reference.find(
      currency => currency.code === inputTwo.currency
    );

    console.log("currencyOne", currencyOne);
    console.log("currencyTwo", currencyTwo);

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Cards
            from={currencyOne}
            to={currencyTwo}
            reference={reference}
            amount={inputOne.amount}
          />
          <Cards
            from={currencyTwo}
            to={currencyOne}
            reference={reference}
            amount={inputTwo.amount}
          />
        </Row>
      </Container>
    );
  }
}

export default CardContainer;
