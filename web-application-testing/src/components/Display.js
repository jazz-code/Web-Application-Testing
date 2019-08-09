import React from "react";

const Display = props => {
  const { strike, ball, hit } = props;
  console.log("props Display", props);
  return (
    <div>
      <h1>Display</h1>
      <p data-testid="strikevalue">Strikes: {strike}</p>
      <p data-testid="ballvalue">Balls: {ball}</p>
      <p data-testid="hitvalue">Hits: {hit}</p>
    </div>
  );
};

export default Display;
