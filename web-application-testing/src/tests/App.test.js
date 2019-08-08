import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";

describe("<App />", () => {
  it("renders without crashing using ReactDOM", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it("renders without crashing"), () => {
  //   const app = render(<App />);
  //   app.
  // }
});
