import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes_seprate_file";
import Nested_1 from "./pages/Nested_1";
import Nested_2 from "./pages/Nested_2";
import Parent_1 from "./pages/Parent_1";

function App() {
  return (
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
  );
}

export default App;
