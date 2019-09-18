import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import DataReference from "../api/reference.js";
import { fetchRates } from "../api/data.js";
import { getExchange } from "../utils";
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
      amountTwo: getExchange(DataReference[0], DataReference[1])
    };
  }

  dropdownHandler = (card, code) => {
    let { currencyOne, currencyTwo, amountOne, amountTwo } = this.state;
    if (card === "cardOne") {
      currencyOne = this.findCurrency(code);
      amountOne = getExchange(currencyTwo, currencyOne, amountTwo);
      this.setState({ currencyOne, amountOne });
    } else {
      currencyTwo = this.findCurrency(code);
      amountTwo = getExchange(currencyOne, currencyTwo, amountOne);
      this.setState({ currencyTwo, amountTwo });
    }
  };

  amountHandler = (card, event) => {
    let { currencyOne, currencyTwo, amountOne, amountTwo } = this.state;
    if (card === "cardOne") {
      amountOne = event.target.value;
      amountTwo = getExchange(currencyOne, currencyTwo, amountOne);
    } else {
      amountTwo = event.target.value;
      amountOne = getExchange(currencyTwo, currencyOne, amountTwo);
    }
    this.setState({ amountOne, amountTwo });
  };

  findCurrency = code => {
    return this.state.reference.find(currency => currency.code === code);
  };

  updateReference = () => {
    const reference = DataReference.map(this.updateRates);
    this.setState({ reference });
  };

  updateRates = currency => {
    const newRate = this.state.data[currency.code];
    if (newRate) currency.rate = newRate;
    return currency;
  };

  updateInitalState = () => {
    let { currencyOne, currencyTwo, amountTwo } = this.state;
    currencyOne = this.findCurrency(currencyOne.code);
    currencyTwo = this.findCurrency(currencyTwo.code);
    amountTwo = getExchange(currencyOne, currencyTwo);
    this.setState({ currencyOne, currencyTwo, amountTwo });
  };

  componentDidMount() {
    fetchRates().then(data => {
      this.setState({ data });
      this.updateReference();
      this.updateInitalState();
    });
  }

  render() {
    let { currencyOne, currencyTwo, amountOne, amountTwo } = this.state;

    return (
      <Container className="p-3">
        <Row className="justify-content-md-center">
          <Cards
            to={currencyOne}
            from={currencyTwo}
            amount={amountOne}
            dropdownHandler={this.dropdownHandler.bind(this, "cardOne")}
            amountHandler={this.amountHandler.bind(this, "cardOne")}
          />
          <Cards
            to={currencyTwo}
            from={currencyOne}
            amount={amountTwo}
            dropdownHandler={this.dropdownHandler.bind(this, "cardTwo")}
            amountHandler={this.amountHandler.bind(this, "cardTwo")}
          />
        </Row>
      </Container>
    );
  }
}

export default CardContainer;
