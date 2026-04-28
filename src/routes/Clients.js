import React from "react";

// Webpack dynamic require
const importAll = (r) => r.keys().map(r);
const brandImages = importAll(
  require.context("../assets/Clients", false, /\.(png|jpe?g|webp)$/)
).sort();

const BrandGallery = () => {
  return (
    <div className="py-16 bg-white ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Clients
          </h2>
        </div>

        {/* Clean Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brandImages.map((image, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={image}
                alt=""
                className="max-w-full max-h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandGallery;