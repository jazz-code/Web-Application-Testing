import React from "react";
import { render, getAllByTestId, fireEvent } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
// import Display from "../components/Display";

it("Increment buttons work", () => {
  const { container } = render(<Dashboard />);
  //   const { display } = render(<Display />);
  //   const strikeValue = getByTestId(dashboard, "strikevalue");
  //   const ballValue = getByTestId(display, "ballvalue");
  //   const hitValue = getByTestId(display, "hitvalue");
  const increment = getAllByTestId(container, "incrementButton");
  //-------Increment Strikes-------
  expect(strikeValue.textContent).toBe("Strikes: ");
  fireEvent.click(increment);
  expect(strikeValue.textContent).toBe("Strikes: 1");
  fireEvent.click(increment);
  expect(strikeValue.textContent).toBe("Strikes: 2");
  //-------Increment Balls-------
  expect(ballValue.textContent).toBe("Balls: ");
  fireEvent.click(increment);
  expect(ballValue.textContent).toBe("Balls: 1");
  fireEvent.click(increment);
  expect(ballValue.textContent).toBe("Balls: 2");
  fireEvent.click(increment);
  expect(ballValue.textContent).toBe("Balls: 3");
  fireEvent.click(increment);
  expect(ballValue.textContent).toBe("Balls: 4");
  //-------Increment Hits-------
  expect(hitValue.textContent).toBe("Hits: ");
  fireEvent.click(increment);
  expect(hitValue.textContent).toBe("Hits: 1");
});
