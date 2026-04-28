import React, { useState } from "react";

import {
  DigitalMarketingImage,
  AdvertisingImage,
  GraphicDesignImage,
  BrandingImage,
  MobileAppDevImage,
  WebDevelopmentImage,
} from "../assets/data/Imagedata";

import {
  DigitalmarketingIcon,
  Advertisingicon,
  Graphicdesignicon,
  Webdevelopmenticon,
  Mobileappicon,
  Brandingicon,
} from "../assets/data/icon_data";

const icons = {
  "Digital Marketing": DigitalmarketingIcon,
  "Web Development": Webdevelopmenticon,
  "Mobile App Development": Mobileappicon,
  Branding: Brandingicon,
  "Graphic Design": Graphicdesignicon,
  Advertising: Advertisingicon,
};

const ServicesTab = () => {
  const [selected, setSelected] = useState("Digital Marketing");

  const handleButtonClick = (category) => {
    setSelected(category);
  };

  const images = {
    "Digital Marketing": DigitalMarketingImage,
    "Web Development": WebDevelopmentImage,
    "Mobile App Development": MobileAppDevImage,
    Branding: BrandingImage,
    "Graphic Design": GraphicDesignImage,
    Advertising: AdvertisingImage,
  };

  const descriptions = {
    "Digital Marketing":
      "Digital marketing involves promoting products or services through digital channels.",
    "Web Development":
      "Web development is the work involved in developing a website for the Internet.",
    "Mobile App Development":
      "Mobile app development is the process of creating software applications for mobile devices.",
    Branding:
      "Branding is the process of creating a unique name and image for a product in the consumer's mind.",
    "Graphic Design":
      "Graphic design is the art of visual communication that combines images and text.",
    Advertising:
      "Advertising is the activity of producing advertisements for commercial products or services.",
  };

  return (
    <div className="flex flex-col md:flex-row w-full text-secondary">
      {/* Left Image */}
      <div className="flex-1" style={{ flex: "0 0 40%" }}>
        <div className="flex justify-center items-center h-full">
          <img
            src={images[selected]}
            alt={selected}
            className="sm:w-[520px] w-[300px] object-contain z-10"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex-1" style={{ flex: "0 0 40%" }}>
        <div className="flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-12 relative h-full">
          <div className="text-center p-2">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
              {selected}
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-md">
              {descriptions[selected]}
            </p>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex-1" style={{ flex: "0 0 20%" }}>
        {/* Horizontal scroll on small screens */}
        <div className="md:hidden flex overflow-x-auto space-x-3 py-2 scrollbar-hide">
          {Object.keys(images).map((category) => (
            <button
              key={category}
              onClick={() => handleButtonClick(category)}
              className={`flex flex-col items-center text-center min-w-[64px] ${
                selected === category ? "opacity-100" : "opacity-70"
              }`}
            >
              <img src={icons[category]} alt={category} className="w-10 h-10" />
              <p className="text-[10px] font-medium text-secondary mt-1">
                {category}
              </p>
            </button>
          ))}
        </div>

        {/* Vertical list on medium+ screens */}
        <div className="hidden md:flex flex-col justify-center items-center gap-4 p-4 h-full">
          {Object.keys(images).map((category) => (
            <button
              key={category}
              onClick={() => handleButtonClick(category)}
              className={`flex flex-col items-center p-2 min-w-[80px] rounded-lg transition-all duration-300 ${
                selected === category ? "" : ""
              } `}
            >
              <img
                src={icons[category]}
                alt={category}
                className="w-12 lg:w-16 h-auto mb-1"
              />
              <span className="text-sm lg:text-base font-medium text-center">
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;
