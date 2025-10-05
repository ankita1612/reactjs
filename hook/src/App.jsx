import Counter_hook from "./pages/Counter";
import Context_example from "./pages/Context_example";
import Child_component2 from "./pages/Child_component2";

import { createContext } from 'react'; 
export const ThemeContext = createContext(); // default value optional
import LoginContextProvider from "./context/LoginContextProvider";
function App() {
  return (    
    <>
    <Counter_hook/>
    <hr></hr>
    <LoginContextProvider>
      <Child_component2/>
    </LoginContextProvider>
    <hr></hr>
    <ThemeContext.Provider value="dark">
      <Context_example/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
