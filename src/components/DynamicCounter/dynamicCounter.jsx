import { useState, useEffect } from "react";
const DynamicCounter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let backgroundColor;
    if (counter > 0) {
      backgroundColor = "green";
    } else if (counter < 0) {
      backgroundColor = "red";
    } else {
      backgroundColor = "white";
    }
    document.body.style.backgroundColor = backgroundColor;
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > -10) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: "0 10px" }}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default DynamicCounter;