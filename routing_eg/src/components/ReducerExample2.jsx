import React, { useReducer, useState } from "react";

const reducer = (todos, action) => {
  switch (action.type) {
    case "add":
      return [...todos, { id: Date.now(), text: action.text, completed: false }];
    case "toggle":
      return todos.map((t) =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    case "delete":
      return todos.filter((t) => t.id !== action.id);
    default:
      return todos;
  }
};

export default function ReducerExample() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const handleAdd = () => {
    dispatch({ type: "add", text });
    setText("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📝 Todo App using useReducer</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => dispatch({ type: "toggle", id: t.id })}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>{" "}
            <button onClick={() => dispatch({ type: "delete", id: t.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
