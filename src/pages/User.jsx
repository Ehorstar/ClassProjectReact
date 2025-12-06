import React from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const user = useLoaderData();

  return (
    <div>
      <h1>{user.login}</h1>
      <p>Bio: {user.bio}</p>
      <p>
        Blog:{" "}
        <a href={user.blog} target="blank" rel="noreferrer">
          {user.blog}
        </a>
      </p>
    </div>
  );
};

export default User;
