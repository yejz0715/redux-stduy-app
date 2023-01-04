import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h3>COUNTER</h3>
      <hr />
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      &nbsp;
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};
export default Counter;
