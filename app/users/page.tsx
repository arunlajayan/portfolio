import React from "react";
import ProductCard from "../components/ProductCard";

interface User {
  id: number;
  name: string;
  email: string;
}

const usersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <div className="overflow-x-auto">
      <h1>users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-xs">
        <thead>
          <tr>
            <td>name</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductCard />
    </div>
  );
};

export default usersPage;
