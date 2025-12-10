import React from "react";
import { useSelector } from "react-redux";


const Posts = () => {
  const { data, loading } = useSelector((state) => state.posts);
  
  if (loading) {
    return "Loading..";
  }

  return (
    <div>
      <h1>Posts</h1>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
