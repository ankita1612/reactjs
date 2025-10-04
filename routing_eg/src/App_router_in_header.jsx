import { BrowserRouter, Routes, Route, Link, Navigate  } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (

    <BrowserRouter  basename="/APP">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route  path="contact_page" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
