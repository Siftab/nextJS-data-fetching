"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <h1>total users: {users.length}</h1>
      <div>
        {users.map((user) => (
          <div className="card-body items-center text-center" key={user.id}>
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
