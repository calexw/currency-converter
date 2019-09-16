import React, { Component } from "react";
import DataReference from "../api/reference.js";
import { getExchange, roundNumber } from "../utils";

// card components
import CardHeader from "./cards/cardHeader";
import CardDropdown from "./cards/cardDropdown";
import CardInput from "./cards/cardInput";

// react-bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      rates: [],
      currencyOne: DataReference[0],
      currencyTwo: DataReference[1],
      amountOne: 1,
      amountTwo: roundNumber(DataReference[0].rate)
    };
  }

  getCurrency = input => {
    return DataReference.find(currency => currency.code === input);
  };

  amountHandlerOne = event => {
    let { currencyOne, currencyTwo } = this.state;
    let amountOne = event.target.value;
    let amountTwo = getExchange(currencyOne, currencyTwo, amountOne);
    this.setState({ amountOne, amountTwo });
  };

  amountHandlerTwo = event => {
    let { currencyOne, currencyTwo } = this.state;
    let amountTwo = event.target.value;
    let amountOne = getExchange(currencyTwo, currencyOne, amountTwo);
    this.setState({ amountOne, amountTwo });
  };

  dropdownHandlerOne = input => {
    let { currencyTwo, amountTwo } = this.state;
    let currencyOne = this.getCurrency(input);
    let amountOne = getExchange(currencyOne, currencyTwo, amountTwo);
    this.setState({ currencyOne, amountOne });
  };

  dropdownHandlerTwo = input => {
    let { currencyOne, amountOne } = this.state;
    let currencyTwo = this.getCurrency(input);
    let amountTwo = getExchange(currencyTwo, currencyOne, amountOne);
    this.setState({ currencyTwo, amountTwo });
  };

  componentDidMount() {
    // fetchRates().then(rates => this.setState({ rates }));
  }

  render() {
    let { currencyOne, currencyTwo, amountOne, amountTwo } = this.state;

    return (
      <Container className="p-3">
        <Row className="justify-content-md-center">
          <Col className="col" sm={12} md={6}>
            <Card>
              <CardHeader from={currencyOne} to={currencyTwo} />
              <Card.Body>
                <CardDropdown
                  currency={currencyOne}
                  handler={this.dropdownHandlerOne}
                />
                <CardInput
                  currency={currencyOne}
                  amount={amountOne}
                  handler={this.amountHandlerOne}
                />
              </Card.Body>
            </Card>
            <br />
          </Col>

          <Col className="col" sm={12} md={6}>
            <Card>
              <CardHeader from={currencyTwo} to={currencyOne} />
              <Card.Body>
                <CardDropdown
                  currency={currencyTwo}
                  handler={this.dropdownHandlerTwo}
                />
                <CardInput
                  currency={currencyTwo}
                  amount={amountTwo}
                  handler={this.amountHandlerTwo}
                />
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CardContainer;
