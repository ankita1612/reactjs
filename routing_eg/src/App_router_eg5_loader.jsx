import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import User_data from "./pages/User_data"; // Updated import

function Home() {
  return <h2>Home Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

// ✅ Loader function
async function usersLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

// ✅ Define router (with loader)
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [      
      { path: "home", element: <Home /> },
      { path: "users", element: <User_data />, loader: usersLoader },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

// ✅ Simple layout
import { Outlet, Link } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/users">User data</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
