import React, { useEffect, useRef, useState } from "react";
import { useFetcher, useLoaderData, useLocation, useNavigate } from "react-router";

const Search = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const lastUserRef = useRef();
  const [users, setUsers] = useState(loaderData.items);
  const [page,setPage] = useState(2);
  const location = useLocation();
  const fetcher = useFetcher();

  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Is visible");
          fetcher.load(`/search?q=${query}&page=${page}`)
        } else {
          console.log("Invisible");
        }
      },
      {
        threshold: 0,
        rootMargin: "200px",
      }
    );
    observer.observe(lastUserRef.current);
  }, []);

  return (
    <div>
      <h1>Search results</h1>
      <div className="user-list">
        {users.map((user, index) => (
          <div
            key={user.id}
            ref={index === users.length - 1 ? lastUserRef : null}
          >
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
