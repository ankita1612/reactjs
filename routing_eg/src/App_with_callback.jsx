
import Use_callback_demo from "./components/Use_callback_demo";
import Use_without_callback_demo from "./components/Use_without_callback_demo";
function App() {
  return (
    <div>
      <h1>with use callback</h1>
      <Use_callback_demo/>   
      <hr />
      <h1>without use callback</h1>
      <Use_without_callback_demo/>
     
    </div>
  );
}

export default App;
