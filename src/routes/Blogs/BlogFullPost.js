// FullBlog.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from "../../assets/data/BlogsData"; // Import the local JS file
import { Link } from 'react-router-dom';
function FullBlog() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const foundPost = BlogsData.find(post => post.slug === slug); // Find the post in the local data
    if (foundPost) {
      setPost(foundPost);
    } else {
      setError({ message: 'Post not found' });
    }
  }, [slug]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderContent = () => {
    if (!post || !post.content) {
      return { __html: '' };
    }
    // No need to replace h3 if we style it properly via CSS
    return { __html: post.content };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <main className="mt-10 mb-20">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center text-primary font-medium mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blogs
        </Link>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12" style={{ height: "32rem" }}>
          <img
            src={post.feature_image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto">
          <div
            className="blog-content prose-lg text-gray-800 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={renderContent()}
          ></div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              {/* Simple share buttons placeholder */}
              <button className="p-3 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FullBlog;