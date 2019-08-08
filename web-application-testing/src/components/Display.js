import React from "react";

const Display = props => {
  const { strike, ball, hit } = props;
  console.log("props Display", props);
  return (
    <div>
      <h1>Display</h1>
      <p>Strikes: {strike}</p>
      <p>Balls: {ball}</p>
      <p>Hits: {hit}</p>
    </div>
  );
};

export default Display;
