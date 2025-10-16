
import Use_memo_demo from "./components/Use_memo_demo";
import Use_without_memo_demo from "./components/Use_without_memo_demo";
function App() {
  return (
    <div>
      <h1>with use memo</h1>
      <Use_memo_demo/>   
      <hr />
      <h1>without use memo</h1>
      <Use_without_memo_demo/>
     
    </div>
  );
}

export default App;
