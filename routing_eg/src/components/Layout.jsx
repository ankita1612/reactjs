import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      
      <main style={{ minHeight: "70vh", padding: "1rem" }}>
       
      </main>
      <Footer /><Outlet /> {/* This renders the page content */}
    </div>
  );
}

export default Layout;
