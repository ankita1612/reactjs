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
          <Route path="about" element={<About />} loader={usersLoader} />
          <Route  path="contact_page" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}
// 1️⃣ Define a loader function
async function usersLoader() {
  // This can be a fetch request or any async call
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users; // Data returned here is available in the component
}
export default App;

//http://localhost:5173/APP/home
