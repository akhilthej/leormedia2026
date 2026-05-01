import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogsData from "../../assets/data/BlogsData";
import BlogCoverimage from '../../assets/CoverImages/BlogCover.webp';
import seoData from "../../assets/data/seo.json";

const { title, description, keywords, canonical, ogImage } = seoData.blogs;

function BlogPage() {
  const limitContent = (content) => {
    const strippedContent = content.replace(/<[^>]*>/g, ' ');
    const words = strippedContent.trim().split(/\s+/);
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : words.join(' ');
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
            {BlogsData.length > 0 ? (
              BlogsData.map(post => (
                <Link to={`/blogs/${post.slug}`} key={post.slug} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={post.feature_image} 
                        alt={post.title} 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Tech Insights
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                        {limitContent(post.content)}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                          Read Full Article 
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">No blog posts available at the moment.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlogPage;