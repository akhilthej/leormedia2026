import React from "react";

// Webpack dynamic require
const importAll = (r) => r.keys().map(r);
const brandImages = importAll(
  require.context("../../assets/Clients", false, /\.(png|jpe?g|webp)$/)
).sort();

const BrandGallery = () => {
  return (
    <div className="py-10">
      <p className="text-center font-bold pb-5 text-secondary">OUR CLIENTS</p>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
        {brandImages.map((imageUrl, index) => {
          // Extract file name without extension and remove extra hash
          const rawName = imageUrl.split("/").pop(); 
          const nameWithoutExtension = rawName.replace(
            /\.(png|jpe?g|webp)$/i,
            ""
          );
          const cleanName = nameWithoutExtension.split(".")[0];

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white/20 p-4 rounded-md flex items-center justify-center mb-2 shadow-md">
                <img
                  src={imageUrl}
                  alt={cleanName}
                  className="max-h-[80px] object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandGallery;
