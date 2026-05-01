import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  aboutcover, 
  CEO_OriginalImage, 
  FixedPrice,
  OntimeDelivery,
  TimeManage,
  HiringModel,
  DigitalMarketingImage,
  BrandingImage,
  AdvertisingImage
} from "../assets/data/Imagedata.jsx";
import seoData from "../assets/data/seo.json";

const Aboutus = () => {
  const { title, description, keywords, canonical, ogImage } = seoData.aboutus;

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img 
            src={aboutcover} 
            alt="About Leor Media" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up">
            Transforming Visions into <span className="text-primary">Memorable Experiences</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light">
            We don’t just plan events or run campaigns—we create unforgettable stories and powerful brand identities.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A Team of Passionate Creators Based in <span className="text-primary">Visakhapatnam</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Leor Media is a full-service event management, digital marketing, and branding company dedicated to helping businesses and individuals stand out in a crowded world. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From grand weddings to complete brand transformations, we bring creativity, strategy, and flawless execution together. Our goal is simple: deliver excellence, every single time.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Events Managed</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Brands Transformed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            <img 
              src={CEO_OriginalImage} 
              alt="Our Leadership" 
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">What We Do</h2>
            <p className="text-gray-600 text-lg">We offer a wide range of services designed to meet all your event and marketing needs under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Management */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <img src={AdvertisingImage} alt="Events" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Event Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Weddings & Pre-Wedding
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Corporate Events
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Birthday & Private Parties
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <img src={DigitalMarketingImage} alt="Marketing" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Digital Marketing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  SEO & Social Media
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Paid Ads & Campaigns
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Content Creation
                </li>
              </ul>
            </div>

            {/* Branding */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <img src={BrandingImage} alt="Branding" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Branding</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Brand Strategy & Identity
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Logo & Visual Design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Business Positioning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 space-y-4">
              <img src={FixedPrice} alt="Creative" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Creative Excellence</h4>
              <p className="text-sm text-gray-500">Unique ideas that make your event or brand stand out from the crowd.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <img src={OntimeDelivery} alt="Solutions" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">End-to-End Solutions</h4>
              <p className="text-sm text-gray-500">Everything under one roof, from concept to final execution.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <img src={TimeManage} alt="Team" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Experienced Team</h4>
              <p className="text-sm text-gray-500">Skilled professionals with deep industry expertise and passion.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <img src={HiringModel} alt="Client-Centric" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Client-Centric</h4>
              <p className="text-sm text-gray-500">Your vision is our priority. We listen, plan, and deliver as promised.</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-primary px-4 text-center text-gray-900">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Let’s Create Something Amazing</h2>
          <p className="text-xl font-medium opacity-80">Whether you are planning a once-in-a-lifetime event or looking to grow your business, Leor Media is here to make it happen.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
            <a href="tel:+919666643456" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              📞 +91 96666 43456
            </a>
            <a href="tel:+919542248999" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              📞 +91 95422 48999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
