import { useState, useRef, useEffect } from "react";
import { FcIdea, FcOk, FcFlashOn } from "react-icons/fc";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  DefaultCoverImage,
  SmartInvite_product,
  Ecommerce_product,
  TheGoldJar_product,
  crmgeni_product,
} from "../assets/data/Imagedata";

const ProjectPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState("CRM Geni");
  const [fade, setFade] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  // Map your portfolio images to projects
  const projects = {
    "CRM Geni": {
      image: crmgeni_product || DefaultCoverImage,
      title: "Advance Business Management System",
      category: "#Web3 #NFTMarketplace #Blockchain",
      description:
        "An advanced Digital CRM/ERP solution to manage customers, Billing, leads, automate tasks, and grow your business with AI-powered insights.The Gold Jar.",

      tech: [
        "AI Analytics",
        "Lead Management",
        "Task Automation",
        "Real-time Reports",
      ],
      liveUrl: "https://crmgeni.com",
    },
    "The Gold Jar": {
      image: TheGoldJar_product || DefaultCoverImage,
      title: "The Gold Jar",
      category: "#WordPress #Education #LMS",
      description:
        "Premium web development tailored for elegance, performance, and exceptional user experiences.",
      tech: [
        "Responsive Design",
        "Fast Performance",
        "SEO Optimized",
        "Secure",
      ],
      liveUrl: "https://thegoldjar.com",
    },
    Ecommerce: {
      image: Ecommerce_product || DefaultCoverImage,
      title: "Ecommerce",
      category: "#Ecommerce #LuxuryGoods #WebApp",
      description:
        "Scalable ecommerce solutions built to convert visitors and simplify the buying journey.",
      tech: [
        "Mobile First",
        "Payment Gateway",
        "Inventory Management",
        "24/7 Support",
      ],
      liveUrl: "https://ecommerceproject.com",
    },
    "Smart invite": {
      image: SmartInvite_product || DefaultCoverImage,
      title: "Smart invite",
      category: "#ReactJS #FullStack #Ecommerce",
      description:
        "Revolutionizing digital invitations with smart links, analytics, and modern branding.",
      tech: [
        "Digital RSVP",
        "Analytics Dashboard",
        "Custom Branding",
        "Multi-platform",
      ],
      liveUrl: "https://smartinvite.com",
    },
     "AXEBLOG V0.2 (A.I Blog Bot)": {
      image: SmartInvite_product || DefaultCoverImage,
      title: "AXE V0.2 (A.I Blog Bot)",
      category: "#ReactJS #FullStack #php #AI",
      description:
        "Auto Blogger, An advance AI Bot that searches for the latest trending topics and creates SEO optimized blogs with images and videos.",
      tech: [
        "Digital RSVP",
        "Analytics Dashboard",
        "Custom Branding",
        "Multi-platform",
      ],
      liveUrl: "#",
    },
     "AXESEO (A.I SEO Bot)": {
      image: SmartInvite_product || DefaultCoverImage,
      title: "AXESEO (A.I SEO Bot)",
      category: "#ReactJS #FullStack #php #AI",
      description:
        "Auto SEO, An advance AI Bot that searches for the latest trending topics and creates SEO optimized blogs with images and videos.",
      tech: [
        "Digital RSVP",
        "Analytics Dashboard",
        "Custom Branding",
        "Multi-platform",
      ],
      liveUrl: "#",
    },
  };

  // Function to get project names in order of your images
  const getProjectNames = () => {
    return Object.keys(projects);
  };

  const handleProjectClick = (projectName) => {
    if (projectName === selectedProject) return;

    setFade(true);
    setImageLoaded(false); // Reset image loaded state

    setTimeout(() => {
      setSelectedProject(projectName);
      setFade(false);
    }, 300);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const currentProject = projects[selectedProject];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with improved transition */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentProject.image}
          alt={selectedProject}
          onLoad={handleImageLoad}
          className={`absolute inset-0 object-cover w-full h-full transition-all duration-500 ${
            fade ? "opacity-0 scale-105" : "opacity-100 scale-100"
          } ${imageLoaded ? "blur-0" : "blur-sm"}`}
          key={selectedProject} // Add key to force re-render
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 h-full text-white p-3 md:p-4">
        {/* Left Content */}
        <div className="flex-1 md:col-span-8 flex flex-col justify-center items-start px-1 md:px-3 py-2 md:py-0 mb-2 md:mb-0">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full mb-2 border border-white/20">
            <span className="text-xs text-yellow-300 font-medium">
              {currentProject.category}
            </span>
          </div>

          {/* Project Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {currentProject.title}
            </span>
          </h1>

          {/* Project Description */}
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mb-2 leading-relaxed">
            {currentProject.description}
          </p>

          {/* Technologies Used */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <div className="flex items-center gap-1 bg-blue-500/20 px-2 py-1 rounded-full border border-blue-500/30">
              <FcFlashOn className="text-xs" />
              <span className="text-blue-300 font-semibold text-xs">
                Tech Stack
              </span>
            </div>
            {currentProject.tech.map((tech, index) => (
              <span
                key={index}
                className="text-gray-100 text-xs bg-white/10 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Features */}
          <div className="grid grid-cols-2 gap-2 mb-3 max-w-md">
            {currentProject.tech.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-1 group">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-300 text-xs md:text-sm font-medium group-hover:text-white transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2">
            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary hover:bg-primary-100 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-1 text-sm"
            >
              <span>Explore Project</span>
              <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="md:col-span-4 flex flex-col items-center justify-end p-1 md:p-2">
          <div className="relative w-full max-w-md h-full">
            {/* Scroll Arrows */}
            <div className="hidden md:flex absolute -left-2 -right-2 top-1/2 transform -translate-y-1/2 z-20 justify-between pointer-events-none">
              <button
                onClick={scrollLeft}
                className={`pointer-events-auto p-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 transition-all ${
                  showLeftArrow ? "opacity-100 hover:bg-black/70" : "opacity-0"
                }`}
              >
                <FiChevronLeft className="text-white text-base" />
              </button>
              <button
                onClick={scrollRight}
                className={`pointer-events-auto p-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 transition-all ${
                  showRightArrow ? "opacity-100 hover:bg-black/70" : "opacity-0"
                }`}
              >
                <FiChevronRight className="text-white text-base" />
              </button>
            </div>

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto w-full custom-scrollbar md:max-h-[75vh] md:h-auto"
            >
              {getProjectNames().map((projectName) => (
                <button
                  key={projectName}
                  onClick={() => handleProjectClick(projectName)}
                  className={`flex items-center gap-2 text-xs font-semibold px-3 py-3 rounded-lg transition-all flex-shrink-0 backdrop-blur-sm border min-w-[140px] md:min-w-0 md:w-full ${
                    selectedProject === projectName
                      ? "bg-white/20 border-white/40 text-white shadow-lg"
                      : "bg-black/30 border-white/10 hover:bg-white/10 text-gray-300 hover:text-white"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      selectedProject === projectName
                        ? "bg-white"
                        : "bg-white/10"
                    }`}
                  >
                    {selectedProject === projectName ? (
                      <FcOk className="text-base" />
                    ) : (
                      <FcIdea className="text-base" />
                    )}
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-semibold text-sm whitespace-nowrap truncate">
                      {projectName}
                    </div>
                    <div className="text-xs text-white truncate mt-1">
                      {projects[projectName].category}
                    </div>
                  </div>
                  <FiArrowUpRight
                    className={`ml-auto text-sm hidden md:block transition-all duration-300 ${
                      selectedProject === projectName
                        ? "opacity-100 rotate-45"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Scroll Indicators */}
            <div className="flex md:hidden justify-center gap-1 mt-2">
              {getProjectNames().map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === getProjectNames().indexOf(selectedProject)
                      ? "bg-white scale-125"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Minimal Chevron Style */}
            <div className="hidden md:flex flex-col items-center justify-center pt-4">
              <div className="flex flex-col items-center gap-2 group">
                <span className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                  Scroll Down
                </span>
                <FiChevronDown className="text-gray-400 group-hover:text-white animate-bounce transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Gradients */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
      <div className="absolute right-0 top-1/2 h-16 w-4 bg-gradient-to-l from-black/40 to-transparent md:hidden" />
      <div className="absolute left-0 top-1/2 h-16 w-4 bg-gradient-to-r from-black/40 to-transparent md:hidden" />
    </div>
  );
};

export default ProjectPortfolio;
