import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);

  //**----Count Rules----**/
  //**-- Reset Function-- */
  const resetScore = (ball, strike, hit) => {
    ball = 0;
    strike = 0;
    hit = 0;
    return ball && strike && hit;
  };
  //*-- If 4 balls or 3 strikes or 1 hit, reset --*/
  if (ball === 4 || strike === 3 || hit === 1) {
    setBall(resetScore(ball));
    setStrike(resetScore(strike));
    setHit(resetScore(hit));
    setFoul(resetScore(foul));
  }

  return (
    <div className="App">
      <Display
        strike={strike}
        ball={ball}
        setStrike={setStrike}
        hit={hit}
        setHit={setHit}
      />
      <Dashboard
        strike={strike}
        ball={ball}
        setStrike={setStrike}
        setBall={setBall}
        hit={hit}
        setHit={setHit}
      />
    </div>
  );
}

export default App;
