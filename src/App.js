import React from "react";
import CardContainer from "./components/cardsContainer";

// react-bootstrap components
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "./App.css";

function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Currency Converter</h1>
      </Jumbotron>
      <CardContainer />
    </Container>
  );
}

export default App;
