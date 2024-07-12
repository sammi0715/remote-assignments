import "./styles 2.css";
import React, { useState } from "react";

const Counter = ({ count, increment }) => {
  return (
    <div className="counter">
      <button onClick={increment}>+1</button>
      <span>{count}</span>
    </div>
  );
};

const CounterComponent = () => {
  const [counter, setCounter] = useState([0, 0, 0]);

  const addCounter = () => {
    setCounter([...counter, 0]);
  };

  const incrementCounter = (index) => {
    const newCounter = counter.map((count, i) =>
      i === index ? count + 1 : count
    );
    setCounter(newCounter);
  };

  const incrementAllCounter = () => {
    const newCounter = counter.map((count) => count + 1);
    setCounter(newCounter);
  };

  return (
    <div className="container">
      <button className="all-add-btn" onClick={incrementAllCounter}>
        All + 1
      </button>
      {counter.map((count, index) => (
        <Counter
          key={index}
          count={count}
          increment={() => incrementCounter(index)}
        />
      ))}
      <button className="add-counter-btn" onClick={addCounter}>
        Add a Counter
      </button>
    </div>
  );
};
export default CounterComponent;
