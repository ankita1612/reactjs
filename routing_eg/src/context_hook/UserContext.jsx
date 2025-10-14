// UserContext.js
import { createContext, useState } from "react";

// 1️⃣ Create the context
export const UserContext = createContext();

// 2️⃣ Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Ankita", age: 22 });

  const updateName = (newName) => {
    setUser((prev) => ({ ...prev, name: newName }));
  };

  return (
    <UserContext.Provider value={{ user, updateName }}>
      {children}
    </UserContext.Provider>
  );
};
