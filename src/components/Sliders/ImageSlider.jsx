import React, { useState, useEffect } from "react";
import {
  AdvertisingCoverHomeImage,
  BrandingCoverHomeImage,
  DigiatalMarketingCoverHomeImage,
  GraphicDesigningCoverHomeImage,
  WebDevelopmentCoverHomeImage,
} from "../../assets/data/Imagedata";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url: WebDevelopmentCoverHomeImage,
      title: "Events",
      description: "Create stunning websites, engage, grow online.",
      button1: {
        text: "Get Quotation",
        link: "/services/events",
      },
      button2: {
        text: "Contact us",
        link: "https://api.whatsapp.com/send?phone=919666643456&text=Hi,%20need%20Detials%20Regarding%20Events",
      },
    },
    {
      url: DigiatalMarketingCoverHomeImage,
      title: "Digital Marketing",
      description: "Boost brands, reach audiences, measure results.",
      button1: {
        text: "Learn More",
        link: "/services/digital-marketing-company",
      },
      button2: {
        text: "Contact Us",
        link: "https://api.whatsapp.com/send?phone=919666643456&text=Hi,%20need%20Detials%20Regarding%20DigitalMarketing",
      },
    },
    {
      url: GraphicDesigningCoverHomeImage,
      title: "Graphic Designing",
      description: "Design visuals, convey messages, inspire creativity.",
      button1: {
        text: "Explore",
        link: "/services/multimedia-company",
      },
      button2: {
        text: "Contact Us",
        link: "https://api.whatsapp.com/send?phone=919666643456&text=Hi,%20need%20Detials%20Regarding%20GraphicDesigning",
      },
    },
    {
      url: BrandingCoverHomeImage,
      title: "Branding",
      description: "Craft identities, build trust, leave impressions.",
      button1: {
        text: "Learn More",
        link: "/services/branding-comapny",
      },
      button2: {
        text: "Contact us",
        link: "https://api.whatsapp.com/send?phone=919666643456&text=Hi,%20need%20Detials%20Regarding%20Branding",
      },
    },
    {
      url: AdvertisingCoverHomeImage,
      title: "Advertising",
      description: "Promote products, captivate audiences, drive sales.",
      button1: {
        text: "Learn More",
        link: "/services/advertising-company",
      },
      button2: {
        text: "Contact us",
        link: "https://api.whatsapp.com/send?phone=919666643456&text=Hi,%20need%20Detials%20Regarding%20Advertising",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative sm:py-10 py-0  md:py-0 overflow-hidden">
      <div className="relative w-full h-72 md:h-72 lg:h-[70vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 " />

            {/* Content at bottom */}
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center pb-8 px-4">
              <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl">
                {image.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-lg">
                {image.description}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={image.button1.link}
                  className="text-sm sm:text-base rounded-sm bg-yellow-500 hover:bg-yellow-600 border border-yellow-400 px-6 sm:px-10 py-2 font-semibold text-white shadow-md transition-all duration-300"
                >
                  {image.button1.text}
                </a>
                <a
                  href={image.button2.link}
                  className="text-sm sm:text-base rounded-sm bg-orange-500 hover:bg-orange-600 border border-orange-400 px-6 sm:px-10 py-2 font-semibold text-white shadow-md transition-all duration-300"
                >
                  {image.button2.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
