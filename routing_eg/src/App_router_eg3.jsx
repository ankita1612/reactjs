import { BrowserRouter , Routes, Route, Link, NavLink } from "react-router-dom";
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
    
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/contact_page">Contact</NavLink> |{" "}
        <NavLink to="/parent_page">Parent</NavLink>        
      </nav>

      <Routes>
        {/* single route */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      
      {/* nested route */}
       <Route path="parent_page" element={<Parent_1 />}>
          <Route index element={<Nested_1 var1="pop is passed" />} />
          {/* if you giving index then don;t give path. otherwise it will not work  */}
          <Route path="nested_2" element={<Nested_2 />} />
        </Route>

    

      </Routes>

    </BrowserRouter>
    </div>
  );
}
 
export default App;
////http://localhost:5173/