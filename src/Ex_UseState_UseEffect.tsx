import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(() => {
    return Number(localStorage.getItem("count") || 0);
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
