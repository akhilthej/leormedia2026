import { CSDLogoAbout } from "../assets/data/icon_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { homepage, EventHeroCover } from "../assets/data/Imagedata";
import { CONTACTUS_API } from "../hooks/Apis";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import generated images
import WeddingSliderImg from "../assets/Generated/wedding_slider.png";
import MarketingSliderImg from "../assets/Generated/marketing_slider.png";
import BrandingSliderImg from "../assets/Generated/branding_slider.png";
import AdvertisingBgImg from "../assets/Generated/advertising_bg.png";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Subject options for dropdown
  const subjectOptions = [
    "Wedding Planning",
    "Corporate Events",
    "Social & Birthday Parties",
    "Entertainment & Music Shows",
    "Digital Marketing & SEO",
    "Website & App Development",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    setLoading(true);
    try {
      const response = await fetch(CONTACTUS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const titles = [
    "EVENTS",
    "WEDDINGS",
    "BRANDING",
    "OUTDOOR MEDIA",
    "DIGITAL MARKETING",
    "ADVERTISING",
    "CREATIVE DESIGN",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  const heroSlides = [
    {
      title: "Wedding Mandapam",
      subtitle: "Timeless Elegance for Your Special Day",
      image: WeddingSliderImg,
      cta: "Plan Your Wedding",
      link: "/contactus"
    },
    {
      title: "Strategic Marketing",
      subtitle: "Driving Growth through Innovation",
      image: MarketingSliderImg,
      cta: "Grow Your Brand",
      link: "/contactus"
    },
    {
      title: "Powerful Branding",
      subtitle: "Creating Identities that Resonate",
      image: BrandingSliderImg,
      cta: "Start Branding",
      link: "/contactus"
    }
  ];

  const sections = [
    {
      title: "EVENTS MANAGEMENT",
      subtitle: "UNFORGETTABLE EXPERIENCES",
      color: "bg-gradient-to-br from-blue-900/90 to-indigo-950/90",
      number: "01",
      description:
        "Andhra’s premier event partner. From luxury weddings to high-impact corporate launches, we handle every detail with elegance and precision.",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&auto=format&fit=crop&q=80",
      stats: [
        { value: "2000+", label: "Events Managed" },
        { value: "220+", label: "Corporate Clients" },
        { value: "100%", label: "Execution" },
      ],
      cta: "Plan Your Event",
      detailedServices: [
        "Corporate Events & Product Launches",
        "Concerts, Award Nights & Music Shows",
        "Celebrity & Artist Management",
        "Protocol Events & Carnivals",
        "Sports Events & Marathons",
        "Exhibitions & Trade Fairs",
      ],
    },
    {
      title: "LUXURY WEDDINGS",
      subtitle: "TIMELESS CELEBRATIONS",
      color: "bg-gradient-to-br from-pink-900/90 to-rose-950/90",
      number: "02",
      description:
        "Turning your dream wedding into a reality. We specialize in breathtaking decor, seamless coordination, and creating memories that last a lifetime.",
      image: WeddingSliderImg,
      stats: [
        { value: "500+", label: "Weddings" },
        { value: "Luxury", label: "Decor" },
        { value: "End-to-End", label: "Planning" },
      ],
      cta: "Plan Your Wedding",
      detailedServices: [
        "Destination Wedding Planning",
        "Theme Decors & Floral Design",
        "Catering & Hospitality",
        "Photography & Cinematography",
        "Mehendi, Sangeet & Reception",
        "Guest Management",
      ],
    },
    {
      title: "DIGITAL MEDIA MARKETING",
      subtitle: "DOMINATE THE DIGITAL SPACE",
      color: "bg-gradient-to-br from-cyan-900/90 to-blue-950/90",
      number: "03",
      description:
        "Innovative digital strategies to boost your online presence. From social media growth to performance marketing, we help you win the digital game.",
      image: MarketingSliderImg,
      stats: [
        { value: "10M+", label: "Reach" },
        { value: "300%", label: "Growth" },
        { value: "Data", label: "Driven" },
      ],
      cta: "Go Digital",
      detailedServices: [
        "Social Media Management",
        "Performance Marketing (Ads)",
        "Search Engine Optimization",
        "Content & Video Marketing",
        "Influencer Marketing",
        "Email & WhatsApp Marketing",
      ],
    },
    {
      title: "BRANDING SOLUTIONS",
      subtitle: "CRAFTING UNIQUE IDENTITIES",
      color: "bg-gradient-to-br from-amber-900/90 to-orange-950/90",
      number: "04",
      description:
        "We create powerful brand identities that resonate with your audience. Our design-led approach ensures your brand stands out in a crowded market.",
      image: BrandingSliderImg,
      stats: [
        { value: "200+", label: "Brands Built" },
        { value: "360°", label: "Branding" },
        { value: "Unique", label: "Design" },
      ],
      cta: "Build Your Brand",
      detailedServices: [
        "Logo & Visual Identity Design",
        "Brand Strategy & Positioning",
        "Packaging & Label Design",
        "Corporate Stationery",
        "Brand Guidelines",
        "Rebranding Services",
      ],
    },
    {
      title: "STRATEGIC ADVERTISING",
      subtitle: "MAXIMUM REACH & IMPACT",
      color: "bg-gradient-to-br from-red-900/90 to-red-950/90",
      number: "05",
      description:
        "High-impact advertising campaigns across all platforms. We ensure your message reaches the right audience through strategic media placement.",
      image: AdvertisingBgImg,
      stats: [
        { value: "Wide", label: "Coverage" },
        { value: "High", label: "ROI" },
        { value: "Expert", label: "Buying" },
      ],
      cta: "Advertise Now",
      detailedServices: [
        "Outdoor Media (Billboards, Bus Ads)",
        "Print Media Advertising",
        "Radio & TV Commercials",
        "Cinema Advertising",
        "Transit & Airport Branding",
        "Mall & BTL Activations",
      ],
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    // Auto rotate titles
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        <Slider {...sliderSettings} className="h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] scale-110"
                style={{
                  backgroundImage: `url("${slide.image}")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center px-4">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transform transition-all duration-1000">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.link}
                    className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Styles for Slick Dots */}
        <style dangerouslySetInnerHTML={{ __html: `
          .custom-dots {
            bottom: 40px !important;
          }
          .custom-dots li button:before {
            color: white !important;
            font-size: 12px !important;
            opacity: 0.5 !important;
          }
          .custom-dots li.slick-active button:before {
            color: #FF5E0E !important; /* Your primary color */
            opacity: 1 !important;
          }
        `}} />
      </section>
      <section id="about" className="py-16 md:py-24 bg-white text-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              TRUSTED PARTNER
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why <span className="text-primary">Leor Media?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              One team for events + marketing. We combine creative execution with strategic growth to build your brand and celebrations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Left Column: Mission & Journey */}
            <div className="mb-12">
              <div className="mb-10 text-center">
                <h3 className="text-2xl md:text-4xl font-bold mb-8">
                  Creating Memories, <span className="text-primary">Delivering Excellence.</span>
                </h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                  Leor Media has been successfully organizing small to big scale weddings since 2016. We create the
                  perfect weddings for customers right from the planning to its execution. Our personalized wedding
                  packages and creative works, add that glam to your wedding while keeping customers budget in
                  mind.
                </p>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Our packages incorporate even minute details from venue selection, theme recommendation, menu options
                  and to hospitality so that we can make worry-free big day. We believe making memories are the best gifts
                  to any events for which Leor Media strives 100% to make them more beautiful.
                </p>
              </div>

         
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 pt-10 border-t border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Professional Process
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { step: "01", title: "Understand", desc: "Requirement Analysis" },
                { step: "02", title: "Plan", desc: "Strategy & Design" },
                { step: "03", title: "Execution", desc: "Meticulous Implementation" },
                { step: "04", title: "Delivery", desc: "Final Result & Support" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contactus"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Let's Create Something Amazing
              <svg
                className="w-5 h-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Fun Factor Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-TuskerGrotesk">OUR TRACK RECORD</h2>
            <p className="text-xl text-white/80">A decade of excellence, hundreds of projects, and thousands of happy memories.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "10+", label: "Years of Experience", icon: "⏳" },
              { value: "600+", label: "Projects Delivered", icon: "💼" },
              { value: "2000+", label: "Events & Projects", icon: "🎉" },
              { value: "100%", label: "Clients Satisfaction", icon: "😊" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-TuskerGrotesk">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <div className="relative">
        {sections.map((sec, index) => (
          <div
            key={index}
            className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
              style={{ backgroundImage: `url('${sec.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column */}
                <div>
                  {/* Section Number */}
                  <div className="text-8xl md:text-9xl font-bold text-white/10 mb-2 md:mb-4 tracking-tighter">
                    {sec.number}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-6 md:mb-8">
                    <div className="text-white/80 text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
                      {sec.subtitle}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {sec.title}
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-lg">
                    {sec.description}
                  </p>

                  {/* Detailed Services List */}
                  {sec.detailedServices && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                      {sec.detailedServices.map((service, idx) => (
                        <div key={idx} className="flex items-center text-white/80 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {service}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats for Operations */}
                  {sec.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {sec.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs md:text-sm text-white/70">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column - Image Preview */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-white/20 rounded-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-white/20 rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4">
                  <div className="text-white/70 text-sm">
                    {index + 1} / {sections.length}
                  </div>
                  <div className="flex space-x-2">
                    {sections.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-white w-8" : "bg-white/30"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll hint for first section */}
            {index === 0 && (
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="text-white text-center">
                  <div className="text-sm mb-2 opacity-70">
                    Scroll to explore
                  </div>
                  <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contactus form */}
      <section className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-400/5 blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10 relative">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              LET'S TALK
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have a project in mind or need expert advice? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />

              <div className="grid md:grid-cols-2 gap-4">
                {["name", "email", "phone"].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      placeholder={
                        field === "name"
                          ? "Your full name"
                          : field === "email"
                          ? "your.email@example.com"
                          : "+91 00000 00000"
                      }
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      required
                    />
                  </div>
                ))}

                {/* Subject Dropdown */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-primary hover:bg-primary/90 text-white shadow-sm"
                }`}
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
