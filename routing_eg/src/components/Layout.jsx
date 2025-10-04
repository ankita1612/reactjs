import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh", padding: "1rem" }}>
        <Outlet /> {/* This renders the page content */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
