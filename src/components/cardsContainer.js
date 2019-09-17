import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import DataReference from "../api/reference.js";
import { fetchRates } from "../api/data.js";
import { getExchange, roundNumber } from "../utils";
import Cards from "./cards";

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      reference: DataReference,
      currencyOne: DataReference[0],
      currencyTwo: DataReference[1],
      amountOne: 1,
      amountTwo: roundNumber(DataReference[0].rate)
    };
  }

  dropdownHandler = (input, code) => {
    let { currencyOne, currencyTwo, amountOne, amountTwo } = this.state;
    if (input === "inputOne") {
      currencyOne = this.getCurrency(code);
      amountOne = getExchange(currencyOne, currencyTwo, amountTwo);
      this.setState({ currencyOne, amountOne });
    } else {
      currencyTwo = this.getCurrency(code);
      amountTwo = getExchange(currencyTwo, currencyOne, amountOne);
      this.setState({ currencyTwo, amountTwo });
    }
  };

  amountHandler = (input, event) => {
    let { currencyOne, currencyTwo, amountOne, amountTwo } = this.state;
    if (input === "inputOne") {
      amountOne = event.target.value;
      amountTwo = getExchange(currencyOne, currencyTwo, amountOne);
    } else {
      amountTwo = event.target.value;
      amountOne = getExchange(currencyTwo, currencyOne, amountTwo);
    }
    this.setState({ amountOne, amountTwo });
  };

  getCurrency = input => {
    return this.state.reference.find(currency => currency.code === input);
  };

  getCurrentRate = currency => {
    currency.rate = this.state.data[currency.code] || 1;
    return currency;
  };

  updateReference = () => {
    const reference = DataReference.map(this.getCurrentRate);
    this.setState({ reference });
  };

  componentDidMount() {
    fetchRates().then(data => {
      this.setState({ data });
      this.updateReference();
    });
  }

  render() {
    let { currencyOne, currencyTwo, amountOne, amountTwo } = this.state;
    console.log(this.state.reference);

    return (
      <Container className="p-3">
        <Row className="justify-content-md-center">
          <Cards
            from={currencyOne}
            to={currencyTwo}
            amount={amountOne}
            dropdownHandler={this.dropdownHandler.bind(this, "inputOne")}
            amountHandler={this.amountHandler.bind(this, "inputOne")}
          />
          <Cards
            from={currencyTwo}
            to={currencyOne}
            amount={amountTwo}
            dropdownHandler={this.dropdownHandler.bind(this, "inputTwo")}
            amountHandler={this.amountHandler.bind(this, "inputTwo")}
          />
        </Row>
      </Container>
    );
  }
}

export default CardContainer;
