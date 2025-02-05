"use client";


import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// Sanity client
const client = createClient({
  projectId: "35gwolcq",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

// Blog interface
type Blog = {
  _id: string;
  Title: string;
  image: string;
  block: any;
};

// Comment interface
type Comment = {
  _id: string;
  name: string;
  message: string;
  createdAt: string;
};

const BlogDetail = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams(); // Blog ID

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const query = `*[_type == "blog" && _id == $id][0] {
          _id, Title, "image": image.asset->url, block
        }`;
        const data: Blog = await client.fetch(query, { id });
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const query = `*[_type == "comment" && blogId == $id] | order(_createdAt desc)`;
        const data: Comment[] = await client.fetch(query, { id });
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchBlog();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    try {
      const newComment = {
        _id: Math.random().toString(36).substring(2, 9),
        _type: "comment",
        blogId: id,
        name,
        message,
        createdAt: new Date().toISOString(),
      };
      setComments((prev) => [newComment, ...prev]);
      await client.create(newComment);
      // setComments((prev) => [newComment, ...prev]); // Update UI
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await client.delete(commentId);
      setComments((prev) => prev.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  if (!blog) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
         src={blog.image} 
         width={400}
         height={250}
         alt={blog.Title} 
         className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{blog.Title}</h2>
          <div className="prose">
            <PortableText value={blog.block} />
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="border p-2 w-full mb-2 rounded-md"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a comment..."
            className="border p-2 w-full rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
          >
            Add Comment
          </button>
        </form>

        {/* Display Comments */}
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="bg-white p-3 rounded-lg mb-2 shadow-sm">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-700">{comment.message}</p>
              <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
              <button
                onClick={() => handleDeleteComment(comment._id)}
                className="text-red-500 text-sm mt-2"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;

