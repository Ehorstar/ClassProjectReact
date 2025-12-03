import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Users</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt="" />
            {user.login}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
