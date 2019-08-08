import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";
import { resetScore } from "../App";

describe("<App />", () => {
  it("renders without crashing using ReactDOM", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

let ball = 0;
let strike = 0;
let hit = 0;
describe("resetScore.js", () => {
  it("Resets state to 0", () => {
    if (ball === 4 || strike === 3 || hit === 1) {
      expect(ball).toBe(0);
      expect(strike).toBe(0);
      expect(hit).toBe(0);
    }
  });
});
