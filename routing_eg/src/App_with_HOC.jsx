import ErrorBoundriesEg from "./pages/ErrorBoundriesEg";
import ErrorBoundary from "./components/ErrorBoundary";
import { useState } from "react";
function App() {
  return (
    <>
      <HOC1 cmp="Counter" />
      <ErrorBoundary>
        <ErrorBoundriesEg />
      </ErrorBoundary>    
    </>
  );
}
function HOC1(props){
    return (
        <>
        <div style={{backgroundColor:'red',width:'100px'}}><Counter /></div>        
        </>       
    )
}
function Counter() {
  const [cntr,setCntr]=useState(1);
  return (
    <>
    <h3>Counter {cntr}</h3>
    <div><button onClick={()=>setCntr(cntr+1)} >Add</button> </div>
    <hr></hr>
    </>)
}  
export default App;
