import { Link } from "react-router-dom";
import { MobileAppDevelopment } from "../../../assets/data/PageData";
import LineofEngagement from "../../../components/LineofEngagement";
import { HomeCommunityCover } from "../../../assets/data/Imagedata";
import { GlobalData } from "../../../assets/data/GlodalData";
import seoData from "../../../assets/data/seo.json";
import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaPhone, FaQuestion, FaWhatsapp } from "react-icons/fa";

const { title, description, keywords, canonical, ogImage } = seoData.mobileapp;

const MobileAppDevelopmentPage = () => {
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

      <main className="space-y-8 my-6">
        {/* Hero Section */}
        <section
          className="py-12 md:py-20 px-4 rounded-lg mx-4"
          style={{
            backgroundImage: `url("${MobileAppDevelopment.coverimage}")`,
            backgroundSize:
              MobileAppDevelopment.coverImage.style.backgroundSize,
            backgroundPosition:
              MobileAppDevelopment.coverImage.style.backgroundPosition,
          }}
        >
          <div className="text-center text-white max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {MobileAppDevelopment.title}
            </h1>
            <p className="text-sm opacity-90 mb-6">
              {MobileAppDevelopment.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
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

        {/* Services Section */}
        <section className="px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-2">
              {MobileAppDevelopment.section2.tagline}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-3">
              {MobileAppDevelopment.section2.heading}
            </h2>
            <p className="text-sm text-gray-700 mb-6">
              {MobileAppDevelopment.section2.description}
            </p>

            <Link
              to="/frequently-asked-questions"
              className="inline-flex items-center bg-primary hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <FaQuestion className="mr-2" /> FAQ
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {MobileAppDevelopment.services.map((service, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-50 rounded-lg border hover:bg-white transition-colors"
              >
                <img
                  src={service.icon}
                  className="w-6 h-6 mx-auto mb-2"
                  alt={service.title}
                  loading="lazy"
                />
                <p className="font-medium text-xs md:text-sm mb-1">
                  {service.title}
                </p>
                <p className="text-xs text-gray-600 mb-3">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center w-full bg-primary text-white px-2 py-1 rounded text-xs font-medium hover:bg-orange-500 transition-colors"
                >
                  Know More <FaArrowRight className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section
          className="py-12 md:py-20 px-4 rounded-lg mx-4"
          style={{
            backgroundImage: `url(${HomeCommunityCover})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="text-center text-white bg-black/60 py-12 rounded-lg">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-yellow-400">WE BUILD</span>
              <br />
              <span className="text-orange-600">SIMPLE BUT COMPLEX</span>
              <br />
              <span className="text-yellow-400">STABLE COMMUNITY</span>
            </h2>
          </div>
        </section>

        {/* Engagement Section */}
        <LineofEngagement />

        {/* CTA Section */}
        <section className="text-center bg-primary py-8 px-4 rounded-lg mx-4">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
            Need Help?
          </h2>
          <p className="text-sm text-white/90 mb-4">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${GlobalData.company.companyPhone}`}
              className="inline-flex items-center bg-white text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FaPhone className="mr-2" /> Contact Us
            </a>
            <Link
              to="/frequently-asked-questions"
              className="inline-flex items-center bg-white text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FaQuestion className="mr-2" /> FAQ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileAppDevelopmentPage;
