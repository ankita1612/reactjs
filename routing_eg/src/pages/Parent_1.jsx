import { Outlet, Link } from "react-router-dom";

export default function Parent_1() {
  return (
    <div>
      <h2>Parent</h2>
      <nav>
        <Link to="nested_page_1">Nested-1</Link> |{" "}
        <Link to="nested_2">Nested-2</Link>
      </nav>

      {/* Where nested routes render */}
      <Outlet />
    </div>
  );
}
