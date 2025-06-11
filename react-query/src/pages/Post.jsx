import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // queryKey: ["posts", id] → Caches and manages the query uniquely based on id.
  // If the post ID is 5, the query key becomes ["posts", 5].
  // queryFn: () => fetchPost(id) → Calls the fetchPost function with the post ID.

  // What does React Query do?
  // If the post is cached, it returns cached data immediately.
  // If the post is not cached, it fetches from the API.
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id)
  });


  if (isError) return <h1>Error 404!!! No Post....</h1>;
  if (isLoading) return <h1>Post Loading....</h1>;

  return (
    <div>
      <button onClick={() => navigate("/")}>back to list posts</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
