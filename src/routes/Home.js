import { CSDLogoAbout } from "../assets/data/icon_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { homepage, EventHeroCover } from "../assets/data/Imagedata";
import { CONTACTUS_API } from "../hooks/Apis";

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

  const sections = [
    {
      title: "EVENTS MANAGEMENT",
      subtitle: "UNFORGETTABLE EXPERIENCES",
      color: "bg-gradient-to-br from-blue-900/90 to-indigo-950/90",
      number: "01",
      description:
        "Vizag’s premier event partner. From luxury weddings to high-impact corporate launches, we handle every detail with elegance and precision.",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&auto=format&fit=crop&q=80",
      stats: [
        { value: "500+", label: "Events Managed" },
        { value: "10K+", label: "Happy Guests" },
        { value: "100%", label: "Execution" },
      ],
      cta: "Plan Your Event",
      detailedServices: [
        "Wedding Planning & Destination Weddings",
        "Engagements, Receptions, Mehendi & Sangeet",
        "Theme Decors & Birthday Parties",
        "Corporate Events & Product Launches",
        "Concerts, Award Nights & Fashion Shows",
        "Entertainment & Artist Management",
        "Hospitality & Photography Services",
        "Protocol Events & Carnivals",
      ],
    },
    {
      title: "BRANDING & OUTDOOR",
      subtitle: "STRATEGIC VISIBILITY",
      color: "bg-gradient-to-br from-amber-900/90 to-orange-950/90",
      number: "02",
      description:
        "Dominate the physical landscape. We provide strategic outdoor media and branding solutions that ensure your brand is seen by millions.",
      image:
        "https://t4.ftcdn.net/jpg/05/82/97/27/360_F_582972760_T0T4qTwlZDolGql8CJaD1kMIPrG4vIew.jpg",
      stats: [
        { value: "200+", label: "Brands Built" },
        { value: "360°", label: "Media Coverage" },
        { value: "50+", label: "Media Formats" },
      ],
      cta: "Grow Your Brand",
      detailedServices: [
        "Billboards, Unipoles & Building Wraps",
        "Transit Media (Cabs, Buses, Mobile Vans, Trains)",
        "Airport & Railway Station Branding",
        "Mall Branding & Flyover Pillars",
        "Bus Shelters & Strategic Kiosks",
        "Print Media (Newspapers & Magazines)",
        "Electronic Media (TV, Radio, Theater Ads)",
        "Bench Branding & Airport Trolleys",
      ],
    },
    {
      title: "ADVERTISING & DIGITAL",
      subtitle: "GROW YOUR ONLINE PRESENCE",
      color: "bg-gradient-to-br from-green-900/90 to-teal-950/90",
      number: "03",
      description:
        "Data-driven marketing combined with creative excellence. We help brands scale through smart digital strategies and stunning visual identities.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
      stats: [
        { value: "100+", label: "Campaigns" },
        { value: "300%", label: "ROI Increase" },
        { value: "24/7", label: "Monitoring" },
      ],
      cta: "Start Growing",
      detailedServices: [
        "Branding Audit, Strategy & Identity",
        "SEO, SEM & PPC (Google & Meta Ads)",
        "Social Media Management & PR",
        "Content Marketing & Influencer Outreach",
        "Media Buying & Digital Positioning",
        "Creative Design (Social Media, Posters, Labels)",
        "Website & App Development",
        "Brand Activations & Positioning",
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
      <section
        className="relative min-h-screen p-4 flex items-center justify-center"
        style={{
          backgroundImage: `url("${EventHeroCover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 🔲 Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* 🔹 Content Wrapper */}
        <div className="relative z-10 w-full">
          <div className="mb-8 md:mb-12 lg:mb-24">
            <div
              className={`transform transition-all duration-1000 ease-out ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mt-28">
                <span className="block">
                  From Memorable Events to
                  <span className="block text-primary">
                    Powerful Brand Growth.
                  </span>
                </span>
              </h2>

              {/* Since 2018 */}
              <div
                className={`transform transition-all duration-1000 ease-out delay-300 mt-4 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                  }`}
              >
                <p className="text-sm md:text-base mx-auto text-white font-medium text-center">
                  We plan, create, and promote — all in one place.
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT - Updated to grid-2 for service cards */}
          <div className="md:hidden">
            {/* Service Cards in Grid-2 Layout */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* 1. Web Development */}
              <div
                className={`transform transition-all duration-700 ease-out delay-500 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                  }`}
              >
                <Link
                  to="/services/events"
                  className="group block h-full"
                >
                  <div className="h-full">
                    <h2 className="leading-tight font-TuskerGrotesk text-3xl sm:text-4xl font-bold tracking-wide text-white group-hover:text-primary transition-all duration-300">
                      <span className="block">
                        Events
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-white mt-2 font-medium">
                      Creating unforgettable experiences for every occasion.
                    </p>
                  </div>
                </Link>
              </div>

              {/* 2. Marketing */}
              <div
                className={`transform transition-all duration-700 ease-out delay-700 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                  }`}
              >
                <Link
                  to="/services/digitalmarketing"
                  className="group block h-full"
                >
                  <div className="h-full">
                    <h2 className="leading-tight text-right font-TuskerGrotesk text-3xl sm:text-4xl font-bold tracking-wide text-white group-hover:text-primary transition-all duration-300">
                      <span className="block">
                        Growth
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-white mt-2 font-medium text-right">
                      Powerful branding and digital marketing strategies.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* 3. Your Vision, Our Code Perfected. */}
            <div
              className={`w-full max-w-md mx-auto transform transition-all duration-700 ease-out delay-900 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                } space-y-4 mt-6`}
            >
             
              {/* Animated Titles */}
              <div className="relative h-8 overflow-hidden">
                <div
                  className="transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateY(-${currentIndex * 2}rem)`,
                  }}
                >
                  {titles.map((title, i) => (
                    <p
                      key={i}
                      className="text-base md:text-lg font-semibold text-primary h-8 flex items-center justify-center"
                    >
                      " {title} "
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Three columns at bottom */}
          <div className="hidden md:flex flex-col h-[45vh]">
            <div className="flex-1 flex items-end pb-8">
              {/* LEFT - Web Development */}
              <div
                className={`flex-1 transform transition-all duration-700 ease-out delay-500 ${isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
                  }`}
              >
                <Link
                  to="/services/events"
                  className="group block max-w-xs xl:max-w-sm"
                >
                  <div>
                    <h2 className="leading-tight font-TuskerGrotesk text-4xl xl:text-5xl font-bold tracking-wide text-white group-hover:text-primary transition-all duration-300">
                      <span className="block">
                        Plan Event
                      </span>
                    </h2>
                    <p className="text-sm xl:text-base text-white mt-2">
                      Creating unforgettable experiences for weddings and celebrations.
                    </p>
                  </div>
                </Link>
              </div>

              {/* CENTER - Your Vision, Our Code Perfected. */}
              <div className="flex-1 flex flex-col items-center justify-end space-y-4">
                <div
                  className={`transform transition-all duration-700 ease-out delay-900 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                    } space-y-4`}
                >
              

                  {/* Animated Titles */}
                  <div className="relative h-8 overflow-hidden">
                    <div
                      className="transition-transform duration-700 ease-in-out"
                      style={{
                        transform: `translateY(-${currentIndex * 2}rem)`,
                      }}
                    >
                      {titles.map((title, i) => (
                        <p
                          key={i}
                          className="text-base font-semibold text-primary h-8 flex items-center justify-center"
                        >
                          " {title} "
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT - Mobile App Development */}
              <div
                className={`flex-1 transform transition-all duration-700 ease-out delay-500 ${isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
                  } flex justify-end`}
              >
                <Link
                  to="/services/digitalmarketing"
                  className="group block max-w-xs xl:max-w-sm text-right"
                >
                  <div>
                    <h2 className="leading-tight font-TuskerGrotesk text-4xl xl:text-5xl font-bold tracking-wide text-white group-hover:text-primary transition-all duration-300">
                      <span className="block">
                        Grow Business
                      </span>
                    </h2>
                    <p className="text-sm xl:text-base text-white mt-2">
                      Scale your brand with strategic advertising and digital marketing.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW - Navigation & Locations (Common for both layouts) */}
          <div
            className={`transform transition-all duration-700 ease-out delay-1100 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              } mt-8 md:mt-12 lg:mt-0 lg:pt-8`}
          >
            <div className="grid grid-cols-1 gap-6 items-center">
          

              {/* Locations */}
              <div className="flex items-center justify-center lg:justify-end gap-3 text-[12px] text-orange-500 font-medium">
                {["Andhra Pradesh", "Telangana"].map(
                  (city, index) => (
                    <span
                      key={city}
                      className={`bg-orange-50 px-3 py-1.5 rounded-full transition-all duration-500 ${isVisible
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-0"
                        } hover:bg-orange-100 cursor-default`}
                      style={{
                        transitionDelay: `${1300 + index * 100}ms`,
                      }}
                    >
                      {city}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
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

          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Column: Mission & Journey */}
            <div>
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  One Team for Events +{" "}
                  <span className="text-primary">Marketing Success.</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Leor Media is a unique hybrid agency specializing in both 
                  Event Management and Strategic Branding. We believe that 
                  great events build memories, and great marketing builds 
                  futures. We provide both under one roof.
                </p>
                <p className="text-gray-600">
                  Whether you are planning a luxury wedding or launching 
                  a nationwide marketing campaign, our team ensures 
                  meticulous execution and creative innovation. We have 
                  managed hundreds of campaigns and events, making us 
                  one of the most trusted names in the region.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 pt-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    8+
                  </div>
                  <div className="text-sm text-gray-500">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-500">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-500">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    200+
                  </div>
                  <div className="text-sm text-gray-500">Events & Projects</div>
                </div>
              </div>
            </div>

            {/* Right Column: Core Values & USP */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">
                Our Philosophy & Core Values
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Creative + Execution Focused
                    </h4>
                    <p className="text-gray-600">
                      We don't just plan; we execute with precision. Every detail 
                      is crafted to resonate with your audience and leave a 
                      lasting impression.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Affordable & Customized
                    </h4>
                    <p className="text-gray-600">
                      Quality doesn't have to be expensive. We provide tailored 
                      solutions that fit your budget while maintaining the 
                      highest standards of excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Strong Local Experience
                    </h4>
                    <p className="text-gray-600">
                      With years of experience in Andhra Pradesh and Telangana, 
                      we understand the local market and culture better than 
                      anyone else.
                    </p>
                  </div>
                </div>
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
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Spam protection */}
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 focus:bg-white"
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-gray-900 appearance-none cursor-pointer focus:bg-white"
                      required
                    >
                      <option value="" disabled className="text-gray-400">
                        What can we help you with?
                      </option>
                      {subjectOptions.map((option, index) => (
                        <option key={index} value={option} className="text-gray-900">
                          {option}
                        </option>
                      ))}
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, or inquiry..."
                  rows="6"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none focus:bg-white"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto min-w-[240px] px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-4 flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  We respect your privacy. Usually respond within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
