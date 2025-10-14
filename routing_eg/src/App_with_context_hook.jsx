// App.js
import React from "react";
import { UserProvider, UserContext } from "./context_hook/UserContext";
import Profile from "./context_hook/Profile";

function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

export default App;
