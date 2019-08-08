import React, { useState } from "react";

const Dashboard = props => {
  const { strike, setStrike, ball, setBall } = props;
  console.log("props", props);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setStrike(strike + 1)}>Strike </button>
      <button onClick={() => setBall(ball + 1)}>Ball </button>
    </div>
  );
};

export default Dashboard;
