import React, { useState } from "react";

const Dashboard = props => {
  const { strike, setStrike, ball, setBall, hit, setHit } = props;
  console.log("props", props);
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        data-testid="incrementButton"
        onClick={() => setStrike(strike + 1)}
      >
        Strike
      </button>
      <button data-testid="incrementButton" onClick={() => setBall(ball + 1)}>
        Ball
      </button>
      <button data-testid="incrementButton" onClick={() => setHit(hit + 1)}>
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
