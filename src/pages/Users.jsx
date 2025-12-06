import React from "react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import Search from "../components/search/Search";

const Users = () => {
  const users = useLoaderData();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterUsers=(user)=>{
    if(!searchParams.get('q')) return true;
    return user.login.toLowerCase().includes(searchParams.get('q'))
  };

  return (
    <div>
      <div className="users-title">
        <h1>Users</h1>
        <Search />
      </div>

      <div className="user-list">
        {users.filter(filterUsers).map((user) => (
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
