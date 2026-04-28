// Error404.js
import React from 'react';
import { Link } from 'react-router-dom';
import LogoLoader from '../../assets/LogoLoader.svg';

const Error404 = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl sm:text-7xl font-extrabold text-secondary tracking-wide animate-pulse">
        404
      </h1>
      <h2 className="text-3xl sm:text-4xl font-semibold text-secondary mt-4">
        Page Not Found
      </h2>
      <p className="mt-6 text-lg sm:text-xl text-secondary max-w-xl">
        Oops! It seems the page you're looking for doesn't exist.  
        For security reasons, some pages are restricted.
      </p>
      <p className="mt-4 text-gray-400 text-md sm:text-lg">
        Here are some helpful links instead:
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link to="/" className="text-primary hover:underline font-medium">
          Home
        </Link>
        <Link to="/aboutus" className="text-primary hover:underline font-medium">
          About Us
        </Link>
        <Link to="/services" className="text-primary hover:underline font-medium">
          Services
        </Link>
        <Link to="/contactus" className="text-primary hover:underline font-medium">
          Contact
        </Link>
        <Link to="/blog" className="text-primary hover:underline font-medium">
          Blog
        </Link>
      </div>

      <img
        src={LogoLoader}
        alt="404 Error"
        className="mt-12 w-1/2 max-w-xs sm:max-w-md animate-bounce"
      />
    </div>
  );
};

export default Error404;
