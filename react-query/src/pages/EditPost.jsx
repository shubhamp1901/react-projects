import React from 'react'
import PostForm from '../components/PostForm'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost, updatePost } from '../api/posts'

const EditPost = () => {

  const queryClient = useQueryClient()

  const navigate = useNavigate();
  const { id } = useParams();

  // queryKey: ["posts", id] → Helps React Query cache the data properly.
  // queryFn: () => fetchPost(id) → Calls fetchPost(id) to fetch post details

  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      // Invalidates the "posts" cache, so React Query refetches the updated posts.
      queryClient.invalidateQueries({ queryKey: ['posts']});
      navigate("/")
    }
  })


  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({id, ...updatedPost})
  }

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div>
      <PostForm onSubmit={handleSubmit} initialValue={post} />
    </div>
  )
}

export default EditPost



// What is useMutation?
// useMutation in React Query is used for handling mutations (modifying data), such as:
// ✅ Creating new records (e.g., adding a new post)
// ✅ Updating existing data (e.g., editing a post)
// ✅ Deleting data (e.g., removing a post)

// Unlike useQuery, which fetches and caches data, useMutation:

// Does not cache responses automatically.
// Requires manual invalidating queries to refresh data.
// Allows side effects after successful operations (e.g., navigation, toast messages).