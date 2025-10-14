import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes_seprate_file";
import Nested_1 from "./pages/Nested_1";
import Nested_2 from "./pages/Nested_2";
import Parent_1 from "./pages/Parent_1";
import ErrorBoundriesEg from "./pages/ErrorBoundriesEg";
import ErrorBoundary from "./components/ErrorBoundary";
import { useState } from "react";
function App() {
  return (
    <div>
      <Counter/>
      {/* <ErrorBoundary>
        <ErrorBoundriesEg />
    </ErrorBoundary> */}
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact_page">Contact</Link> |{" "}
         <Link to="/parent_page">Parent</Link>        
      </nav>

      <Routes>
        {/* single route */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      
      {/* nested route */}
       <Route path="/parent_page" element={<Parent_1 />}>
          <Route path="nested_page_1" element={<Nested_1 />} />
          <Route path="nested_2" element={<Nested_2 />} />
        </Route>
      </Routes>

    </Router>
    </div>
  );
}
function Counter() {
  const [cntr,setCntr]=useState(1);
  return 
    <>
    <h1>Counter {cntr}</h1>;
    <h1><button onClick={()=>setCntr(cntr+1)} >Add</button> </h1>;
    <hr></hr>
    </>
}  
export default App;
