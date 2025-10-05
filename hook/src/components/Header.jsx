import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {

 const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
  };

  const activeStyle = {
    color: "#61dafb", // React blue color for active link
    borderBottom: "2px solid #61dafb",
  };   
  return (
    <header style={{ backgroundColor: "#282c34", padding: "1rem" }}>
      <nav>
        <NavLink to="/home"  style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}  end>
          Home
        </NavLink>

        <NavLink to="/about"  style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)} >
          About
        </NavLink>

        <NavLink to="/contact_page" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)} >  
            Contact 
        </NavLink>
      </nav>
    </header>
        //NavLink works just like Link but adds a prop called isActive to let you know which link is currently active.
        //The end prop ensures that the Home link is only active on /, not on subroutes like /about.
        //The active link’s style (activeStyle) changes color and adds an underline or border.

  );
}

export default Header;
