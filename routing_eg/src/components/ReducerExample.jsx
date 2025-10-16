import React, { useReducer } from "react";

// 1️⃣ Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

function ReducerExample() {
  // 2️⃣ Initialize useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // 3️⃣ Render UI
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Counter using useReducer</h2>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerExample;
