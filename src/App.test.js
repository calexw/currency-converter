import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Data from "./api/reference.js";
import { getExchange, roundNumber, sortData } from "./utils";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders app correctly", () => {
  const app = new App();
  expect(app.type.displayName).toEqual("Container");
});

it("returns valid data", () => {
  expect(Data.length > 30).toBeTruthy();
  expect(Data[0].rate).toBeTruthy();
  expect(Data[0].code.length).toEqual(3);
  expect(Data[0].name.length > 3).toBeTruthy();
});

it("utils perform as expected", () => {
  const from = { name: "lime", rate: 1.2345 };
  const to = { name: "coconut", rate: 1.6789 };

  const amount1 = roundNumber(from.rate);
  const amount2 = roundNumber(to.rate, 3);
  const rate1 = getExchange(from, to);
  const rate2 = getExchange(from, to, 10);
  const rate3 = getExchange(from, from);
  const data1 = sortData([from, to]);
  const data2 = sortData([to, from]);

  expect(amount1).toEqual("1.23");
  expect(amount2).toEqual("1.679");
  expect(rate1).toEqual("0.74");
  expect(rate2).toEqual("7.35");
  expect(rate3).toEqual("1.00");
  expect(data1[0].name).toEqual("coconut");
  expect(data2[0].name).toEqual("coconut");
});
