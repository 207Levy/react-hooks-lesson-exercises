import React from "react";
import { useState } from "react";

export default function SpotCheck1() {
  // your code here
  const counterState = useState(0);
  const counter = counterState[0];
  const setCounter = counterState[1];
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        count: {counter}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}
