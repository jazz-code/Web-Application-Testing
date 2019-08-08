import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);

  // console.log("setStrike", setStrike);
  //**----Count Rules----**/

  //reset function
  const reset = (ball, strike, hit) => {
    ball = 0;
    strike = 0;
    hit = 0;
    return ball && strike && hit;
  };
  if (ball === 4 || strike === 3) {
    setCount(reset(count));
    setBall(reset(ball));
    setStrike(reset(strike));
    setHit(reset(hit));
    setFoul(reset(foul));
  }

  // if (foul < 3) {
  //   setStrike(strike + 1) && setFoul(foul + 1)
  // } else {

  // }

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
