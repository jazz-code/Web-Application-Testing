import React from "react";
import ReactDOM from "react-dom";
import Display from "../components/Display";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import App from "../App";

it("Display loads with initial state of 0", () => {
  const { container } = render(<Display />);
  const strikeValue = getByTestId(container, "strikevalue");
  const ballValue = getByTestId(container, "ballvalue");
  const hitValue = getByTestId(container, "hitvalue");
  expect(strikeValue.textContent).toBe("Strikes: ");
  expect(ballValue.textContent).toBe("Balls: ");
  expect(hitValue.textContent).toBe("Hits: ");
});
