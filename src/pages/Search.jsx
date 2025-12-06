import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Search = () => {
  const navigate = useNavigate();
  const users = useLoaderData();
  return (
    <div>
      <h1>Search results</h1>
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

export default Search;
