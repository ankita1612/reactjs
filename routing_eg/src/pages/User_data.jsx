import { useLoaderData } from "react-router-dom";

export default function User_data() {
  const users = useLoaderData(); // Access loader data

  return (
    <div>
      <h2>About Page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
