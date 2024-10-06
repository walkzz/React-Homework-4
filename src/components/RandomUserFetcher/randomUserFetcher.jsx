import { useState } from "react";
const RandomUserFetcher = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const fetchRandomUser = async () => {
    try {
      setError(null);
      const randomId = Math.floor(Math.random() * 10) + 1;
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={fetchRandomUser}>Get Random User</button>
      {user && (
        <div style={{ marginTop: "20px", border: "2px solid #ccc", borderRadius: "50px", padding: "40px", display: "block" }}>
          <h2>{user.name}</h2>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Phone Number:</strong> {user.phone}</p>
          <p><strong>Company Name:</strong> {user.company.name}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};
export default RandomUserFetcher;