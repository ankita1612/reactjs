import { useState, useContext  } from 'react';
import UseEffectHook from './components/UseEffectHook';
import UseEffectHookInterval from './components/UseEffectHookInterval';
import UseRefDemo from './components/UseRefDemo';
import { ThemeContext, ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from './components/theme-switcher';
function App() {
  const [showButton, setShowButton] = useState(true);

    return (
    <>
     <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
        <UseRefDemo />
        <hr />
        Hello from App_with_HOOK.jsx <br />
        showButton :{showButton.toString()} <br />
        <button onClick={()=>setShowButton(!showButton)}>Click Me</button>
        {showButton && <UseEffectHook/>}
        <hr />
        {showButton && <UseEffectHookInterval/>}     
        
    </>);  
}

export default App;
