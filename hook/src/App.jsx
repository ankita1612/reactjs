import Counter_hook from "./pages/Counter";
import Context_example from "./pages/Context_example";
import Child_component2 from "./pages/Child_component2";
import Use_ref_demo from "./pages/Use_ref_demo";
import Use_ref_demo2 from "./pages/Use_ref_demo2";
import Use_effect_demo from "./pages/Use_effect_demo";
import Use_reducer_demo from "./pages/Use_reducer_demo";
import Use_memo_demo from "./pages/Use_memo_demo";

  


import React, { createContext } from 'react'; 
export const ThemeContext = createContext(); // default value optional
import LoginContextProvider from "./context/LoginContextProvider";
function App() {
  return (    
    <>
    <Use_memo_demo/>
    <hr></hr>
    <Use_effect_demo/>
    
    {<Use_reducer_demo/>}
    <hr></hr>
    {/* <Use_ref_demo/> */}
    <hr></hr>
    <Use_ref_demo2/>
    <hr></hr>
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
