import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("2--> Child rendered");
  return <button onClick={onClick}>Increment Counter (Child)</button>;
}

export default function Use_callback_demo() {
  console.log("2-->Use_callback_demo calling...")
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ useCallback memoizes the function
  const handleIncrement = useCallback(() => {
    console.log("2-->handleIncrement calling...")
    setCount(prev => prev + 1);
  }, []); // dependencies — stable reference


  return (
    <div style={{ textAlign: "center" }}>
      <h2>With useCallback Example</h2>
      <h3>Count: {count}</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <br />
      ---<Child onClick={handleIncrement} />---
    </div>
  );
}
