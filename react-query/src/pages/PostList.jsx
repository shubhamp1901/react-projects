import React from "react";
import AddPost from "../components/AddPost";
import Example from "../components/Example";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Post from "./Post";
import { deletePost, fetchPosts } from "../api/posts";
import { useNavigate } from 'react-router-dom'

const PostList = () => {

  const navigate = useNavigate()

  // useQueryClient is used to interact with React Query's cache.
  // It helps invalidate queries when data is updated
  const queryClient = useQueryClient();

  // useQuery fetches posts from the backend
  // queryKey: ["posts"] – Identifies this query in React Query's cache.
  // queryFn: fetchPosts – Calls the fetchPosts function (which makes an API request
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });

  // useMutation is used for performing side effects (like deleting posts)
  // onSuccess → When a post is successfully deleted, it invalidates the "posts" query, forcing a refetch to get updated data.
  const {mutate} = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts']});
    }
  })

  // Calls mutate(id), which runs deletePost(id), deleting the post.
  const handleDelete = (id) => {
    mutate(id)
  }

  if (isError) return <h1>Error 404!!! No Posts....</h1>;
  if (isLoading) return <h1>Posts Loading....</h1>;


  return (
    <div>
      <AddPost />
      {posts?.map((post) => (
        <div key={post.id}>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            {post.title}
          </h4>
          <p>{post.body}</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button style={{cursor: 'pointer'}} onClick={() => navigate(`/post/${post.id}/edit`)}>edit</button>
            <button onClick={() => handleDelete(post.id)}>delete</button>
          </div>
        </div>
      ))}
      <Example />
    </div>
  );
};

export default PostList;
