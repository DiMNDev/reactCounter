import React, { useState } from "react";
import "../counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  //Handle increment of counter
  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //Handle decrement of counter
  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={decrementCounter}>
          Minus 1
        </button>
        <button className="btn btn-2" onClick={incrementCounter}>
          Add 1
        </button>
        <h3 className="counter">Count is {count}</h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
