import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <div className="users-title">
        <h1>Users</h1>
        <div>
          <input type="text" placeholder="Search.."/>
        </div>
      </div>
      
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id}>
            <img
              src={user.avatar_url}
              alt={user.login}
              onClick={() => navigate(`/users/${user.login}`)}
              style={{ cursor: "pointer" }}
            />
            {user.login}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
