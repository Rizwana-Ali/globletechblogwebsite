"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Link from "next/link";

// Sanity client configuration
const client = createClient({
  projectId: "35gwolcq", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2025-01-01", // Use a relevant API version
  useCdn: true,
});

// Blog interface
type Blog = {
  _id: string;
  Title: string;
  image: string;
  block: any; // Portable text content
};

const Hero: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blog"] | order(_updatedAt asc) {
        _id,
        Title, 
        "image": image.asset->url,
        block
      }`;
      const data = await client.fetch(query);
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={blog.image}
                width={400}
                height={250}
                alt={blog.Title}
                className="h-auto mx-auto w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{blog.Title}</h2>
                {/* Render block content */}
          
                <Link href={`/blogs/blogDetail/${blog._id}`}>
                
                  <button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Read More
                  </button>
                  
                </Link>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
















