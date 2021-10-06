import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);
  const increment = () => setCount(count + 1);
  const increment2 = () => setCount((previousCount) => previousCount + 1);
  const decrement = () => setCount(count - 1);
  const decrement2 = () => setCount((previousCount) => previousCount - 1);
  const double = () => setCount((previousCount) => previousCount * 2);
  const divide3 = () =>
    setCount((prevState) => (prevState % 3 === 0 ? prevState / 3 : prevState));
  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={double}>x2</button>
      <button onClick={divide3}>/3</button>
    </>
  );
};

export default App;
