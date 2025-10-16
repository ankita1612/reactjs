import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

function Home() {
  return <h2>🏠 Welcome Home</h2>;
}

function Contact() {
  return <h2>🏠 Welcome Contact</h2>;
}

function ChildHome1() {
  return <p>This is the default (index) dashboard page.</p>;
}

function ChildHome2() {
  return <p>Here are your reports.</p>;
}
function MainLayout() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        {/* 'end' makes Home active only on exact "/" */}
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
      </nav>
      <hr />
      {/* Renders nested child routes */}
      <Outlet />
    </div>
  );
}
function ParentLayout() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/dashboard" end >Overview</NavLink>
        <NavLink to="reports" >Reports</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* index route → default when visiting "/" */}
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />

          <Route path="dashboard" element={<ParentLayout />}>
            {/* index route → default child of dashboard */}
            <Route index element={<ChildHome1 />} />
            <Route path="reports" element={<ChildHome2 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
