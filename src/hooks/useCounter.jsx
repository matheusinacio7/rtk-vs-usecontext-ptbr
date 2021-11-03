import { createContext, useContext, useState, } from "react";

const CounterContext = createContext({});

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  function incrementByAmount(amount) {
    setCount((count) => count + amount);
  }

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        incrementByAmount,
      }}
    >
      { children }
    </CounterContext.Provider>
  )
}

const useCounter = () => useContext(CounterContext);

export default useCounter;
