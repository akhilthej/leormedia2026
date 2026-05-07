import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaChevronRight,
  FaPhone,
  FaQuestion,
  FaStar,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalData } from "../../assets/data/GlodalData";

// Lazy load heavy components
const LazyImage = ({ src, alt, className, width, height, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const bgSection = document.querySelector("#hero-banner");
    const bgLoader = document.querySelector("#bg-loader");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (bgLoader) bgLoader.style.display = "none";
        }
      });
    });

    if (bgSection) observer.observe(bgSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative overflow-hidden ${className} `}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-auto transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
};

const SubPages = ({ pageData, seoData }) => {
  const { category } = useParams();
  
  // Use category-specific data if available, otherwise fallback to the provided pageData
  const data = useMemo(() => {
    if (pageData && category && pageData[category]) {
      return pageData[category];
    }
    return pageData;
  }, [pageData, category]);

  const [openIndex, setOpenIndex] = useState(null);

  // Memoize expensive computations
  const { title, description, keywords, canonical, ogImage } = useMemo(() => {
    if (!data?.SeoName?.seotitle) return {};
    return seoData[data.SeoName.seotitle] || {};
  }, [seoData, data?.SeoName?.seotitle]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Memoize the services grid to prevent re-renders
  const servicesGrid = useMemo(
    () => (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {data?.services?.map((service, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-gray-50 rounded-lg border hover:bg-white transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center text-primary mb-3">
              {typeof service.icon === "string" ? (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <FontAwesomeIcon icon={service.icon} className="text-2xl" />
              )}
            </div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              {service.description}
            </p>
            <ul className="space-y-1 mb-4">
              {service.details?.map((point, idx) => (
                <li key={idx} className="text-xs text-gray-500 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to={service.link}
              className="inline-flex items-center text-primary font-medium hover:text-orange-600 transition-colors mt-auto"
            >
              Know More <FaArrowRight className="ml-2 text-xs" />
            </Link>
          </div>
        ))}
      </div>
    ),
    [data?.services]
  );


  // Memoize FAQ section
  const faqSection = useMemo(
    () => (
      <div className="space-y-3">
        {data?.faqs?.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-3 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium">{faq.question}</span>
              <FaChevronRight
                className={`transition-transform ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-3 bg-gray-50 text-sm text-gray-700 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    ),
    [data.faqs, openIndex]
  );

  return (
    <div className="max-w-6xl mx-auto mt-28">
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
        <link rel="canonical" href={canonical} />

        {/* Preload critical resources */}
        <link rel="preload" href={data.coverimage} as="image" />
      </Helmet>

      <main className="space-y-8 my-6">
        {/* Hero Banner with optimized background image */}
        <section className="py-8 md:py-20 px-4 rounded-lg mx-4 relative overflow-hidden">
          {/* Background with loading state */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `url("${data.coverimage}")`,
              backgroundSize:
                data.coverImage?.style?.backgroundSize || "cover",
              backgroundPosition:
                data.coverImage?.style?.backgroundPosition || "center",
            }}
          />

          {/* Loading overlay */}
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse"
            style={{ display: "none" }}
            id="bg-loader"
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              {data.title}
            </h1>
            <p className="text-sm mb-6 opacity-90">{data.subtitle}</p>

            <div className="flex wrap justify-center gap-3">
              <Link
                to="/contactus"
                className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                <FaPhone className="mr-2" /> Get in Touch
              </Link>
              <a
                href={GlobalData.company.companyWhatsapp}
                className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Header Section */}
        <section className="text-center px-4">
          <p className="text-sm text-gray-600 mb-2">
            {data.section2.tagline}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-3">
            {data.section2.heading}
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            {data.section2.description}
          </p>

          <Link
            to="/frequently-asked-questions"
            className="inline-flex items-center bg-primary hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <FaQuestion className="mr-2" /> FAQ
          </Link>
        </section>

        {/* Services Grid */}
        <section className="px-4">{servicesGrid}</section>

      

        {/* CTA Section */}
        <section className="text-center bg-primary/80 py-6 mx-4 rounded-lg">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
            Get In Touch
          </h2>
          <p className="text-sm text-white/90 mb-4">
            Have questions? We're here to help.
          </p>

          <div className="flex justify-center gap-3">
            <a
              href={`tel:${GlobalData.company.companyPhone}`}
              className="inline-flex items-center bg-white text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FaPhone className="mr-2" /> Contact Us
            </a>
            <Link
              to="/frequently-asked-questions"
              className="inline-flex items-center bg-white text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FaQuestion className="mr-2" /> FAQ
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
          {faqSection}
        </section>
      </main>
    </div>
  );
};

export default React.memo(SubPages);
