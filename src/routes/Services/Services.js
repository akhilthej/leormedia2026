import { Link } from "react-router-dom";

import { ServicesPageDetails } from "../../assets/data/PageData"; // Adjust the path as necessary
import {
  FaArrowRight,
  FaFileInvoice,
  FaPhone,
  FaQuestion,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import LineofEngagement from "../../components/LineofEngagement";

import { HomeCommunityCover } from "../../assets/data/Imagedata";

import { GlobalData } from "../../assets/data/GlodalData";
import seoData from "../../assets/data/seo.json";
import { Helmet } from "react-helmet-async";


const { title, description, keywords, canonical, ogImage } = seoData.services;
const Services = () => {
  return (
    <div className="services">
    
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Leor Media" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical Link */}
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main>
        {/* Title Card */}
        <section
          className="py-10 sm:py-40"
          style={{
            backgroundImage: `url("${ServicesPageDetails.coverimage}")`,
            backgroundSize: ServicesPageDetails.coverImage.style.backgroundSize,
            backgroundPosition:
              ServicesPageDetails.coverImage.style.backgroundPosition,
          }}
        >
          <div className="flex flex-col items-center md:flex-row justify-center">
            <div className="md:w-1/2 md:pr-10"></div>
            <div className="md:w-1/2 px-5">
              <div className="text-right md:text-left">
                <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white font-tusker">
                  {ServicesPageDetails.title}
                </h1>
                <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
                  {ServicesPageDetails.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link to="/contactus">
                    <span className="transform flex rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black sm:text-[14px] text-[12px] hover:text-white">
                      <IoCall className="my-auto mr-2" /> Get in Touch
                    </span>
                  </Link>

                  <a href={GlobalData.company.companyWhatsapp}>
                    <span className="transform flex sm:text-[14px] text-[12px] rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                      <FaWhatsapp className="my-auto mr-2" /> WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section>
          <section className="text-center mx-auto my-12 lg:px-20">
            <p className="text-sm font-medium text-black">
              {ServicesPageDetails.section2.tagline}
            </p>
            <h2 className="font-tusker pb-2 text-2xl md:text-5xl lg:text-6xl text-black mt-3">
              {ServicesPageDetails.section2.heading}
            </h2>
            <p className="text-sm font-medium text-white">
              {ServicesPageDetails.section2.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/frequently-asked-questions">
                <span className="button1">
                  <FaQuestion className="my-auto mr-2" /> FAQ
                </span>
              </Link>

              <a href={GlobalData.company.companyWhatsapp}>
                <span className="button2">
                  <FaWhatsapp className="my-auto mr-2" /> WhatsApp
                </span>
              </a>
            </div>
          </section>
          <section className="my-12 px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
              {ServicesPageDetails.services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 border rounded-lg bg-white/30 hover:bg-white/50 transition"
                  >
                    <img
                      src={service.icon}
                      className="w-16 h-16 ml-auto mx-auto justify-center" // Set width and height to 30px (8 * 4 = 32px, close to 30px)
                      alt="illustration"
                      loading="lazy"
                    />
                    <p className="font-medium text-black sm:text-[14px] text-[12px]">
                      {service.title}
                    </p>
                    <p className="sm:text-[12px] text-black text-[10px]">
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <button className="bg-primary flex sm:text-[14px] text-[10px] font-medium px-2 py-2 mt-2 rounded-md">
                        <FaArrowRight className="mr-2 my-auto animate-wiggle" />{" "}
                        Know More
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </section>

        {/* Section - 3 */}
        <section
          style={{
            backgroundImage: `url(${HomeCommunityCover})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="cursor-default py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight">
                WE BUILD
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight">
                SIMPLE BUT COMPLEX
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight">
                STABLE COMMUNITY
              </h2>
            </div>
          </div>
        </section>

        {/* section -4 */}
        <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 tracking-tight ">
            Need more information?
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
            Explore our comprehensive documentation for more information on our
            services.
          </p>


        </section>

        {/*section -5*/}
        <LineofEngagement />

        {/* section -6 */}
        {/* "need more help" section */}
        <section className="text-center mx-auto py-8 bg-primary/70 drop-shadow-lg backdrop-blur-sm">
          <h2 className="cursor-default font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-white mt-3  tracking-tight ">
            Need Help ?
          </h2>
          <p className="cursor-default text-sm text-black  mb-2">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={`tel:${GlobalData.company.companyPhone}`}
              className="button1"
            >
              <FaPhone /> Contactus
            </a>

            <a href="/frequently-asked-questions" className="button1">
              <FaQuestion /> FAQ
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
