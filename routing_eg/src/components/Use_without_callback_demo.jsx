import React, { useState } from "react";

function Child({ onClick }) {
  console.log("1--> Child rendered");
  return <button onClick={onClick}>Increment Counter (Child)</button>;
}

export default function Use_without_callback_demo() {
  console.log("1-->Use_without_callback_demo calling...")
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ❌ This function is recreated on every render
  const handleIncrement = () => {
    console.log("1-->handleIncrement calling...")
    setCount(prev => prev + 1);
  };


  return (
    <div style={{ textAlign: "center" }}>
      <h2>Without useCallback Example</h2>
      <h3>Count: {count}</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <br />
      <Child onClick={handleIncrement} />
    </div>
  );
}
