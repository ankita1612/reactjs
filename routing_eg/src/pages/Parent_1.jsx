import { Outlet, NavLink, useLocation } from "react-router-dom";

export default function Parent_1() {
  const location = useLocation();
  console.log("Current location:", location);  
  return (
    <div>
      <h2>Parent</h2>
      <nav>
        <NavLink to="/parent_page" end>Nested-1</NavLink> |{" "}        
        {/* here must be parent_page [same as parent route path so it call both compoent ] */}
        <NavLink to="nested_2">Nested-2</NavLink>        
      </nav>

      {/* Where nested routes render */}
      <Outlet />
    </div>
  );
}
