// globaldatabase.js
import {
  WeddingPlannersCoverimage,
  AdvertisitngCoverImage,
  BrandingCoverImage,
  DigitalMarketingCoverImage,
  ServicesCoverImage,
  DefaultCoverImage,
  WeddingCoverImage,
} from "../data/Imagedata";
import {
  faMousePointer,
  faFileSignature,
  faHandHoldingUsd,
  faUsers,
  faShareNodes,
  faCheckCircle,
  faPalette,
  faFileAlt,
  faGlobe,
  faEnvelope,
  faBookOpen,
  faTv,
  faCamera,
  faIdBadge,
  faShoppingCart,
  faMapMarker,
  faBullhorn,
  faVideo,
  faBullseye,
  faLandmark,
  faSearch,
  faBuilding,
  faFileLines,
  faPeopleArrows,
  faCommentAlt,
  faTrain,
  faBus,
  faTruck,
  faTaxi,
  faStore,
  faAd,
  faNewspaper,
  faRadio,
  faFilm,
  faIdCard,
  faSitemap,
  faProjectDiagram,
  faImages,
  faCalendarAlt,
  faFolderOpen,
  faBook,
  faSearchDollar,
  faHashtag,
  faUserFriends,
  faLightbulb,
  faPlaneDeparture,
  faGraduationCap,
  faPhone,
  faTag,
  faImage,
  faRing,
  faChampagneGlasses,
  faMusic,
  faMicrophone,
  faUtensils,
  faShapes,
  faCakeCandles,
  faGlassCheers,
  faMasksTheater,
  faBriefcase,
  faUserTie,
  faAward,
  faStar,
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";

import {

  DisplayAdvertising,

  Webdevelopmenticon,

  Advertisingicon,
  DigitalmarketingIcon,
  Brandingicon,
  DefaultIcon,
} from "../data/icon_data";

//services
export const ServicesPageDetails = {
  coverimage: ServicesCoverImage,
  title: "Services",
  subtitle:
    "Leor Media is your reliable partner for innovative, scalable, and high-performance web development solutions.",
  coverImage: {
    src: WeddingPlannersCoverimage, // Update this path to the actual image path
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  SeoName: {
    seotitle: "services",
  },

  section2: {
    tagline: "Web Development That Drives Results.",
    heading: "Turn Your Vision Into a Powerful Web Experience.",
    description:
      "At Leor Media, we specialize in building robust, secure, and scalable web applications aligned with your business objectives. Whether you're a startup or an enterprise, we lay the digital foundation for your long-term success.",
  },
  services: [
    {
      icon: Webdevelopmenticon,
      title: "Events",
      description:
        "Vizag’s premier event management partner. We specialize in creating memorable experiences for personal, corporate, and lifestyle events.",
      link: "/services/wedding-planners",
    },
    {
      icon: DefaultIcon,
      title: "Mobile Application",
      description:
        "Create seamless mobile experiences with our custom Android and iOS app development services. We specialize in building native, hybrid, and cross-platform apps that keep your users engaged.",
      link: "https://www.vivahamco.com",
    },
    {
      icon: DigitalmarketingIcon,
      title: "Digital Media Marketing",
      description:
        "Boost your online presence with strategic SEO, PPC, social media marketing, and content campaigns. We drive traffic, build engagement, and increase conversions across digital channels.",
      link: "/services/digital-media-marketing",
    },

    {
      icon: Brandingicon,
      title: "Branding",
      description:
        "Create a lasting impression with strategic branding. From logo design to brand identity systems, we craft cohesive visuals and messaging that connect with your audience.",
      link: "/services/branding",
    },
    {
      icon: Advertisingicon,
      title: "Advertising",
      description:
        "Run targeted ad campaigns across platforms like Google, Facebook, and Instagram. We help you reach the right audience with creative, data-driven advertising strategies that convert.",
      link: "/services/advertisement",
    },
  ],
};

//WebDevelopment
// Events Page Data
export const WeddingPlannersPageData = {
  SeoName: {
    seotitle: "weddingPlanners",
  },
  coverimage: WeddingPlannersCoverimage,
  title: "Events in Visakhapatnam | Leor Media",
  subtitle:
    "Leor Media — Vizag’s premier event management and planning partner. We specialize in creating memorable experiences for personal, corporate, and lifestyle events.",
  coverImage: {
    src: WeddingPlannersCoverimage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Unforgettable Events in Vizag",
    heading: "Expert Event Planning & Management Services",
    description:
      "At Leor Media, we bring your celebrations and professional gatherings to life. Our team handles everything from conceptualization to execution, ensuring every detail is perfect. Whether it's a birthday, a corporate conference, or a lifestyle festival, we are your trusted partners in Visakhapatnam.",
  },

  services: [
    { icon: faGlobe, title: "Destination Wedding Arrangements & Planning", description: "Expert destination wedding planners in Vizag.", link: "/services/wedding-planners/destination-wedding" },
    { icon: faRing, title: "Ring Ceremony (Engagements)", description: "Memorable engagement planning services.", link: "/services/wedding-planners/ring-ceremony" },
    { icon: faPeopleArrows, title: "WEDDING PLANNERS", description: "Professional wedding planning and management.", link: "/services/wedding-planners/wedding-planners" },
    { icon: faChampagneGlasses, title: "Receptions", description: "Grand reception event management.", link: "/services/wedding-planners/receptions" },
    { icon: faPalette, title: "Mehendi", description: "Beautiful mehendi ceremony arrangements.", link: "/services/wedding-planners/mehendi" },
    { icon: faMusic, title: "Sangeet", description: "Lively sangeet event planning.", link: "/services/wedding-planners/sangeet" },
    { icon: faMicrophone, title: "Entertainment & Artists", description: "Artist and celebrity management.", link: "/services/wedding-planners/entertainment-and-artists" },
    { icon: faUtensils, title: "Hospitality", description: "Premium hospitality services for guests.", link: "/services/wedding-planners/hospitality" },
    { icon: faUsers, title: "Guest Management", description: "Professional guest coordination services.", link: "/services/wedding-planners/guest-management" },
    { icon: faCamera, title: "Photography & Videography", description: "Capturing your special moments.", link: "/services/wedding-planners/photography-and-videography" },
    { icon: faShapes, title: "Theme Decors", description: "Stunning themed decorations.", link: "/services/wedding-planners/theme-decors" },
    { icon: faCakeCandles, title: "Birthday Parties", description: "Fun and creative birthday planning.", link: "/services/wedding-planners/birthday-parties" },
    { icon: faGlassCheers, title: "Personal Celebrations", description: "Custom personal event planning.", link: "/services/wedding-planners/personal-celebrations" },
    { icon: faMasksTheater, title: "Cultural Events", description: "Traditional and cultural event management.", link: "/services/wedding-planners/cultural-events" },
    { icon: faBullhorn, title: "Product Launches", description: "Impactful corporate product launches.", link: "/services/wedding-planners/product-launches" },
    { icon: faMusic, title: "Concert & Gigs", description: "High-energy concert management.", link: "/services/wedding-planners/concert-and-gigs" },
    { icon: faBriefcase, title: "Protocol Events", description: "Professional protocol event services.", link: "/services/wedding-planners/protocol-events" },
    { icon: faUserTie, title: "Fashion Shows", description: "Glittering fashion show coordination.", link: "/services/wedding-planners/fashion-shows" },
    { icon: faAward, title: "Award Nights", description: "Grand award ceremony planning.", link: "/services/wedding-planners/award-nights" },
    { icon: faMasksTheater, title: "Carnivals", description: "Exciting carnival event management.", link: "/services/wedding-planners/carnivals" },
    { icon: faBullseye, title: "Brand Promotional Events", description: "Strategic brand activation events.", link: "/services/wedding-planners/brand-promotional-events" },
    { icon: faStar, title: "Celeb/Artist Management", description: "Expert artist management services.", link: "/services/wedding-planners/celeb-artist-management" },
    { icon: faChalkboard, title: "Corporate Seminars & Work Shops", description: "Professional corporate event planning.", link: "/services/wedding-planners/corporate-seminars" },
    { icon: faBuilding, title: "Exhibitions", description: "Large-scale exhibition management.", link: "/services/wedding-planners/exhibitions" },
  ],
};

// Advertisement Page Data
export const AdvertisingCompany = {
  SeoName: {
    seotitle: "advertising",
  },
  coverimage: AdvertisitngCoverImage,
  title: "Advertisement Services in Visakhapatnam | Leor Media",
  subtitle:
    "Leor Media offers comprehensive ATL, BTL, and Digital advertising solutions to help your brand reach the right audience across all channels.",
  coverImage: {
    src: AdvertisitngCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
  section2: {
    tagline: "Impactful Advertising Solutions",
    heading: "Strategic ATL, BTL & Transit Media Advertising",
    description:
      "From massive billboards and transit media to strategic kiosks and digital media buying, we provide end-to-end advertising services tailored to your brand's growth in Visakhapatnam and beyond.",
  },
  services: [
    // ATL/OOH
    { icon: faAd, title: "Display Boards", description: "High-visibility display boards.", link: "/services/advertisement/display-boards" },
    { icon: faAd, title: "Bill Boards", description: "Large format billboards.", link: "/services/advertisement/bill-boards" },
    { icon: faAd, title: "Unipole", description: "Strategic unipole advertising.", link: "/services/advertisement/unipole" },
    { icon: faAd, title: "Wall Panel", description: "Effective wall panel ads.", link: "/services/advertisement/wall-panel" },
    { icon: faAd, title: "Over Head Panel", description: "Overhead panel placements.", link: "/services/advertisement/over-head-panel" },
    { icon: faBuilding, title: "Building Wraps", description: "Impactful building wrap ads.", link: "/services/advertisement/building-wraps" },
    { icon: faBus, title: "Bus Shelters", description: "Targeted bus shelter advertising.", link: "/services/advertisement/bus-shelters" },
    { icon: faLandmark, title: "Flyover Pillars", description: "Pillar branding on flyovers.", link: "/services/advertisement/flyover-pillars" },
    { icon: faStore, title: "Malls", description: "Premium mall advertising.", link: "/services/advertisement/malls" },
    { icon: faTrain, title: "Railway Stations", description: "Railway station branding.", link: "/services/advertisement/railway-stations" },
    { icon: faPlaneDeparture, title: "Airports", description: "Airport advertising solutions.", link: "/services/advertisement/airports" },
    // Transit
    { icon: faTaxi, title: "Cab Branding", description: "Mobile branding on cabs.", link: "/services/advertisement/cab-branding" },
    { icon: faBus, title: "Bus Panels", description: "Advertising on bus panels.", link: "/services/advertisement/bus-panels" },
    { icon: faBus, title: "Bus Wraps", description: "Full bus wrap branding.", link: "/services/advertisement/bus-wraps" },
    { icon: faTruck, title: "Mobile Display Vans", description: "Dynamic mobile display vans.", link: "/services/advertisement/mobile-display-vans" },
    { icon: faTrain, title: "Local & Metro Trains", description: "Train interior and exterior branding.", link: "/services/advertisement/local-metro-trains" },
    { icon: faTruck, title: "Truck Wrap", description: "Effective truck wrap branding.", link: "/services/advertisement/truck-wrap" },
    { icon: faTaxi, title: "Auto Rickshaw Branding", description: "Local auto rickshaw branding.", link: "/services/advertisement/auto-rickshaw-branding" },
    // Strategic
    { icon: faAd, title: "Pole Kiosk", description: "Strategic pole kiosk ads.", link: "/services/advertisement/pole-kiosk" },
    { icon: faTrain, title: "Metro Kiosk", description: "Metro station kiosk ads.", link: "/services/advertisement/metro-kiosk" },
    { icon: faGraduationCap, title: "College Kiosk", description: "Targeted college kiosk ads.", link: "/services/advertisement/college-kiosk" },
    { icon: faUsers, title: "Bench Branding", description: "Community bench branding.", link: "/services/advertisement/bench-branding" },
    { icon: faSearch, title: "Barcodes", description: "Interactive barcode ads.", link: "/services/advertisement/barcodes" },
    { icon: faPlaneDeparture, title: "Airport Trolley", description: "Branding on airport trolleys.", link: "/services/advertisement/airport-trolley" },
    { icon: faShoppingCart, title: "Hypermarts", description: "Retail-focused hypermart ads.", link: "/services/advertisement/hypermarts" },
    { icon: faPeopleArrows, title: "Event Advertising", description: "Strategic event-based advertising.", link: "/services/advertisement/event-advertising" },
    // Print
    { icon: faNewspaper, title: "Newspapers", description: "Ads in leading newspapers.", link: "/services/advertisement/newspapers" },
    { icon: faBookOpen, title: "Magazines", description: "Niche magazine advertising.", link: "/services/advertisement/magazines" },
    { icon: faFileAlt, title: "Periodicals", description: "Periodical ad placements.", link: "/services/advertisement/periodicals" },
    { icon: faEnvelope, title: "News Letters", description: "Targeted newsletter ads.", link: "/services/advertisement/news-letters" },
    { icon: faSearchDollar, title: "Digital Media Buying", description: "Strategic digital ad placements.", link: "/services/advertisement/digital-media-buying" },
    // Electronic
    { icon: faFilm, title: "Theater", description: "Cinema theater advertising.", link: "/services/advertisement/theater" },
    { icon: faTv, title: "Televisions", description: "Impactful TV commercials.", link: "/services/advertisement/televisions" },
    { icon: faVideo, title: "Infilm", description: "Strategic in-film branding.", link: "/services/advertisement/infilm" },
    { icon: faRadio, title: "Radio", description: "Creative radio jingles and ads.", link: "/services/advertisement/radio" },
    // BTL
    { icon: faBullhorn, title: "Brand Promotions", description: "Direct brand promotion activities.", link: "/services/advertisement/brand-promotions" },
    { icon: faTruck, title: "Road Shows", description: "Engaging road show campaigns.", link: "/services/advertisement/road-shows" },
    { icon: faLightbulb, title: "Experiential Marketing", description: "Interactive marketing experiences.", link: "/services/advertisement/experiential-marketing" },
    { icon: faStore, title: "Mall Activities", description: "On-ground mall activations.", link: "/services/advertisement/mall-activities" },
    { icon: faShoppingCart, title: "Retail Store Activities", description: "In-store promotional activities.", link: "/services/advertisement/retail-store-activities" },
    { icon: faEnvelope, title: "Direct Marketing", description: "Personalized direct marketing.", link: "/services/advertisement/direct-marketing" },
    { icon: faGlobe, title: "Digital Marketing", description: "BTL digital marketing integration.", link: "/services/advertisement/digital-marketing-btl" },
    { icon: faPhone, title: "Tele Marketing", description: "Professional telemarketing services.", link: "/services/advertisement/tele-marketing" },
  ],
};

// Generic Advertisement Detail Page Data (Original fallback)
export const GenericAdvertisementDetailPageData = {
  SeoName: { seotitle: "advertising" },
  coverimage: AdvertisitngCoverImage,
  title: "Advertising Solutions",
  subtitle: "Strategic advertisement services to boost your brand reach and visibility.",
  coverImage: { src: AdvertisitngCoverImage, style: { backgroundSize: "cover", backgroundPosition: "center" } },
  section2: { tagline: "Reach More People", heading: "Professional Advertising Services", description: "We provide expert advertising solutions across multiple channels to ensure your message reaches the right audience effectively." },
  services: [
    { icon: faCheckCircle, title: "Strategic Planning", description: "Customized ad strategies for your brand.", details: ["Audience Research", "Media Planning", "ROI Optimization"], link: "/contactus" },
    { icon: faPalette, title: "Creative Design", description: "Stunning ad designs that capture attention.", details: ["Graphic Design", "Copywriting", "Visual Storytelling"], link: "/contactus" },
  ],
  pricing: [{ title: "Custom Plan", price: "Contact Us", features: ["Media Buying", "Creative Design", "Campaign Management", "Performance Reports"], link: "/contactus", highlighted: true }],
  faqs: [{ question: "How do you choose the best ad channel?", answer: "We analyze your target audience, goals, and budget to recommend the most effective ATL, BTL, or digital channels." }],
};

// Individual Advertisement Sub-Page Data
export const DisplayBoardsPageData = {
  SeoName: {
    seotitle: "display-boards",
  },
  title: "Display Boards",
  subtitle: "Effective Display Boards services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Display Boards Advertising",
    heading: "Impactful Display Boards Solutions",
    description: "Leor Media delivers strategic Display Boards campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Display Boards Campaign",
      description: "Professional management of Display Boards.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Display Boards for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BillBoardsPageData = {
  SeoName: {
    seotitle: "bill-boards",
  },
  title: "Bill Boards",
  subtitle: "Effective Bill Boards services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Bill Boards Advertising",
    heading: "Impactful Bill Boards Solutions",
    description: "Leor Media delivers strategic Bill Boards campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Bill Boards Campaign",
      description: "Professional management of Bill Boards.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Bill Boards for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const UnipolePageData = {
  SeoName: {
    seotitle: "unipole",
  },
  title: "Unipole",
  subtitle: "Effective Unipole services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Unipole Advertising",
    heading: "Impactful Unipole Solutions",
    description: "Leor Media delivers strategic Unipole campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Unipole Campaign",
      description: "Professional management of Unipole.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Unipole for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const WallPanelPageData = {
  SeoName: {
    seotitle: "wall-panel",
  },
  title: "Wall Panel",
  subtitle: "Effective Wall Panel services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Wall Panel Advertising",
    heading: "Impactful Wall Panel Solutions",
    description: "Leor Media delivers strategic Wall Panel campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Wall Panel Campaign",
      description: "Professional management of Wall Panel.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Wall Panel for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const OverHeadPanelPageData = {
  SeoName: {
    seotitle: "over-head-panel",
  },
  title: "Over Head Panel",
  subtitle: "Effective Over Head Panel services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Over Head Panel Advertising",
    heading: "Impactful Over Head Panel Solutions",
    description: "Leor Media delivers strategic Over Head Panel campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Over Head Panel Campaign",
      description: "Professional management of Over Head Panel.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Over Head Panel for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BuildingWrapsPageData = {
  SeoName: {
    seotitle: "building-wraps",
  },
  title: "Building Wraps",
  subtitle: "Effective Building Wraps services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Building Wraps Advertising",
    heading: "Impactful Building Wraps Solutions",
    description: "Leor Media delivers strategic Building Wraps campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Building Wraps Campaign",
      description: "Professional management of Building Wraps.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Building Wraps for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BusSheltersPageData = {
  SeoName: {
    seotitle: "bus-shelters",
  },
  title: "Bus Shelters",
  subtitle: "Effective Bus Shelters services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Bus Shelters Advertising",
    heading: "Impactful Bus Shelters Solutions",
    description: "Leor Media delivers strategic Bus Shelters campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Bus Shelters Campaign",
      description: "Professional management of Bus Shelters.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Bus Shelters for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const FlyoverPillarsPageData = {
  SeoName: {
    seotitle: "flyover-pillars",
  },
  title: "Flyover Pillars",
  subtitle: "Effective Flyover Pillars services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Flyover Pillars Advertising",
    heading: "Impactful Flyover Pillars Solutions",
    description: "Leor Media delivers strategic Flyover Pillars campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Flyover Pillars Campaign",
      description: "Professional management of Flyover Pillars.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Flyover Pillars for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const MallsPageData = {
  SeoName: {
    seotitle: "malls",
  },
  title: "Malls",
  subtitle: "Effective Malls services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Malls Advertising",
    heading: "Impactful Malls Solutions",
    description: "Leor Media delivers strategic Malls campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Malls Campaign",
      description: "Professional management of Malls.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Malls for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const RailwayStationsPageData = {
  SeoName: {
    seotitle: "railway-stations",
  },
  title: "Railway Stations",
  subtitle: "Effective Railway Stations services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Railway Stations Advertising",
    heading: "Impactful Railway Stations Solutions",
    description: "Leor Media delivers strategic Railway Stations campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Railway Stations Campaign",
      description: "Professional management of Railway Stations.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Railway Stations for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const AirportsPageData = {
  SeoName: {
    seotitle: "airports",
  },
  title: "Airports",
  subtitle: "Effective Airports services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Airports Advertising",
    heading: "Impactful Airports Solutions",
    description: "Leor Media delivers strategic Airports campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Airports Campaign",
      description: "Professional management of Airports.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Airports for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const CabBrandingPageData = {
  SeoName: {
    seotitle: "cab-branding",
  },
  title: "Cab Branding",
  subtitle: "Effective Cab Branding services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Cab Branding Advertising",
    heading: "Impactful Cab Branding Solutions",
    description: "Leor Media delivers strategic Cab Branding campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Cab Branding Campaign",
      description: "Professional management of Cab Branding.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Cab Branding for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BusPanelsPageData = {
  SeoName: {
    seotitle: "bus-panels",
  },
  title: "Bus Panels",
  subtitle: "Effective Bus Panels services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Bus Panels Advertising",
    heading: "Impactful Bus Panels Solutions",
    description: "Leor Media delivers strategic Bus Panels campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Bus Panels Campaign",
      description: "Professional management of Bus Panels.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Bus Panels for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BusWrapsPageData = {
  SeoName: {
    seotitle: "bus-wraps",
  },
  title: "Bus Wraps",
  subtitle: "Effective Bus Wraps services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Bus Wraps Advertising",
    heading: "Impactful Bus Wraps Solutions",
    description: "Leor Media delivers strategic Bus Wraps campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Bus Wraps Campaign",
      description: "Professional management of Bus Wraps.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Bus Wraps for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const MobileDisplayVansPageData = {
  SeoName: {
    seotitle: "mobile-display-vans",
  },
  title: "Mobile Display Vans",
  subtitle: "Effective Mobile Display Vans services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Mobile Display Vans Advertising",
    heading: "Impactful Mobile Display Vans Solutions",
    description: "Leor Media delivers strategic Mobile Display Vans campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Mobile Display Vans Campaign",
      description: "Professional management of Mobile Display Vans.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Mobile Display Vans for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const LocalMetroTrainsPageData = {
  SeoName: {
    seotitle: "local-metro-trains",
  },
  title: "Local & Metro Trains",
  subtitle: "Effective Local & Metro Trains services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Local & Metro Trains Advertising",
    heading: "Impactful Local & Metro Trains Solutions",
    description: "Leor Media delivers strategic Local & Metro Trains campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Local & Metro Trains Campaign",
      description: "Professional management of Local & Metro Trains.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Local & Metro Trains for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const TruckWrapPageData = {
  SeoName: {
    seotitle: "truck-wrap",
  },
  title: "Truck Wrap",
  subtitle: "Effective Truck Wrap services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Truck Wrap Advertising",
    heading: "Impactful Truck Wrap Solutions",
    description: "Leor Media delivers strategic Truck Wrap campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Truck Wrap Campaign",
      description: "Professional management of Truck Wrap.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Truck Wrap for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const AutoRickshawBrandingPageData = {
  SeoName: {
    seotitle: "auto-rickshaw-branding",
  },
  title: "Auto Rickshaw Branding",
  subtitle: "Effective Auto Rickshaw Branding services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Auto Rickshaw Branding Advertising",
    heading: "Impactful Auto Rickshaw Branding Solutions",
    description: "Leor Media delivers strategic Auto Rickshaw Branding campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Auto Rickshaw Branding Campaign",
      description: "Professional management of Auto Rickshaw Branding.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Auto Rickshaw Branding for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const PoleKioskPageData = {
  SeoName: {
    seotitle: "pole-kiosk",
  },
  title: "Pole Kiosk",
  subtitle: "Effective Pole Kiosk services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Pole Kiosk Advertising",
    heading: "Impactful Pole Kiosk Solutions",
    description: "Leor Media delivers strategic Pole Kiosk campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Pole Kiosk Campaign",
      description: "Professional management of Pole Kiosk.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Pole Kiosk for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const MetroKioskPageData = {
  SeoName: {
    seotitle: "metro-kiosk",
  },
  title: "Metro Kiosk",
  subtitle: "Effective Metro Kiosk services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Metro Kiosk Advertising",
    heading: "Impactful Metro Kiosk Solutions",
    description: "Leor Media delivers strategic Metro Kiosk campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Metro Kiosk Campaign",
      description: "Professional management of Metro Kiosk.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Metro Kiosk for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const CollegeKioskPageData = {
  SeoName: {
    seotitle: "college-kiosk",
  },
  title: "College Kiosk",
  subtitle: "Effective College Kiosk services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "College Kiosk Advertising",
    heading: "Impactful College Kiosk Solutions",
    description: "Leor Media delivers strategic College Kiosk campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "College Kiosk Campaign",
      description: "Professional management of College Kiosk.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is College Kiosk for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BenchBrandingPageData = {
  SeoName: {
    seotitle: "bench-branding",
  },
  title: "Bench Branding",
  subtitle: "Effective Bench Branding services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Bench Branding Advertising",
    heading: "Impactful Bench Branding Solutions",
    description: "Leor Media delivers strategic Bench Branding campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Bench Branding Campaign",
      description: "Professional management of Bench Branding.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Bench Branding for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BarcodesPageData = {
  SeoName: {
    seotitle: "barcodes",
  },
  title: "Barcodes",
  subtitle: "Effective Barcodes services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Barcodes Advertising",
    heading: "Impactful Barcodes Solutions",
    description: "Leor Media delivers strategic Barcodes campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Barcodes Campaign",
      description: "Professional management of Barcodes.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Barcodes for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const AirportTrolleyPageData = {
  SeoName: {
    seotitle: "airport-trolley",
  },
  title: "Airport Trolley",
  subtitle: "Effective Airport Trolley services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Airport Trolley Advertising",
    heading: "Impactful Airport Trolley Solutions",
    description: "Leor Media delivers strategic Airport Trolley campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Airport Trolley Campaign",
      description: "Professional management of Airport Trolley.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Airport Trolley for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const HypermartsPageData = {
  SeoName: {
    seotitle: "hypermarts",
  },
  title: "Hypermarts",
  subtitle: "Effective Hypermarts services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Hypermarts Advertising",
    heading: "Impactful Hypermarts Solutions",
    description: "Leor Media delivers strategic Hypermarts campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Hypermarts Campaign",
      description: "Professional management of Hypermarts.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Hypermarts for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const EventAdvertisingPageData = {
  SeoName: {
    seotitle: "event-advertising",
  },
  title: "Event Advertising",
  subtitle: "Effective Event Advertising services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Event Advertising Advertising",
    heading: "Impactful Event Advertising Solutions",
    description: "Leor Media delivers strategic Event Advertising campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Event Advertising Campaign",
      description: "Professional management of Event Advertising.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Event Advertising for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const NewspapersPageData = {
  SeoName: {
    seotitle: "newspapers",
  },
  title: "Newspapers",
  subtitle: "Effective Newspapers services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Newspapers Advertising",
    heading: "Impactful Newspapers Solutions",
    description: "Leor Media delivers strategic Newspapers campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Newspapers Campaign",
      description: "Professional management of Newspapers.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Newspapers for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const MagazinesPageData = {
  SeoName: {
    seotitle: "magazines",
  },
  title: "Magazines",
  subtitle: "Effective Magazines services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Magazines Advertising",
    heading: "Impactful Magazines Solutions",
    description: "Leor Media delivers strategic Magazines campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Magazines Campaign",
      description: "Professional management of Magazines.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Magazines for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const PeriodicalsPageData = {
  SeoName: {
    seotitle: "periodicals",
  },
  title: "Periodicals",
  subtitle: "Effective Periodicals services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Periodicals Advertising",
    heading: "Impactful Periodicals Solutions",
    description: "Leor Media delivers strategic Periodicals campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Periodicals Campaign",
      description: "Professional management of Periodicals.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Periodicals for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const NewsLettersPageData = {
  SeoName: {
    seotitle: "news-letters",
  },
  title: "News Letters",
  subtitle: "Effective News Letters services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "News Letters Advertising",
    heading: "Impactful News Letters Solutions",
    description: "Leor Media delivers strategic News Letters campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "News Letters Campaign",
      description: "Professional management of News Letters.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is News Letters for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const DigitalMediaBuyingPageData = {
  SeoName: {
    seotitle: "digital-media-buying",
  },
  title: "Digital Media Buying",
  subtitle: "Effective Digital Media Buying services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Digital Media Buying Advertising",
    heading: "Impactful Digital Media Buying Solutions",
    description: "Leor Media delivers strategic Digital Media Buying campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Digital Media Buying Campaign",
      description: "Professional management of Digital Media Buying.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Digital Media Buying for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const TheaterPageData = {
  SeoName: {
    seotitle: "theater",
  },
  title: "Theater",
  subtitle: "Effective Theater services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Theater Advertising",
    heading: "Impactful Theater Solutions",
    description: "Leor Media delivers strategic Theater campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Theater Campaign",
      description: "Professional management of Theater.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Theater for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const TelevisionsPageData = {
  SeoName: {
    seotitle: "televisions",
  },
  title: "Televisions",
  subtitle: "Effective Televisions services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Televisions Advertising",
    heading: "Impactful Televisions Solutions",
    description: "Leor Media delivers strategic Televisions campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Televisions Campaign",
      description: "Professional management of Televisions.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Televisions for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const InfilmPageData = {
  SeoName: {
    seotitle: "infilm",
  },
  title: "Infilm",
  subtitle: "Effective Infilm services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Infilm Advertising",
    heading: "Impactful Infilm Solutions",
    description: "Leor Media delivers strategic Infilm campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Infilm Campaign",
      description: "Professional management of Infilm.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Infilm for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const RadioPageData = {
  SeoName: {
    seotitle: "radio",
  },
  title: "Radio",
  subtitle: "Effective Radio services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Radio Advertising",
    heading: "Impactful Radio Solutions",
    description: "Leor Media delivers strategic Radio campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Radio Campaign",
      description: "Professional management of Radio.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Radio for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const BrandPromotionsPageData = {
  SeoName: {
    seotitle: "brand-promotions",
  },
  title: "Brand Promotions",
  subtitle: "Effective Brand Promotions services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Brand Promotions Advertising",
    heading: "Impactful Brand Promotions Solutions",
    description: "Leor Media delivers strategic Brand Promotions campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Brand Promotions Campaign",
      description: "Professional management of Brand Promotions.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Brand Promotions for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const RoadShowsPageData = {
  SeoName: {
    seotitle: "road-shows",
  },
  title: "Road Shows",
  subtitle: "Effective Road Shows services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Road Shows Advertising",
    heading: "Impactful Road Shows Solutions",
    description: "Leor Media delivers strategic Road Shows campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Road Shows Campaign",
      description: "Professional management of Road Shows.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Road Shows for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const ExperientialMarketingPageData = {
  SeoName: {
    seotitle: "experiential-marketing",
  },
  title: "Experiential Marketing",
  subtitle: "Effective Experiential Marketing services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Experiential Marketing Advertising",
    heading: "Impactful Experiential Marketing Solutions",
    description: "Leor Media delivers strategic Experiential Marketing campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Experiential Marketing Campaign",
      description: "Professional management of Experiential Marketing.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Experiential Marketing for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const MallActivitiesPageData = {
  SeoName: {
    seotitle: "mall-activities",
  },
  title: "Mall Activities",
  subtitle: "Effective Mall Activities services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Mall Activities Advertising",
    heading: "Impactful Mall Activities Solutions",
    description: "Leor Media delivers strategic Mall Activities campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Mall Activities Campaign",
      description: "Professional management of Mall Activities.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Mall Activities for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const RetailStoreActivitiesPageData = {
  SeoName: {
    seotitle: "retail-store-activities",
  },
  title: "Retail Store Activities",
  subtitle: "Effective Retail Store Activities services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Retail Store Activities Advertising",
    heading: "Impactful Retail Store Activities Solutions",
    description: "Leor Media delivers strategic Retail Store Activities campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Retail Store Activities Campaign",
      description: "Professional management of Retail Store Activities.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Retail Store Activities for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const DirectMarketingPageData = {
  SeoName: {
    seotitle: "direct-marketing",
  },
  title: "Direct Marketing",
  subtitle: "Effective Direct Marketing services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Direct Marketing Advertising",
    heading: "Impactful Direct Marketing Solutions",
    description: "Leor Media delivers strategic Direct Marketing campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Direct Marketing Campaign",
      description: "Professional management of Direct Marketing.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Direct Marketing for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const DigitalMarketingBtlPageData = {
  SeoName: {
    seotitle: "digital-marketing-btl",
  },
  title: "Digital Marketing (BTL)",
  subtitle: "Effective Digital Marketing (BTL) services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Digital Marketing (BTL) Advertising",
    heading: "Impactful Digital Marketing (BTL) Solutions",
    description: "Leor Media delivers strategic Digital Marketing (BTL) campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Digital Marketing (BTL) Campaign",
      description: "Professional management of Digital Marketing (BTL).",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Digital Marketing (BTL) for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

export const TeleMarketingPageData = {
  SeoName: {
    seotitle: "tele-marketing",
  },
  title: "Tele Marketing",
  subtitle: "Effective Tele Marketing services by Leor Media to maximize your brand reach.",
  coverimage: AdvertisitngCoverImage,
  section2: {
    tagline: "Tele Marketing Advertising",
    heading: "Impactful Tele Marketing Solutions",
    description: "Leor Media delivers strategic Tele Marketing campaigns that drive visibility and results.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Tele Marketing Campaign",
      description: "Professional management of Tele Marketing.",
      details: ["Location Targeting", "Creative Design", "Campaign Tracking"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Quote",
      price: "Contact Us",
      features: ["Premium Placement", "Ad Design", "Performance Report"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How effective is Tele Marketing for my business?",
      answer: "It provides high visibility and targeted reach to your potential customers in specific locations.",
    },
  ],
};

// Branding Page Data
export const BrandingCompany = {
  SeoName: { seotitle: "branding" },
  coverimage: BrandingCoverImage,
  title: "Branding Services in Visakhapatnam | Leor Media",
  subtitle: "Building iconic brands through strategic audit, identity design, and creative activations.",
  coverImage: { src: BrandingCoverImage, style: { backgroundSize: "cover", backgroundPosition: "center" } },
  section2: {
    tagline: "Your Brand, Our Passion",
    heading: "End-to-End Brand Strategy & Designing",
    description: "Leor Media helps you define, design, and deliver a brand that resonates with your audience and stands out in the marketplace.",
  },
  services: [
    { icon: faSearch, title: "Brand Audit", description: "Comprehensive audit of your brand.", link: "/services/branding/brand-audit" },
    { icon: faLightbulb, title: "Brand Strategy", description: "Strategic planning for brand growth.", link: "/services/branding/brand-strategy" },
    { icon: faIdBadge, title: "Brand Identity", description: "Creating a unique brand identity.", link: "/services/branding/brand-identity" },
    { icon: faMapMarker, title: "Brand Positioning", description: "Strategically positioning your brand.", link: "/services/branding/brand-positioning" },
    { icon: faBullseye, title: "Brand Activations", description: "Engaging brand activation events.", link: "/services/branding/brand-activations" },
    { icon: faFilm, title: "Infilm Branding", description: "Strategic branding within films.", link: "/services/branding/infilm-branding" },
    { icon: faBuilding, title: "Corporate Branding", description: "Professional corporate brand solutions.", link: "/services/branding/corporate-branding" },
    // Designing
    { icon: faImages, title: "Social Media Creatives", description: "Creative designs for social media.", link: "/services/branding/social-media-creatives" },
    { icon: faImage, title: "Posters", description: "High-quality poster designs.", link: "/services/branding/posters" },
    { icon: faTag, title: "Labeling", description: "Custom product labeling and design.", link: "/services/branding/labeling" },
    { icon: faCalendarAlt, title: "Calendars", description: "Branded calendar design.", link: "/services/branding/calendars" },
    { icon: faFolderOpen, title: "Folders", description: "Corporate folder and stationery design.", link: "/services/branding/folders" },
    { icon: faBook, title: "Diaries", description: "Branded diary and notebook design.", link: "/services/branding/diaries" },
    { icon: faNewspaper, title: "Bulletin", description: "Corporate bulletin and newsletter design.", link: "/services/branding/bulletin" },
    { icon: faBookOpen, title: "Booklets", description: "Informative booklet design.", link: "/services/branding/booklets" },
    { icon: faFileAlt, title: "Catalogue", description: "Professional product catalogue design.", link: "/services/branding/catalogue" },
    { icon: faBook, title: "Brochure", description: "Creative brochure design and layouts.", link: "/services/branding/brochure" },
    { icon: faFileLines, title: "Leaflets", description: "Impactful leaflet design.", link: "/services/branding/leaflets" },
  ],
};

// Generic Branding Detail Page Data (Original fallback)
export const GenericBrandingDetailPageData = {
  SeoName: { seotitle: "branding" },
  coverimage: BrandingCoverImage,
  title: "Branding Solutions",
  subtitle: "Define and design your brand's unique identity with Leor Media.",
  coverImage: { src: BrandingCoverImage, style: { backgroundSize: "cover", backgroundPosition: "center" } },
  section2: { tagline: "Build Your Identity", heading: "Expert Branding Services", description: "We help businesses create a strong and memorable brand presence through strategic design and communication." },
  services: [
    { icon: faCheckCircle, title: "Identity Design", description: "Logos, color palettes, and typography.", details: ["Logo Design", "Brand Guidelines", "Visual Style"], link: "/contactus" },
    { icon: faProjectDiagram, title: "Brand Strategy", description: "Strategic roadmaps for brand success.", details: ["Market Research", "Positioning", "Messaging"], link: "/contactus" },
  ],
  pricing: [{ title: "Branding Pack", price: "Contact Us", features: ["Identity Design", "Strategy Workshop", "Collateral Design", "Digital Integration"], link: "/contactus", highlighted: true }],
  faqs: [{ question: "Why is branding important?", answer: "Branding creates a unique identity that helps you connect with your audience and build long-term trust." }],
};

// Individual Branding Sub-Page Data
export const BrandAuditPageData = {
  SeoName: {
    seotitle: "brand-audit",
  },
  title: "Brand Audit",
  subtitle: "Premium Brand Audit services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Brand Audit Excellence",
    heading: "Enhance Your Brand with Brand Audit",
    description: "Leor Media provides specialized Brand Audit solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Brand Audit Expertise",
      description: "Professional approach to Brand Audit.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Brand Audit important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandStrategyPageData = {
  SeoName: {
    seotitle: "brand-strategy",
  },
  title: "Brand Strategy",
  subtitle: "Premium Brand Strategy services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Brand Strategy Excellence",
    heading: "Enhance Your Brand with Brand Strategy",
    description: "Leor Media provides specialized Brand Strategy solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Brand Strategy Expertise",
      description: "Professional approach to Brand Strategy.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Brand Strategy important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandIdentityPageData = {
  SeoName: {
    seotitle: "brand-identity",
  },
  title: "Brand Identity",
  subtitle: "Premium Brand Identity services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Brand Identity Excellence",
    heading: "Enhance Your Brand with Brand Identity",
    description: "Leor Media provides specialized Brand Identity solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Brand Identity Expertise",
      description: "Professional approach to Brand Identity.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Brand Identity important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandPositioningPageData = {
  SeoName: {
    seotitle: "brand-positioning",
  },
  title: "Brand Positioning",
  subtitle: "Premium Brand Positioning services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Brand Positioning Excellence",
    heading: "Enhance Your Brand with Brand Positioning",
    description: "Leor Media provides specialized Brand Positioning solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Brand Positioning Expertise",
      description: "Professional approach to Brand Positioning.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Brand Positioning important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandActivationsPageData = {
  SeoName: {
    seotitle: "brand-activations",
  },
  title: "Brand Activations",
  subtitle: "Premium Brand Activations services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Brand Activations Excellence",
    heading: "Enhance Your Brand with Brand Activations",
    description: "Leor Media provides specialized Brand Activations solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Brand Activations Expertise",
      description: "Professional approach to Brand Activations.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Brand Activations important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const InfilmBrandingPageData = {
  SeoName: {
    seotitle: "infilm-branding",
  },
  title: "Infilm Branding",
  subtitle: "Premium Infilm Branding services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Infilm Branding Excellence",
    heading: "Enhance Your Brand with Infilm Branding",
    description: "Leor Media provides specialized Infilm Branding solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Infilm Branding Expertise",
      description: "Professional approach to Infilm Branding.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Infilm Branding important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const CorporateBrandingPageData = {
  SeoName: {
    seotitle: "corporate-branding",
  },
  title: "Corporate Branding",
  subtitle: "Premium Corporate Branding services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Corporate Branding Excellence",
    heading: "Enhance Your Brand with Corporate Branding",
    description: "Leor Media provides specialized Corporate Branding solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Corporate Branding Expertise",
      description: "Professional approach to Corporate Branding.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Corporate Branding important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const SocialMediaCreativesPageData = {
  SeoName: {
    seotitle: "social-media-creatives",
  },
  title: "Social Media Creatives",
  subtitle: "Premium Social Media Creatives services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Social Media Creatives Excellence",
    heading: "Enhance Your Brand with Social Media Creatives",
    description: "Leor Media provides specialized Social Media Creatives solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Social Media Creatives Expertise",
      description: "Professional approach to Social Media Creatives.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Social Media Creatives important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const PostersPageData = {
  SeoName: {
    seotitle: "posters",
  },
  title: "Posters",
  subtitle: "Premium Posters services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Posters Excellence",
    heading: "Enhance Your Brand with Posters",
    description: "Leor Media provides specialized Posters solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Posters Expertise",
      description: "Professional approach to Posters.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Posters important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const LabelingPageData = {
  SeoName: {
    seotitle: "labeling",
  },
  title: "Labeling",
  subtitle: "Premium Labeling services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Labeling Excellence",
    heading: "Enhance Your Brand with Labeling",
    description: "Leor Media provides specialized Labeling solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Labeling Expertise",
      description: "Professional approach to Labeling.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Labeling important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const CalendarsPageData = {
  SeoName: {
    seotitle: "calendars",
  },
  title: "Calendars",
  subtitle: "Premium Calendars services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Calendars Excellence",
    heading: "Enhance Your Brand with Calendars",
    description: "Leor Media provides specialized Calendars solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Calendars Expertise",
      description: "Professional approach to Calendars.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Calendars important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const FoldersPageData = {
  SeoName: {
    seotitle: "folders",
  },
  title: "Folders",
  subtitle: "Premium Folders services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Folders Excellence",
    heading: "Enhance Your Brand with Folders",
    description: "Leor Media provides specialized Folders solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Folders Expertise",
      description: "Professional approach to Folders.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Folders important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const DiariesPageData = {
  SeoName: {
    seotitle: "diaries",
  },
  title: "Diaries",
  subtitle: "Premium Diaries services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Diaries Excellence",
    heading: "Enhance Your Brand with Diaries",
    description: "Leor Media provides specialized Diaries solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Diaries Expertise",
      description: "Professional approach to Diaries.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Diaries important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BulletinPageData = {
  SeoName: {
    seotitle: "bulletin",
  },
  title: "Bulletin",
  subtitle: "Premium Bulletin services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Bulletin Excellence",
    heading: "Enhance Your Brand with Bulletin",
    description: "Leor Media provides specialized Bulletin solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Bulletin Expertise",
      description: "Professional approach to Bulletin.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Bulletin important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BookletsPageData = {
  SeoName: {
    seotitle: "booklets",
  },
  title: "Booklets",
  subtitle: "Premium Booklets services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Booklets Excellence",
    heading: "Enhance Your Brand with Booklets",
    description: "Leor Media provides specialized Booklets solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Booklets Expertise",
      description: "Professional approach to Booklets.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Booklets important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const CataloguePageData = {
  SeoName: {
    seotitle: "catalogue",
  },
  title: "Catalogue",
  subtitle: "Premium Catalogue services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Catalogue Excellence",
    heading: "Enhance Your Brand with Catalogue",
    description: "Leor Media provides specialized Catalogue solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Catalogue Expertise",
      description: "Professional approach to Catalogue.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Catalogue important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrochurePageData = {
  SeoName: {
    seotitle: "brochure",
  },
  title: "Brochure",
  subtitle: "Premium Brochure services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Brochure Excellence",
    heading: "Enhance Your Brand with Brochure",
    description: "Leor Media provides specialized Brochure solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Brochure Expertise",
      description: "Professional approach to Brochure.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Brochure important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const LeafletsPageData = {
  SeoName: {
    seotitle: "leaflets",
  },
  title: "Leaflets",
  subtitle: "Premium Leaflets services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline: "Leaflets Excellence",
    heading: "Enhance Your Brand with Leaflets",
    description: "Leor Media provides specialized Leaflets solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Leaflets Expertise",
      description: "Professional approach to Leaflets.",
      details: ["Strategic Analysis", "Creative Execution", "Impact Assessment"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Package",
      price: "Contact Us",
      features: ["Personalized Consultation", "Creative Assets", "Brand Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Why is Leaflets important for my brand?",
      answer: "It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

// Digital Media Marketing Page Data
export const DigitalMarketingCompany = {
  SeoName: { seotitle: "digitalmarketing" },
  coverimage: DigitalMarketingCoverImage,
  title: "Digital Media Marketing in Visakhapatnam | Leor Media",
  subtitle: "Comprehensive digital strategies, media buying, SEO, and creative video content for your brand.",
  coverImage: { src: DigitalMarketingCoverImage, style: { backgroundSize: "cover", backgroundPosition: "center" } },
  section2: {
    tagline: "Digitally Driven Results",
    heading: "Full-Spectrum Digital Media Marketing",
    description: "Leor Media provides cutting-edge digital marketing solutions, from SEO and PPC to advanced video production and multi-channel networking.",
  },
  services: [
    { icon: faBullhorn, title: "Digital Marketing", description: "Core digital marketing services.", link: "/services/digital-media-marketing/digital-marketing" },
    { icon: faLightbulb, title: "Digital Strategy Consulting", description: "Expert consulting for digital growth.", link: "/services/digital-media-marketing/digital-strategy-consulting" },
    { icon: faSearchDollar, title: "Digital Media Buying", description: "Strategic ad space purchasing.", link: "/services/digital-media-marketing/digital-media-buying" },
    { icon: faUsers, title: "Online PR", description: "Digital public relations management.", link: "/services/digital-media-marketing/online-pr" },
    { icon: faHashtag, title: "Social Media & Digital Campaign", description: "Integrated digital campaigns.", link: "/services/digital-media-marketing/social-media-digital-campaign" },
    { icon: faSearch, title: "Search Engine Optimization", description: "Advanced SEO for better rankings.", link: "/services/digital-media-marketing/search-engine-optimization" },
    { icon: faHandHoldingUsd, title: "Affiliate Marketing", description: "Performance-based marketing.", link: "/services/digital-media-marketing/affiliate-marketing" },
    { icon: faUserFriends, title: "Influence Marketing", description: "Leveraging influencers for reach.", link: "/services/digital-media-marketing/influence-marketing" },
    { icon: faMousePointer, title: "PPC", description: "High-ROI Pay-Per-Click ads.", link: "/services/digital-media-marketing/ppc" },
    { icon: faFileLines, title: "Content Marketing", description: "Strategic content creation.", link: "/services/digital-media-marketing/content-marketing" },
    { icon: faShareNodes, title: "Social Media Management", description: "Managing your social presence.", link: "/services/digital-media-marketing/social-media-management" },
    // Video & Creative
    { icon: faPalette, title: "Digital Creative Media", description: "Stunning creative media assets.", link: "/services/digital-media-marketing/digital-creative-media" },
    { icon: faFilm, title: "TVC/AD Film Making", description: "Professional ad film production.", link: "/services/digital-media-marketing/tvc-ad-film-making" },
    { icon: faVideo, title: "Digital Commercials", description: "Engaging digital commercial spots.", link: "/services/digital-media-marketing/digital-commercials" },
    { icon: faGlobe, title: "Web Commercials", description: "Web-optimized commercial ads.", link: "/services/digital-media-marketing/web-commercials" },
    { icon: faFileSignature, title: "Product & Services Explanatory Videos", description: "Informative explainer videos.", link: "/services/digital-media-marketing/product-services-explanatory-videos" },
    { icon: faIdCard, title: "Company Profile Videos", description: "Professional company profile films.", link: "/services/digital-media-marketing/company-profile-videos" },
    { icon: faCommentAlt, title: "Customer Testimonial Videos", description: "Building trust with testimonials.", link: "/services/digital-media-marketing/customer-testimonial-videos" },
    { icon: faBuilding, title: "Company Corporate Film", description: "High-end corporate film production.", link: "/services/digital-media-marketing/company-corporate-film" },
    { icon: faCamera, title: "Product Photo & Videography", description: "Premium product visual content.", link: "/services/digital-media-marketing/product-photo-videography" },
    { icon: faSitemap, title: "Multi-channel Networking", description: "Managing complex digital networks.", link: "/services/digital-media-marketing/multi-channel-networking" },
    { icon: faTv, title: "Youtube Entertainment", description: "Creative YouTube content production.", link: "/services/digital-media-marketing/youtube-entertainment" },
  ],
};

// Individual Digital Media Marketing Sub-Page Data
export const DigitalMarketingPageData = {
  SeoName: {
    seotitle: "digital-marketing",
  },
  title: "Digital Marketing",
  subtitle: "Expert Digital Marketing services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Digital Marketing Solutions",
    heading: "Scale Your Business with Digital Marketing",
    description: "Leor Media provides specialized Digital Marketing strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Digital Marketing Strategy",
      description: "Comprehensive approach to Digital Marketing.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Digital Marketing help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const DigitalStrategyConsultingPageData = {
  SeoName: {
    seotitle: "digital-strategy-consulting",
  },
  title: "Digital Strategy Consulting",
  subtitle: "Expert Digital Strategy Consulting services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Digital Strategy Consulting Solutions",
    heading: "Scale Your Business with Digital Strategy Consulting",
    description: "Leor Media provides specialized Digital Strategy Consulting strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Digital Strategy Consulting Strategy",
      description: "Comprehensive approach to Digital Strategy Consulting.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Digital Strategy Consulting help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};


export const OnlinePrPageData = {
  SeoName: {
    seotitle: "online-pr",
  },
  title: "Online PR",
  subtitle: "Expert Online PR services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Online PR Solutions",
    heading: "Scale Your Business with Online PR",
    description: "Leor Media provides specialized Online PR strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Online PR Strategy",
      description: "Comprehensive approach to Online PR.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Online PR help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const SocialMediaDigitalCampaignPageData = {
  SeoName: {
    seotitle: "social-media-digital-campaign",
  },
  title: "Social Media & Digital Campaign",
  subtitle: "Expert Social Media & Digital Campaign services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Social Media & Digital Campaign Solutions",
    heading: "Scale Your Business with Social Media & Digital Campaign",
    description: "Leor Media provides specialized Social Media & Digital Campaign strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Social Media & Digital Campaign Strategy",
      description: "Comprehensive approach to Social Media & Digital Campaign.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Social Media & Digital Campaign help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const DigitalCreativeMediaPageData = {
  SeoName: {
    seotitle: "digital-creative-media",
  },
  title: "Digital Creative Media",
  subtitle: "Expert Digital Creative Media services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Digital Creative Media Solutions",
    heading: "Scale Your Business with Digital Creative Media",
    description: "Leor Media provides specialized Digital Creative Media strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Digital Creative Media Strategy",
      description: "Comprehensive approach to Digital Creative Media.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Digital Creative Media help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const TvcAdFilmMakingPageData = {
  SeoName: {
    seotitle: "tvc-ad-film-making",
  },
  title: "TVC/AD Film Making",
  subtitle: "Expert TVC/AD Film Making services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "TVC/AD Film Making Solutions",
    heading: "Scale Your Business with TVC/AD Film Making",
    description: "Leor Media provides specialized TVC/AD Film Making strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "TVC/AD Film Making Strategy",
      description: "Comprehensive approach to TVC/AD Film Making.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does TVC/AD Film Making help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const DigitalCommercialsPageData = {
  SeoName: {
    seotitle: "digital-commercials",
  },
  title: "Digital Commercials",
  subtitle: "Expert Digital Commercials services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Digital Commercials Solutions",
    heading: "Scale Your Business with Digital Commercials",
    description: "Leor Media provides specialized Digital Commercials strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Digital Commercials Strategy",
      description: "Comprehensive approach to Digital Commercials.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Digital Commercials help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const WebCommercialsPageData = {
  SeoName: {
    seotitle: "web-commercials",
  },
  title: "Web Commercials",
  subtitle: "Expert Web Commercials services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Web Commercials Solutions",
    heading: "Scale Your Business with Web Commercials",
    description: "Leor Media provides specialized Web Commercials strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Web Commercials Strategy",
      description: "Comprehensive approach to Web Commercials.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Web Commercials help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const ProductServicesExplanatoryVideosPageData = {
  SeoName: {
    seotitle: "product-services-explanatory-videos",
  },
  title: "Product & Services Explanatory Videos",
  subtitle: "Expert Product & Services Explanatory Videos services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Product & Services Explanatory Videos Solutions",
    heading: "Scale Your Business with Product & Services Explanatory Videos",
    description: "Leor Media provides specialized Product & Services Explanatory Videos strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Product & Services Explanatory Videos Strategy",
      description: "Comprehensive approach to Product & Services Explanatory Videos.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Product & Services Explanatory Videos help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const CompanyProfileVideosPageData = {
  SeoName: {
    seotitle: "company-profile-videos",
  },
  title: "Company Profile Videos",
  subtitle: "Expert Company Profile Videos services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Company Profile Videos Solutions",
    heading: "Scale Your Business with Company Profile Videos",
    description: "Leor Media provides specialized Company Profile Videos strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Company Profile Videos Strategy",
      description: "Comprehensive approach to Company Profile Videos.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Company Profile Videos help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const CustomerTestimonialVideosPageData = {
  SeoName: {
    seotitle: "customer-testimonial-videos",
  },
  title: "Customer Testimonial Videos",
  subtitle: "Expert Customer Testimonial Videos services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Customer Testimonial Videos Solutions",
    heading: "Scale Your Business with Customer Testimonial Videos",
    description: "Leor Media provides specialized Customer Testimonial Videos strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Customer Testimonial Videos Strategy",
      description: "Comprehensive approach to Customer Testimonial Videos.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Customer Testimonial Videos help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const CompanyCorporateFilmPageData = {
  SeoName: {
    seotitle: "company-corporate-film",
  },
  title: "Company Corporate Film",
  subtitle: "Expert Company Corporate Film services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Company Corporate Film Solutions",
    heading: "Scale Your Business with Company Corporate Film",
    description: "Leor Media provides specialized Company Corporate Film strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Company Corporate Film Strategy",
      description: "Comprehensive approach to Company Corporate Film.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Company Corporate Film help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const ProductPhotoVideographyPageData = {
  SeoName: {
    seotitle: "product-photo-videography",
  },
  title: "Product Photo & Videography",
  subtitle: "Expert Product Photo & Videography services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Product Photo & Videography Solutions",
    heading: "Scale Your Business with Product Photo & Videography",
    description: "Leor Media provides specialized Product Photo & Videography strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Product Photo & Videography Strategy",
      description: "Comprehensive approach to Product Photo & Videography.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Product Photo & Videography help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const MultiChannelNetworkingPageData = {
  SeoName: {
    seotitle: "multi-channel-networking",
  },
  title: "Multi-channel Networking",
  subtitle: "Expert Multi-channel Networking services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Multi-channel Networking Solutions",
    heading: "Scale Your Business with Multi-channel Networking",
    description: "Leor Media provides specialized Multi-channel Networking strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Multi-channel Networking Strategy",
      description: "Comprehensive approach to Multi-channel Networking.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Multi-channel Networking help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};

export const YoutubeEntertainmentPageData = {
  SeoName: {
    seotitle: "youtube-entertainment",
  },
  title: "Youtube Entertainment",
  subtitle: "Expert Youtube Entertainment services by Leor Media to grow your brand digitally.",
  coverimage: DigitalMarketingCoverImage,
  section2: {
    tagline: "Youtube Entertainment Solutions",
    heading: "Scale Your Business with Youtube Entertainment",
    description: "Leor Media provides specialized Youtube Entertainment strategies to help your brand reach the right audience.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Youtube Entertainment Strategy",
      description: "Comprehensive approach to Youtube Entertainment.",
      details: ["Strategy Development", "Audience Targeting", "Performance Analysis"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Custom Plan",
      price: "Contact Us",
      features: ["Expert Consultation", "Custom Implementation", "Monthly Reporting"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "How does Youtube Entertainment help my business?",
      answer: "It increases visibility, engagement, and conversions in the digital space.",
    },
  ],
};


// Generic Digital Media Marketing Detail Page Data (Original fallback)
export const GenericDigitalMediaMarketingDetailPageData = {
  SeoName: { seotitle: "digitalmarketing" },
  coverimage: DigitalMarketingCoverImage,
  title: "Digital Media Marketing",
  subtitle: "Strategic digital solutions to scale your business online.",
  coverImage: { src: DigitalMarketingCoverImage, style: { backgroundSize: "cover", backgroundPosition: "center" } },
  section2: { tagline: "Grow Your Online Presence", heading: "Expert Digital Marketing Services", description: "We leverage data, technology, and creativity to drive measurable results for your brand in the digital landscape." },
  services: [
    { icon: faSearch, title: "SEO & Growth", description: "Improve visibility and organic traffic.", details: ["Keyword Research", "On-Page SEO", "Link Building"], link: "/contactus" },
    { icon: faBullhorn, title: "Digital Ads", description: "Scale faster with targeted advertising.", details: ["Google Ads", "Social Media Ads", "Performance Tracking"], link: "/contactus" },
  ],
  pricing: [{ title: "Growth Pack", price: "Contact Us", features: ["SEO Management", "Social Media Ads", "Content Creation", "Monthly Reports"], link: "/contactus", highlighted: true }],
  faqs: [{ question: "How long does SEO take to show results?", answer: "Typically, SEO takes 3-6 months to show significant results, but it provides long-term sustainable growth." }],
};


// Generic Wedding Planner Detail Page Data (used for all sub-services for now)
// Individual Wedding Planner Sub-Page Data
export const DestinationWeddingData = {
  SeoName: {
    seotitle: "destination-wedding",
  },
  title: "Destination Wedding Arrangements & Planning",
  subtitle: "Exquisite Destination Wedding Arrangements & Planning services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Destination Wedding Arrangements & Planning?",
    heading: "Make Your Destination Wedding Arrangements & Planning Memorable.",
    description: "Leor Media provides premium Destination Wedding Arrangements & Planning services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Destination Wedding Arrangements & Planning.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Destination Wedding Arrangements & Planning?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const RingCeremonyData = {
  SeoName: {
    seotitle: "ring-ceremony",
  },
  title: "Ring Ceremony (Engagements)",
  subtitle: "Exquisite Ring Ceremony (Engagements) services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Ring Ceremony (Engagements)?",
    heading: "Make Your Ring Ceremony (Engagements) Memorable.",
    description: "Leor Media provides premium Ring Ceremony (Engagements) services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Ring Ceremony (Engagements).",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Ring Ceremony (Engagements)?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const WeddingPlannersData = {
  SeoName: {
    seotitle: "wedding-planners",
  },
  title: "Wedding Planners",
  subtitle: "Exquisite Wedding Planners services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Wedding Planners?",
    heading: "Make Your Wedding Planners Memorable.",
    description: "Leor Media provides premium Wedding Planners services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Wedding Planners.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Wedding Planners?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const ReceptionsData = {
  SeoName: {
    seotitle: "receptions",
  },
  title: "Receptions",
  subtitle: "Exquisite Receptions services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Receptions?",
    heading: "Make Your Receptions Memorable.",
    description: "Leor Media provides premium Receptions services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Receptions.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Receptions?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const MehendiData = {
  SeoName: {
    seotitle: "mehendi",
  },
  title: "Mehendi",
  subtitle: "Exquisite Mehendi services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Mehendi?",
    heading: "Make Your Mehendi Memorable.",
    description: "Leor Media provides premium Mehendi services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Mehendi.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Mehendi?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const SangeetData = {
  SeoName: {
    seotitle: "sangeet",
  },
  title: "Sangeet",
  subtitle: "Exquisite Sangeet services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Sangeet?",
    heading: "Make Your Sangeet Memorable.",
    description: "Leor Media provides premium Sangeet services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Sangeet.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Sangeet?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const EntertainmentAndArtistsData = {
  SeoName: {
    seotitle: "entertainment-and-artists",
  },
  title: "Entertainment & Artists",
  subtitle: "Exquisite Entertainment & Artists services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Entertainment & Artists?",
    heading: "Make Your Entertainment & Artists Memorable.",
    description: "Leor Media provides premium Entertainment & Artists services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Entertainment & Artists.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Entertainment & Artists?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const HospitalityData = {
  SeoName: {
    seotitle: "hospitality",
  },
  title: "Hospitality",
  subtitle: "Exquisite Hospitality services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Hospitality?",
    heading: "Make Your Hospitality Memorable.",
    description: "Leor Media provides premium Hospitality services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Hospitality.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Hospitality?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const GuestManagementData = {
  SeoName: {
    seotitle: "guest-management",
  },
  title: "Guest Management",
  subtitle: "Exquisite Guest Management services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Guest Management?",
    heading: "Make Your Guest Management Memorable.",
    description: "Leor Media provides premium Guest Management services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Guest Management.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Guest Management?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const PhotographyAndVideographyData = {
  SeoName: {
    seotitle: "photography-and-videography",
  },
  title: "Photography & Videography",
  subtitle: "Exquisite Photography & Videography services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Photography & Videography?",
    heading: "Make Your Photography & Videography Memorable.",
    description: "Leor Media provides premium Photography & Videography services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Photography & Videography.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Photography & Videography?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const ThemeDecorsData = {
  SeoName: {
    seotitle: "theme-decors",
  },
  title: "Theme Decors",
  subtitle: "Exquisite Theme Decors services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Theme Decors?",
    heading: "Make Your Theme Decors Memorable.",
    description: "Leor Media provides premium Theme Decors services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Theme Decors.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Theme Decors?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const BirthdayPartiesData = {
  SeoName: {
    seotitle: "birthday-parties",
  },
  title: "Birthday Parties",
  subtitle: "Exquisite Birthday Parties services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Birthday Parties?",
    heading: "Make Your Birthday Parties Memorable.",
    description: "Leor Media provides premium Birthday Parties services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Birthday Parties.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Birthday Parties?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const PersonalCelebrationsData = {
  SeoName: {
    seotitle: "personal-celebrations",
  },
  title: "Personal Celebrations",
  subtitle: "Exquisite Personal Celebrations services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Personal Celebrations?",
    heading: "Make Your Personal Celebrations Memorable.",
    description: "Leor Media provides premium Personal Celebrations services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Personal Celebrations.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Personal Celebrations?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const CulturalEventsData = {
  SeoName: {
    seotitle: "cultural-events",
  },
  title: "Cultural Events",
  subtitle: "Exquisite Cultural Events services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Cultural Events?",
    heading: "Make Your Cultural Events Memorable.",
    description: "Leor Media provides premium Cultural Events services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Cultural Events.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Cultural Events?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const ProductLaunchesData = {
  SeoName: {
    seotitle: "product-launches",
  },
  title: "Product Launches",
  subtitle: "Exquisite Product Launches services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Product Launches?",
    heading: "Make Your Product Launches Memorable.",
    description: "Leor Media provides premium Product Launches services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Product Launches.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Product Launches?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const ConcertAndGigsData = {
  SeoName: {
    seotitle: "concert-and-gigs",
  },
  title: "Concert & Gigs",
  subtitle: "Exquisite Concert & Gigs services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Concert & Gigs?",
    heading: "Make Your Concert & Gigs Memorable.",
    description: "Leor Media provides premium Concert & Gigs services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Concert & Gigs.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Concert & Gigs?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const ProtocolEventsData = {
  SeoName: {
    seotitle: "protocol-events",
  },
  title: "Protocol Events",
  subtitle: "Exquisite Protocol Events services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Protocol Events?",
    heading: "Make Your Protocol Events Memorable.",
    description: "Leor Media provides premium Protocol Events services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Protocol Events.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Protocol Events?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const FashionShowsData = {
  SeoName: {
    seotitle: "fashion-shows",
  },
  title: "Fashion Shows",
  subtitle: "Exquisite Fashion Shows services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Fashion Shows?",
    heading: "Make Your Fashion Shows Memorable.",
    description: "Leor Media provides premium Fashion Shows services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Fashion Shows.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Fashion Shows?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const AwardNightsData = {
  SeoName: {
    seotitle: "award-nights",
  },
  title: "Award Nights",
  subtitle: "Exquisite Award Nights services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Award Nights?",
    heading: "Make Your Award Nights Memorable.",
    description: "Leor Media provides premium Award Nights services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Award Nights.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Award Nights?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const CarnivalsData = {
  SeoName: {
    seotitle: "carnivals",
  },
  title: "Carnivals",
  subtitle: "Exquisite Carnivals services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Carnivals?",
    heading: "Make Your Carnivals Memorable.",
    description: "Leor Media provides premium Carnivals services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Carnivals.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Carnivals?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const BrandPromotionalEventsData = {
  SeoName: {
    seotitle: "brand-promotional-events",
  },
  title: "Brand Promotional Events",
  subtitle: "Exquisite Brand Promotional Events services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Brand Promotional Events?",
    heading: "Make Your Brand Promotional Events Memorable.",
    description: "Leor Media provides premium Brand Promotional Events services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Brand Promotional Events.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Brand Promotional Events?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const CelebArtistManagementData = {
  SeoName: {
    seotitle: "celeb-artist-management",
  },
  title: "Celeb/Artist Management",
  subtitle: "Exquisite Celeb/Artist Management services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Celeb/Artist Management?",
    heading: "Make Your Celeb/Artist Management Memorable.",
    description: "Leor Media provides premium Celeb/Artist Management services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Celeb/Artist Management.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Celeb/Artist Management?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const CorporateSeminarsData = {
  SeoName: {
    seotitle: "corporate-seminars",
  },
  title: "Corporate Seminars & Work Shops",
  subtitle: "Exquisite Corporate Seminars & Work Shops services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Corporate Seminars & Work Shops?",
    heading: "Make Your Corporate Seminars & Work Shops Memorable.",
    description: "Leor Media provides premium Corporate Seminars & Work Shops services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Corporate Seminars & Work Shops.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Corporate Seminars & Work Shops?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};

export const ExhibitionsData = {
  SeoName: {
    seotitle: "exhibitions",
  },
  title: "Exhibitions",
  subtitle: "Exquisite Exhibitions services by Leor Media in Visakhapatnam.",
  coverimage: WeddingCoverImage,
  section2: {
    tagline: "Planning Exhibitions?",
    heading: "Make Your Exhibitions Memorable.",
    description: "Leor Media provides premium Exhibitions services tailored to your needs.",
  },
  services: [
    {
      icon: faCheckCircle,
      title: "Full Planning",
      description: "Complete management of your Exhibitions.",
      details: ["Concept Design", "Vendor Management", "Execution"],
      link: "/contactus",
    },
  ],
  pricing: [
    {
      title: "Standard",
      price: "Contact Us",
      features: ["Consultation", "Coordination", "Support"],
      link: "/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question: "Do you handle all aspects of Exhibitions?",
      answer: "Yes, we provide end-to-end solutions for your event.",
    },
  ],
};


// Generic Wedding Planner Detail Page Data (Original fallback)
export const GenericWeddingPlannersDetailPageData = {
  SeoName: {
    seotitle: "weddingPlanners",
  },
  section2: {
    tagline: "Planning a special event?",
    heading: "Let Us Make Your Event Extraordinary.",
    description:
      "At Leor Media, we understand that every event is unique. Our expert planners work closely with you to design and execute an experience that exceeds your expectations, right here in Visakhapatnam.",
  },

  services: [
    {
      icon: faCheckCircle,
      title: "Full-Service Planning",
      description: "From venue selection to vendor management.",
      details: [
        "Conceptualization & Theme Design",
        "Venue Sourcing & Catering Coordination",
        "Guest List Management & Invitations",
      ],
      link: "/contactus",
    },
    {
      icon: faPalette,
      title: "Decor & Atmosphere",
      description: "Stunning visuals tailored to your theme.",
      details: [
        "Floral & Lighting Design",
        "Stage & Audio-Visual Setup",
        "Themed Decorations & Branding",
      ],
      link: "/contactus",
    },
    {
      icon: faUsers,
      title: "On-Site Management",
      description: "Smooth execution on the day of the event.",
      details: [
        "Timely Setup & Coordination",
        "Crowd Management & Guest Assistance",
        "Troubleshooting & Vendor Supervision",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Planning",
      price: "Contact Us",
      features: [
        "Initial Consultation",
        "Venue Recommendations",
        "Vendor Coordination",
        "On-Day Basics",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Premium Execution",
      price: "Contact Us",
      features: [
        "Full Event Management",
        "Custom Decor & Theme",
        "Guest Management",
        "Photography & Video",
      ],
      link: "/contactus",
      highlighted: true,
    },
  ],

  coverimage: WeddingPlannersCoverimage,
  title: "Event Planning Services",
  subtitle: "Turning your special moments into lifelong memories with professional planning and flawless execution.",
  coverImage: {
    src: WeddingPlannersCoverimage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "How early should I book my event?",
      answer: "We recommend booking at least 1-3 months in advance depending on the scale of the event to ensure venue and vendor availability.",
    },
    {
      question: "Do you handle events outside Visakhapatnam?",
      answer: "While we primarily serve Vizag, we can handle regional events across Andhra Pradesh with prior discussion.",
    },
    {
      question: "Can you work within my budget?",
      answer: "Yes, we offer flexible planning services that can be tailored to suit various budgets without compromising on quality.",
    },
  ],
};



//digitalmarketing

export const SearchEngineOptimizationPageDetails = {
  SeoName: {
    seotitle: "search-engine-optimization",
  },
  title: "Search Engine Optimization (SEO) Services",
  subtitle:
    "Boost your website's visibility, rankings, and traffic with our expert SEO strategies tailored for long-term digital growth.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Dominate Search Engine Rankings",
    heading: "SEO Services to Drive Organic Traffic & Leads",
    description:
      "Leor Media offers data-driven SEO services designed to increase your website’s organic visibility, improve keyword rankings, and grow your qualified traffic consistently.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Technical SEO Audit & Fixes",
      description: "Optimize site structure, speed, and crawlability.",
      details: [
        "Site Health & Crawl Report",
        "Speed & Core Web Vitals Fixes",
        "Mobile-Friendliness & Indexing",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Keyword Research & Mapping",
      description: "Identify profitable keywords aligned with your business.",
      details: [
        "Short & Long-Tail Keywords",
        "Competitor Keyword Analysis",
        "Keyword-to-Page Strategy",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "On-Page SEO Optimization",
      description: "Improve meta tags, content, images, and internal links.",
      details: [
        "Title, Meta Description, H1-H6",
        "Content Optimization & Keyword Density",
        "Schema Markup Integration",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Link Building & Outreach",
      description: "Build high-quality backlinks to boost authority.",
      details: [
        "Guest Posts & Blogger Outreach",
        "Niche Directory Submissions",
        "DA/DR-Based Link Building",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Local SEO Optimization",
      description: "Rank higher in local map packs and city-based searches.",
      details: [
        "Google Business Profile Optimization",
        "NAP Consistency & Local Citations",
        "Location-Specific Pages",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Monthly SEO Reporting & Tracking",
      description: "Transparent reporting and KPIs tracking.",
      details: [
        "Keyword Rank Tracking",
        "Traffic & Conversion Reports",
        "Ongoing Recommendations",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter SEO Plan",
      price: "",
      features: [
        "5 Keywords",
        "On-Page Optimization",
        "Monthly Reporting",
        "Technical Audit",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth SEO Plan",
      price: "",
      features: [
        "15 Keywords",
        "Backlinks & Outreach",
        "Local SEO",
        "Monthly Reports + Strategy",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise SEO",
      price: "",
      features: [
        "30+ Keywords",
        "Full SEO Suite + Custom Strategy",
        "Conversion Tracking",
        "Dedicated SEO Expert",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term strategy. Most clients see noticeable improvements in 3 to 6 months depending on competition and goals.",
    },
    {
      question: "Do you guarantee top rankings?",
      answer:
        "We don’t promise guaranteed #1 positions, but we commit to ethical strategies that improve visibility and rankings steadily.",
    },
    {
      question: "Will you provide reports?",
      answer:
        "Yes, we offer monthly performance reports including keyword rankings, traffic, and recommendations.",
    },
    {
      question: "Is local SEO included?",
      answer:
        "Yes. Our plans include Google Business Profile optimization, citation building, and location-based content.",
    },
    {
      question: "Can you optimize my existing website?",
      answer:
        "Absolutely. We can perform an audit and implement fixes on your current site or work with your developer.",
    },
    {
      question: "Do you use AI tools or manual SEO?",
      answer:
        "We blend automation and AI tools with manual strategies to deliver efficient and effective SEO results.",
    },
  ],
};
export const ContentMarketingPageDetails = {
  SeoName: {
    seotitle: "content-marketing",
  },
  title: "Content Marketing Services",
  subtitle:
    "Drive engagement, build authority, and convert leads through powerful and strategic content marketing campaigns.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Fuel Your Growth with Content",
    heading: "Strategic Content Marketing for Brand Awareness & Conversions",
    description:
      "Leor Media crafts content that educates, entertains, and converts. From blogs to ebooks and social posts, we help brands tell their story and drive measurable results.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Content Strategy & Planning",
      description:
        "Build a roadmap for content that aligns with your business goals.",
      details: [
        "Content Calendar Creation",
        "Audience Persona Development",
        "Keyword & Topic Mapping",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Blog & Article Writing",
      description:
        "SEO-optimized blogs to boost organic traffic and brand visibility.",
      details: [
        "Industry Research & Copywriting",
        "Keyword-Rich & Engaging Content",
        "Internal Linking & On-Page SEO",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Social Media Content Creation",
      description:
        "Visual and written content tailored for your audience and platform.",
      details: [
        "Post Captions, Reels Scripts",
        "Carousel Designs, Infographics",
        "Hashtag & Engagement Strategy",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Video Script Writing & Planning",
      description:
        "Scripts that convert for YouTube, explainer videos, and ads.",
      details: [
        "Storyboarding & Hook Strategy",
        "Shorts & Long-Form Video Scripts",
        "SEO-Optimized Video Descriptions",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Email & Newsletter Copywriting",
      description: "Persuasive copy that nurtures leads and encourages action.",
      details: [
        "Cold Outreach Emails",
        "Drip Campaigns & Product Launches",
        "CTR & Open Rate Optimization",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "eBooks, Whitepapers & Lead Magnets",
      description: "In-depth, value-driven content for lead generation.",
      details: [
        "Design + Copy + CTA Integration",
        "Gated Content Strategy",
        "Multi-Format (PDF, Web, Email)",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Content Pack",
      price: "",
      features: [
        "4 Blog Posts",
        "2 Social Media Captions Weekly",
        "Basic SEO Optimization",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Content Pack",
      price: "",
      features: [
        "8 Blog Posts + 2 Video Scripts",
        "3 Social Posts/Week",
        "Email Newsletter Copy",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Content Suite",
      price: "",
      features: [
        "15+ Content Assets/Month",
        "Strategy + Distribution",
        "Lead Magnet Creation",
        "Monthly Analytics Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Why is content marketing important?",
      answer:
        "Content builds trust with your audience, drives SEO performance, and helps convert visitors into customers.",
    },
    {
      question: "How do you decide what content to create?",
      answer:
        "We analyze your goals, audience, and competitors to create a content plan that matches your objectives.",
    },
    {
      question: "Do you provide visual design for content?",
      answer:
        "Yes. We include graphic design, layout, and formatting for social content, lead magnets, and more.",
    },
    {
      question: "Can you help with content distribution?",
      answer:
        "Absolutely. We can publish, schedule, and promote content across your blog, social media, and email.",
    },
    {
      question: "Is content optimized for SEO?",
      answer:
        "Yes. Every blog or article we write is optimized for target keywords, meta tags, readability, and internal linking.",
    },
    {
      question: "Can I review and approve content before publishing?",
      answer:
        "Yes. You’ll have full visibility and approval control before anything goes live.",
    },
  ],
};
export const SocialMediaMarketingPageDetails = {
  SeoName: {
    seotitle: "social-media-management",
  },
  title: "Social Media Marketing Services",
  subtitle:
    "Build your brand and connect with your audience across major social platforms with creative, data-driven social media marketing.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Be Where Your Customers Are",
    heading: "Social Media Campaigns That Convert & Engage",
    description:
      "Leor Media helps your brand grow on platforms like Instagram, Facebook, LinkedIn, Twitter, and YouTube through content strategy, ad campaigns, influencer collaborations, and more.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Social Media Strategy & Planning",
      description: "Custom plans aligned with your goals and audience.",
      details: [
        "Platform Selection (IG, FB, LinkedIn, etc.)",
        "Content Buckets & Scheduling",
        "Engagement & Community Building Plan",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Creative Content Creation",
      description: "Captions, creatives, reels, carousels & more.",
      details: [
        "Branded Visual Designs",
        "Trending Reels & Shorts",
        "Platform-Specific Formats",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Paid Ad Campaigns",
      description: "Drive traffic, leads, and sales via social advertising.",
      details: [
        "Meta Ads (FB/IG) Setup",
        "A/B Testing & Audience Targeting",
        "Budget Optimization & ROI Reports",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Influencer Marketing",
      description: "Leverage influencers to build credibility and reach.",
      details: [
        "Influencer Identification & Outreach",
        "Campaign Coordination",
        "Performance Tracking",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Social Listening & Monitoring",
      description: "Track conversations, sentiment, and engagement trends.",
      details: [
        "Hashtag Tracking",
        "Comment & DM Monitoring",
        "Competitor Activity Alerts",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Analytics & Monthly Reporting",
      description: "Measure impact and continuously improve.",
      details: [
        "Post Performance & Follower Growth",
        "Engagement Rate Analysis",
        "Ad Spend ROI & Suggestions",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Social Pack",
      price: "",
      features: [
        "2 Platforms (IG + FB)",
        "8 Posts/Month",
        "Basic Strategy & Hashtags",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Social Plan",
      price: "",
      features: [
        "3 Platforms (IG, FB, LinkedIn)",
        "15+ Content Pieces",
        "1 Reel/Week + Ad Setup",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Complete Brand Suite",
      price: "",
      features: [
        "Full Channel Management",
        "Influencer Collab Support",
        "Monthly Analytics + Strategy Call",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Which platforms do you manage?",
      answer:
        "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter, and Pinterest based on your goals.",
    },
    {
      question: "Do you create both content and run ads?",
      answer:
        "Yes. We create content (visuals, captions, reels) and run paid ad campaigns with full reporting.",
    },
    {
      question: "How often will you post for my brand?",
      answer:
        "Posting frequency depends on the selected plan—typically 2–4 times per week with story content too.",
    },
    {
      question: "Will I be able to approve content before publishing?",
      answer:
        "Yes. You will receive a monthly content calendar in advance for review and approval.",
    },
    {
      question: "Can you help with Instagram Reels?",
      answer:
        "Absolutely. We handle reel scripting, editing, thumbnail design, and optimization.",
    },
    {
      question: "Do you offer customer engagement?",
      answer:
        "Yes. We can help manage DMs, reply to comments, and keep engagement active for your community.",
    },
  ],
};
export const PayPerClickAdvertisingPageDetails = {
  SeoName: {
    seotitle: "ppc",
  },
  title: "Pay-Per-Click (PPC) Advertising Services",
  subtitle:
    "Maximize your visibility and ROI with precisely targeted, conversion-focused paid ads.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Instant Visibility, Measurable Results",
    heading: "Strategic PPC Campaigns That Drive Quality Traffic",
    description:
      "Leor Media crafts and manages high-performance PPC campaigns across Google, Meta, LinkedIn, and more — designed to deliver leads, conversions, and real business outcomes.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Google Search & Display Ads",
      description: "Run keyword and banner ads across Google network.",
      details: [
        "Keyword Research & Match Types",
        "Ad Copy Creation",
        "Geo & Device Targeting",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Social Media Ads (Meta, Instagram, LinkedIn)",
      description: "Paid ads on major platforms to reach targeted audiences.",
      details: [
        "Audience Segmentation",
        "Creative Design & Messaging",
        "Lead Generation & Retargeting",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Landing Page Optimization",
      description: "Custom pages that convert clicks into actions.",
      details: ["Design & Copywriting", "Form Integrations", "A/B Testing"],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Campaign Setup & Management",
      description: "End-to-end campaign creation and optimization.",
      details: [
        "Campaign Structuring",
        "Budget Allocation",
        "Performance Tracking",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Retargeting & Remarketing Ads",
      description: "Bring back lost visitors and abandoned carts.",
      details: [
        "Dynamic Retargeting Setup",
        "Custom Audience Building",
        "Conversion Funnel Mapping",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Ad Spend ROI Analysis & Reporting",
      description: "Track ROI and optimize with data.",
      details: [
        "Cost Per Click (CPC) & Acquisition (CPA)",
        "Click-Through & Conversion Rate Reports",
        "Real-Time Analytics Dashboards",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter PPC Plan",
      price: "",
      features: [
        "Google Search or Facebook Ads",
        "Ad Copy + Setup",
        "Weekly Performance Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Advertising Plan",
      price: "",
      features: [
        "Google + Social Ads Combo",
        "Retargeting + Landing Page Support",
        "Conversion Tracking + A/B Testing",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise PPC Suite",
      price: "",
      features: [
        "Multi-Platform Campaigns",
        "Advanced Funnel + Budget Strategy",
        "Real-Time Reports + Dedicated Manager",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Which platforms do you run PPC ads on?",
      answer:
        "We run campaigns on Google Search & Display, YouTube, Facebook, Instagram, LinkedIn, Twitter, and others based on your goals.",
    },
    {
      question: "Do you help with ad creatives and copywriting?",
      answer:
        "Yes. We create compelling ad copy, visuals, and CTAs tailored to each platform and audience segment.",
    },
    {
      question: "Can I track how much each lead costs?",
      answer:
        "Absolutely. We provide detailed ROI reporting including CPC, CPA, impressions, CTR, and conversion tracking.",
    },
    {
      question: "How much should I spend on PPC?",
      answer:
        "We help define budgets based on your industry, goals, and keyword competition — and optimize spend for best results.",
    },
    {
      question: "Do you set up remarketing campaigns?",
      answer:
        "Yes. We build custom remarketing lists and run dynamic retargeting ads to re-engage past visitors.",
    },
    {
      question: "Can you manage both Google and Meta ads together?",
      answer:
        "Yes. Our team can manage integrated campaigns across Google Ads, Meta Ads, and other channels for a unified strategy.",
    },
  ],
};
export const AffiliateMarketingPageDetails = {
  SeoName: {
    seotitle: "affiliate-marketing",
  },
  title: "Affiliate Marketing Services",
  subtitle:
    "Leverage a powerful network of publishers and influencers to drive results through performance-based marketing.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Grow Through Strategic Partnerships",
    heading: "Performance-Driven Affiliate Marketing Solutions",
    description:
      "Leor Media helps you build, manage, and scale affiliate programs that generate measurable leads and sales while maintaining full control over costs and brand representation.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Affiliate Program Setup",
      description: "Design and launch a scalable affiliate system.",
      details: [
        "Commission Structure Planning",
        "Terms, Policies, and Guidelines",
        "Affiliate Signup and Tracking Setup",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Affiliate Network Management",
      description: "Connect with trusted affiliate platforms and networks.",
      details: [
        "Integration with ShareASale, CJ, Impact, etc.",
        "Partner Vetting & Onboarding",
        "Marketplace Listing & Outreach",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Tracking & Reporting Infrastructure",
      description: "Monitor conversions, clicks, and partner performance.",
      details: [
        "UTM + Pixel-Based Tracking",
        "Real-Time Analytics Dashboard",
        "Commission Reconciliation & Fraud Detection",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Publisher & Influencer Recruitment",
      description: "Grow your affiliate network with niche-specific partners.",
      details: [
        "Content & Coupon Affiliates",
        "Bloggers & YouTubers",
        "B2B Referrals & Micro-Influencers",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Campaign & Offer Management",
      description:
        "Promote seasonal deals and product launches via affiliates.",
      details: [
        "Limited-Time Offers & Discounts",
        "Referral Bonuses",
        "Cross-Promotion Campaigns",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Affiliate Program Optimization",
      description: "Maximize ROI by improving partner performance.",
      details: [
        "Commission Tiering",
        "Inactive Affiliate Cleanup",
        "Performance-Based Rewards",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Affiliate Setup",
      price: "",
      features: [
        "Affiliate Program Design",
        "Commission Model Setup",
        "Signup Page + Basic Tracking",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Affiliate Management",
      price: "",
      features: [
        "Platform Integration",
        "Partner Recruitment",
        "Performance Reporting",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Affiliate Suite",
      price: "",
      features: [
        "Full Funnel Attribution",
        "Custom Dashboards + Fraud Control",
        "Dedicated Program Manager",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is affiliate marketing and how does it work?",
      answer:
        "Affiliate marketing is a performance-based channel where you reward third-party partners (affiliates) for driving traffic or sales to your website.",
    },
    {
      question: "Can you help us set up our own affiliate program?",
      answer:
        "Yes. We build custom affiliate programs from scratch or integrate with networks like CJ, ShareASale, or Impact.",
    },
    {
      question: "How are affiliates tracked?",
      answer:
        "We use tracking platforms, cookies, UTM parameters, and pixels to ensure accurate lead/sale attribution per affiliate.",
    },
    {
      question: "Do you also handle affiliate payouts?",
      answer:
        "We can help you set up automated or manual payout systems, and provide support for reconciliation and fraud monitoring.",
    },
    {
      question: "What types of affiliates can you recruit?",
      answer:
        "We recruit coupon sites, content creators, niche bloggers, review platforms, influencers, and more — based on your product niche.",
    },
    {
      question: "Is affiliate marketing cost-effective?",
      answer:
        "Yes. Since you only pay for actual performance (clicks, leads, or sales), affiliate marketing is often highly ROI-positive.",
    },
  ],
};
export const InfluencerMarketingPageDetails = {
  SeoName: {
    seotitle: "influence-marketing",
  },
  title: "Influencer Marketing Services",
  subtitle:
    "Boost your brand’s reach and credibility through authentic partnerships with top influencers across Instagram, YouTube, and more.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Influence that Converts",
    heading: "Partner with Influencers Who Match Your Brand’s Voice",
    description:
      "At Leor Media, we connect you with influencers who resonate with your target audience. Our full-service influencer marketing strategy delivers real engagement, brand trust, and measurable conversions.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Instagram Influencer Campaigns",
      description:
        "Tap into highly engaged audiences with story and reel campaigns.",
      details: [
        "Niche-Based Creator Matching",
        "Story, Reel & Post Promotion",
        "Follower Quality & Engagement Analysis",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "YouTube Influencer Collaborations",
      description: "Leverage long-form content for product demos and reviews.",
      details: [
        "Product Placements & Unboxings",
        "Sponsored Video Integration",
        "Channel Category Alignment",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Micro & Nano Influencer Campaigns",
      description: "High-trust engagement from smaller, more focused creators.",
      details: [
        "Cost-Effective, Hyperlocal Reach",
        "Regional Language Support",
        "Multi-Creator Coordination",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Influencer Whitelisting & Ads",
      description:
        "Run paid ads using influencer handles for more credibility.",
      details: [
        "Facebook & Instagram Ads via Influencer Profiles",
        "Higher CTR & Lower CPC",
        "Performance-Based Amplification",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Influencer Gifting & Barter",
      description: "Low-budget brand awareness via barter deals.",
      details: [
        "Product Sampling Campaigns",
        "Story Mentions in Exchange for Gifts",
        "Suitable for D2C & Startups",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "End-to-End Influencer Management",
      description: "We handle everything — from scouting to reporting.",
      details: [
        "Influencer Discovery & Onboarding",
        "Briefing, Coordination & Posting",
        "ROI Tracking & Campaign Reports",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Creator Package",
      price: "",
      features: [
        "1 Instagram Story + Post",
        "Micro/Nano Influencer",
        "Brand Tag & CTA Included",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Multi-Creator Boost Plan",
      price: "",
      features: [
        "Up to 5 Micro Influencers",
        "Platform Mix (IG + YouTube)",
        "Performance Report & Tracking",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Influencer Activation",
      price: "",
      features: [
        "High-Reach Influencers (100k+)",
        "Product Demo/Review Video",
        "Paid Ad Whitelisting Included",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "How do you select the right influencers for my brand?",
      answer:
        "We analyze your target audience, industry, and campaign goals to shortlist influencers with the right follower base, engagement rate, and content style.",
    },
    {
      question: "Do you work with influencers across India?",
      answer:
        "Yes. We work with creators across all major Indian languages and regions, including metro, Tier 1, and Tier 2 audiences.",
    },
    {
      question: "Is influencer marketing measurable?",
      answer:
        "Absolutely. We provide insights on reach, impressions, link clicks, and conversions wherever possible using tracking tools and influencer reports.",
    },
    {
      question: "Can I run influencer ads from their profiles?",
      answer:
        "Yes. We support influencer whitelisting, which allows us to run paid ads using their verified accounts — enhancing ad trust and performance.",
    },
    {
      question: "What platforms do you cover?",
      answer:
        "We support Instagram, YouTube, Facebook, and emerging platforms like Moj and Josh based on your audience.",
    },
    {
      question: "Can you manage the campaign from start to finish?",
      answer:
        "Yes, we offer full-service influencer campaign management including contracts, creative briefs, timelines, coordination, posting, and reporting.",
    },
  ],
};


export const WeddingPlannersDetailPageData = {
  "destination-wedding": DestinationWeddingData,
  "ring-ceremony": RingCeremonyData,
  "wedding-planners": WeddingPlannersData,
  "receptions": ReceptionsData,
  "mehendi": MehendiData,
  "sangeet": SangeetData,
  "entertainment-and-artists": EntertainmentAndArtistsData,
  "hospitality": HospitalityData,
  "guest-management": GuestManagementData,
  "photography-and-videography": PhotographyAndVideographyData,
  "theme-decors": ThemeDecorsData,
  "birthday-parties": BirthdayPartiesData,
  "personal-celebrations": PersonalCelebrationsData,
  "cultural-events": CulturalEventsData,
  "product-launches": ProductLaunchesData,
  "concert-and-gigs": ConcertAndGigsData,
  "protocol-events": ProtocolEventsData,
  "fashion-shows": FashionShowsData,
  "award-nights": AwardNightsData,
  "carnivals": CarnivalsData,
  "brand-promotional-events": BrandPromotionalEventsData,
  "celeb-artist-management": CelebArtistManagementData,
  "corporate-seminars": CorporateSeminarsData,
  "exhibitions": ExhibitionsData,
};

export const DigitalMediaMarketingDetailPageData = {
  "digital-marketing": DigitalMarketingPageData,
  "digital-strategy-consulting": DigitalStrategyConsultingPageData,
  "digital-media-buying": DigitalMediaBuyingPageData,
  "online-pr": OnlinePrPageData,
  "social-media-digital-campaign": SocialMediaDigitalCampaignPageData,
  "search-engine-optimization": SearchEngineOptimizationPageDetails,
  "affiliate-marketing": AffiliateMarketingPageDetails,
  "influence-marketing": InfluencerMarketingPageDetails,
  "ppc": PayPerClickAdvertisingPageDetails,
  "content-marketing": ContentMarketingPageDetails,
  "social-media-management": SocialMediaMarketingPageDetails,
  "digital-creative-media": DigitalCreativeMediaPageData,
  "tvc-ad-film-making": TvcAdFilmMakingPageData,
  "digital-commercials": DigitalCommercialsPageData,
  "web-commercials": WebCommercialsPageData,
  "product-services-explanatory-videos": ProductServicesExplanatoryVideosPageData,
  "company-profile-videos": CompanyProfileVideosPageData,
  "customer-testimonial-videos": CustomerTestimonialVideosPageData,
  "company-corporate-film": CompanyCorporateFilmPageData,
  "product-photo-videography": ProductPhotoVideographyPageData,
  "multi-channel-networking": MultiChannelNetworkingPageData,
  "youtube-entertainment": YoutubeEntertainmentPageData,
};

export const BrandingDetailPageData = {
  "brand-audit": BrandAuditPageData,
  "brand-strategy": BrandStrategyPageData,
  "brand-identity": BrandIdentityPageData,
  "brand-positioning": BrandPositioningPageData,
  "brand-activations": BrandActivationsPageData,
  "infilm-branding": InfilmBrandingPageData,
  "corporate-branding": CorporateBrandingPageData,
  "social-media-creatives": SocialMediaCreativesPageData,
  "posters": PostersPageData,
  "labeling": LabelingPageData,
  "calendars": CalendarsPageData,
  "folders": FoldersPageData,
  "diaries": DiariesPageData,
  "bulletin": BulletinPageData,
  "booklets": BookletsPageData,
  "catalogue": CataloguePageData,
  "brochure": BrochurePageData,
  "leaflets": LeafletsPageData,
};

export const AdvertisementDetailPageData = {
  "display-boards": DisplayBoardsPageData,
  "bill-boards": BillBoardsPageData,
  "unipole": UnipolePageData,
  "wall-panel": WallPanelPageData,
  "over-head-panel": OverHeadPanelPageData,
  "building-wraps": BuildingWrapsPageData,
  "bus-shelters": BusSheltersPageData,
  "flyover-pillars": FlyoverPillarsPageData,
  "malls": MallsPageData,
  "railway-stations": RailwayStationsPageData,
  "airports": AirportsPageData,
  "cab-branding": CabBrandingPageData,
  "bus-panels": BusPanelsPageData,
  "bus-wraps": BusWrapsPageData,
  "mobile-display-vans": MobileDisplayVansPageData,
  "local-metro-trains": LocalMetroTrainsPageData,
  "truck-wrap": TruckWrapPageData,
  "auto-rickshaw-branding": AutoRickshawBrandingPageData,
  "pole-kiosk": PoleKioskPageData,
  "metro-kiosk": MetroKioskPageData,
  "college-kiosk": CollegeKioskPageData,
  "bench-branding": BenchBrandingPageData,
  "barcodes": BarcodesPageData,
  "airport-trolley": AirportTrolleyPageData,
  "hypermarts": HypermartsPageData,
  "event-advertising": EventAdvertisingPageData,
  "newspapers": NewspapersPageData,
  "magazines": MagazinesPageData,
  "periodicals": PeriodicalsPageData,
  "news-letters": NewsLettersPageData,
  "digital-media-buying": DigitalMediaBuyingPageData,
  "theater": TheaterPageData,
  "televisions": TelevisionsPageData,
  "infilm": InfilmPageData,
  "radio": RadioPageData,
  "brand-promotions": BrandPromotionsPageData,
  "road-shows": RoadShowsPageData,
  "experiential-marketing": ExperientialMarketingPageData,
  "mall-activities": MallActivitiesPageData,
  "retail-store-activities": RetailStoreActivitiesPageData,
  "direct-marketing": DirectMarketingPageData,
  "digital-marketing-btl": DigitalMarketingBtlPageData,
  "tele-marketing": TeleMarketingPageData,
};
