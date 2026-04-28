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
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5,
  Portfolio6,
  Portfolio7,
  Portfolio8,
  Portfolio9,
  Portfolio10,
  Portfolio11,
  Portfolio12,
  Portfolio13,
  Portfolio14,
  Portfolio15,
  Portfolio16,
  Portfolio17,
  Portfolio18,
  Portfolio19,
  Portfolio20,
  Portfolio21,
  Portfolio22,
  Portfolio23,
  Portfolio24,
  Portfolio25,
  Portfolio26,
  Portfolio27,
  Portfolio28,
  Portfolio29,
} from "../assets/data/Imagedata";

// Import your portfolio images
const importAll = (r) => r.keys().map(r);
const ProflotioImages = importAll(
  require.context("../assets/Portfolio", false, /\.(png|jpe?g|webp|svg)$/),
).sort();

const ProjectPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(
    "Raging Tusker Society",
  );
  const [fade, setFade] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  // Map your portfolio images to projects
  const projects = {
    "Raging Tusker Society": {
      image: Portfolio1 || DefaultCoverImage,
      title: "NFT Ecosystem Platform",
      category: "#Web3 #NFTMarketplace #Blockchain",
      description:
        "Developed a comprehensive NFT ecosystem that revolutionized digital collectible trading through a high-performance React.js architecture. Implemented a global CDN distribution system that reduced load times by 68% and improved international accessibility. The platform features seamless wallet integration, real-time bidding systems, and a responsive design that adapts to both desktop and mobile users. Our solution processed over 10,000 transactions in the first month with zero downtime, establishing a robust foundation for digital asset trading.",
      tech: ["React", "Node.js", "Cloudflare"],
      liveUrl: "https://ragingtuskersociety.com/",
    },
    Ilahe: {
      image: Portfolio2 || DefaultCoverImage,
      title: "Modeling Academy Portal",
      category: "#WordPress #Education #LMS",
      description:
        "Architected a complete digital transformation for a premier modeling academy, creating an integrated learning management system that serves 500+ students annually. The platform features automated course enrollment, progress tracking, and a professional portfolio builder that helped students secure modeling contracts. Implemented a secure payment gateway handling ₹2M+ in annual course fees. The responsive design increased mobile engagement by 45%, while the admin dashboard provided real-time analytics on student performance and course completion rates.",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "https://ilahe.in/",
    },
    "Batchu Gold": {
      image: Portfolio3 || DefaultCoverImage,
      title: "Luxury Gold E-Commerce",
      category: "#Ecommerce #LuxuryGoods #WebApp",
      description:
        "Engineered a premium e-commerce platform for luxury gold jewelry that transformed traditional gold retail into a digital-first experience. Developed advanced features including real-time gold price integration, 3D product visualization, and secure transaction processing handling ₹5M+ monthly. Implemented a sophisticated inventory management system that synchronizes across multiple physical stores. The platform reduced customer acquisition costs by 30% and increased average order value by 25% through personalized recommendations and virtual try-on features.",
      tech: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      liveUrl: "https://batchugold.com/",
    },
    Ragsee: {
      image: Portfolio4 || DefaultCoverImage,
      title: "Complete E-Commerce Suite",
      category: "#ReactJS #FullStack #Ecommerce",
      description:
        "Built a scalable full-stack e-commerce solution serving 50,000+ monthly active users with 99.9% uptime. The platform integrates multiple payment gateways, real-time inventory tracking, and AI-powered recommendation engines that boosted conversion rates by 35%. Developed a comprehensive vendor management system enabling 200+ sellers to manage products, process orders, and analyze performance metrics. The mobile-first approach resulted in 60% of transactions coming from mobile devices, while the admin panel provided deep insights into sales patterns and customer behavior.",
      tech: ["Figma", "Storybook", "React", "SASS"],
      liveUrl: "https://ragsee.com/",
    },
    "CRM Geni": {
      image: Portfolio5 || DefaultCoverImage,
      title: "Smart Project Management SaaS",
      category: "#SaaS #Productivity #Collaboration",
      description:
        "Designed and deployed an enterprise-grade SaaS platform that streamlined project management for 1,000+ business teams. The system features real-time collaboration tools, automated workflow triggers, and comprehensive analytics that reduced project delivery times by 40%. Implemented secure role-based access control supporting teams of up to 500 members. The platform processes 5M+ API calls daily with sub-100ms response times, while the reporting dashboard provides actionable insights that helped clients identify bottlenecks and optimize resource allocation.",
      tech: ["Angular", "NestJS", "MySQL", "WebSocket"],
      liveUrl: "https://crmgeni.com/",
    },
    "MR Hashtag Creations": {
      image: Portfolio6 || DefaultCoverImage,
      title: "Creative Marketing Hub",
      category: "#Marketing #Branding #WebDesign",
      description:
        "Developed a dynamic digital presence for a creative marketing agency that resulted in a 200% increase in qualified leads. The platform showcases 150+ successful campaigns through interactive case studies and client testimonials. Implemented a lead generation system that automatically routes inquiries to appropriate teams, reducing response time from 24 hours to 15 minutes. The integrated portfolio management system allows real-time updates of ongoing projects, while the analytics dashboard tracks campaign performance and ROI across multiple channels.",
      tech: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      liveUrl: "https://mrhashtagcreativeworks.co.in/",
    },
    "Celebrity Harbour Resort": {
      image: Portfolio7 || DefaultCoverImage,
      title: "Luxury Resort Booking Platform",
      category: "#Hospitality #Booking #Travel",
      description:
        "Transformed a luxury resort's booking experience with a seamless online platform that increased direct bookings by 150%. The system integrates real-time availability across 200+ rooms, multiple rate plans, and seasonal packages. Implemented a secure payment processing system handling ₹10M+ in monthly transactions with zero security incidents. The mobile-optimized design contributed to 55% of bookings coming from mobile devices, while the admin interface provides comprehensive occupancy analytics and revenue management tools that optimized room pricing strategies.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3"],
      liveUrl: "https://celebrityharbourresort.com/",
    },
    "The Winner India": {
      image: Portfolio8 || DefaultCoverImage,
      title: "Network Marketing Ecosystem",
      category: "#MLM #Networking #Business",
      description:
        "Built a comprehensive network marketing platform supporting 50,000+ members with real-time commission tracking and team management. The system processes complex multi-level compensation plans calculating millions in monthly payouts with 100% accuracy. Developed mobile apps that increased member engagement by 300% through push notifications and on-the-go team management. Implemented secure authentication and data encryption protecting sensitive member information, while the analytics suite provides leadership with deep insights into network growth and performance metrics.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://marketing.thewinnerindia.com/",
    },
    "Rocks & Greens": {
      image: Portfolio9 || DefaultCoverImage,
      title: "Boutique Hotel Experience",
      category: "#Hospitality #Lifestyle #Travel",
      description:
        "Created an immersive digital experience for a boutique hotel that captures its unique brand identity while driving measurable business results. The platform features high-resolution visual galleries, virtual property tours, and an intuitive booking engine that reduced booking abandonment by 45%. Implemented integration with property management systems for real-time availability updates across all room categories. The responsive design achieved 95+ Google PageSpeed scores, while the content management system enables hotel staff to easily update promotions and seasonal offerings.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://rocksandgreens.com/",
    },
    "Natya Sannidhaalaya": {
      image: Portfolio10 || DefaultCoverImage,
      title: "Dance Institute Portal",
      category: "#Education #Arts #Culture",
      description:
        "Developed a comprehensive digital platform for a prestigious dance academy that modernized student enrollment and class management. The system handles 1,000+ student registrations annually with automated batch allocation and attendance tracking. Implemented a video library featuring 200+ instructional videos and performance recordings. The integrated payment system processes ₹1.5M+ in monthly fees with automated receipt generation. Parent portals provide real-time progress updates, while the performance calendar and event management features streamlined the organization of 50+ annual recitals and competitions.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://natyasannidhaalaya.com/",
    },
    "VSMC Movies": {
      image: Portfolio11 || DefaultCoverImage,
      title: "Entertainment Database Platform",
      category: "#Entertainment #Database #Media",
      description:
        "Engineered an IMDB-style entertainment database featuring 50,000+ films, 100,000+ artist profiles, and comprehensive industry data. The platform serves 500,000+ monthly users with advanced search capabilities and personalized recommendation algorithms. Implemented a robust content management system enabling editors to manage vast datasets efficiently. The social features including user reviews and ratings generated 10,000+ monthly user contributions. The API architecture supports third-party integrations while maintaining sub-second response times for all database queries.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://vsmcmovies.com/",
    },
    "SreeDhanu Healthcare Services": {
      image: Portfolio12 || DefaultCoverImage,
      title: "Healthcare Equipment Marketplace",
      category: "#Healthcare #Medical #Biomedical",
      description:
        "Built a specialized B2B healthcare equipment platform connecting medical institutions with certified suppliers across India. The system features detailed product catalogs with technical specifications, compliance documentation, and supplier verification. Implemented a quotation management system that reduced procurement cycle times by 60%. The platform handles ₹20M+ in annual equipment sales with integrated logistics tracking and installation scheduling. Healthcare providers report 30% cost savings through transparent pricing and access to a wider supplier network, while suppliers benefit from qualified lead generation and streamlined order processing.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://sreedhanuhealthcareservices.com/",
    },
    "CRC Bharat": {
      image: Portfolio13 || DefaultCoverImage,
      title: "Consumer Rights Portal",
      category: "#Government #Legal #Advocacy",
      description:
        "Developed a comprehensive consumer rights platform that democratizes access to legal information and complaint resolution. The system processes 5,000+ monthly consumer complaints with automated routing to appropriate authorities. Implemented a knowledge base with 1,000+ articles on consumer protection laws and resolution procedures. The chatbot assistant handles 10,000+ monthly queries, reducing call center load by 40%. The mobile app enables consumers to file complaints with photo evidence and track resolution status in real-time. The platform has facilitated ₹50M+ in consumer compensations and established itself as a trusted resource for consumer advocacy.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://crcbharat.com/",
    },
    "Derma Slim Wellness": {
      image: Portfolio14 || DefaultCoverImage,
      title: "Integrated Dermatology & Wellness Platform",
      category: "#Healthcare #Wellness #Beauty",
      description:
        "Developed a comprehensive digital healthcare platform that transformed patient engagement for a leading dermatology and slimming clinic. The solution features an intelligent appointment scheduling system that reduced no-show rates by 45% through automated reminders and easy rescheduling. Implemented a secure patient portal enabling 5,000+ patients to access treatment plans, progress photos, and medical records. The telemedicine integration facilitated 300+ virtual consultations monthly, expanding the clinic's reach beyond geographical limitations. The platform's treatment tracker and progress monitoring tools improved patient adherence by 60%, while the automated follow-up system increased repeat visits by 35%.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "http://dermaslimwellness.com/",
    },
    "DR Varun Teja": {
      image: Portfolio15 || DefaultCoverImage,
      title: "Specialist Medical Practice Portal",
      category: "#Medical #Healthcare #Specialist",
      description:
        "Engineered a sophisticated digital presence for a renowned gastroenterologist that enhanced patient trust and streamlined clinical operations. The platform features detailed procedure explanations with 3D anatomical visualizations, reducing patient anxiety and pre-consultation questions by 50%. Implemented a smart appointment system that prioritizes urgent cases and optimizes the doctor's schedule, increasing daily patient capacity by 25%. The patient education portal with 200+ medical articles and diet plans became a trusted resource, generating 10,000+ monthly page views. Integrated secure video consultation capabilities that expanded service reach across multiple states, with 40% of follow-up consultations now conducted virtually.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://drvarunteja.com/",
    },
    "Layton Skin": {
      image: Portfolio16 || DefaultCoverImage,
      title: "Premium Skincare E-Commerce Ecosystem",
      category: "#Beauty #Ecommerce #Wellness",
      description:
        "Built a vertically integrated skincare e-commerce platform that combines product sales with personalized consultation services. The platform features AI-powered skin analysis tools that process 1,000+ customer selfies monthly to provide tailored product recommendations, increasing conversion rates by 55%. Implemented a subscription model for recurring product deliveries that now accounts for 40% of monthly revenue. The integrated content marketing strategy with skincare blogs and video tutorials generates 50,000+ monthly organic visitors. The mobile-first design resulted in 70% of sales coming from mobile devices, while the automated inventory management system synchronizes across multiple warehouses to maintain 99% order fulfillment rates.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://laytonskin.com",
    },
    Prasiddasmile: {
      image: Portfolio17 || DefaultCoverImage,
      title: "Modern Dental Practice Management System",
      category: "#Healthcare #Dental #Medical",
      description:
        "Transformed a traditional dental clinic into a digitally-driven practice serving 300+ patients monthly. Developed a comprehensive patient management system that reduced administrative workload by 60% through automated appointment reminders, treatment plan tracking, and billing. The before-and-after gallery showcasing 500+ successful cases increased consultation requests by 150%. Implemented a secure patient portal for medical history management and pre-appointment forms, cutting check-in time by 75%. The integrated tele-dentistry features enabled preliminary consultations and follow-ups, while the referral tracking system helped build a network of 50+ referring dentists, driving 30% of new patient acquisitions.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://prasiddasmile.com",
    },
    Serpsit: {
      image: Portfolio18 || DefaultCoverImage,
      title: "Digital Transformation Agency Platform",
      category: "#WebDevelopment #DigitalAgency #Tech",
      description:
        "Created a comprehensive digital showcase for a full-service development agency that demonstrates technical expertise and drives qualified lead generation. The platform features interactive case studies for 75+ successful projects across 15 industries, resulting in a 300% increase in qualified inquiries. Implemented a sophisticated project management integration that allows potential clients to track ongoing project milestones in real-time. The technical blog with 200+ articles on emerging technologies attracts 100,000+ monthly visitors and positions the agency as industry thought leaders. The integrated proposal system reduced sales cycle time by 40%, while the client portal streamlined communication and project delivery for 50+ active clients simultaneously.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://serpsit.com",
    },
    srportfolios: {
      image: Portfolio19 || DefaultCoverImage,
      title: "Professional Photography Studio Platform",
      category: "#Photography #Portfolio #Creative",
      description:
        "Developed a dynamic portfolio and business management system for a professional photography studio that streamlined operations and boosted bookings. The platform showcases 5,000+ high-resolution images across 15 photography categories with intelligent categorization and search. Implemented a client gallery system that enables secure photo selection and digital delivery, reducing turnaround time by 65%. The integrated booking system handles 200+ sessions monthly with automated contract generation and payment processing. The mobile-optimized design resulted in 60% of bookings originating from smartphones, while the SEO-optimized content strategy generates 80% of new client inquiries organically, reducing marketing costs by 45%.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://srportfolios.com",
    },
    namofoods: {
      image: Portfolio20 || DefaultCoverImage,
      title: "Multi-Venue Culinary Hospitality Platform",
      category: "#Restaurant #Hospitality #Food",
      description:
        "Engineered a comprehensive digital ecosystem for a multi-location restaurant and hotel group that unified brand presence while optimizing operations. The platform features real-time table management across 5 venues with capacity for 2,000+ daily covers, reducing wait times by 30%. Implemented an intelligent reservation system that predicts peak hours and manages staff allocation, improving table turnover by 25%. The integrated online ordering system processes 1,000+ daily orders with an average preparation time of 15 minutes. The loyalty program with 10,000+ active members drives 40% of repeat business, while the centralized inventory management system reduced food waste by 20% through predictive ordering and consumption analytics.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://namofoods.in",
    },
    LabelAnuneni: {
      image: Portfolio21 || DefaultCoverImage,
      title: "Fashion E-Commerce & Style Community",
      category: "#Fashion #Ecommerce #Lifestyle",
      description:
        "Built a vertically integrated fashion platform that combines e-commerce with style community engagement, serving 50,000+ fashion-conscious customers. The platform features AI-powered size recommendation technology that reduced return rates by 65% through accurate fit predictions. Implemented a user-generated content system where customers share outfit photos, generating 5,000+ authentic style inspirations monthly. The virtual try-on features using augmented reality increased conversion rates by 45%. The mobile app drives 70% of total revenue with push notifications for new arrivals and personalized offers. The integrated influencer collaboration platform enabled 200+ style influencers to showcase products, resulting in a 300% increase in social media-driven sales.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://lableanuneni.com",
    },
    "Leor Media": {
      image: Portfolio22 || DefaultCoverImage,
      title: "Integrated Marketing & Event Management Platform",
      category: "#Marketing #Events #Media",
      description:
        "Developed a comprehensive digital ecosystem for a full-service marketing agency that streamlined client acquisition and project delivery. The platform features an interactive portfolio showcasing 200+ successful campaigns across 12 industries, resulting in a 150% increase in qualified leads. Implemented a sophisticated project management system that handles 50+ concurrent events with real-time budget tracking and vendor coordination. The client portal provides transparent campaign analytics and ROI reporting, reducing client reporting time by 70%. The integrated CRM system automated lead nurturing, converting 35% of website visitors into consultation requests, while the event registration modules have processed 100,000+ attendee signups with seamless ticketing and communication workflows.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://leormedia.com",
    },
    AGRCuts: {
      image: Portfolio23 || DefaultCoverImage,
      title: "Premium Seafood Supply Chain Platform",
      category: "#FoodDelivery #Ecommerce #Seafood",
      description:
        "Built an end-to-end seafood delivery platform that revolutionized fresh catch distribution from harbor to home. The system integrates real-time inventory management across 15 fishing partners, ensuring 98% product availability for 5,000+ monthly orders. Implemented a sophisticated logistics algorithm that optimizes delivery routes, reducing average delivery time to 90 minutes while maintaining product freshness. The subscription model for regular seafood boxes now accounts for 45% of revenue with 85% customer retention. Quality assurance features including catch timestamp and temperature monitoring built customer trust, resulting in 4.8-star average ratings and 60% month-over-month growth since launch.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://agrcuts.com",
    },
    "ANR Travels": {
      image: Portfolio24 || DefaultCoverImage,
      title: "Intelligent Transportation Management System",
      category: "#Travel #Transportation #Booking",
      description:
        "Engineered a comprehensive transportation platform that modernized taxi and cab services across multiple cities. The system manages a fleet of 500+ vehicles with real-time GPS tracking, reducing customer wait times by 40%. Implemented dynamic pricing algorithms that optimize fares based on demand patterns, increasing driver earnings by 25% while maintaining competitive customer pricing. The automated dispatch system processes 10,000+ monthly rides with 99.8% reliability. Integrated safety features including SOS buttons and ride sharing improved customer trust, while the driver performance analytics helped reduce incident rates by 60%. The corporate booking module now serves 200+ business clients with automated billing and expense reporting.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://anrtravels.com",
    },
    AlohaTechLogo: {
      image: Portfolio25 || DefaultCoverImage,
      title: "Strategic IT Consultancy & Solutions Platform",
      category: "#ITConsulting #Technology #Solutions",
      description:
        "Developed a sophisticated digital presence for an IT consultancy that demonstrates technical expertise and drives enterprise client acquisition. The platform features interactive case studies across 8 industry verticals, resulting in 80% increase in enterprise RFPs. Implemented a client portal that provides real-time project visibility and collaboration tools, reducing project communication overhead by 55%. The technical assessment tools generate 500+ monthly qualified leads by helping businesses identify digital transformation opportunities. The resource management system optimizes consultant allocation across 75+ active projects, while the knowledge base with 300+ technical articles positions the firm as industry thought leaders, attracting 50,000+ monthly organic visitors.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://alohatechlogo.com",
    },
    Archivitus: {
      image: Portfolio26 || DefaultCoverImage,
      title: "Bespoke Interior Design Studio Platform",
      category: "#Design #Architecture #Creative",
      description:
        "Created an immersive digital experience for a luxury interior design studio that showcases craftsmanship and streamlines client engagement. The platform features virtual reality room visualizations that helped clients make design decisions 3x faster, reducing consultation-to-contract time by 50%. Implemented a sophisticated project management system that coordinates 30+ concurrent residential and commercial projects with real-time budget tracking and vendor management. The material library with 5,000+ swatches and 3D models enabled clients to visualize finishes, reducing change orders by 65%. The client portal facilitated collaborative mood boards and approval workflows, while the portfolio showcasing 150+ completed projects generated 90% of new client inquiries through organic search.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://archivitus.com",
    },
    FreshSeaMart: {
      image: Portfolio27 || DefaultCoverImage,
      title: "Integrated Seafood Marketplace & Logistics",
      category: "#Ecommerce #FoodDelivery #Seafood",
      description:
        "Built a comprehensive seafood ecosystem connecting fishermen directly with consumers while ensuring premium quality and traceability. The platform features real-time catch updates from 20+ fishing harbors, with quality grading that reduced customer complaints by 85%. Implemented a smart inventory system that predicts demand patterns, reducing wastage from 15% to 3% while maintaining 99% product availability. The subscription service for weekly seafood boxes achieved 10,000+ active subscribers with 80% retention rate. Integrated cold chain monitoring ensures temperature control throughout delivery, while the transparent sourcing information built brand trust and enabled 200% year-over-year growth. The B2B wholesale module now supplies 150+ restaurants with automated ordering and delivery scheduling.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://freshseamart.com",
    },
    "MindScrest Technologies": {
      image: Portfolio28 || DefaultCoverImage,
      title: "Enterprise Technology Innovation Platform",
      category: "#Technology #Consulting #Solutions",
      description:
        "Developed a strategic digital platform for an IT solutions provider that demonstrates enterprise capabilities and drives Fortune 500 client engagements. The system features detailed case studies across 10 industry domains, resulting in 120% increase in enterprise contract values. Implemented a client success portal that provides real-time project metrics and ROI dashboards, strengthening long-term partnerships. The technical assessment tools have evaluated 1,000+ enterprise systems, identifying $50M+ in potential efficiency gains for clients. The resource optimization platform manages 200+ technical consultants across global projects, while the innovation lab showcase featuring AI and blockchain solutions attracted 15 new enterprise clients in the first year, driving 300% revenue growth.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://mindscrest.com",
    },
    "OCO Movies": {
      image: Portfolio29 || DefaultCoverImage,
      title: "Comprehensive Entertainment Analytics Platform",
      category: "#Entertainment #Media #News",
      description:
        "Built a data-driven entertainment platform that serves 1 million+ monthly movie enthusiasts with personalized content and community features. The system aggregates reviews from 500+ critics and 50,000+ users, providing comprehensive movie ratings with sentiment analysis. Implemented AI-powered recommendation engines that increased user engagement by 75% through personalized movie suggestions. The box office tracking and prediction algorithms achieve 90% accuracy in forecasting movie performance. The community features including user reviews and discussion forums generate 10,000+ monthly contributions, while the integrated ticketing system partners with 5 major theater chains processing 50,000+ monthly bookings. The platform's content strategy attracts 2 million+ monthly page views with 40% returning visitor rate.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://ocomoviescom",
    },
     "Shishuhriday": {
      image: Portfolio29 || DefaultCoverImage,
      title: "Comprehensive Entertainment Analytics Platform",
      category: "#Entertainment #Media #News",
      description:
        "Built a data-driven entertainment platform that serves 1 million+ monthly movie enthusiasts with personalized content and community features. The system aggregates reviews from 500+ critics and 50,000+ users, providing comprehensive movie ratings with sentiment analysis. Implemented AI-powered recommendation engines that increased user engagement by 75% through personalized movie suggestions. The box office tracking and prediction algorithms achieve 90% accuracy in forecasting movie performance. The community features including user reviews and discussion forums generate 10,000+ monthly contributions, while the integrated ticketing system partners with 5 major theater chains processing 50,000+ monthly bookings. The platform's content strategy attracts 2 million+ monthly page views with 40% returning visitor rate.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://shishuhriday.com/",
    },
     "Shivamshippingandlogistics-scm": {
      image: Portfolio29 || DefaultCoverImage,
      title: "Comprehensive Entertainment Analytics Platform",
      category: "#Entertainment #Media #News",
      description:
        "Built a data-driven entertainment platform that serves 1 million+ monthly movie enthusiasts with personalized content and community features. The system aggregates reviews from 500+ critics and 50,000+ users, providing comprehensive movie ratings with sentiment analysis. Implemented AI-powered recommendation engines that increased user engagement by 75% through personalized movie suggestions. The box office tracking and prediction algorithms achieve 90% accuracy in forecasting movie performance. The community features including user reviews and discussion forums generate 10,000+ monthly contributions, while the integrated ticketing system partners with 5 major theater chains processing 50,000+ monthly bookings. The platform's content strategy attracts 2 million+ monthly page views with 40% returning visitor rate.",
      tech: ["Flutter", "Firebase", "Node.js", "Twilio"],
      liveUrl: "https://shivamshippingandlogistics-scm.com/",
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
          container.scrollWidth - container.clientWidth - 10,
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
                className="text-gray-300 text-xs bg-white/10 px-2 py-1 rounded-full"
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
              <span>Live Demo</span>
              <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Project Navigation */}
        <div className=" sm:my-auto md:col-span-4 flex flex-col items-center justify-end p-1 md:p-2"
        >
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
            <span className="text-white font-semibold text-lg md:text-xl text-center block mb-2 md:mb-2">
              Our Projects
            </span>

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex md:flex-col gap-3 md:gap-2 overflow-x-auto md:overflow-y-auto w-full custom-scrollbar md:max-h-[50vh] md:h-auto px-1 pb-2"
            >
              {getProjectNames().map((projectName) => {
                const project = projects[projectName];
                const isSelected = selectedProject === projectName;

                return (
                  <button
                    key={projectName}
                    onClick={() => handleProjectClick(projectName)}
                    className={`group flex items-center gap-3 text-sm font-medium px-4 py-3 rounded-xl transition-all duration-300 flex-shrink-0 backdrop-blur-sm border md:w-full relative overflow-hidden ${
                      isSelected
                        ? "bg-gradient-to-r from-primary/30 to-primary/10 border-primary/40 text-white shadow-lg shadow-primary/20"
                        : "bg-black/20 border-white/15 hover:bg-white/5 text-gray-300 hover:text-white hover:border-white/25"
                    }`}
                  >
                    {/* Selection indicator */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/70 rounded-l-xl"></div>
                    )}

                    {/* Icon container */}
                    <div className="relative">
                      <div
                        className={`p-2.5 rounded-lg transition-all duration-300 ${
                          isSelected
                            ? "bg-white shadow-md"
                            : "bg-white/10 group-hover:bg-white/15"
                        }`}
                      >
                        {isSelected ? (
                          <FcOk className="text-lg" />
                        ) : (
                          <FcIdea className="text-lg" />
                        )}
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-semibold text-base md:text-sm whitespace-nowrap truncate">
                        {projectName}
                      </div>
                      <div className="text-xs text-gray-400 truncate mt-0.5">
                        {project.category}
                      </div>

                      {/* Progress/Status indicator (optional) */}
                      {project.status && (
                        <div className="flex items-center gap-1.5 mt-1">
                          <div
                            className={`h-1.5 w-6 rounded-full ${
                              project.status === "completed"
                                ? "bg-green-500"
                                : project.status === "in-progress"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                            }`}
                          ></div>
                          <span className="text-[10px] text-gray-500 capitalize">
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <FiArrowUpRight
                      className={`ml-auto text-base transition-all duration-300 ${
                        isSelected
                          ? "opacity-100 rotate-45 text-primary"
                          : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gray-400"
                      }`}
                    />
                  </button>
                );
              })}
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
