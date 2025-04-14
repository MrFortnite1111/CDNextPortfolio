"use client"
import { useState } from "react";

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const allPosts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" },
        { id: 4, title: "Post 4" },
        { id: 5, title: "Post 5" },
    ]

    const totalPages = Math.ceil(allPosts.length / postsPerPage)

    const currentPosts = allPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <div>
          <h1>Blog</h1>
    
          <ul>
            {currentPosts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
    
          <div>
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
                style={{
                  marginRight: "10px",
                  fontWeight: currentPage === idx + 1 ? "bold" : "normal",
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      );

};    