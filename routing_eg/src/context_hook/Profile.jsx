// Profile.js
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, updateName } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>👤 User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>

      <button onClick={() => updateName("Priya")}>
        Change Name to Priya
      </button>
    </div>
  );
}

export default Profile;
