import React from "react";
import CardsContainer from "./components/cardsContainer";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "./App.css";

function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Currency Converter</h1>
      </Jumbotron>
      <CardsContainer />
    </Container>
  );
}

export default App;
