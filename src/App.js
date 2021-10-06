import React, { useState } from "react";

const App = (props) => {
  const { pName, pPrice } = props;
  const [name, setName] = useState(pName);
  const [price, setPrice] = useState(pPrice);

  const reset = () => {
    setPrice(pPrice);
    setName(pName);
  };

  return (
    <>
      <p>
        現在の{name}は{price}円です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
