import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogsData from "../../assets/data/BlogsData.json";
import BlogCoverimage from '../../assets/CoverImages/BlogCover.webp';
import seoData from "../../assets/data/seo.json";

const { title, description, keywords, canonical, ogImage } = seoData.blogs;

function BlogPage() {
  const limitContent = (content) => {
    const strippedContent = content.replace(/<[^>]*>/g, '');
    const words = strippedContent.split(' ');
    return words.slice(0, 20).join(' ');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Leor Media" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <main className="space-y-8 py-8">
        {/* Hero Section */}
        <section 
          className="py-12 md:py-20 px-4 rounded-lg mx-4"
          style={{ 
            backgroundImage: `url(${BlogCoverimage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="text-center text-white max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Blogs & Research
            </h1>
            <p className="text-sm opacity-90">
              Research done for our project and Technologies we use for our community.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map(post => (
              <Link to={`/blogs/${post.slug}`} key={post.slug}>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                    src={post.feature_image} 
                    alt={post.title} 
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {limitContent(post.content)}
                    </p>
                    <button className="w-full text-sm bg-primary text-white py-2 rounded-md hover:bg-orange-500 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlogPage;