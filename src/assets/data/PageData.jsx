// globaldatabase.js
import {
  WebDesigningCoverImage,
  GraphicDesigningCoverImage,
  AdvertisitngCoverImage,
  BrandingCoverImage,
  DigitalMarketingCoverImage,
  MobileappCoverImage,
  ServicesCoverImage,
  BusinessWebsiteCover,
  DefaultCoverImage,
} from "../data/Imagedata";
import {
  faCakeCandles,
  faBriefcase,
  faMusic,
  faUsers,
  faLock,
  faCheckCircle,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import {
  businesswebsite,
  crmermpannel,
  ecommerce,
  WebRevamp,
  AndroidAppDevelopment,
  AppMaintenanceSupport,
  AppMonetizationStrategy,
  AppPrototyping,
  AppSecurity,
  AppStoreOptimization,
  AppTestingQuality,
  CrossPlatformAppDevelopment,
  EcommerceAppDev,
  iOSAppDevelopment,
  MobileApp,
  affiliatemarketing,
  SearchEngineOptimization,
  ContentMarketing,
  SocialMediaMarketing,
  EmailMarketing,
  PayPerClickAdvertising,
  AnalyticsandDataAnalysis,
  ConversionRateOptimization,
  MobileMarketing,
  VideoMarketing,
  LocalSEOandMarketing,
  EcommerceMarketing,
  MarketingAutomation,
  RemarketingandRetargeting,
  InfluencerMarketing,
  BrandAwarness,
  BrandExp,
  BrandGuide,
  BrandID,
  BrandLogo,
  BrandMessage,
  BrandName,
  BrandPosition,
  BrandResearch,
  BrandStory,
  BrandTracking,
  Rebranding,
  VisualID,
  BannerDesign,
  BrandIdentityDesign,
  BrochureDesign,
  BusinessCard,
  eBookandPrintBook,
  IllustationServices,
  InfographicDesign,
  logodesign,
  MotionGraphics,
  PackagingDesign,
  PhotoEditing,
  PosterandFlyerDesign,
  PrintDesign,
  RenderingandVisualizationBannerDesign,
  SignageandBillboardDesign,
  SocialMediaGraphics,
  TShirtandMerchandiseDesign,
  UserExperienceDesign,
  UserInterfaceDesign,
  WebDesign,
  DisplayAdvertising,
  InGameAdvertising,
  NativeAdvertising,
  OutdoorAdvertising,
  PrintAdvertising,
  ProgrammaticAdvertising,
  RadioAdvertising,
  TheatreAdvertising,
  TVAdvertising,
  VideoAdvertising,
  Webdevelopmenticon,
  Mobileappicon,
  Graphicdesignicon,
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
    src: WebDesigningCoverImage, // Update this path to the actual image path
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
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
      link: "/services/events",
    },
    {
      icon: Mobileappicon,
      title: "Mobile Application",
      description:
        "Create seamless mobile experiences with our custom Android and iOS app development services. We specialize in building native, hybrid, and cross-platform apps that keep your users engaged.",
      link: "https://www.vivahamco.com",
    },
    {
      icon: DigitalmarketingIcon,
      title: "Digital Marketing",
      description:
        "Boost your online presence with strategic SEO, PPC, social media marketing, and content campaigns. We drive traffic, build engagement, and increase conversions across digital channels.",
      link: "/services/digital-marketing-company",
    },
    {
      icon: Graphicdesignicon,
      title: "Multimedia",
      description:
        "Engage your audience with stunning multimedia content — including videos, animations, explainer reels, and motion graphics that tell your brand story in a captivating way.",
      link: "/services/multimedia-company",
    },
    {
      icon: Brandingicon,
      title: "Branding",
      description:
        "Create a lasting impression with strategic branding. From logo design to brand identity systems, we craft cohesive visuals and messaging that connect with your audience.",
      link: "/services/branding-comapny",
    },
    {
      icon: Advertisingicon,
      title: "Advertising",
      description:
        "Run targeted ad campaigns across platforms like Google, Facebook, and Instagram. We help you reach the right audience with creative, data-driven advertising strategies that convert.",
      link: "/services/advertising-company",
    },
  ],
};

//WebDevelopment
// Events Page Data
export const EventsPageData = {
  coverimage: WebDesigningCoverImage,
  title: "Events in Visakhapatnam | Leor Media",
  subtitle:
    "Leor Media — Vizag’s premier event management and planning partner. We specialize in creating memorable experiences for personal, corporate, and lifestyle events.",
  coverImage: {
    src: WebDesigningCoverImage,
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
    {
      icon: faCakeCandles,
      title: "Social Events",
      description: "Birthdays, Anniversaries, Baby Showers, Weddings & more.",
      link: "/services/events/birthdays",
    },
    {
      icon: faLock,
      title: "Private Parties",
      description: "Pool Parties, Bachelor Parties, Theme Parties & more.",
      link: "/services/events/private-parties",
    },
    {
      icon: faBriefcase,
      title: "Corporate Events",
      description: "Conferences, Launches, Team Building & Workshops.",
      link: "/services/events/corporate-parties",
    },
    {
      icon: faMusic,
      title: "Entertainment Events",
      description: "Music Concerts, DJ Nights, Festivals & Fashion Shows.",
      link: "/services/events/music-concerts",
    },
    {
      icon: faUsers,
      title: "Community & Professional",
      description: "Workshops, Training, Meetups & Charity Events.",
      link: "/services/events/workshops",
    },
  ],
};

// Generic Event Detail Page Data (used for all events for now)
export const EventDetailPageData = {
  SeoName: {
    seotitle: "events", // Reusing this for now or could create new one
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
      link: "/contactus" ,
      highlighted: true,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Event Planning Services",
  subtitle: "Turning your special moments into lifelong memories with professional planning and flawless execution.",
  coverImage: {
    src: WebDesigningCoverImage,
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


//MobileApp
export const MobileAppDevelopment = {
  coverimage: MobileappCoverImage,
  title: "Mobile App",
  subtitle:
    "Leor Media stands as a distinguished leader in mobile app innovation and development.",
  coverImage: {
    src: MobileappCoverImage, // Update this path to the actual image path
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Mobile Apps That Drive Growth.",
    heading: "Turn Your Idea Into a Powerful Mobile Experience.",
    description:
      "In today’s mobile-first world, your business deserves an app that truly represents your brand and engages your users. At Leor Media, we craft customized, high-performing mobile applications to bring your vision to life.",
  },
  services: [
    {
      icon: MobileApp,
      title: "Mobile App",
      description:
        "Complete Mobile App Solutions: From concept to launch, we develop intuitive and user-focused apps that align with your business goals.",
      link: "https://www.vivahamco.com/mobile-app-design",
    },
    {
      icon: AndroidAppDevelopment,
      title: "Android App Development",
      description:
        "Reach the Android market with robust, scalable apps. We build feature-rich Android applications tailored for performance and usability.",
      link: "https://www.vivahamco.com/android-app-development",
    },
    {
      icon: iOSAppDevelopment,
      title: "iOS App Development",
      description:
        "Delight your Apple users with sleek, responsive iOS applications. Our team ensures seamless performance and beautiful UI for iPhone and iPad.",
      link: "https://www.vivahamco.com/ios-application-development",
    },
    {
      icon: CrossPlatformAppDevelopment,
      title: "Cross-Platform App Development",
      description:
        "Build once, deploy everywhere. Our cross-platform apps deliver native-like performance on both Android and iOS — reducing cost and time to market.",
      link: "https://www.vivahamco.com/cross-platform-app-development",
    },
    {
      icon: AppPrototyping,
      title: "App Prototyping",
      description:
        "Visualize before you build. We create interactive prototypes to test ideas, gather feedback, and refine user experiences early in development.",
      link: "https://www.vivahamco.com/app-prototyping",
    },
    {
      icon: AppTestingQuality,
      title: "App Testing & Quality Assurance",
      description:
        "Ensure flawless performance with rigorous testing. We perform QA across devices to guarantee a smooth and bug-free app launch.",
      link: "https://www.vivahamco.com/app-testing-and-quality-assurance",
    },
    {
      icon: AppMaintenanceSupport,
      title: "App Maintenance & Support",
      description:
        "Keep your app running smoothly. We offer continuous support, updates, and maintenance to adapt to evolving platforms and user needs.",
      link: "https://www.vivahamco.com/app-maintenance-and-support",
    },
    {
      icon: AppSecurity,
      title: "App Security",
      description:
        "Protect your users and data. Our development includes robust security practices, encryption, and compliance for complete peace of mind.",
      link: "https://www.vivahamco.com/app-security",
    },
    {
      icon: AppMonetizationStrategy,
      title: "App Monetization Strategy",
      description:
        "Turn your app into revenue. We help define and implement monetization models that align with your audience and business goals.",
      link: "https://www.vivahamco.com/app-monetization-strategy",
    },
    {
      icon: AppStoreOptimization,
      title: "App Store Optimization",
      description:
        "Boost app visibility and downloads. Our ASO strategies enhance your app ranking on Play Store and App Store with keyword targeting and compelling content.",
      link: "https://www.vivahamco.com/app-store-optimization",
    },
    {
      icon: EcommerceAppDev,
      title: "Ecommerce App Development",
      description:
        "Drive mobile sales with tailored eCommerce apps. We build secure, scalable shopping apps with smooth navigation and integrated payment gateways.",
      link: "https://www.vivahamco.com/ecommerce-app-development",
    },
  ],
};

export const MobileAppDesignDetails = {
  SeoName: {
    seotitle: "MobileAppDesignDetailsseo",
  },
  section2: {
    tagline: "Want a modern and engaging mobile app design?",
    heading: "Creative & User-Friendly Mobile App Design Solutions",
    description:
      "At Leor Media, we craft intuitive, visually appealing, and user-centered mobile app designs that enhance engagement and improve user experiences across iOS, Android, and cross-platform applications.",
  },

  services: [
    {
      icon: AndroidAppDevelopment,
      title: "Mobile App UI/UX Design",
      description: "Intuitive and visually compelling interfaces.",
      details: [
        "User Research: Understand target users for better design decisions.",
        "Wireframes: Structural layouts to visualize app navigation.",
        "High-Fidelity Mockups: Pixel-perfect screen designs with consistent branding.",
      ],
      link: "/contactus",
    },
    {
      icon: AndroidAppDevelopment,
      title: "App Prototyping",
      description: "Interactive demos before development.",
      details: [
        "Clickable Prototypes: Simulate user flow and interactions.",
        "Usability Testing: Validate app usability before coding.",
        "Client Feedback Integration: Iterate designs based on reviews.",
      ],
      link: "/contactus",
    },
    {
      icon: AndroidAppDevelopment,
      title: "Cross-Platform App Design",
      description: "Design once, deploy everywhere.",
      details: [
        "Consistent UI: Unified experience on iOS and Android.",
        "Platform Guidelines: Follow native design principles (Material/Apple HIG).",
        "Responsive Layouts: Optimized for all screen sizes.",
      ],
      link: "/contactus",
    },
    {
      icon: AndroidAppDevelopment,
      title: "App Store Design Assets",
      description: "Design assets for better store visibility.",
      details: [
        "App Icons: Eye-catching icons that align with app theme.",
        "Screenshots: Visual storytelling to increase downloads.",
        "Store Banners: Promotional graphics and feature sections.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Design Pack",
      price: "",
      features: [
        "3-5 Screens Design",
        "Basic UI Kit",
        "Figma Source File",
        "Delivery in 4 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Design Pack",
      price: "",
      features: [
        "Up to 10 Screens",
        "Custom UI/UX Design",
        "Prototype + Developer Handoff",
        "Delivery in 7 Days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Design Suite",
      price: "",
      features: [
        "15+ Screens + Assets",
        "Animations & Microinteractions",
        "App Icon + Store Kit",
        "Priority Support + Revisions",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Need Modern Mobile App Designs?",
  subtitle:
    "Leor Media helps businesses craft beautiful, user-focused mobile app interfaces that leave a lasting impression.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you design for both iOS and Android?",
      answer:
        "Yes, we design mobile apps compatible with iOS, Android, and cross-platform frameworks like React Native and Flutter.",
    },
    {
      question: "What tools do you use for designing mobile apps?",
      answer:
        "We use industry-standard tools like Figma, Adobe XD, and Sketch for designing responsive and modern app interfaces.",
    },
    {
      question: "Can I see a prototype before development?",
      answer:
        "Yes, we offer interactive prototypes that simulate app flow and UI behavior so you can validate the design early.",
    },
    {
      question: "Are your designs developer-friendly?",
      answer:
        "Absolutely. We provide structured files, design tokens, and specs that make it easy for developers to implement.",
    },
    {
      question: "Can you help with App Store assets too?",
      answer:
        "Yes, our Premium package includes app icons, screenshots, banners, and promotional graphics optimized for the App Store and Google Play.",
    },
    {
      question: "Do you offer post-delivery revisions?",
      answer:
        "Yes. Each package includes a set number of revisions. The Premium plan includes priority support and extended revision scope.",
    },
  ],
};
export const IOSAppDevelopmentDetails = {
  SeoName: {
    seotitle: "IOSAppDevelopmentDetailsseo",
  },
  section2: {
    tagline: "Looking to launch your app on the Apple ecosystem?",
    heading: "Custom iOS App Development for Business Success",
    description:
      "Leor Media specializes in developing secure, scalable, and high-performance iOS applications. Whether it's a business app, e-commerce platform, or SaaS solution, we ensure seamless experiences across all Apple devices.",
  },

  services: [
    {
      icon: AppMaintenanceSupport,
      title: "Custom iOS App Development",
      description: "Tailored apps for iPhone, iPad, and Apple Watch.",
      details: [
        "Business Apps: CRM, ERP, HRM solutions with native performance.",
        "E-commerce & Booking Apps: Feature-rich shopping and scheduling apps.",
        "Utility & Productivity Apps: Tools to streamline operations and enhance user value.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMaintenanceSupport,
      title: "UI/UX for iOS",
      description: "Designs built with Apple Human Interface Guidelines.",
      details: [
        "Modern UI: Clean, intuitive, and fluid interfaces.",
        "User-Centered UX: Focus on flow, performance, and accessibility.",
        "Dark Mode & Retina Ready: Optimized for the latest iOS features.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMaintenanceSupport,
      title: "App Store Deployment",
      description: "Smooth submission and approval process.",
      details: [
        "App Store Optimization: Metadata, keywords, and previews.",
        "Code Signing & Provisioning: Proper setup for secure distribution.",
        "Compliance & Guidelines: Ensure App Store approval on first try.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMaintenanceSupport,
      title: "iOS App Maintenance",
      description: "Ensure long-term app health and performance.",
      details: [
        "iOS Updates Compatibility: Stay compatible with the latest iOS versions.",
        "Crash Monitoring: Real-time logs and fixes.",
        "Feature Enhancements: Add new modules or improve UX post-launch.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic iOS App",
      price: "",
      features: [
        "Up to 5 Screens",
        "Static Pages & Forms",
        "App Store Submission",
        "Delivery in 10 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business iOS App",
      price: "",
      features: [
        "Up to 10 Screens",
        "Dynamic Features (API, DB)",
        "Push Notifications",
        "1 Month Maintenance",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Advanced iOS Solution",
      price: "",
      features: [
        "Unlimited Screens & Modules",
        "Authentication & Payment Gateway",
        "Real-Time Features",
        "Priority Support + AMC",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Professional iOS App Development",
  subtitle:
    "Leor Media delivers robust iOS applications that meet Apple standards and empower your business with seamless digital solutions.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you build apps for both iPhone and iPad?",
      answer:
        "Yes, our iOS apps are designed to be fully responsive and compatible with iPhone, iPad, and Apple Watch if needed.",
    },
    {
      question: "Can you publish the app on the App Store for us?",
      answer:
        "Absolutely. We handle everything from provisioning profiles to submitting the app and ensuring approval.",
    },
    {
      question: "What technologies do you use for iOS apps?",
      answer:
        "We use Swift, SwiftUI, and Xcode for native iOS development. For hybrid apps, we also offer React Native and Flutter options.",
    },
    {
      question: "Can you integrate APIs and backend systems?",
      answer:
        "Yes. We specialize in building apps that communicate with secure APIs and databases, whether custom or third-party.",
    },
    {
      question: "Do I own the app and source code?",
      answer:
        "Yes. Upon final payment, you retain full ownership of the app, source code, and all associated assets.",
    },
    {
      question: "Is post-launch support available?",
      answer:
        "Yes. All plans include limited maintenance, with AMC options available for long-term support and updates.",
    },
  ],
};
export const AndroidAppDevelopmentDetails = {
  SeoName: {
    seotitle: "AndroidAppDevelopmentDetailsseo",
  },
  section2: {
    tagline: "Target Billions of Android Users Worldwide",
    heading: "Custom Android App Development for Every Business Need",
    description:
      "At Leor Media, we design and develop secure, scalable, and intuitive Android applications that deliver real business value. From startups to enterprise-grade apps, we ensure performance, compatibility, and user satisfaction.",
  },

  services: [
    {
      icon: AppStoreOptimization,
      title: "Native Android App Development",
      description: "Robust apps built with Kotlin and Java.",
      details: [
        "Business Apps: CRM, ERP, Inventory, HRM tailored to Android.",
        "E-commerce Apps: Online shopping, payments, and product management.",
        "Social & Utility Apps: Feature-rich applications for daily needs.",
      ],
      link: "/contactus",
    },
    {
      icon: AppStoreOptimization,
      title: "Modern UI/UX Design for Android",
      description: "User-friendly designs aligned with Material Design.",
      details: [
        "Clean Interface: Optimized layouts and visual hierarchy.",
        "Dark Mode Support: Compatible with Android's theme system.",
        "Performance Optimized: Lightweight and smooth experience.",
      ],
      link: "/contactus",
    },
    {
      icon: AppStoreOptimization,
      title: "Play Store Deployment & Optimization",
      description: "End-to-end publishing and ASO support.",
      details: [
        "Google Play Submission: We handle all compliance and testing.",
        "App Store Optimization: Improve visibility with keywords and media.",
        "Beta Testing & Feedback Integration.",
      ],
      link: "/contactus",
    },
    {
      icon: AppStoreOptimization,
      title: "Maintenance & Upgrades",
      description: "Keep your app updated and functioning smoothly.",
      details: [
        "OS Version Compatibility: Android 10+ ready.",
        "Bug Fixes & Crash Reports: Ongoing support and monitoring.",
        "Feature Expansion: Easily add modules post-launch.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Android App",
      price: "",
      features: [
        "Up to 5 Screens",
        "Static Content & Contact Form",
        "Play Store Submission",
        "Delivery in 7 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Android App",
      price: "",
      features: [
        "Up to 10 Screens",
        "Dynamic Content + API Integration",
        "Push Notifications",
        "1 Month Free Support",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Advanced Android Solution",
      price: "",
      features: [
        "Unlimited Screens & Modules",
        "Authentication & Payment Gateway",
        "Live Chat, Real-time Sync",
        "AMC & Priority Support",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Professional Android App Development",
  subtitle:
    "Leor Media helps you connect with Android users through high-quality, fast, and future-ready mobile apps.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Which technologies do you use for Android app development?",
      answer:
        "We primarily use Kotlin and Java for native apps, and Flutter or React Native for cross-platform solutions if needed.",
    },
    {
      question: "Do you handle publishing the app on Google Play?",
      answer:
        "Yes, we take care of the complete process including Play Store account setup, signing, testing, and submission.",
    },
    {
      question: "Can the app be integrated with my website or database?",
      answer:
        "Absolutely. We specialize in custom backend integration using REST APIs, Firebase, or direct database connections.",
    },
    {
      question: "Do I get access to the app’s source code?",
      answer:
        "Yes, full source code and project files are handed over upon completion and payment.",
    },
    {
      question: "Will the app work on all Android phones?",
      answer:
        "Yes, we ensure compatibility with major Android versions (10 and above) and various screen sizes.",
    },
    {
      question: "What happens after the app is live?",
      answer:
        "We offer 1 month of free maintenance and the option to enroll in an AMC for continued support and upgrades.",
    },
  ],
};
export const CrossPlatformAppDevelopmentDetails = {
  SeoName: {
    seotitle: "CrossPlatformAppDevelopmentDetailsseo",
  },
  section2: {
    tagline: "One Codebase. Multiple Platforms.",
    heading: "Cross-Platform App Development for Android & iOS",
    description:
      "At Leor Media, we build high-performance mobile apps using modern frameworks like Flutter and React Native. Launch on both Android and iOS with reduced development time and cost—without compromising user experience.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Flutter App Development",
      description: "Google’s UI toolkit for natively compiled apps.",
      details: [
        "Fast Performance: Native-like speed and animations.",
        "Custom UI: Pixel-perfect design across platforms.",
        "Hot Reload: Faster development and testing cycles.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "React Native App Development",
      description: "Build apps with JavaScript and native components.",
      details: [
        "Cross-Platform Codebase: Reuse up to 90% of the code.",
        "Community & Plugin Support: Faster feature integration.",
        "Live Updates: OTA updates without app store resubmission.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Hybrid App UI/UX Design",
      description: "Consistent UI across Android and iOS.",
      details: [
        "Unified Design: No compromise in aesthetics.",
        "Responsive Layouts: Adapts to all screen sizes.",
        "Accessibility Optimized: For all user types.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "App Store & Play Store Publishing",
      description: "Launch your app on both platforms simultaneously.",
      details: [
        "Platform Guidelines: Compliance with Google and Apple standards.",
        "ASO Optimization: Better visibility in app stores.",
        "App Testing: QA across multiple devices and OS versions.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Cross-Platform App",
      price: "",
      features: [
        "Up to 5 Screens",
        "Static Content",
        "Android + iOS Build",
        "Store Submission",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Cross-Platform App",
      price: "",
      features: [
        "Up to 10 Screens",
        "API & Backend Integration",
        "Push Notifications",
        "1 Month Maintenance",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Advanced Hybrid App",
      price: "",
      features: [
        "Unlimited Modules",
        "Live Chat, Login, Payment Gateway",
        "Real-time Database Integration",
        "Priority Support + AMC",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Cross-Platform App Development Services",
  subtitle:
    "Launch mobile apps faster and smarter with our expert cross-platform development. One app. Every user.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is cross-platform app development?",
      answer:
        "Cross-platform development allows you to create apps that work on both Android and iOS using a single codebase. It saves time, cost, and effort compared to building separate native apps.",
    },
    {
      question: "Which frameworks do you use?",
      answer:
        "We use Flutter (by Google) and React Native (by Meta) based on your app’s complexity, performance needs, and future scalability.",
    },
    {
      question: "Is there any compromise on performance?",
      answer:
        "No. Apps built with Flutter and React Native are optimized for native-like performance and offer smooth user experience.",
    },
    {
      question: "Can I launch on both Play Store and App Store?",
      answer:
        "Yes. We provide publishing services and ensure your app meets all the guidelines of both platforms.",
    },
    {
      question: "Will I get the source code?",
      answer:
        "Yes, full source code and documentation will be handed over upon completion.",
    },
    {
      question: "Can I scale the app later?",
      answer:
        "Absolutely. Our architecture supports future feature expansion and scaling across devices and platforms.",
    },
  ],
};
export const AppPrototypingDetails = {
  SeoName: {
    seotitle: "AppPrototypingDetailsseo",
  },
  section2: {
    tagline: "Validate Before You Build.",
    heading: "Interactive App Prototypes That Bring Your Idea to Life",
    description:
      "At Leor Media, we help you visualize your app idea with high-fidelity prototypes. Test user flows, validate designs, and impress investors before writing a single line of code.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "UI/UX Wireframing",
      description: "Basic layout of your app’s structure and flow.",
      details: [
        "User Journey Mapping: Define app goals and key actions.",
        "Low-Fidelity Wireframes: Focus on structure, not visuals.",
        "Page Navigation Flow: Ensure smooth experience from screen to screen.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Interactive App Prototypes",
      description: "Clickable, high-fidelity mockups of your app.",
      details: [
        "Realistic Design: Looks like the final app without backend.",
        "Clickable Elements: Mimic interactions, navigation, and animations.",
        "Testable Flows: Validate usability and structure with users/stakeholders.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "User Testing & Feedback",
      description: "Get insights from users before development.",
      details: [
        "Usability Testing: Discover pain points and friction.",
        "Iterative Improvements: Refine based on actual usage.",
        "Stakeholder Presentations: Showcase concept for approvals/funding.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Design-to-Development Handoff",
      description: "Smooth transition from prototype to code.",
      details: [
        "Figma/Adobe XD Handoff: Developer-friendly assets & specs.",
        "Code-ready Design: Structured with components and responsiveness.",
        "Collaboration with Dev Team: Onboarding and clarification support.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Prototype",
      price: "",
      features: [
        "3-5 App Screens",
        "Low-Fidelity Wireframes",
        "PDF or Image Export",
        "Delivery in 3 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Interactive Prototype",
      price: "",
      features: [
        "5-10 Screens",
        "High-Fidelity UI",
        "Interactive Navigation",
        "Stakeholder Ready",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Full App UX Flow",
      price: "",
      features: [
        "Complete App Flow",
        "User Testing Reports",
        "Developer Handoff Assets",
        "Unlimited Revisions (for 7 days)",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "App Prototyping & UI Mockups",
  subtitle:
    "Before you build, prototype it. Bring your vision to life, gather feedback, and gain clarity with interactive app prototypes.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is app prototyping?",
      answer:
        "App prototyping is the process of designing an interactive model of your app before development. It helps visualize user flow, design, and functionality.",
    },
    {
      question: "Do I need a prototype before development?",
      answer:
        "Yes. A prototype helps clarify requirements, save costs, get approvals, and test usability before investing in full development.",
    },
    {
      question: "Which tools do you use for prototyping?",
      answer:
        "We use Figma, Adobe XD, and InVision depending on your preferences and complexity. You’ll get shareable links and downloadable formats.",
    },
    {
      question: "Can I present this prototype to investors?",
      answer:
        "Absolutely. Our high-fidelity prototypes are great for pitching your app idea to investors, partners, or stakeholders.",
    },
    {
      question: "Is feedback-based revision included?",
      answer:
        "Yes. We offer revisions based on user or team feedback during the prototype phase (based on your selected package).",
    },
    {
      question: "Will developers understand the prototype?",
      answer:
        "Yes. Our deliverables include design specs, assets, and developer-ready files for a smooth handoff.",
    },
  ],
};
export const AppTestingandQualityAssuranceDetails = {
  SeoName: {
    seotitle: "AppTestingandQualityAssuranceDetailsseo",
  },
  section2: {
    tagline: "Flawless Apps. Happy Users.",
    heading: "Comprehensive App Testing & Quality Assurance Services",
    description:
      "At Leor Media, we ensure your mobile app is bug-free, reliable, and user-friendly. Our QA specialists test across devices, OS versions, and user scenarios to deliver a seamless experience for your customers.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Manual App Testing",
      description: "Real-device testing for accuracy and usability.",
      details: [
        "UI & UX Testing: Visual accuracy and intuitive navigation.",
        "Functionality Testing: Ensure each feature works as intended.",
        "Edge Case Testing: Test rare user behaviors and flows.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Automated App Testing",
      description: "Faster testing using scripts and frameworks.",
      details: [
        "Test Automation Setup: Selenium, Appium, or Detox.",
        "Regression Testing: Validate updates without breaking existing features.",
        "Performance Monitoring: App speed, memory, and stability checks.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Cross-Device & Cross-Platform Testing",
      description: "Test your app on various devices and OS versions.",
      details: [
        "Android & iOS: Broad version compatibility testing.",
        "Screen Sizes: Phones, tablets, and foldables.",
        "Real Device & Emulator Testing: Practical and scalable testing.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Beta Testing & User Feedback",
      description: "Release your app to real users for final insights.",
      details: [
        "Beta App Distribution: Closed-group testing via TestFlight or Play Console.",
        "User Feedback Gathering: In-app surveys or feedback forms.",
        "Bug Reporting Tools: Integration with Jira, Trello, or Notion.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic QA",
      price: "",
      features: [
        "Manual Testing",
        "5 Screens / Modules",
        "Bug Report (PDF)",
        "2 Revisions",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business QA",
      price: "",
      features: [
        "Manual + Automated Testing",
        "Cross-Platform Devices",
        "Performance Testing",
        "3 Revisions + Consultation",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Advanced QA & Beta Launch",
      price: "",
      features: [
        "Full App QA (up to 20 modules)",
        "Real Device Testing",
        "Beta Launch + Feedback",
        "Post-launch Bug Fix Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Mobile App QA & Testing Services",
  subtitle:
    "Deliver a polished and stable app to your users. Our QA experts identify and resolve bugs before your app hits the market.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why is app testing important?",
      answer:
        "Testing ensures your app functions as expected, is free of bugs, and offers a smooth user experience across devices and platforms.",
    },
    {
      question: "Do you test on real devices?",
      answer:
        "Yes. We test on both emulators and a range of real devices to ensure compatibility and real-world performance.",
    },
    {
      question: "What types of testing do you perform?",
      answer:
        "We offer UI/UX testing, functionality testing, regression testing, performance testing, and cross-platform compatibility testing.",
    },
    {
      question: "Is automated testing included?",
      answer:
        "Yes, our Business and Advanced QA packages include automated test cases using tools like Appium or Selenium for repeatable scenarios.",
    },
    {
      question: "Will I get a report of all bugs and issues?",
      answer:
        "Absolutely. We provide a detailed bug report in PDF or shared dashboard format, along with screenshots or video evidence where applicable.",
    },
    {
      question: "Can you support beta testing with users?",
      answer:
        "Yes. We assist in launching your app to a controlled group via TestFlight (iOS) or Google Play Beta (Android) and collecting valuable user feedback.",
    },
  ],
};
export const AppMaintenanceandSupportDetails = {
  SeoName: {
    seotitle: "AppMaintenanceandSupportDetailsseo",
  },
  section2: {
    tagline: "Keep Your App Running Smoothly.",
    heading: "Reliable App Maintenance & Ongoing Support",
    description:
      "At Leor Media, we don’t just build your app—we keep it running efficiently. From regular updates to emergency fixes, our maintenance services ensure peak performance, security, and compatibility across devices.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Regular App Updates",
      description: "Stay current with the latest OS and feature updates.",
      details: [
        "OS Compatibility Updates: Ensure smooth functioning across Android/iOS versions.",
        "Code Refactoring: Improve performance and reduce bugs.",
        "Third-Party SDK Upgrades: Stay updated with dependencies like Firebase, Stripe, etc.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Bug Fixes & Crash Recovery",
      description: "Swift response to issues and app crashes.",
      details: [
        "Crash Logs Analysis: Identify root causes of failures.",
        "Hotfix Deployment: Emergency fixes rolled out quickly.",
        "User Issue Resolution: Tackle real-world usage problems.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Performance Optimization",
      description: "Ensure your app runs fast and smooth.",
      details: [
        "Speed Optimization: Faster load and transition times.",
        "Memory Leak Fixes: Prevent app slowdowns and crashes.",
        "Analytics Monitoring: Real-time insights into app performance.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Support & Assistance",
      description: "Ongoing help whenever you need it.",
      details: [
        "Technical Support: Email, chat, or ticket-based helpdesk.",
        "Consultations: Suggest feature improvements and UX tweaks.",
        "Documentation & Training: Guide updates and onboarding support.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Maintenance",
      price: "",
      features: [
        "Minor Bug Fixes",
        "Basic Compatibility Updates",
        "Email Support",
        "2 Requests/Month",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Support",
      price: "",
      features: [
        "Regular OS/SDK Updates",
        "Performance Monitoring",
        "Priority Bug Fixes",
        "Up to 5 Support Requests",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Care Plan",
      price: "",
      features: [
        "Unlimited Support Tickets",
        "24x7 Emergency Fixes",
        "Monthly Feature Reviews",
        "Analytics Reports",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Mobile App Maintenance & Support Services",
  subtitle:
    "Ensure your mobile app stays secure, functional, and fast with our proactive maintenance and support plans.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why do I need app maintenance after launch?",
      answer:
        "Mobile platforms evolve constantly. Regular maintenance ensures your app remains compatible, secure, and bug-free as user behavior and technologies change.",
    },
    {
      question: "What happens if my app crashes unexpectedly?",
      answer:
        "We offer emergency bug fixes and crash recovery services as part of our Business and Premium plans to resolve such issues quickly.",
    },
    {
      question: "How do you handle OS updates like iOS or Android versions?",
      answer:
        "We test your app on new OS versions and update code or dependencies to maintain performance and compatibility.",
    },
    {
      question: "What’s included in a monthly support plan?",
      answer:
        "Depending on the plan, you’ll get bug fixes, performance optimization, OS updates, support requests, analytics, and technical consultation.",
    },
    {
      question: "Can I switch or cancel my maintenance plan?",
      answer:
        "Yes, our plans are flexible. You can upgrade, downgrade, or cancel with a 15-day notice.",
    },
    {
      question: "Do you offer AMC (Annual Maintenance Contract)?",
      answer:
        "Yes, we offer discounted AMC plans for long-term clients covering all maintenance needs for a year.",
    },
  ],
};
export const AppSecurityDetails = {
  SeoName: {
    seotitle: "AppSecurityDetailsseo",
  },
  section2: {
    tagline: "Secure Your App. Protect Your Users.",
    heading: "Mobile App Security & Data Protection Services",
    description:
      "Leor Media ensures your mobile apps are safe from vulnerabilities, data breaches, and malicious threats. We implement robust security measures to protect both your business and your users.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "App Vulnerability Assessment",
      description:
        "Identify and patch potential threats before they’re exploited.",
      details: [
        "Code Review: Analyze source code for logic flaws and security loopholes.",
        "Security Scanning: Use tools to scan for known vulnerabilities.",
        "Penetration Testing: Ethical hacking to simulate attacks.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "User Data Protection",
      description: "Safeguard personal and financial information.",
      details: [
        "Encryption: End-to-end data encryption for sensitive information.",
        "Authentication: Secure user login with OTP, biometrics, or OAuth.",
        "Data Storage: Secure cloud storage practices and encrypted databases.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "App Store Compliance",
      description: "Meet Google Play and Apple App Store security standards.",
      details: [
        "Secure APIs: HTTPS, token-based access, and CORS policies.",
        "Permissions Audit: Ensure minimal and justified user permissions.",
        "App Transport Security: ATS compliance for iOS.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Ongoing Monitoring & Alerts",
      description: "Stay alert with real-time threat monitoring.",
      details: [
        "Threat Detection: Detect unauthorized access or attacks.",
        "Crash & Log Monitoring: Track abnormal behavior and errors.",
        "Automated Alerts: Instant alerts for suspicious activity.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Security",
      price: "",
      features: [
        "Code Vulnerability Check",
        "Encryption Setup",
        "Login Protection",
        "Basic Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Advanced Security",
      price: "",
      features: [
        "Penetration Testing",
        "Secure API Integration",
        "User Data Protection",
        "Detailed Security Report",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Security Plan",
      price: "",
      features: [
        "Ongoing Security Monitoring",
        "Compliance & Legal Guidance",
        "Threat Alerts & Remediation",
        "Monthly Audit Reports",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "App Security & Protection Services",
  subtitle:
    "Protect your mobile apps and user data with advanced security protocols, ethical testing, and continuous monitoring from Leor Media.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why is mobile app security important?",
      answer:
        "Without proper security, your app and its users are vulnerable to data breaches, financial loss, and reputational damage. We ensure your app meets the highest security standards.",
    },
    {
      question: "Do you conduct penetration testing?",
      answer:
        "Yes. We simulate real-world attacks to detect and fix vulnerabilities before hackers can exploit them.",
    },
    {
      question: "Is data encryption included?",
      answer:
        "Yes. We implement strong encryption for user data, whether in transit or at rest.",
    },
    {
      question: "Can you help with app store compliance?",
      answer:
        "Absolutely. We ensure your app complies with both Google Play and Apple App Store security requirements.",
    },
    {
      question: "Do you provide post-launch monitoring?",
      answer:
        "Yes. Our Enterprise plan includes ongoing monitoring, alert systems, and regular audits to maintain long-term security.",
    },
    {
      question: "What security reports will I receive?",
      answer:
        "You’ll receive detailed documentation of identified vulnerabilities, fixes applied, encryption standards used, and recommendations for future improvements.",
    },
  ],
};
export const AppMonetizationStrategyDetails = {
  SeoName: {
    seotitle: "AppMonetizationStrategyDetailsseo",
  },
  section2: {
    tagline: "Turn Your App Into a Revenue Stream",
    heading: "Mobile App Monetization Strategy & Implementation",
    description:
      "Leor Media helps you convert users into revenue through strategic monetization models. Whether you're launching a startup app or scaling a product, we guide you through the best ways to generate consistent income.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "In-App Advertising",
      description: "Generate income through ads without charging users.",
      details: [
        "Banner & Interstitial Ads: Integrated via Google AdMob or Facebook Audience Network.",
        "Rewarded Videos: Users watch ads in exchange for rewards.",
        "Native Ads: Seamlessly blended into your app’s content.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Subscription & SaaS Models",
      description: "Create recurring revenue through subscriptions.",
      details: [
        "Freemium Model: Free basic features + paid premium upgrades.",
        "Monthly/Yearly Plans: Auto-renewal via Stripe, Razorpay, or Apple/Google billing.",
        "Trial Periods: Encourage conversions with free limited-time access.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "In-App Purchases (IAP)",
      description: "Sell digital products or features directly in the app.",
      details: [
        "One-Time Purchases: Unlock a feature or level permanently.",
        "Consumables: Credits, coins, tokens, etc.",
        "Dynamic Pricing: Based on region, behavior, or frequency.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "E-commerce Integration",
      description: "Sell physical or digital goods from within your app.",
      details: [
        "Shopping Cart & Checkout: Seamless buying process.",
        "Payment Gateways: UPI, cards, net banking, wallets.",
        "Order Tracking & Notifications: Integrated post-sale experience.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Affiliate & Referral Programs",
      description: "Encourage users to promote your app and earn.",
      details: [
        "Referral Links: Reward users for inviting others.",
        "Affiliate Marketing: Promote partner products inside your app.",
        "Commission Models: Earn from external conversions.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Strategy",
      price: "",
      features: [
        "Monetization Model Consultation",
        "Basic In-App Ads Setup",
        "Analytics Dashboard Integration",
        "Strategy Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Pro Monetization",
      price: "",
      features: [
        "Custom Pricing Plans",
        "Subscription or IAP Integration",
        "Ad Optimization & Testing",
        "User Behavior Analysis",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Monetization Master Suite",
      price: "",
      features: [
        "Multi-model Strategy Setup",
        "Revenue Funnel Design",
        "Advanced Analytics & Reporting",
        "Ongoing Optimization & Support",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "App Monetization Services",
  subtitle:
    "Leor Media helps you monetize mobile apps through ads, subscriptions, purchases, and more — all tailored to your goals.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is the best monetization model for my app?",
      answer:
        "It depends on your app type, audience, and goals. We help analyze and suggest the most profitable model — ads, subscriptions, purchases, or a combination.",
    },
    {
      question: "Can I combine multiple monetization methods?",
      answer:
        "Yes. Many apps use a hybrid approach — e.g., freemium + ads + IAP. We ensure it’s not intrusive and delivers value to users.",
    },
    {
      question: "Are subscriptions supported in both iOS and Android?",
      answer:
        "Yes, we implement auto-renewing subscriptions using Play Store and App Store APIs, including trials, upgrades, and cancellations.",
    },
    {
      question: "Can you help me set up in-app purchases?",
      answer:
        "Absolutely. We configure and test IAPs for both platforms, including consumable, non-consumable, and subscription-based items.",
    },
    {
      question: "What are affiliate and referral programs?",
      answer:
        "Affiliate programs let you earn by promoting partner products; referral programs reward users for inviting others — boosting growth and revenue.",
    },
    {
      question: "How do I track app revenue?",
      answer:
        "We integrate analytics tools like Firebase, RevenueCat, or custom dashboards so you can track sales, usage, churn, and ROI.",
    },
  ],
};
export const AppStoreOptimizationDetails = {
  SeoName: {
    seotitle: "AppStoreOptimizationDetailsseo",
  },
  section2: {
    tagline: "Maximize Your App's Visibility",
    heading: "App Store Optimization (ASO) Services",
    description:
      "Leor Media helps you boost app downloads and visibility with proven App Store Optimization strategies. From keyword research to compelling visuals, we optimize your app to rank higher and convert better.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Keyword Research & Strategy",
      description: "Target high-traffic and relevant keywords for your app.",
      details: [
        "Competitor Analysis: Discover what keywords competitors rank for.",
        "Keyword Placement: Strategic use in title, subtitle, and metadata.",
        "Localization: Region-wise keyword optimization.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "App Title & Description Optimization",
      description: "Craft compelling content to rank and convert.",
      details: [
        "SEO-Optimized Titles: Balanced keyword and brand positioning.",
        "Persuasive Descriptions: Highlight features, benefits, and CTAs.",
        "Formatting for Readability: Bullet points, emojis, and spacing.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Visual Asset Enhancement",
      description: "Design store graphics that attract and engage.",
      details: [
        "App Icons: Professional, branded, and scalable design.",
        "Screenshots & Videos: Showcase app experience and features.",
        "A/B Testing: Optimize visuals for higher conversion.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "App Reviews & Ratings Strategy",
      description: "Improve your credibility with organic reviews.",
      details: [
        "Review Generation: Ethical ways to encourage user feedback.",
        "Sentiment Analysis: Monitor and respond to feedback.",
        "Ratings Boosting: Improve user experience to raise scores.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "App Localization & Global Reach",
      description: "Expand reach by adapting to multiple languages.",
      details: [
        "Language Translation: Localize metadata and descriptions.",
        "Cultural Relevance: Adjust images and messages per region.",
        "Geo-targeted Keyword Optimization.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic ASO",
      price: "",
      features: [
        "Keyword Strategy",
        "Optimized Title & Description",
        "Basic Visual Suggestions",
        "ASO Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Pro ASO Package",
      price: "",
      features: [
        "Full Metadata Optimization",
        "Custom Icons & Screenshots",
        "Review Generation Strategy",
        "A/B Testing Setup",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Global ASO Suite",
      price: "",
      features: [
        "Multi-language Localization",
        "Advanced Visual Asset Creation",
        "Store Analytics & Reporting",
        "Ongoing Optimization (30 Days)",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "App Store Optimization Services",
  subtitle:
    "Leor Media helps your app climb the charts with expert ASO techniques — more visibility, better conversion, and increased installs.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is App Store Optimization (ASO)?",
      answer:
        "ASO is the process of improving your app’s visibility and conversion rate in app stores. It’s like SEO for mobile apps.",
    },
    {
      question: "How long does it take to see ASO results?",
      answer:
        "You may start seeing improvements in visibility within 1–2 weeks. Full download impact usually appears within 30–45 days.",
    },
    {
      question: "Do you support both Android and iOS?",
      answer:
        "Yes. We optimize apps for both Google Play Store and Apple App Store, following their specific guidelines.",
    },
    {
      question: "Can you help with app reviews and ratings?",
      answer:
        "Yes. We use ethical methods to improve your app’s ratings and encourage more genuine reviews from your users.",
    },
    {
      question: "Is ASO a one-time service?",
      answer:
        "While we offer one-time ASO packages, ongoing optimization delivers the best long-term results as trends and competition change.",
    },
    {
      question: "Will ASO improve my app downloads?",
      answer:
        "Yes. A well-optimized app sees increased visibility, which leads to more impressions and higher download rates.",
    },
  ],
};
export const EcommerceAppDevelopmentDetails = {
  SeoName: {
    seotitle: "EcommerceAppDevelopmentDetailsseo",
  },
  section2: {
    tagline: "Launch Your Own Shopping App",
    heading: "Custom E-commerce App Development Solutions",
    description:
      "Leor Media builds scalable, secure, and feature-rich e-commerce mobile apps tailored to your business model. From product management to secure payments, we deliver everything you need to run your online store efficiently.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Custom E-Commerce App Development",
      description: "Tailored apps for your business model and products.",
      details: [
        "Custom UI/UX: Designed to match your brand and audience.",
        "Multiple Product Types: Physical, digital, or service-based.",
        "Vendor or Single Store Options.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Product Catalog & Inventory Management",
      description: "Manage your product listings and stock easily.",
      details: [
        "Categories & Filters: Help users find products faster.",
        "Stock Alerts: Get notified about low inventory.",
        "Bulk Upload: Easily manage large catalogs.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Secure Payment Gateway Integration",
      description: "Accept payments from multiple sources.",
      details: [
        "UPI, Cards, Wallets, Net Banking Support.",
        "Cash on Delivery Options.",
        "PCI-DSS Compliant Payment Flow.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "User Profile & Order Management",
      description: "Track users, orders, and delivery.",
      details: [
        "Customer Login, Address Book, Wishlist.",
        "Order Tracking & Notifications.",
        "Returns, Cancellations, and Support Ticketing.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Admin Dashboard & Analytics",
      description: "Manage everything from a single panel.",
      details: [
        "Product, Orders, Users, and Coupon Control.",
        "Revenue & Sales Reports.",
        "Customer Behavior Insights.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Marketing & Loyalty Features",
      description: "Tools to boost retention and revenue.",
      details: [
        "Discount Coupons & Flash Sales.",
        "Push Notifications & Abandoned Cart Recovery.",
        "Loyalty Points & Referral Programs.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter E-Commerce App",
      price: "",
      features: [
        "Single Vendor App",
        "Basic Product Catalog",
        "Cash on Delivery + UPI",
        "Delivery in 10 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Plan",
      price: "",
      features: [
        "Custom UI/UX",
        "Inventory + Coupon System",
        "Push Notifications",
        "Admin Dashboard",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Store Suite",
      price: "",
      features: [
        "Multi-Vendor Support",
        "Advanced Reports & Analytics",
        "Marketing Tools + Loyalty Program",
        "iOS + Android Delivery",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "E-Commerce App Development Services",
  subtitle:
    "Leor Media empowers your business with high-performance mobile apps for online selling — fast, scalable, and built to grow.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What platforms do you support for e-commerce apps?",
      answer:
        "We develop e-commerce apps for Android, iOS, and cross-platform frameworks like React Native and Flutter.",
    },
    {
      question: "Can I manage my store from an admin panel?",
      answer:
        "Yes. You’ll get a user-friendly admin dashboard to manage products, orders, users, and reports in real-time.",
    },
    {
      question: "Do you offer multi-vendor marketplace features?",
      answer:
        "Absolutely. We can build multi-seller apps like Amazon or Flipkart where each vendor has their own panel.",
    },
    {
      question: "Will my app support payments and order tracking?",
      answer:
        "Yes. All plans include payment gateway integration and real-time order tracking features for users.",
    },
    {
      question: "Can you customize the app for my business?",
      answer:
        "Of course! Every element including UI, features, and workflows can be tailored to your exact business model.",
    },
    {
      question: "Do you provide app store publishing support?",
      answer:
        "Yes. We assist with Google Play and Apple App Store submission, compliance, and listing optimization.",
    },
  ],
};

//digitalmarketing
export const DigitalMarketingCompany = {
  coverimage: DigitalMarketingCoverImage,
  title: "Digital Marketing",
  subtitle:
    "Leor Media stands as a distinguished leader in digital marketing and brand growth.",
  coverImage: {
    src: DigitalMarketingCoverImage, // Update this path to the actual image path
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Digital Marketing That Delivers Results.",
    heading: "Elevate Your Brand with Strategic Marketing.",
    description:
      "In a competitive digital world, your brand needs smart strategies to stand out. At Leor Media, we help businesses grow with data-driven digital marketing tailored to your audience and goals.",
  },
  services: [
    {
      icon: SearchEngineOptimization,
      title: "Search Engine Optimization",
      description:
        "Boost your website’s visibility and rankings with our expert SEO strategies. Drive more traffic, generate leads, and grow your business organically.",
      link: "/services/digital-marketing-company/search-engine-optimization",
    },
    {
      icon: ContentMarketing,
      title: "Content Marketing",
      description:
        "Engage and inform your audience with high-quality content. We create blogs, articles, and campaigns that build trust and improve conversions.",
      link: "/services/digital-marketing-company/content-marketing",
    },
    {
      icon: SocialMediaMarketing,
      title: "Social Media Marketing",
      description:
        "Strengthen your online presence with engaging social campaigns. We help you connect with your audience and grow your brand across platforms.",
      link: "/services/digital-marketing-company/social-media-marketing",
    },
    {
      icon: EmailMarketing,
      title: "Email Marketing",
      description:
        "Nurture leads and retain customers with targeted email campaigns. We craft personalized emails that drive engagement and boost ROI.",
      link: "/services/digital-marketing-company/email-marketing",
    },
    {
      icon: PayPerClickAdvertising,
      title: "Pay-Per Click Advertising",
      description:
        "Maximize visibility and conversions with targeted PPC ads. Our paid media strategies deliver measurable results across Google, Meta, and more.",
      link: "/services/digital-marketing-company/pay-per-click-advertising",
    },
    {
      icon: affiliatemarketing,
      title: "Affiliate Marketing",
      description:
        "Grow your reach with performance-based marketing. We build and manage affiliate programs that generate revenue through trusted partners.",
      link: "/services/digital-marketing-company/affiliate-marketing",
    },
    {
      icon: AnalyticsandDataAnalysis,
      title: "Analytics and Data Analysis",
      description:
        "Make informed decisions with real-time insights. We track, analyze, and report on your digital campaigns to optimize performance and ROI.",
      link: "/services/digital-marketing-company/analytics-and-data-analysis",
    },
    {
      icon: ConversionRateOptimization,
      title: "Conversion Rate Optimization",
      description:
        "Increase leads and sales by improving user journeys. We optimize your site and funnels to convert visitors into loyal customers.",
      link: "/services/digital-marketing-company/conversion-rate-optimization",
    },
    {
      icon: MobileMarketing,
      title: "Mobile Marketing",
      description:
        "Reach your audience where they are — on mobile. From SMS to app-based campaigns, we help you deliver timely and relevant mobile messaging.",
      link: "/services/digital-marketing-company/mobile-marketing",
    },
    {
      icon: VideoMarketing,
      title: "Video Marketing",
      description:
        "Tell your story through compelling videos. From YouTube ads to brand explainers, we create video content that captures attention and drives action.",
      link: "/services/digital-marketing-company/video-marketing",
    },
    {
      icon: LocalSEOandMarketing,
      title: "Local SEO and Marketing",
      description:
        "Attract local customers with optimized local SEO strategies. We boost your visibility in maps, directories, and local search results.",
      link: "/services/digital-marketing-company/local-seo-and-marketing",
    },
    {
      icon: EcommerceMarketing,
      title: "Ecommerce Marketing",
      description:
        "Drive online sales with targeted eCommerce marketing. From product ads to abandoned cart recovery, we help your store thrive.",
      link: "/services/digital-marketing-company/ecommerce-marketing",
    },
    {
      icon: MarketingAutomation,
      title: "Marketing Automation",
      description:
        "Save time and scale campaigns with automation tools. We implement workflows that automate lead nurturing, follow-ups, and more.",
      link: "/services/digital-marketing-company/marketing-automation",
    },
    {
      icon: RemarketingandRetargeting,
      title: "Remarketing and Retargeting",
      description:
        "Reconnect with potential customers who didn’t convert. Our remarketing strategies keep your brand top-of-mind and increase conversions.",
      link: "/services/digital-marketing-company/remarketing-retargeting",
    },
    {
      icon: InfluencerMarketing,
      title: "Influencer Marketing",
      description:
        "Leverage trusted voices to grow your brand. We connect you with relevant influencers who engage your audience and boost credibility.",
      link: "/services/digital-marketing-company/influencer-marketing",
    },
  ],
};
export const SearchEngineOptimizationPageDetails = {
  SeoName: {
    seotitle: "SearchEngineOptimizationPageDetailsseo",
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
    seotitle: "ContentMarketingPageDetailsseo",
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
    seotitle: "SocialMediaMarketingPageDetailsseo",
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
export const EmailMarketingPageDetails = {
  SeoName: {
    seotitle: "EmailMarketingPageDetailsseo",
  },
  title: "Email Marketing Services",
  subtitle:
    "Drive engagement, nurture leads, and boost conversions with targeted, well-designed email campaigns.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Your Direct Line to Customers",
    heading: "Email Campaigns That Build Loyalty & Sales",
    description:
      "Leor Media helps you design, automate, and optimize email campaigns that speak to your audience and deliver measurable ROI. From welcome flows to promotional blasts, we cover it all.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Email Strategy & Segmentation",
      description: "Tailored strategy based on audience behavior and goals.",
      details: [
        "Subscriber Segmentation",
        "Personalization Tactics",
        "Content Planning",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Campaign Design & Content",
      description: "Visually appealing, mobile-responsive email templates.",
      details: [
        "Branded Templates",
        "Copywriting & CTAs",
        "Responsive Layouts",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Automated Email Workflows",
      description: "Trigger-based journeys to nurture leads and customers.",
      details: [
        "Welcome Series",
        "Abandoned Cart Recovery",
        "Post-Purchase Follow-ups",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Promotional & Seasonal Campaigns",
      description: "Boost sales during key moments and events.",
      details: [
        "Product Launch Emails",
        "Festive Offers & Flash Sales",
        "Re-Engagement Campaigns",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Email Deliverability Optimization",
      description: "Maximize inbox placement and open rates.",
      details: [
        "Spam Score Checks",
        "Sender Reputation Monitoring",
        "DKIM, SPF, DMARC Setup",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Analytics & Performance Reporting",
      description: "Track and improve campaign success.",
      details: [
        "Open & Click Rates",
        "A/B Testing Reports",
        "Revenue Attribution",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Email Pack",
      price: "",
      features: [
        "Up to 3 Campaigns/Month",
        "Basic Template Setup",
        "Open & Click Rate Reports",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Automation + Growth Plan",
      price: "",
      features: [
        "Up to 6 Campaigns + Automations",
        "Custom Templates + Segments",
        "A/B Testing + CRM Integration",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Suite",
      price: "",
      features: [
        "Unlimited Campaigns",
        "Multi-Language Templates",
        "Advanced Reporting + Team Training",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What email platforms do you support?",
      answer:
        "We work with Mailchimp, Sendinblue, Zoho Mail, Klaviyo, MailerLite, and custom SMTP setups.",
    },
    {
      question: "Can you help grow my email list?",
      answer:
        "Yes, we implement list-building strategies such as landing pages, popups, lead magnets, and integrations.",
    },
    {
      question: "Do you write the email content too?",
      answer:
        "Absolutely. Our copywriters craft compelling subject lines, body copy, and call-to-actions tailored to your audience.",
    },
    {
      question: "Will the emails be mobile-friendly?",
      answer:
        "Yes. All designs are responsive and tested for compatibility across devices and email clients.",
    },
    {
      question: "Can I automate emails for customer behavior?",
      answer:
        "Yes. We set up automated workflows triggered by signups, purchases, inactivity, and more.",
    },
    {
      question: "How do you measure email performance?",
      answer:
        "We track open rates, click-throughs, bounce rates, unsubscribes, conversions, and revenue attribution.",
    },
  ],
};
export const PayPerClickAdvertisingPageDetails = {
  SeoName: {
    seotitle: "PayPerClickAdvertisingPageDetailsseo",
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
    seotitle: "AffiliateMarketingPageDetailsseo",
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
export const AnalyticsAndDataAnalysisPageDetails = {
  SeoName: {
    seotitle: "AnalyticsAndDataAnalysisPageDetailsseo",
  },
  title: "Analytics & Data Analysis Services",
  subtitle:
    "Turn data into decisions with our expert marketing analytics, dashboards, and performance insights.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Data-Driven Marketing Intelligence",
    heading: "Measure, Understand, and Optimize Your Digital Performance",
    description:
      "Leor Media helps you collect, analyze, and visualize marketing data across platforms. Make smarter decisions backed by real-time insights, user behavior tracking, and ROI analysis.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Web & App Analytics Setup",
      description: "Track user behavior across websites and mobile apps.",
      details: [
        "Google Analytics (GA4) & Firebase Integration",
        "User Journey, Funnels, & Events",
        "Cross-Device Tracking",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Marketing Dashboard Development",
      description: "Centralize KPIs from all channels into one view.",
      details: [
        "Custom Reports with Google Looker Studio",
        "Real-Time Campaign Metrics",
        "Data from Ads, CRM, Social, and Email",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Tag Management & Conversion Tracking",
      description: "Track conversions, goals, and custom events.",
      details: [
        "Google Tag Manager Setup",
        "UTM Parameters & Attribution Modeling",
        "E-Commerce & Lead Form Tracking",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Audience Segmentation & Cohort Analysis",
      description: "Understand your users by demographics and behavior.",
      details: [
        "First-Time vs Returning Visitors",
        "Geo, Device, and Interest-Based Breakdown",
        "High-Intent & High-LTV Segments",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Campaign ROI Analysis",
      description: "Know what’s working, and where to invest more.",
      details: [
        "Multi-Channel Attribution",
        "Revenue vs Spend Reports",
        "Cost Per Lead/Sale Tracking",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Data-Backed Strategy Consulting",
      description: "Use insights to guide content, ads, and UX strategy.",
      details: [
        "User Drop-Off & Retention Insights",
        "Conversion Funnel Optimization",
        "Strategy Roadmap Based on Data",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Analytics Starter Pack",
      price: "",
      features: [
        "GA4 + Tag Manager Setup",
        "UTM Structure & Goal Tracking",
        "Basic Traffic Source Analysis",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Pro Dashboard Suite",
      price: "",
      features: [
        "Cross-Channel Dashboard",
        "E-Commerce or Lead Funnel Reports",
        "Weekly Performance Reviews",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Data Intelligence",
      price: "",
      features: [
        "BI Integrations (Looker, Power BI)",
        "Advanced Attribution Models",
        "Dedicated Data Analyst Support",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Why is marketing analytics important?",
      answer:
        "It helps you understand what's working and what’s not, so you can allocate your budget more effectively and improve results.",
    },
    {
      question: "Do you help with Google Analytics 4 migration?",
      answer:
        "Yes. We handle GA4 setup, property linking, custom events, and historical data tracking from UA.",
    },
    {
      question: "Can I track both website and app users?",
      answer:
        "Absolutely. We use tools like GA4 and Firebase for seamless web + app tracking and unified analytics.",
    },
    {
      question: "Will I get a custom dashboard for my data?",
      answer:
        "Yes. We create visual dashboards with Google Looker Studio, Power BI, or your preferred platform.",
    },
    {
      question: "Do you offer consultation based on the data?",
      answer:
        "Yes. We don’t just track data — we help interpret it and guide your growth strategy accordingly.",
    },
    {
      question: "How secure is the data you work with?",
      answer:
        "All analytics are implemented using best practices with full transparency, client access, and secure connections only.",
    },
  ],
};
export const ConversionRateOptimizationPageDetails = {
  SeoName: {
    seotitle: "ConversionRateOptimizationPageDetailsseo",
  },
  title: "Conversion Rate Optimization (CRO) Services",
  subtitle:
    "Maximize every visitor’s potential with our data-driven CRO strategies designed to boost leads, sales, and ROI.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Turn Traffic into Revenue",
    heading: "Data-Driven Conversion Strategies That Work",
    description:
      "Leor Media identifies friction points and optimizes user experience to help you convert more visitors into customers. Our CRO experts use analytics, heatmaps, and A/B testing to boost your conversion rates.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Conversion Funnel Audit",
      description: "Analyze every step of your funnel to detect drop-offs.",
      details: [
        "Landing Page Analysis",
        "Form Optimization",
        "Checkout Flow Review",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "A/B Testing & Multivariate Testing",
      description: "Test variants to find high-performing versions.",
      details: [
        "Headline & CTA Variations",
        "Form Field Testing",
        "UI/UX Elements Split Testing",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Heatmaps & Behavior Analytics",
      description: "See how users navigate your site or app.",
      details: [
        "Mouse Movement & Click Tracking",
        "Scroll Depth Reports",
        "Session Recordings",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Form & Checkout Optimization",
      description: "Reduce abandonment and friction during signup or purchase.",
      details: [
        "Smart Form Validation",
        "Progressive Form Loading",
        "Mobile-First Checkout UI",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Conversion Copywriting",
      description: "Craft words that persuade and sell.",
      details: [
        "Action-Oriented CTA Texts",
        "Landing Page Copy Optimization",
        "Value Proposition Refinement",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "CRO Reporting & Strategy",
      description: "Track improvements and define clear goals.",
      details: [
        "Conversion Benchmarks & KPIs",
        "Ongoing Optimization Plan",
        "Weekly Test Reports",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Landing Page Boost",
      price: "",
      features: ["Funnel Audit", "CTA & Copy Suggestions", "Heatmap Snapshot"],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Optimization Plan",
      price: "",
      features: [
        "A/B Testing Setup",
        "Form + Checkout Optimization",
        "Conversion Dashboard",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "CRO Enterprise Suite",
      price: "",
      features: [
        "Full Site Testing Plan",
        "Behavior Analytics Tools Integration",
        "Weekly Strategy + Copy Support",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is Conversion Rate Optimization?",
      answer:
        "CRO is the process of increasing the percentage of website visitors who complete a desired action like filling a form, purchasing, or signing up.",
    },
    {
      question: "Do I need a lot of traffic to do CRO?",
      answer:
        "No. Even small websites benefit from CRO by making key improvements based on user behavior and micro-conversions.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary, but many clients see measurable improvements in 2–4 weeks after the first set of optimizations or tests.",
    },
    {
      question: "What tools do you use for heatmaps or testing?",
      answer:
        "We use tools like Hotjar, Microsoft Clarity, Google Optimize, VWO, and others based on project needs.",
    },
    {
      question: "Is CRO only for e-commerce sites?",
      answer:
        "No. CRO benefits all websites — from SaaS platforms and service providers to blogs and B2B portals.",
    },
    {
      question: "Can you help with content and design improvements?",
      answer:
        "Yes. We support both copywriting and design refinement to improve overall persuasion and clarity on your site.",
    },
  ],
};
export const MobileMarketingPageDetails = {
  SeoName: {
    seotitle: "MobileMarketingPageDetailsseo",
  },
  title: "Mobile Marketing Services",
  subtitle:
    "Engage your audience directly on their smartphones with mobile-optimized strategies that drive app downloads, retention, and conversions.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Reach Customers on the Go",
    heading: "Smart Mobile Marketing Campaigns for Smart Devices",
    description:
      "At Leor Media, we craft personalized mobile marketing strategies that leverage SMS, push notifications, app store optimization, mobile search, and in-app advertising to keep your brand in front of users—anytime, anywhere.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "App Store Optimization (ASO)",
      description: "Improve your app’s visibility and downloads organically.",
      details: [
        "Keyword Optimization",
        "Creative Asset Optimization",
        "Rating & Review Management",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Push Notification Campaigns",
      description: "Send targeted updates to re-engage users.",
      details: [
        "Behavior-Based Triggers",
        "Time-Zone Based Delivery",
        "Cart Abandonment & Retention Flows",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "SMS & WhatsApp Marketing",
      description: "Reach users instantly with offers, alerts, and support.",
      details: [
        "Transactional + Promotional Messaging",
        "Bulk SMS Integration",
        "Two-Way WhatsApp Campaigns",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "In-App Advertising",
      description: "Advertise inside other popular apps.",
      details: [
        "Banner & Interstitial Ads",
        "Video & Rewarded Ads",
        "Hyperlocal & Behavioral Targeting",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Mobile Search & Display Ads",
      description: "Capture mobile traffic through search and display.",
      details: [
        "Mobile-Specific Ad Creatives",
        "Call Extensions & Click-to-Call",
        "Responsive Search Ads",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Mobile App Retargeting",
      description: "Win back inactive users with retargeting strategies.",
      details: [
        "Dynamic Ads Based on In-App Behavior",
        "Cross-Platform Retargeting",
        "User Journey Optimization",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Mobile Campaign",
      price: "",
      features: [
        "SMS Blast (up to 5,000 users)",
        "Basic Push Notification Setup",
        "Basic ASO Audit",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Engagement Plan",
      price: "",
      features: [
        "In-App + Mobile Search Ads",
        "Push Notification Automation",
        "WhatsApp Broadcast Campaigns",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Mobile Mastery Suite",
      price: "",
      features: [
        "App Retargeting & Analytics",
        "Full ASO Strategy",
        "Dedicated Mobile Ads Manager",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is mobile marketing?",
      answer:
        "Mobile marketing refers to promotional activities designed for smartphones, tablets, and mobile apps through SMS, push notifications, in-app ads, and mobile search.",
    },
    {
      question: "Is mobile marketing suitable for all businesses?",
      answer:
        "Yes. Any business with mobile users can benefit, especially e-commerce, service apps, local businesses, and D2C brands.",
    },
    {
      question: "Do you provide bulk SMS and WhatsApp marketing?",
      answer:
        "Yes. We provide both promotional and transactional SMS & WhatsApp messaging with detailed reports and delivery tracking.",
    },
    {
      question: "What is App Store Optimization (ASO)?",
      answer:
        "ASO is the process of optimizing your app’s listing on Google Play or App Store to improve visibility, downloads, and conversions.",
    },
    {
      question: "How do you measure mobile campaign performance?",
      answer:
        "We track key metrics such as installs, click-through rate, open rate, retention rate, and cost per conversion to measure success.",
    },
    {
      question: "Do you support both Android and iOS?",
      answer:
        "Yes. Our strategies are tailored to both platforms for maximum reach and impact.",
    },
  ],
};
export const VideoMarketingPageDetails = {
  SeoName: {
    seotitle: "VideoMarketingPageDetailsseo",
  },
  title: "Video Marketing Services",
  subtitle:
    "Harness the power of visual storytelling to captivate your audience, build trust, and drive conversions across all digital platforms.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Tell Your Brand Story Visually",
    heading: "Professional Video Marketing Solutions That Convert",
    description:
      "Leor Media creates engaging video content for YouTube, social media, websites, and ads to help businesses stand out, build emotional connections, and improve online visibility.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Explainer & Promo Videos",
      description: "Simplify complex ideas with clear, animated videos.",
      details: [
        "2D/3D Animation Options",
        "Script Writing & Voiceovers",
        "Brand-Focused Storytelling",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Social Media Video Ads",
      description: "Grab attention with thumb-stopping video content.",
      details: [
        "Instagram Reels & TikTok Videos",
        "Facebook & YouTube Ad Creatives",
        "Optimized for Engagement & Shares",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Corporate Videos",
      description: "Professional brand videos that reflect your identity.",
      details: [
        "Office Shoots & Interviews",
        "Culture & Team Highlights",
        "HD & 4K Production Quality",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Product Demos & Reviews",
      description: "Showcase your product features and benefits visually.",
      details: [
        "Unboxing & Use-Case Videos",
        "Voice-Over or On-Camera Delivery",
        "Custom Motion Graphics",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Video SEO & YouTube Optimization",
      description: "Rank higher and increase views on your videos.",
      details: [
        "Keyword-Rich Titles & Descriptions",
        "Thumbnail Design & Metadata Optimization",
        "Playlist & Channel Strategy",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Video Ad Campaign Management",
      description: "Drive leads through targeted video advertising.",
      details: [
        "YouTube TrueView & In-Stream Ads",
        "Audience Retargeting",
        "Budget & Performance Optimization",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Video Pack",
      price: "",
      features: [
        "1 Social Media Promo Video",
        "Basic Editing & Branding",
        "Up to 60 Seconds Duration",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Video Strategy",
      price: "",
      features: [
        "2–3 High-Quality Videos",
        "YouTube Channel Setup & SEO",
        "Ad-Ready Formats Included",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Full Video Marketing Suite",
      price: "",
      features: [
        "Script, Shoot & Edit Package",
        "Motion Graphics + Voice Over",
        "YouTube & Video Ad Campaigns",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What types of videos do you create?",
      answer:
        "We create explainer videos, product demos, promo videos, YouTube content, social media reels, and corporate videos tailored to your goals.",
    },
    {
      question: "Can you help us with video ads?",
      answer:
        "Yes. We not only create ad-friendly videos but also run and optimize YouTube and social media ad campaigns for maximum ROI.",
    },
    {
      question: "Do you offer scripting and voiceovers?",
      answer:
        "Absolutely. We provide scriptwriting, voice-over recording, and background music for all video types.",
    },
    {
      question: "How long does a typical video project take?",
      answer:
        "Depending on complexity, a video project may take anywhere from 5 to 15 days including edits and approvals.",
    },
    {
      question: "Can I use the videos on my website and social media?",
      answer:
        "Yes. All videos are delivered in formats suitable for web, mobile, YouTube, and social media platforms.",
    },
    {
      question: "Do you support 2D and 3D animation?",
      answer:
        "Yes, we offer both 2D and 3D animation options based on your business needs and project type.",
    },
  ],
};
export const LocalSeoAndMarketingPageDetails = {
  SeoName: {
    seotitle: "LocalSeoAndMarketingPageDetailsseo",
  },
  title: "Local SEO & Marketing Services",
  subtitle:
    "Boost your visibility in local search results and attract more nearby customers with our targeted local marketing strategies.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Be Found by Customers Near You",
    heading: "Local SEO Optimization & Hyperlocal Marketing",
    description:
      "Leor Media helps your business rank higher in Google Maps and local search with verified listings, customer reviews, location pages, and community engagement strategies.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Google Business Profile Optimization",
      description: "Stand out in Maps & local searches.",
      details: [
        "Profile Setup or Audit",
        "Service Areas & Hours",
        "Geo-Tagged Photos & Posts",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Local Citation Building",
      description: "Improve your online presence across local directories.",
      details: [
        "NAP Consistency (Name, Address, Phone)",
        "Top Business Listings (Justdial, Sulekha, Yelp)",
        "Industry-Specific Directory Submissions",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Location-Based SEO",
      description: "Rank higher for local keywords.",
      details: [
        "Geo-Targeted Keyword Research",
        "City & Area Landing Pages",
        "Localized Blog & Content Strategy",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Customer Review Generation",
      description: "Build trust with authentic local reviews.",
      details: [
        "Review Request Campaigns",
        "Reputation Monitoring & Alerts",
        "Respond to Negative Reviews",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Local Ad Campaigns",
      description: "Reach local customers via search and maps ads.",
      details: [
        "Google Local Services Ads",
        "Location Extensions in Search Ads",
        "Hyperlocal Geo-Fencing Ads",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Local Analytics & Insights",
      description: "Track your performance in your target region.",
      details: [
        "Map Impressions & Clicks",
        "Call & Direction Tracking",
        "Competitor Benchmarking",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Local Presence",
      price: "",
      features: [
        "Google Profile Setup",
        "NAP Listings (5–10)",
        "1 Location Page",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Local SEO Plan",
      price: "",
      features: [
        "Profile Optimization + Posts",
        "Local Keywords & Blog",
        "10–20 Directory Listings",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Local Domination",
      price: "",
      features: [
        "Multi-Location Strategy",
        "Review & Reputation Management",
        "Google Ads for Local Leads",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is Local SEO and why is it important?",
      answer:
        "Local SEO helps your business appear in search results when nearby customers search for your services. It boosts visibility, foot traffic, and local leads.",
    },
    {
      question: "Can you help me appear on Google Maps?",
      answer:
        "Yes. We optimize your Google Business Profile for Maps visibility, with categories, images, posts, and service coverage updates.",
    },
    {
      question: "How do reviews affect my local ranking?",
      answer:
        "Customer reviews significantly impact your rankings and trust level. We help you gather positive reviews and manage reputation actively.",
    },
    {
      question: "What are citations and why do they matter?",
      answer:
        "Citations are mentions of your business details across the web. Consistent citations strengthen local authority and SEO rankings.",
    },
    {
      question: "Will I get reports on my local performance?",
      answer:
        "Yes. We provide insights like map clicks, direction requests, call volume, and how users find your business locally.",
    },
    {
      question: "Do you support businesses with multiple locations?",
      answer:
        "Absolutely. We create a local strategy tailored for each branch with location pages, listings, and geo-targeted content.",
    },
  ],
};
export const EcommerceMarketingPageDetails = {
  SeoName: {
    seotitle: "EcommerceMarketingPageDetailsseo",
  },
  title: "Ecommerce Marketing Services",
  subtitle:
    "Grow your online store traffic, improve conversions, and increase repeat sales with our full-funnel ecommerce marketing solutions.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Drive Sales, Not Just Traffic",
    heading: "End-to-End Digital Marketing for Online Stores",
    description:
      "Leor Media helps eCommerce brands grow through proven SEO, PPC, email flows, automation, and more. Whether you sell fashion, electronics, or groceries — we scale your store the smart way.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Ecommerce SEO",
      description: "Improve your product rankings & category visibility.",
      details: [
        "Product Schema & Structured Data",
        "Optimized Category & Product Descriptions",
        "Technical SEO for Store Speed & Indexing",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Paid Advertising for Products",
      description: "Boost conversions with smart paid campaigns.",
      details: [
        "Google Shopping Ads",
        "Dynamic Retargeting on Meta & Instagram",
        "Seasonal Sale Campaigns",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Email & SMS Marketing",
      description: "Nurture your customers with personalized messaging.",
      details: [
        "Abandoned Cart Recovery",
        "Welcome & Win-Back Flows",
        "Flash Sale Announcements",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Conversion Rate Optimization",
      description: "Turn visitors into buyers with better UX.",
      details: [
        "A/B Testing of Product Pages",
        "Checkout Funnel Optimization",
        "Trust Signals & Reviews",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Marketplace Management",
      description: "Sell better on Amazon, Flipkart & other platforms.",
      details: [
        "Product Listing Optimization",
        "Ad Management & Bidding",
        "Ratings & Feedback Strategy",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Analytics & Reporting",
      description: "Track performance and revenue sources.",
      details: [
        "Sales Funnel Dashboards",
        "Multi-Channel Attribution",
        "Customer Lifetime Value Metrics",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Store Booster",
      price: "",
      features: [
        "Product SEO Setup",
        "Cart Recovery Emails",
        "Google Shopping Setup",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Ecommerce Plan",
      price: "",
      features: [
        "SEO + Meta Ads",
        "Conversion Optimization",
        "Weekly Campaigns",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Scale Suite",
      price: "",
      features: [
        "Marketplace + Website Ads",
        "Automated Workflows",
        "Dedicated Account Manager",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Do you work with Shopify or WooCommerce stores?",
      answer:
        "Yes. We work with Shopify, WooCommerce, Magento, BigCommerce, and other platforms with full integration capabilities.",
    },
    {
      question: "Can you run paid ads for my product catalog?",
      answer:
        "Absolutely. We manage Google Shopping Ads, Facebook dynamic product ads, and offer conversion-focused ad strategies.",
    },
    {
      question: "How can you reduce abandoned carts?",
      answer:
        "Through automated email & SMS recovery flows, personalized discount triggers, and optimization of checkout UX.",
    },
    {
      question: "Will I get reports on sales performance?",
      answer:
        "Yes. We provide clear analytics dashboards, traffic vs. conversion insights, and campaign-wise revenue tracking.",
    },
    {
      question: "Can you help me sell on Amazon or Flipkart?",
      answer:
        "Yes. We assist with product listing optimization, ads, seller ranking strategy, and ratings improvement.",
    },
    {
      question: "Do you offer full store management?",
      answer:
        "While we don’t fulfill orders, we offer end-to-end marketing, catalog management guidance, and growth consulting.",
    },
  ],
};
export const MarketingAutomationPageDetails = {
  SeoName: {
    seotitle: "MarketingAutomationPageDetailsseo",
  },
  title: "Marketing Automation Services",
  subtitle:
    "Automate, personalize, and scale your marketing with smart tools that drive engagement and conversions.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Smarter Marketing, Better ROI",
    heading: "Automate Customer Journeys & Nurture Leads Efficiently",
    description:
      "Leor Media helps businesses streamline their marketing workflows using automation tools like HubSpot, Mailchimp, ActiveCampaign, and more. From lead nurturing to customer retention — automate it all with precision.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Lead Nurturing Automation",
      description: "Convert leads into customers with tailored workflows.",
      details: [
        "Behavior-Based Email Sequences",
        "Timed Follow-Ups & Notifications",
        "CRM Integrations for Contact Sync",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Customer Segmentation & Triggers",
      description: "Deliver messages based on behavior and lifecycle stage.",
      details: [
        "Segment Users by Interests & Actions",
        "Trigger Emails/SMS on Events",
        "Personalized Journeys at Scale",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Cart Recovery & Product Flows",
      description: "Bring users back with contextual nudges.",
      details: [
        "Abandoned Cart Emails/SMS",
        "Product Reminder Notifications",
        "Upsell & Cross-Sell Sequences",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Multi-Channel Marketing",
      description: "Engage across email, SMS, WhatsApp, and web.",
      details: [
        "Unified Campaign Dashboards",
        "Smart Drip Campaigns",
        "User Path Visualization",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Analytics & Optimization",
      description: "Track performance and optimize automatically.",
      details: [
        "Open, Click, and Conversion Rates",
        "A/B Testing Automation",
        "Workflow Heatmaps & Drop-offs",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Tool Integrations & Setup",
      description: "We integrate and configure the right platforms.",
      details: [
        "HubSpot, ActiveCampaign, Klaviyo, Zoho",
        "CRM & CMS Integrations",
        "Custom API-Based Automation",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Automation Kit",
      price: "",
      features: [
        "Email Flows Setup",
        "Lead Form to Email Journey",
        "Cart Recovery Workflow",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Automation Suite",
      price: "",
      features: [
        "CRM Integration",
        "Multi-Step Nurturing",
        "Analytics Dashboard",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Automation Engine",
      price: "",
      features: [
        "Custom Platform Integration",
        "Omnichannel Journeys",
        "Dedicated Workflow Specialist",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Which tools do you use for marketing automation?",
      answer:
        "We work with leading platforms like HubSpot, Mailchimp, ActiveCampaign, Klaviyo, and Zoho — based on your business needs.",
    },
    {
      question: "Can you set up cart recovery emails for my store?",
      answer:
        "Yes. We set up automated cart abandonment flows for Shopify, WooCommerce, and custom eCommerce sites.",
    },
    {
      question: "Is multi-channel automation possible?",
      answer:
        "Absolutely. We create journeys across email, SMS, WhatsApp, and push notifications for complete engagement.",
    },
    {
      question: "Will I be able to track the effectiveness of automation?",
      answer:
        "Yes. We provide analytics dashboards showing open/click rates, conversion tracking, and funnel insights.",
    },
    {
      question: "Can you integrate automation with my CRM?",
      answer:
        "Yes. We integrate with CRMs like Zoho, Salesforce, HubSpot, or custom systems to sync data and trigger flows.",
    },
    {
      question: "Do you offer full service setup or only consulting?",
      answer:
        "We offer both — hands-on implementation as well as consulting and training based on your needs.",
    },
  ],
};
export const RemarketingRetargetingPageDetails = {
  SeoName: {
    seotitle: "RemarketingRetargetingPageDetailsseo",
  },
  title: "Remarketing & Retargeting Services",
  subtitle:
    "Re-engage lost visitors and turn window shoppers into paying customers with strategic ad campaigns.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Win Back Customers, Maximize ROI",
    heading: "Target High-Intent Audiences with Smart Remarketing",
    description:
      "Leor Media helps you set up and run data-driven remarketing and retargeting campaigns on platforms like Google, Facebook, Instagram, and more — ensuring your brand stays top-of-mind and brings users back to convert.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Google Ads Remarketing",
      description: "Reconnect with users via display and search ads.",
      details: [
        "Tag-Based Audiences for Website Visitors",
        "Dynamic Product Remarketing",
        "YouTube Video Remarketing",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Facebook & Instagram Retargeting",
      description: "Engage users where they scroll daily.",
      details: [
        "Custom & Lookalike Audience Campaigns",
        "Retarget Product Viewers & Abandoned Carts",
        "Carousel, Video & Stories Formats",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Cross-Platform Ad Sync",
      description: "Unified strategy across all major ad platforms.",
      details: [
        "Google, Meta, LinkedIn, YouTube, Twitter",
        "Real-Time Pixel & Event Tracking",
        "Omnichannel Funnel Mapping",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Dynamic Product Ads",
      description: "Show the exact product users viewed earlier.",
      details: [
        "E-commerce Retargeting Catalog Setup",
        "Real-Time Price & Inventory Sync",
        "Abandoned Product Reminder Campaigns",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Audience Segmentation & Funnels",
      description: "Granular control over remarketing journeys.",
      details: [
        "Segment Based on Time-on-Site, Bounce, Scroll",
        "Cold vs Warm vs Hot User Funnels",
        "Exclusion & Frequency Rules",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Conversion Tracking & Optimization",
      description: "Optimize for return on ad spend (ROAS).",
      details: [
        "A/B Testing Creative & Offers",
        "Click-Through to Conversion Attribution",
        "Smart Bidding Strategies",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Remarketing Plan",
      price: "",
      features: [
        "Google Display Retargeting",
        "1 Custom Audience",
        "Basic Pixel Setup",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Multi-Platform Retargeting",
      price: "",
      features: [
        "Google + Facebook Setup",
        "Dynamic Product Ads",
        "Advanced Tracking + Funnels",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Advanced E-commerce Remarketing",
      price: "",
      features: [
        "Cross-Platform Strategy",
        "Catalog Feed + Real-Time Sync",
        "Omnichannel Campaign Management",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is the difference between remarketing and retargeting?",
      answer:
        "Remarketing typically refers to email or direct outreach, while retargeting uses paid ads to re-engage users who visited your website or app.",
    },
    {
      question: "Can I retarget users across multiple platforms?",
      answer:
        "Yes. We can run synced retargeting campaigns on Google, Meta (Facebook/Instagram), YouTube, and more.",
    },
    {
      question: "Do you offer product-specific retargeting for e-commerce?",
      answer:
        "Absolutely. We set up dynamic ads that show previously viewed or abandoned products to users on multiple platforms.",
    },
    {
      question: "Is conversion tracking included?",
      answer:
        "Yes. We implement full conversion tracking with pixels, events, and analytics integration to measure ROI precisely.",
    },
    {
      question: "Will users see my ads too frequently?",
      answer:
        "No. We use frequency caps and time windows to avoid overexposure and maintain a positive brand experience.",
    },
    {
      question: "Do I need to provide creative assets?",
      answer:
        "You can, but we also offer ad copywriting, creative design, and testing support as part of our packages.",
    },
  ],
};
export const InfluencerMarketingPageDetails = {
  SeoName: {
    seotitle: "InfluencerMarketingPageDetailsseo",
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

//multimedia
export const MultiMediaCompany = {
  coverimage: GraphicDesigningCoverImage,
  title: "Multimedia",
  subtitle:
    "Leor Media stands as a creative powerhouse in multimedia, design, and branding solutions.",
  coverImage: {
    src: GraphicDesigningCoverImage, // Update this path to the actual image path
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Design That Tells Your Brand Story.",
    heading: "Creative Designs That Make Your Business Shine.",
    description:
      "At Leor Media, we bring your ideas to life with compelling visuals and brand storytelling. From logos to motion graphics, our multimedia services are designed to captivate, communicate, and convert.",
  },

  services: [
    {
      icon: logodesign,
      title: "Logo Design",
      description:
        "Build a memorable identity with custom logo designs that reflect your brand’s essence, professionalism, and uniqueness.",
      link: "/services/multimedia-company/logo-design",
    },
    {
      icon: BrandIdentityDesign,
      title: "Brand Identity Design",
      description:
        "Establish a strong brand presence with cohesive visuals including logo, color palettes, typography, and brand assets.",
      link: "/services/multimedia-company/brand-identity-design",
    },
    {
      icon: PrintDesign,
      title: "Print Design",
      description:
        "Create visually stunning print materials — from business cards to catalogs — that leave a lasting impression offline.",
      link: "/services/multimedia-company/print-design",
    },
    {
      icon: WebDesign,
      title: "Web Design",
      description:
        "Deliver engaging user experiences with modern, visually appealing, and responsive website designs tailored to your goals.",
      link: "/services/multimedia-company/web-design",
    },
    {
      icon: UserInterfaceDesign,
      title: "User Interface Design",
      description:
        "Design intuitive, user-friendly interfaces for websites and applications that prioritize ease of use and visual flow.",
      link: "/services/multimedia-company/user-interface-design",
    },
    {
      icon: UserExperienceDesign,
      title: "User Experience Design",
      description:
        "Enhance user satisfaction through structured UX strategies that improve accessibility, engagement, and conversion.",
      link: "/services/multimedia-company/user-experience-design",
    },
    {
      icon: PackagingDesign,
      title: "Packaging Design",
      description:
        "Stand out on the shelves with eye-catching packaging that blends creativity, brand identity, and consumer psychology.",
      link: "/services/multimedia-company/packaging-design",
    },
    {
      icon: PosterandFlyerDesign,
      title: "Poster and Flyer Design",
      description:
        "Promote events, products, and campaigns with professionally designed posters and flyers that grab attention instantly.",
      link: "/services/multimedia-company/poster-and-flyer-design",
    },
    {
      icon: BrochureDesign,
      title: "Brochure Design",
      description:
        "Communicate your business offerings clearly and creatively through beautifully designed brochures for print and digital use.",
      link: "/services/multimedia-company/brochure-design",
    },
    {
      icon: BannerDesign,
      title: "Banner Design",
      description:
        "From websites to social platforms, our banner designs help you showcase promotions, offers, and announcements effectively.",
      link: "/services/multimedia-company/banner-design",
    },
    {
      icon: IllustationServices,
      title: "Illustration Services",
      description:
        "Add artistic flair to your brand with custom illustrations that enhance storytelling and deliver a unique visual identity.",
      link: "/services/multimedia-company/illustration-services",
    },
    {
      icon: InfographicDesign,
      title: "Infographic Design",
      description:
        "Transform complex data into visually engaging infographics that educate, inform, and captivate your audience.",
      link: "/services/multimedia-company/infographic-design",
    },
    {
      icon: SocialMediaGraphics,
      title: "Social Media Graphics",
      description:
        "Maximize social engagement with visually striking, branded content for platforms like Instagram, Facebook, LinkedIn, and more.",
      link: "/services/multimedia-company/social-media-graphics",
    },
    {
      icon: eBookandPrintBook,
      title: "eBook and Print Book Cover Design",
      description:
        "Design professional, high-impact covers for eBooks and print publications that draw readers and reflect your brand tone.",
      link: "/services/multimedia-company/ebook-and-print-book-cover-design",
    },
    {
      icon: TShirtandMerchandiseDesign,
      title: "TShirt and Merchandise Design",
      description:
        "Extend your brand through creative merchandise designs for t-shirts, mugs, packaging, and other physical goods.",
      link: "/services/multimedia-company/t-shirt-and-merchandise-design",
    },
    {
      icon: SignageandBillboardDesign,
      title: "Signage and Billboard Design",
      description:
        "Capture public attention with bold, effective outdoor signage and billboard designs built for maximum visibility.",
      link: "/services/multimedia-company/signage-and-billboard-design",
    },
    {
      icon: BusinessCard,
      title: "Business Card and Stationery Design",
      description:
        "Make lasting impressions with premium business cards, letterheads, and stationery that reflect your brand professionalism.",
      link: "/services/multimedia-company/business-card-and-stationery-design",
    },
    {
      icon: RenderingandVisualizationBannerDesign,
      title: "Rendering and Visualization",
      description:
        "Showcase architectural, interior, or product designs with 3D rendering and visualization services for presentations and marketing.",
      link: "/services/multimedia-company/rendering-and-visualization",
    },
    {
      icon: MotionGraphics,
      title: "Motion Graphics and Animation",
      description:
        "Bring your message to life with dynamic motion graphics, explainer videos, logo animations, and interactive media content.",
      link: "/services/multimedia-company/motion-graphics-and-animation",
    },
    {
      icon: PhotoEditing,
      title: "Photo Editing and Retouching",
      description:
        "Enhance images with professional photo editing, retouching, background removal, and visual corrections for media and marketing.",
      link: "/services/multimedia-company/photo-editing-and-retouching",
    },
  ],
};
export const LogoDesignPageDetails = {
  SeoName: {
    seotitle: "LogoDesignPageDetailsseo",
  },
  section2: {
    tagline: "Create a Memorable First Impression",
    heading: "Professional Logo Design Services",
    description:
      "Leor Media crafts distinctive and impactful logos tailored to your brand identity. From startups to enterprises, our logos are designed to be memorable, scalable, and timeless.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Custom Logo Design",
      description: "Unique logos crafted to reflect your brand vision.",
      details: [
        "Concept Development & Sketching",
        "Multiple Initial Concepts",
        "2D & Minimalist Styles",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Research & Typography",
      description: "Logos that align with your audience and market.",
      details: [
        "Competitive Analysis",
        "Font Pairing & Color Psychology",
        "Style Guidelines",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Logo Variants & Usage",
      description: "Designs ready for every platform and print material.",
      details: [
        "Horizontal & Vertical Versions",
        "Black & White / Inverted Logos",
        "Favicon & Social Media Variants",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Source Files & Formats",
      description: "Delivery of all editable and print-ready files.",
      details: [
        "AI, EPS, SVG, PNG, JPEG formats",
        "High-resolution for print",
        "Web-optimized versions",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Rebranding & Logo Refresh",
      description: "Modernize your brand with a logo makeover.",
      details: [
        "Design Evolution Strategy",
        "Keep Brand Essence Intact",
        "Improve Versatility & Impact",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Animated Logo Design",
      description: "Bring your brand to life with motion.",
      details: [
        "Intro Animations for Videos",
        "Looping GIFs for Social Media",
        "Lottie Files for Web & Apps",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Logo Pack",
      price: "",
      features: [
        "2 Initial Concepts",
        "1 Final Editable Logo",
        "Basic Formats Only",
        "Delivery in 3 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Identity Logo",
      price: "",
      features: [
        "4 Concepts + Revisions",
        "Full File Formats + Guidelines",
        "Social Media & Favicon Variants",
        "Delivery in 5 Days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Brand Logo",
      price: "",
      features: [
        "6 Custom Concepts",
        "Animated Logo + Source Files",
        "Brand Style Sheet Included",
        "Dedicated Designer Support",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Professional Logo Design Services",
  subtitle:
    "Let your logo speak volumes. Leor Media offers creative and strategic logo designs that elevate your brand identity.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "How many logo concepts will I receive?",
      answer:
        "Depending on the package, you'll receive 2 to 6 initial concepts, with revisions to reach the final design.",
    },
    {
      question: "Will I get source files for my logo?",
      answer:
        "Yes, we provide all industry-standard formats including AI, EPS, PNG, JPEG, and SVG.",
    },
    {
      question: "Can I request revisions after delivery?",
      answer:
        "Absolutely. Each package includes a set number of revisions to fine-tune your logo until you're satisfied.",
    },
    {
      question: "Do you offer animated logos?",
      answer:
        "Yes. Our premium package includes animated logo options ideal for videos and websites.",
    },
    {
      question: "Can I use the logo for commercial purposes?",
      answer:
        "Yes, all logo rights are transferred to you after final delivery and approval.",
    },
    {
      question: "Can you redesign my existing logo?",
      answer:
        "We offer rebranding and logo refresh services while retaining your brand's core identity.",
    },
  ],
};

export const BrandIdentityDesignPageDetails = {
  SeoName: {
    seotitle: "BrandIdentityDesignPageDetailsseo",
  },
  section2: {
    tagline: "Build a Strong, Consistent Brand Presence",
    heading: "Comprehensive Brand Identity Design Services",
    description:
      "Leor Media helps businesses establish a cohesive and memorable brand identity. From logo to typography and brand voice, we craft elements that speak your brand language across all platforms.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Logo & Visual Mark",
      description:
        "Design of logos, symbols, and icons that represent your brand essence.",
      details: [
        "Primary & Secondary Logos",
        "Responsive Design Variants",
        "Symbol/Icon Creation",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Color Palette & Typography",
      description:
        "Establishing a visual language with color and type that reflects your brand's tone.",
      details: [
        "Primary & Secondary Colors",
        "Typography Systems",
        "Accessibility Standards",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Voice & Messaging",
      description:
        "Definition of tone, language, and voice for consistent communication.",
      details: [
        "Tone of Voice Guidelines",
        "Taglines & Slogans",
        "Messaging Framework",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Visual Elements & Icons",
      description:
        "Custom iconography, graphics, and supporting visuals to enhance your identity.",
      details: [
        "Illustrations & Line Art",
        "Brand Textures & Patterns",
        "Icon Set Design",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Style Guide",
      description:
        "A complete manual to ensure brand consistency across teams and platforms.",
      details: ["Logo Usage Rules", "Color & Font Specs", "Do’s & Don’ts"],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Stationery & Identity Materials",
      description:
        "Business cards, letterheads, and envelopes aligned with your new identity.",
      details: [
        "Corporate Stationery Design",
        "Email Signature Templates",
        "Presentation Decks",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Essential Identity Kit",
      price: "",
      features: [
        "Logo + Color Palette",
        "Typography Guidelines",
        "Basic Brand Voice Doc",
        "Delivery in 5 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Complete Brand Identity",
      price: "",
      features: [
        "Logo System & Fonts",
        "Voice + Style Guidelines",
        "Stationery Templates",
        "Delivery in 7–10 Days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Corporate Brand Suite",
      price: "",
      features: [
        "Full Identity Package",
        "Brand Manual PDF",
        "Team Usage Training (Docs)",
        "Dedicated Brand Strategist",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Identity Design Services",
  subtitle:
    "Craft a powerful brand presence with strategic identity design. From visuals to voice, we help you tell your story with clarity and style.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is included in a brand identity package?",
      answer:
        "Our brand identity package includes logo design, color palette, typography, voice & messaging guidelines, and usage documentation.",
    },
    {
      question: "Can you redesign my existing brand identity?",
      answer:
        "Yes. We offer brand refresh services that modernize your look and feel while retaining your brand essence.",
    },
    {
      question: "Will I get a style guide?",
      answer:
        "Absolutely. All packages include a basic or full brand style guide depending on your selection.",
    },
    {
      question: "Do you design branded stationery as well?",
      answer:
        "Yes. Our services include business cards, letterheads, email signatures, and more.",
    },
    {
      question: "How long does a full brand identity project take?",
      answer:
        "A complete brand identity project typically takes 7–10 business days, depending on scope and feedback rounds.",
    },
    {
      question: "Can I request edits or revisions?",
      answer:
        "Yes, we include multiple revision rounds in every package to ensure your satisfaction.",
    },
  ],
};

export const PrintDesignPageDetails = {
  SeoName: {
    seotitle: "PrintDesignPageDetailsseo",
  },
  section2: {
    tagline: "Make a Lasting Impression with Print",
    heading: "Professional Print Design Services",
    description:
      "We create high-quality print designs that communicate your brand message effectively and leave a lasting impression. From business cards to brochures, our designs are crafted for maximum impact.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Business Cards",
      description:
        "Creative and professional business card designs to represent you in style.",
      details: [
        "Single or Double-Sided",
        "Custom Layouts",
        "Print-Ready Files",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Flyers & Posters",
      description:
        "Bold, eye-catching designs for promotions, events, and campaigns.",
      details: [
        "A4, A5 & Custom Sizes",
        "High-Resolution Layouts",
        "Event Branding Materials",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brochures & Catalogs",
      description:
        "Informative and stylish multi-page layouts for showcasing your products or services.",
      details: [
        "Bi-Fold & Tri-Fold",
        "Product & Service Catalogs",
        "Custom Layout Design",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Letterheads & Envelopes",
      description:
        "Branded stationery for official and business correspondence.",
      details: [
        "Print-Ready Templates",
        "Professional Corporate Design",
        "Coordinated Brand Aesthetic",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Magazines & Booklets",
      description:
        "Beautiful editorial layouts for magazines, books, and multi-page publications.",
      details: [
        "Cover Design",
        "Page-by-Page Layout",
        "Print File Preparation",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Event & Invitation Cards",
      description:
        "Custom designs for invitations, greetings, thank-you notes and more.",
      details: [
        "Wedding & Corporate Event Cards",
        "Seasonal Greetings",
        "Custom Illustrations",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Print Pack",
      price: "",
      features: [
        "Business Card + Flyer",
        "Print-Ready PDF Files",
        "Delivery in 3–4 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Essentials",
      price: "",
      features: [
        "Cards, Letterhead, Envelope",
        "Flyer or Brochure Design",
        "Unlimited Minor Revisions",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Pro Print Suite",
      price: "",
      features: [
        "Brochures, Posters, Catalogs",
        "Custom Layouts",
        "Up to 10 Pages Included",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Print Design Services",
  subtitle:
    "Elevate your brand with striking print design. Our expert layouts ensure your message is beautifully communicated on paper.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you provide print-ready files?",
      answer:
        "Yes, all designs are delivered in high-resolution, print-ready formats including PDF, AI, and EPS.",
    },
    {
      question: "Can I request custom sizes?",
      answer:
        "Absolutely! We design for all standard and custom dimensions based on your printing requirements.",
    },
    {
      question: "Will I get source files?",
      answer:
        "Yes, source files are included in most packages or available upon request.",
    },
    {
      question: "Can you handle printing as well?",
      answer:
        "We focus on design, but we can recommend trusted print vendors or coordinate print-ready output.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we offer custom pricing for bulk design packages or recurring design needs.",
    },
    {
      question: "Can I get a design revised?",
      answer:
        "All packages include a fixed number of revision rounds. Additional revisions are also available.",
    },
  ],
};

export const WebDesignPageDetails = {
  SeoName: {
    seotitle: "WebDesignPageDetailsseo",
  },
  section2: {
    tagline: "Visual Impact Meets Seamless Usability",
    heading: "Creative Web Design Services",
    description:
      "We specialize in crafting visually stunning and user-friendly websites that reflect your brand’s personality. Our multimedia-centric designs ensure every click captivates, converts, and communicates.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Responsive Website Design",
      description:
        "Fully adaptive layouts that look perfect on desktop, tablet, and mobile devices.",
      details: [
        "Pixel-Perfect Responsive Layouts",
        "Optimized for All Screen Sizes",
        "Interactive Navigation Design",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Landing Page Design",
      description:
        "Single-page designs built to promote campaigns, products, or events with bold visuals and clear CTAs.",
      details: [
        "Conversion-Focused Layouts",
        "Custom Scroll Animation",
        "Integrated Multimedia Elements",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Portfolio & Showcase Websites",
      description:
        "Elegant designs tailored for artists, studios, and creators to showcase their best work.",
      details: [
        "High-Resolution Image Display",
        "Gallery & Carousel Options",
        "Cinematic Visual Flow",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand-Centric Web Aesthetics",
      description:
        "Web designs that harmonize with your brand’s visual identity, from colors to typography.",
      details: [
        "Color Theory Application",
        "Font Pairing and Style Guides",
        "Moodboard-Based Design",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Multimedia Web Experience",
      description:
        "Integration of video, motion graphics, and animation to enhance storytelling and engagement.",
      details: [
        "Background Videos",
        "Micro-interactions & Transitions",
        "Lottie & GIF Integrations",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Website Redesign Services",
      description:
        "Modernize outdated sites with contemporary visual design, improved structure, and multimedia flair.",
      details: [
        "UI Refresh & UX Improvements",
        "Mobile Optimization",
        "Visual Storytelling Revamp",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Web Design",
      price: "",
      features: [
        "Single Page Design",
        "Mobile Friendly",
        "Basic Visual Elements",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Professional Design Pack",
      price: "",
      features: [
        "5 Pages Design",
        "Multimedia Integration",
        "Visual Brand Mapping",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Showcase Package",
      price: "",
      features: [
        "10+ Pages Design",
        "Animated Interactions",
        "Portfolio & Gallery Features",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Creative Web Design",
  subtitle:
    "Design-first websites that tell your story through stunning visuals, smooth interactions, and thoughtful layouts.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you offer design-only services?",
      answer:
        "Yes, we provide design mockups and prototypes that you or your developer can implement.",
    },
    {
      question: "Will my website design be mobile responsive?",
      answer:
        "Absolutely. All our designs are crafted with mobile responsiveness as a core priority.",
    },
    {
      question: "Can you redesign an existing site?",
      answer:
        "Yes, we specialize in modernizing outdated designs into visually captivating experiences.",
    },
    {
      question: "Do you design with branding in mind?",
      answer:
        "Yes, we deeply integrate your brand identity—colors, fonts, style—to ensure cohesive storytelling.",
    },
    {
      question: "Can multimedia elements be added?",
      answer:
        "Of course! We integrate video, animation, icons, and graphics to enhance your web experience.",
    },
    {
      question: "Do I get editable source files?",
      answer:
        "Yes, we deliver design assets in Figma, PSD, or XD based on your project scope.",
    },
  ],
};

export const UserInterfaceDesignPageDetails = {
  SeoName: {
    seotitle: "UserInterfaceDesignPageDetailsseo",
  },
  section2: {
    tagline: "Make Every Interaction Intuitive",
    heading: "User Interface (UI) Design Services",
    description:
      "We design elegant and engaging interfaces that enhance user interaction and visual harmony. Whether it's a web app, mobile screen, or dashboard, our UI designs are crafted to captivate and simplify.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Mobile App UI Design",
      description:
        "Designing sleek and modern interfaces for iOS and Android apps that feel native and look stunning.",
      details: [
        "Material & iOS Design Guidelines",
        "Touch-Friendly Components",
        "Minimalist Mobile Layouts",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Web Application UI",
      description:
        "Interfaces for dashboards, SaaS, and platforms that balance usability with sharp visual design.",
      details: [
        "User Flow-Based Layouts",
        "Clean, Modular UI Components",
        "Dark & Light Mode Variants",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Custom UI Kits & Libraries",
      description:
        "We build reusable UI component libraries that match your branding and design system.",
      details: [
        "Buttons, Forms, Cards, Tables",
        "Styled for Consistency",
        "Figma/Sketch/Adobe XD Based",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Dashboard & Analytics UI",
      description:
        "Data-heavy layouts designed for clarity, visual hierarchy, and beautiful chart integration.",
      details: [
        "Grid Systems for Tables & Graphs",
        "Color-Coded Metrics & KPIs",
        "Interactive Filters & States",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "UI for Games & Interactive Media",
      description:
        "Interfaces tailored for game HUDs, menu screens, or interactive experiences with visual storytelling.",
      details: [
        "Immersive Button & Icon Design",
        "Progress Trackers & UI Overlays",
        "Game Menu Flows",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "UI Prototyping & Animation",
      description:
        "Interactive mockups and UI flows that help visualize transitions, hover states, and usability.",
      details: [
        "Figma Interactive Prototypes",
        "Micro Animations & States",
        "Component Reusability",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic UI Design",
      price: "",
      features: [
        "3 Screens or Pages",
        "Mobile or Web Focused",
        "Delivery in Figma/XD",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Professional UI Pack",
      price: "",
      features: [
        "Up to 8 Screens",
        "Custom Components",
        "Prototyping Included",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium UI System",
      price: "",
      features: [
        "Complete App or Web UI",
        "Interactive Components",
        "UI Kit & Design Tokens",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "User Interface Design",
  subtitle:
    "Bring clarity and elegance to your digital experiences with interfaces that are functional, beautiful, and brand-consistent.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you only design or also develop UI?",
      answer:
        "We focus purely on design. We provide structured design files that developers can implement.",
    },
    {
      question: "What tools do you use for UI design?",
      answer:
        "We primarily use Figma, Adobe XD, and Sketch — depending on the client's preference.",
    },
    {
      question: "Can I get a UI kit along with the screens?",
      answer:
        "Yes, we can deliver a component-based UI kit including buttons, icons, modals, and typography.",
    },
    {
      question: "Do you follow mobile platform guidelines?",
      answer:
        "Yes, we design based on iOS Human Interface Guidelines and Android’s Material Design.",
    },
    {
      question: "Are interactive prototypes included?",
      answer:
        "In the professional and premium packages, yes — we include click-through and animated prototypes.",
    },
    {
      question: "Can you redesign my existing UI?",
      answer:
        "Absolutely. We analyze your current design and propose a modern, cleaner visual upgrade.",
    },
  ],
};

export const UserExperienceDesignPageDetails = {
  SeoName: {
    seotitle: "UserExperienceDesignPageDetailsseo",
  },
  section2: {
    tagline: "Design With the User in Mind",
    heading: "User Experience (UX) Design Services",
    description:
      "We craft meaningful digital journeys through strategy, structure, and empathy. From research to wireframes, our UX design process ensures your product is user-centric and purpose-driven.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "UX Research & Strategy",
      description:
        "Understanding your users through personas, interviews, and behavioral insights to shape a thoughtful experience.",
      details: [
        "User Interviews & Surveys",
        "Persona Development",
        "Journey Mapping",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Wireframing & Information Architecture",
      description:
        "Organizing content and designing skeletal layouts for apps, websites, and dashboards with clear flow.",
      details: [
        "Low/High Fidelity Wireframes",
        "Sitemap & Flow Diagrams",
        "Content Hierarchy Planning",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "UX Audit & Heuristic Evaluation",
      description:
        "Analyzing your current design for usability issues, cognitive load, and accessibility gaps.",
      details: [
        "Expert UX Review",
        "Heatmap & Funnel Analysis",
        "Actionable Redesign Suggestions",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Usability Testing",
      description:
        "Testing design prototypes or existing products with real users to validate ease-of-use and goal completion.",
      details: [
        "Task-Based Scenarios",
        "Remote or In-Person Testing",
        "Iterative Feedback Loops",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "UX for Mobile & Web",
      description:
        "Optimizing the user journey across platforms — from onboarding to task completion — for seamless interaction.",
      details: [
        "Tap-Friendly Navigation",
        "Progressive Disclosure",
        "Responsive Experience Flows",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Accessibility & Inclusivity Design",
      description:
        "Designing for all users including those with disabilities by implementing WCAG guidelines and inclusive UX.",
      details: [
        "Color Contrast & Readability",
        "Keyboard Navigation",
        "Alt Text & Screen Reader Support",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter UX Blueprint",
      price: "",
      features: [
        "Basic Wireframes (3-4 pages)",
        "User Flow Diagrams",
        "1 Round of Feedback",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Advanced UX Strategy",
      price: "",
      features: [
        "Full App Journey Mapping",
        "Wireframes + Flowcharts",
        "Usability Review Included",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise UX Design",
      price: "",
      features: [
        "UX Research + Testing",
        "Stakeholder Workshops",
        "Design + Handoff Materials",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "User Experience Design",
  subtitle:
    "We design intuitive digital experiences that align with your users’ needs, behavior, and expectations — transforming engagement into loyalty.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What’s the difference between UX and UI?",
      answer:
        "UX is about the overall experience and usability, while UI focuses on visual elements. We offer both as complementary services.",
    },
    {
      question: "Can you improve my existing UX?",
      answer:
        "Yes. We perform audits and provide recommendations to improve flow, navigation, and usability.",
    },
    {
      question: "Do you conduct usability testing?",
      answer:
        "Yes, both remote and in-person testing are available based on project scale.",
    },
    {
      question: "Which tools do you use?",
      answer:
        "We use Figma, Miro, Adobe XD, and Maze for wireframing, testing, and flow mapping.",
    },
    {
      question: "How long does a UX project take?",
      answer:
        "It depends on the project size. A typical UX strategy with wireframes takes 1–2 weeks.",
    },
    {
      question: "Can I get a UX-only package without UI?",
      answer:
        "Absolutely. UX is available as a standalone service for research, testing, and structure planning.",
    },
  ],
};

export const PackagingDesignPageDetails = {
  SeoName: {
    seotitle: "PackagingDesignPageDetailsseo",
  },
  section2: {
    tagline: "Turn Products Into Shelf Superstars",
    heading: "Packaging Design Services",
    description:
      "Your product’s packaging is the first impression that creates desire. We design innovative, practical, and brand-aligned packaging that connects with your audience at first glance.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Product Packaging Design",
      description:
        "Custom box, label, or container design that blends creativity with compliance and function.",
      details: [
        "Retail Box Design",
        "Pouches, Bottles, Tubes",
        "Label + Wrapper Layouts",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Eco-Friendly & Minimal Packaging",
      description:
        "Sustainable design solutions using recyclable, reusable, or minimalist styles with reduced print footprint.",
      details: [
        "Zero-Waste Design",
        "Minimal Ink Coverage",
        "Paper-Based Structure Design",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Luxury Packaging",
      description:
        "Premium finishes, tactile materials, and elegant visuals for high-end product appeal.",
      details: [
        "Foiling, Embossing, UV Effects",
        "Magnetic Closure Boxes",
        "Rigid Box Structures",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Food & Beverage Packaging",
      description:
        "FDA-compliant, fresh, and brand-evocative packaging for food products and drinks.",
      details: [
        "Pouch & Jar Label Design",
        "Nutrition Panel Setup",
        "Shelf Impact Visualization",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Packaging Prototyping & 3D Mockups",
      description:
        "Visualize your packaging in 3D renders before going to print — for perfect alignment with printers and investors.",
      details: [
        "High-Res Mockups",
        "Dieline Layout Assistance",
        "Realistic Shadows & Lighting",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Multi-Language & Export Ready Design",
      description:
        "Compliant with regulatory and export labeling requirements for global packaging needs.",
      details: [
        "Multi-Language Labeling",
        "GS1 Barcode Support",
        "Export-Friendly Typography",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Label Design",
      price: "",
      features: [
        "Single Product Variant",
        "Print-Ready PDF",
        "1 Feedback Round",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Packaging Design",
      price: "",
      features: ["Box + Label Design", "Dieline Setup", "Up to 2 Variants"],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Packaging Suite",
      price: "",
      features: [
        "Multiple Product Line Designs",
        "Mockups + Foil/Emboss Prep",
        "Compliance & Print Consulting",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Packaging Design",
  subtitle:
    "We blend form, function, and emotion to create packaging that stands out in-store, online, and in customers' hands.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Can you create dielines and mockups?",
      answer:
        "Yes, we create custom dielines and 3D mockups for packaging visualization and print readiness.",
    },
    {
      question: "What type of packaging can you design?",
      answer:
        "We design for boxes, jars, bottles, pouches, cartons, tubes, and more — for both physical and digital products.",
    },
    {
      question: "Do you follow food industry packaging standards?",
      answer:
        "Absolutely. We align with FDA/FSAA labeling requirements including nutrition tables and disclaimers.",
    },
    {
      question: "Will I get print-ready files?",
      answer:
        "Yes. You’ll receive high-resolution PDFs, CMYK format, and dieline-aligned print files.",
    },
    {
      question: "Can you work with my packaging printer?",
      answer:
        "We frequently coordinate with printers to ensure file compatibility, colors, and finishes.",
    },
    {
      question: "Do you offer eco-packaging solutions?",
      answer:
        "Yes, we specialize in minimal, recyclable, and compostable packaging design options.",
    },
  ],
};
export const PosterAndFlyerDesignPageDetails = {
  SeoName: {
    seotitle: "PosterAndFlyerDesignPageDetailsseo",
  },
  section2: {
    tagline: "Make Bold Statements That Grab Eyes",
    heading: "Poster & Flyer Design Services",
    description:
      "We design high-impact posters and flyers that turn heads, drive attendance, and communicate your message with clarity and flair — whether for print, digital, or both.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Event Poster Design",
      description:
        "Visually compelling posters for concerts, seminars, product launches, and exhibitions.",
      details: [
        "Custom Theme & Visual Concept",
        "Print + Digital Formats",
        "Attention-Grabbing Typography",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Promotional Flyer Design",
      description:
        "Single or double-sided flyers that highlight promotions, offers, menus, or services.",
      details: [
        "A4/A5 Layouts",
        "QR Integration",
        "Optimized for Handouts or Email",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Social Media Posters",
      description:
        "Flyer-style creative adapted for Instagram, Facebook, LinkedIn, and WhatsApp sharing.",
      details: [
        "Platform-Optimized Dimensions",
        "Branded Visual Templates",
        "High Engagement Layouts",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Campaign Poster Design",
      description:
        "Posters for political campaigns, awareness drives, community outreach, or brand storytelling.",
      details: [
        "Bold Messaging",
        "Community-Targeted Visuals",
        "Language Localization Support",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Festival & Holiday Posters",
      description:
        "Seasonal flyer/poster designs to promote sales, greetings, or cultural events.",
      details: [
        "Diwali, New Year, Eid, Christmas Themes",
        "Festive Color Schemes",
        "Personalized Messaging",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Flyer Content & Copywriting",
      description:
        "Effective text layout, catchy headlines, and concise call-to-action writing support.",
      details: [
        "CTA-Focused Copy",
        "Offer Structuring",
        "Clear Messaging Flow",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Flyer Design",
      price: "",
      features: ["One-Sided A5 Design", "1 Revision", "Digital + Print Files"],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Poster Pack",
      price: "",
      features: [
        "Event or Promo Poster",
        "Both Print + Web Versions",
        "Up to 2 Variants",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Flyer + Poster Combo",
      price: "",
      features: ["Multiple Sizes", "Copy Support", "Ready for Campaigns"],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Poster & Flyer Design",
  subtitle:
    "Deliver messages that stick — our designs help you attract, inform, and convert with style and clarity.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What sizes do you offer for posters and flyers?",
      answer:
        "We offer A3, A4, A5, and custom sizes. Digital versions are optimized for social and WhatsApp.",
    },
    {
      question: "Can you include a QR code or coupon on the flyer?",
      answer:
        "Yes, we can add QR codes, barcodes, or tear-away coupons as needed.",
    },
    {
      question: "Do you provide content or do I need to supply it?",
      answer:
        "We can work with your content or help you craft compelling text and headlines as part of the service.",
    },
    {
      question: "Can I get editable files for future use?",
      answer:
        "Yes, editable source files (like PSD or AI) are available on request or in premium packages.",
    },
    {
      question: "Are designs suitable for both print and digital?",
      answer:
        "Absolutely. All flyers and posters are optimized for high-resolution print and lightweight digital sharing.",
    },
    {
      question: "Can you design posters in regional languages?",
      answer:
        "Yes, we support multilingual layouts including Hindi, Telugu, Tamil, and more.",
    },
  ],
};
export const BrochureDesignPageDetails = {
  SeoName: {
    seotitle: "BrochureDesignPageDetailsseo",
  },
  section2: {
    tagline: "Present Your Brand in Pages That Speak",
    heading: "Brochure Design Services",
    description:
      "We create brochures that don’t just look good — they tell your story, explain your services, and convert readers into customers. Whether digital or printed, our designs reflect professionalism and purpose.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Corporate Brochure Design",
      description:
        "Build trust with stakeholders using sleek, professional brochures designed for presentations, proposals, or company profiles.",
      details: [
        "Company Profiles",
        "Investor & Capability Decks",
        "PDF + Print Ready",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Product Catalog Design",
      description:
        "List your product features, specifications, and pricing in a well-structured, visual catalog format.",
      details: [
        "Multi-Page Layout",
        "Pricing Tables & Icons",
        "Interactive PDFs Available",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Bi-Fold & Tri-Fold Brochures",
      description:
        "Creative fold layouts that organize key services and contact information in a compact, user-friendly format.",
      details: [
        "A4/A5 Folded Brochures",
        "Bleed Setup for Print",
        "Consistent Visual Hierarchy",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Event & Promotional Brochures",
      description:
        "Brochures for expos, conferences, and promotional handouts designed to highlight schedules, speakers, and offerings.",
      details: ["Expo Handouts", "Program Guides", "Sponsor Branding Ready"],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Digital Flipbook Brochures",
      description:
        "Turn brochures into interactive, page-flipping PDFs ideal for email, websites, and presentations.",
      details: ["Embedded Links", "Web-Optimized Size", "Responsive Layouts"],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Multilingual Brochures",
      description:
        "Reach wider audiences with brochures designed in multiple languages while keeping visual consistency intact.",
      details: [
        "Multi-Language Versions",
        "Cultural Sensitivity in Design",
        "Language Adaptation Services",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Fold Brochure",
      price: "",
      features: ["Bi-Fold or Tri-Fold", "Print-Ready PDF", "1 Revision Round"],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Corporate Multi-Page Brochure",
      price: "",
      features: [
        "Up to 8 Pages",
        "Custom Icons & Infographics",
        "Both Print & Digital Files",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Flipbook + Brochure Bundle",
      price: "",
      features: [
        "10+ Pages Brochure",
        "Interactive Flipbook",
        "PDF, HTML5 & Source Files",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Brochure Design",
  subtitle:
    "From business introductions to product showcases, our brochures transform information into visual persuasion tools.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Can you help with brochure content writing?",
      answer:
        "Yes, we offer content support including tone refinement, headlines, and section structuring.",
    },
    {
      question: "What formats do you deliver brochures in?",
      answer:
        "We provide high-resolution PDFs, print-ready files with bleeds, and interactive flipbooks if needed.",
    },
    {
      question: "Do you design both digital and print brochures?",
      answer:
        "Absolutely. All brochures are optimized for both print and screen use — depending on your use case.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Each package comes with at least one revision. More are included in standard and premium packages.",
    },
    {
      question: "Can you match our brand identity?",
      answer:
        "Yes. We fully align with your brand colors, fonts, voice, and visuals for consistency across your marketing.",
    },
    {
      question: "Do you support multi-language brochures?",
      answer:
        "Yes, we can design in Hindi, Telugu, Tamil, and other languages, keeping the layout balanced and aligned.",
    },
  ],
};

export const BannerDesignPageDetails = {
  SeoName: {
    seotitle: "BannerDesignPageDetailsseo",
  },
  section2: {
    tagline: "Capture Attention at Every Scroll & Space",
    heading: "Banner Design Services",
    description:
      "Whether you're promoting online or offline, our banners are crafted to stand out — attracting clicks, increasing engagement, and delivering your message with visual impact. From digital ads to large-format prints, we cover it all.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Web & Display Ad Banners",
      description:
        "Static or animated banners designed for Google Ads, Facebook Ads, and programmatic campaigns.",
      details: [
        "All Standard Sizes (GDN, FB, Insta)",
        "Click-Friendly Layouts",
        "GIF or HTML5 Available",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Social Media Banners",
      description:
        "Banner creatives tailored for your Facebook, Instagram, LinkedIn, and Twitter covers or promotions.",
      details: [
        "Cover & Post Variants",
        "Festive Branding Options",
        "Mobile-Optimized Layouts",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Website Hero Banners",
      description:
        "Engaging above-the-fold homepage banners for your website that convey purpose and build credibility.",
      details: [
        "Responsive Web Layouts",
        "Brand-Focused Imagery",
        "Conversion-Oriented CTA Placement",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Print & Outdoor Banners",
      description:
        "High-resolution banners for exhibitions, hoardings, storefronts, and flex installations.",
      details: [
        "Large-Format Output (6x3, 8x4, etc.)",
        "CMYK Print Files",
        "Bleed & Safe Zones Included",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Event & Stage Banners",
      description:
        "Custom backdrop and stage-side banners for conferences, weddings, cultural or business events.",
      details: [
        "Theme-Based Graphics",
        "Sponsor Area Ready",
        "High-Resolution Print Files",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "YouTube Channel & Thumbnail Banners",
      description:
        "Banners designed to enhance your YouTube channel appeal and video CTR with strong visual elements.",
      details: [
        "Channel Art & End Screen Graphics",
        "High-CTR Thumbnail Styles",
        "Mobile Safe Area Focus",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Digital Ad Banner",
      price: "",
      features: [
        "Single Static Banner",
        "Web or Social Size",
        "1 Revision Included",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Website Hero & Social Pack",
      price: "",
      features: [
        "3 Custom Banner Variants",
        "Responsive Web Layouts",
        "Facebook + Instagram Ready",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Event & Print Banner Set",
      price: "",
      features: [
        "Flex/Backdrop Design",
        "Print-Ready Files",
        "High Resolution (300 DPI)",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Banner Design",
  subtitle:
    "Boost visibility with banners that draw attention — whether on screens, streets, or stages.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you design banners for all ad platforms?",
      answer:
        "Yes, we support Google Ads, Meta Ads, LinkedIn Ads, YouTube banners, and more with correct sizes and formats.",
    },
    {
      question: "Can I get banners in multiple dimensions for one campaign?",
      answer:
        "Absolutely. We offer multiple variants in standard and premium packages to cover various platforms.",
    },
    {
      question: "What file formats do you provide?",
      answer:
        "We deliver JPEG, PNG, and layered PSD/AI files. For ads, we can also provide GIFs or HTML5 versions.",
    },
    {
      question: "Are your banners optimized for high resolution printing?",
      answer:
        "Yes, we use 300 DPI and proper color profiles (CMYK) for large-format print banners.",
    },
    {
      question: "Can you help with text and messaging on banners?",
      answer:
        "Definitely. We provide support with banner text copy, headlines, and call-to-action suggestions.",
    },
    {
      question: "Do you design event-specific banners?",
      answer:
        "Yes, we create event stage, backdrop, and flex banners tailored to your theme or branding.",
    },
  ],
};

export const IllustrationServicesPageDetails = {
  SeoName: {
    seotitle: "IllustrationServicesPageDetailsseo",
  },
  section2: {
    tagline: "Visuals That Speak Louder Than Words",
    heading: "Custom Illustration Services",
    description:
      "Bring your ideas to life with hand-crafted illustrations tailored to your story, brand, or concept. From editorial and character art to product sketches and digital storytelling, our illustrators deliver originality with precision.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Character & Mascot Design",
      description:
        "Create unique characters and brand mascots that enhance storytelling, evoke emotion, and stand out.",
      details: [
        "Cartoon & Semi-Realistic Styles",
        "Vector or Raster Formats",
        "Brand Mascots or Game Characters",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Editorial & Book Illustrations",
      description:
        "Visually enhance articles, stories, or children's books with expressive and thematic illustrations.",
      details: [
        "Children’s Book Pages",
        "Magazine Editorial Art",
        "Cover & Chapter Art",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Explainer & Infographic Illustrations",
      description:
        "Custom visual elements for presentations, brochures, websites, and videos that simplify complex ideas.",
      details: [
        "Flat & Isometric Styles",
        "Icon + Scene Illustration",
        "Data-Driven Visuals",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Fashion & Product Sketches",
      description:
        "Stylized product or fashion illustrations for catalogs, packaging, presentations, and mockups.",
      details: [
        "Apparel Concept Art",
        "Jewelry & Beauty Product Sketches",
        "Tech Product Illustration",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Storyboards & Comic Panels",
      description:
        "Visual storytelling frames for animations, comics, ad scripts, or cinematic sequences.",
      details: [
        "Script-Based Frame Development",
        "Scene-by-Scene Sketching",
        "Monochrome or Colored Panels",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Custom Social Media Illustrations",
      description:
        "Branded illustrations and posts that create a cohesive, engaging, and scroll-stopping feed.",
      details: [
        "Festive & Trend-Driven Posts",
        "Illustrated Reels & Stories",
        "IG Highlight Covers",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Illustration",
      price: "",
      features: [
        "Single Scene or Character",
        "High-Resolution PNG/JPG",
        "1 Minor Revision",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Illustration Pack",
      price: "",
      features: [
        "Up to 3 Scenes or Figures",
        "Commercial Use License",
        "Layered Source Files",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Storyboard/Comic Project",
      price: "",
      features: [
        "Up to 10 Panels",
        "Monochrome or Color",
        "Script-Based Execution",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Illustration Services",
  subtitle:
    "From imagination to illustration — our artists craft visuals that define your brand, your stories, and your vision.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What illustration styles do you offer?",
      answer:
        "We provide vector, flat, hand-drawn, cartoon, isometric, and semi-realistic styles based on project needs.",
    },
    {
      question: "Do I get full rights to the illustrations?",
      answer:
        "Yes, with most packages you receive commercial rights. We also offer exclusive rights upon request.",
    },
    {
      question: "Can you illustrate books or multi-page stories?",
      answer:
        "Absolutely. We work with authors to illustrate storybooks, guides, and learning materials with visual cohesion.",
    },
    {
      question: "Are revisions included in the price?",
      answer:
        "Yes. Each package includes at least one revision round. Additional changes may be charged based on scope.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You’ll get high-resolution JPG/PNG and, if needed, source files (AI, PSD, or Procreate files).",
    },
    {
      question: "Can you match my brand colors and typography?",
      answer:
        "Yes. We ensure all illustrations are consistent with your brand’s identity and design system.",
    },
  ],
};

export const InfographicDesignPageDetails = {
  SeoName: {
    seotitle: "InfographicDesignPageDetailsseo",
  },
  section2: {
    tagline: "Data Meets Design",
    heading: "Custom Infographic Design Services",
    description:
      "Transform complex information into engaging, easy-to-understand visuals. Our infographics combine clarity, creativity, and brand consistency to boost engagement across digital and print platforms.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Static Infographics",
      description:
        "Clear and concise visual summaries for reports, blogs, or social media.",
      details: [
        "One-Pager Designs",
        "Custom Icons and Vectors",
        "Optimized for Sharing",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Interactive Infographics",
      description:
        "Engaging web-based infographics with animations and clickable elements.",
      details: [
        "Web-Embedded Visuals",
        "Hover Effects & Transitions",
        "Responsive Layouts",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Data Visualization",
      description:
        "Transform raw data into sleek charts, graphs, and custom visual analytics.",
      details: [
        "Pie, Bar, Line Graphs",
        "Infographic Dashboards",
        "Brand-Aligned Colors",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Educational Infographics",
      description:
        "Simplify learning with illustrations and structured content for guides, tutorials, or presentations.",
      details: [
        "Process-Based Layouts",
        "Step-by-Step Visual Aids",
        "Ideal for PDF or Slides",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Infographics for Social Media",
      description:
        "Snackable, informative designs that increase reach and retention on platforms like Instagram and LinkedIn.",
      details: [
        "Carousel & Reel Graphics",
        "Branded Templates",
        "Optimized for Engagement",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Infographic Reports & Whitepapers",
      description:
        "Convert your reports or research into visually structured and easy-to-navigate documents.",
      details: [
        "Multi-Page Visual Reports",
        "Executive Summary Visuals",
        "Professional Layouts",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Infographic",
      price: "",
      features: [
        "1 Static Page",
        "Custom Icons & Graphs",
        "High-Res JPG/PNG Output",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Interactive Package",
      price: "",
      features: [
        "Clickable or Scroll-Activated Design",
        "Web-Optimized Delivery",
        "Includes Code Export or Embed",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Data Report Bundle",
      price: "",
      features: [
        "Up to 5 Pages",
        "Professional Typesetting",
        "Includes Editable Source Files",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Infographic Design Services",
  subtitle:
    "Make your data memorable — we design infographics that tell compelling stories with numbers, insights, and visuals.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Can you create infographics based on raw Excel data?",
      answer:
        "Yes, we can convert your spreadsheets and raw datasets into engaging, branded visuals.",
    },
    {
      question: "Are the infographics editable later?",
      answer:
        "If needed, we provide layered source files (AI, PSD) for future edits or translations.",
    },
    {
      question: "Do you provide content writing for the infographics?",
      answer:
        "We can assist with structuring and writing clear, concise copy that complements your visuals.",
    },
    {
      question: "Can these be printed as posters or reports?",
      answer:
        "Absolutely. We design infographics suitable for both digital and high-resolution print formats.",
    },
    {
      question: "What’s the ideal format for web-based infographics?",
      answer:
        "SVG or interactive HTML formats work best for responsive, web-embedded visuals.",
    },
    {
      question: "What turnaround time should I expect?",
      answer:
        "Depending on complexity, basic infographics take 2–3 days, while multi-page or interactive ones may take 5–7 days.",
    },
  ],
};

export const SocialMediaGraphicsPageDetails = {
  SeoName: {
    seotitle: "SocialMediaGraphicsPageDetailsseo",
  },
  section2: {
    tagline: "Visuals That Engage and Convert",
    heading: "Creative Social Media Graphics Services",
    description:
      "Elevate your brand’s presence with custom-designed social media graphics crafted to grab attention, boost engagement, and drive conversions across all platforms.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Branded Post Templates",
      description:
        "Consistent, eye-catching templates for Instagram, Facebook, LinkedIn, and more.",
      details: [
        "Custom Color Palettes and Typography",
        "Optimized for Platform Specifications",
        "Editable Files for Easy Updates",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Animated Social Posts",
      description:
        "Short animated graphics and GIFs to capture attention and increase shares.",
      details: [
        "Looping Animations",
        "Branded Visual Effects",
        "Exported for Multiple Platforms",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Social Media Banners and Covers",
      description:
        "Custom-sized banners and cover images for profile pages and ad campaigns.",
      details: [
        "Platform-Specific Dimensions",
        "High-Resolution Graphics",
        "Brand-Aligned Messaging",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Story and Reel Graphics",
      description:
        "Engaging visuals tailored for Instagram Stories, Facebook Stories, and TikTok reels.",
      details: [
        "Vertical Format Designs",
        "Animated and Static Options",
        "Call-to-Action Elements Included",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Infographics and Data Visuals",
      description:
        "Shareable infographics and quick stats designed to educate and engage your followers.",
      details: [
        "Simple, Clean Visuals",
        "Brand-Consistent Design",
        "Optimized for Mobile Viewing",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Social Media Ad Creatives",
      description:
        "High-converting ad graphics for Facebook, Instagram, LinkedIn, and Google Ads.",
      details: [
        "Targeted Messaging",
        "Strong Visual Hierarchy",
        "Multiple Sizes and Formats",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Pack",
      price: "",
      features: [
        "5 Custom Social Media Posts",
        "Branded Templates",
        "Static Graphics Only",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Growth Pack",
      price: "",
      features: [
        "15 Posts + 5 Animated GIFs",
        "Template Customization",
        "Multiple Platform Optimization",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Pack",
      price: "",
      features: [
        "30 Posts + 15 Animations",
        "Ad Creative Designs",
        "Dedicated Account Manager",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Social Media Graphics Design Services",
  subtitle:
    "Create stunning visuals that tell your brand story and engage audiences across all social media channels.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Which social media platforms do you design for?",
      answer:
        "We design for all major platforms including Instagram, Facebook, LinkedIn, Twitter, TikTok, and Pinterest.",
    },
    {
      question: "Can I request custom sizes for different platforms?",
      answer:
        "Yes, all graphics are tailored to the exact dimensions and requirements of your target platforms.",
    },
    {
      question: "Do you provide editable templates for in-house use?",
      answer:
        "Yes, we can deliver editable PSD or AI templates so your team can update content as needed.",
    },
    {
      question: "Are animated posts supported?",
      answer:
        "Absolutely. We create engaging GIFs and short animations optimized for social media sharing.",
    },
    {
      question: "How quickly can you deliver projects?",
      answer:
        "Typical delivery times range from 3 to 7 business days depending on project scope and complexity.",
    },
  ],
};

export const EbookAndPrintBookCoverDesignPageDetails = {
  SeoName: {
    seotitle: "EbookAndPrintBookCoverDesignPageDetailsseo",
  },
  section2: {
    tagline: "Make Your Book Stand Out",
    heading: "Professional eBook & Print Book Cover Design Services",
    description:
      "Leor Media creates captivating and market-ready book covers that grab readers’ attention and convey your story’s essence — for both digital and print formats.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Custom Cover Design",
      description:
        "Unique, eye-catching designs tailored to your genre and target audience.",
      details: [
        "Genre-specific design styles",
        "High-resolution files for print and digital",
        "Multiple concepts and revisions",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Spine & Back Cover Design",
      description:
        "Complete package including spine, back cover layout, and ISBN placement.",
      details: [
        "Professional typography and layout",
        "Barcode & ISBN integration",
        "Consistent branding with front cover",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Formatting & Print-Ready Files",
      description:
        "Deliverables optimized for print publishers and digital platforms.",
      details: [
        "PDF/X-1a compliant files",
        "Bleed and trim line setup",
        "Ebook cover sizing for Kindle, Apple Books, etc.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Marketing & Promotional Graphics",
      description:
        "Social media banners, ads, and promotional materials to support your book launch.",
      details: [
        "Teaser images and animated graphics",
        "Author branding kits",
        "Customizable templates for ongoing promotion",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Illustration & Visual Elements",
      description:
        "Custom illustrations, icons, and visual motifs to enrich your cover design.",
      details: [
        "Hand-drawn or digital artwork",
        "Genre-appropriate imagery",
        "Seamless integration with cover layout",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Cover Design",
      price: "",
      features: [
        "Single front cover design",
        "2 initial concepts",
        "2 rounds of revisions",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Package",
      price: "",
      features: [
        "Front cover + spine + back cover",
        "3 initial concepts",
        "3 rounds of revisions",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Package",
      price: "",
      features: [
        "Full package + marketing graphics",
        "Custom illustrations included",
        "Unlimited revisions within scope",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "eBook & Print Book Cover Design Services",
  subtitle:
    "Bring your book to life with professionally designed covers that attract readers and elevate your brand.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you design covers for both digital and print books?",
      answer:
        "Yes, we provide high-quality designs optimized for both eBooks and print editions.",
    },
    {
      question: "Can you help with ISBN barcode placement?",
      answer:
        "Absolutely, we include professional barcode and ISBN placement in the back cover design.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Our packages include 2-3 rounds of revisions, with unlimited revisions available in the premium package.",
    },
    {
      question: "Do you offer illustration services for covers?",
      answer:
        "Yes, custom illustrations are available as part of our premium design services.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "We deliver print-ready PDFs, high-resolution JPEG/PNG, and source files on request.",
    },
  ],
};

export const TShirtAndMerchandiseDesignPageDetails = {
  SeoName: {
    seotitle: "TShirtAndMerchandiseDesignPageDetailsseo",
  },
  section2: {
    tagline: "Wear Your Brand with Pride",
    heading: "Custom T-Shirt & Merchandise Design Services",
    description:
      "Leor Media creates unique, stylish, and brand-aligned designs for t-shirts and merchandise to help you promote your business and engage your audience.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Custom T-Shirt Designs",
      description:
        "Creative and impactful t-shirt graphics that reflect your brand identity and message.",
      details: [
        "Original artwork and typography",
        "Multiple styles and color options",
        "Designs optimized for screen printing, DTG, and embroidery",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Branded Merchandise Graphics",
      description:
        "Designs for mugs, caps, bags, stickers, and other promotional products.",
      details: [
        "Versatile designs adaptable to various merchandise",
        "High-resolution, print-ready files",
        "Consistent branding across all items",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Packaging & Label Design",
      description:
        "Custom packaging and labels that complement your merchandise and enhance customer experience.",
      details: [
        "Eco-friendly and creative packaging concepts",
        "Labels with brand elements and product info",
        "Print-ready artwork with dielines",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Marketing & Promotional Material",
      description:
        "Designs for flyers, posters, and social media to promote your merchandise effectively.",
      details: [
        "Eye-catching visuals tailored for campaigns",
        "Templates for seasonal and event promotions",
        "Coordinated branding across all channels",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic T-Shirt Design",
      price: "",
      features: [
        "Single design concept",
        "2 revisions",
        "Print-ready file formats",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Merchandise Package",
      price: "",
      features: [
        "Up to 3 design concepts",
        "T-shirt + 2 merchandise items",
        "3 revisions",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Branding Suite",
      price: "",
      features: [
        "Multiple merchandise items",
        "Packaging and label design included",
        "Unlimited revisions within scope",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "T-Shirt & Merchandise Design Services",
  subtitle:
    "Promote your brand with high-quality, custom-designed merchandise that your customers will love to wear and use.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Can you create designs for bulk orders?",
      answer:
        "Yes, we design for both small batches and large-scale merchandise production.",
    },
    {
      question: "Do you provide files for different printing methods?",
      answer:
        "Absolutely. We prepare files optimized for screen printing, direct-to-garment, and embroidery.",
    },
    {
      question: "Can you help with branding guidelines?",
      answer:
        "Yes, our designs align with your brand guidelines to maintain consistency.",
    },
    {
      question: "Do you offer mockups of the merchandise?",
      answer:
        "Yes, we provide realistic mockups for presentations and approvals.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Our packages typically include 2-3 rounds of revisions with options for more on request.",
    },
  ],
};

export const SignageAndBillboardDesignPageDetails = {
  SeoName: {
    seotitle: "SignageAndBillboardDesignPageDetailsseo",
  },
  section2: {
    tagline: "Make Your Brand Unmissable",
    heading: "Professional Signage & Billboard Design Services",
    description:
      "Leor Media delivers bold, creative, and impactful signage and billboard designs that capture attention and elevate your brand visibility in high-traffic locations.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Outdoor Billboard Design",
      description:
        "Striking billboard graphics designed to communicate your message clearly and attractively at a glance.",
      details: [
        "Large-scale, high-resolution designs",
        "Bold typography and color schemes",
        "Optimized for different billboard sizes and placements",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Retail and Commercial Signage",
      description:
        "Custom signage solutions for storefronts, office buildings, and events to strengthen brand identity.",
      details: [
        "Indoor and outdoor sign design",
        "Material and durability recommendations",
        "Compliance with local regulations and standards",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Event and Exhibition Signage",
      description:
        "Engaging designs for trade shows, exhibitions, and special events that maximize brand exposure.",
      details: [
        "Banners, posters, and directional signs",
        "Modular and reusable signage options",
        "Custom branding and messaging",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Signage Consultation & Project Management",
      description:
        "Expert advice and project oversight to ensure your signage project runs smoothly from concept to installation.",
      details: [
        "Site surveys and design feasibility",
        "Vendor coordination and printing supervision",
        "Installation guidance and support",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Signage Design",
      price: "",
      features: [
        "Single design concept",
        "Up to 2 revisions",
        "Print-ready files for standard sizes",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Billboard Package",
      price: "",
      features: [
        "Multiple design concepts",
        "Customized to billboard dimensions",
        "3 revisions included",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Signage Suite",
      price: "",
      features: [
        "Comprehensive signage solutions",
        "Project management support",
        "Unlimited revisions within scope",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Signage & Billboard Design Services",
  subtitle:
    "Create memorable outdoor brand experiences with professional signage and billboard designs that stand out in any environment.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Can you design signage for both indoor and outdoor use?",
      answer:
        "Yes, we create designs suitable for various environments, considering material and durability.",
    },
    {
      question: "Do you assist with printing and installation?",
      answer:
        "We provide guidance and coordinate with vendors to ensure quality printing and proper installation.",
    },
    {
      question: "Can you customize designs for specific billboard sizes?",
      answer:
        "Absolutely. All designs are tailored to the exact dimensions and viewing distances of your billboards.",
    },
    {
      question: "What is the typical turnaround time for signage projects?",
      answer:
        "Turnaround times vary based on project scope, but standard design delivery is usually within 7-14 business days.",
    },
    {
      question: "Do you provide mockups before finalizing designs?",
      answer:
        "Yes, we deliver realistic mockups for your approval prior to printing.",
    },
  ],
};

export const BusinessCardAndStationeryDesignPageDetails = {
  SeoName: {
    seotitle: "BusinessCardAndStationeryDesignPageDetailsseo",
  },
  section2: {
    tagline: "Make a Lasting Impression",
    heading: "Professional Business Card & Stationery Design Services",
    description:
      "Leor Media crafts elegant and memorable business cards and stationery designs that reflect your brand identity and leave a strong professional impression.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Custom Business Card Design",
      description:
        "Unique, high-quality business card designs that communicate your brand personality effectively.",
      details: [
        "Double-sided, full-color layouts",
        "Standard and custom sizes",
        "Options for matte, gloss, and textured finishes",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Letterhead & Envelope Design",
      description:
        "Branded stationery designs for official communications that enhance professionalism.",
      details: [
        "Coordinated design with business cards",
        "Print-ready formats",
        "Compatibility with various paper types",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Compliment Slips & Notepads",
      description:
        "Custom-designed slips and notepads to reinforce your brand in every correspondence.",
      details: [
        "Creative layouts aligned with your brand",
        "Multiple size options",
        "Print-ready files for bulk orders",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Stationery Branding Consultation",
      description:
        "Expert guidance on creating cohesive and impactful stationery sets that support your brand image.",
      details: [
        "Material and finish recommendations",
        "Design consistency across items",
        "Advice on print production and vendors",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Business Card Package",
      price: "",
      features: [
        "One business card design concept",
        "Up to 2 revisions",
        "Print-ready files included",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Stationery Suite",
      price: "",
      features: [
        "Business card, letterhead, and envelope designs",
        "Multiple design concepts",
        "3 revisions included",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Branding Package",
      price: "",
      features: [
        "Complete stationery set including notepads and compliment slips",
        "Unlimited revisions within scope",
        "Branding consultation included",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Business Card & Stationery Design Services",
  subtitle:
    "Elevate your brand presence with professionally designed business cards and stationery that make every communication count.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Do you provide print-ready files for all stationery items?",
      answer:
        "Yes, we deliver high-resolution, print-ready files suitable for professional printing.",
    },
    {
      question: "Can I request custom sizes or formats?",
      answer:
        "Absolutely. We tailor designs to your specific requirements and preferred formats.",
    },
    {
      question: "Do you help with selecting printing materials and finishes?",
      answer:
        "Yes, we offer consultation on paper types, finishes, and printing options to best suit your brand.",
    },
    {
      question: "How many revisions are included in the packages?",
      answer:
        "Revisions vary by package; typically 2 to unlimited revisions depending on the plan.",
    },
    {
      question: "Can you match existing brand guidelines?",
      answer:
        "Yes, we ensure all designs are consistent with your established brand identity.",
    },
  ],
};

export const RenderingAndVisualizationPageDetails = {
  SeoName: {
    seotitle: "RenderingAndVisualizationPageDetailsseo",
  },
  section2: {
    tagline: "Bring Your Ideas to Life",
    heading: "Professional Rendering & Visualization Services",
    description:
      "Leor Media offers high-quality 3D rendering and visualization solutions that transform concepts into realistic and immersive visual experiences for architecture, products, and marketing.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Architectural Rendering",
      description:
        "Photo-realistic 3D visualizations of architectural projects to help clients and stakeholders visualize designs before construction.",
      details: [
        "Exterior and interior renderings",
        "Day and night views",
        "360-degree panoramas and walkthrough animations",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Product Visualization",
      description:
        "Detailed 3D models and renderings of products for presentations, advertising, and prototyping.",
      details: [
        "High-detail modeling",
        "Material and lighting simulations",
        "Interactive 3D product views",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Interior Design Visualization",
      description:
        "Realistic visualizations of interior spaces to assist in design decisions and client presentations.",
      details: [
        "Furniture and decor placement",
        "Lighting and texture realism",
        "Virtual staging and remodeling options",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Animation & Walkthroughs",
      description:
        "Dynamic 3D animations showcasing architectural designs and product features for marketing and client engagement.",
      details: [
        "Flythrough animations",
        "Exploded views and technical demos",
        "VR-ready visualizations",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Rendering Package",
      price: "",
      features: [
        "Single high-quality still image",
        "One revision",
        "Print and digital use license",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Visualization Package",
      price: "",
      features: [
        "Multiple images and angles",
        "3 revisions included",
        "Basic animation or walkthrough",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Rendering & Animation Suite",
      price: "",
      features: [
        "Comprehensive rendering set",
        "Unlimited revisions within scope",
        "High-quality animations and VR content",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Rendering & Visualization Services",
  subtitle:
    "Visualize your projects with stunning 3D renderings and animations that enhance presentations, marketing, and design decision-making.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What types of projects do you render?",
      answer:
        "We render architectural designs, products, interiors, and other 3D concepts for marketing and presentations.",
    },
    {
      question: "Can you create animations and walkthroughs?",
      answer:
        "Yes, we produce high-quality 3D animations and virtual walkthroughs tailored to your project needs.",
    },
    {
      question: "Do you provide VR-ready visualizations?",
      answer:
        "Absolutely. We create VR-compatible content for immersive client experiences.",
    },
    {
      question: "What file formats do you deliver?",
      answer:
        "We deliver high-resolution images, videos, and interactive 3D files compatible with common platforms.",
    },
    {
      question: "How long does a rendering project take?",
      answer:
        "Timelines vary depending on complexity, but typical projects complete within 1 to 3 weeks.",
    },
  ],
};

export const MotionGraphicsAndAnimationPageDetails = {
  SeoName: {
    seotitle: "MotionGraphicsAndAnimationPageDetailsseo",
  },
  section2: {
    tagline: "Bring Your Brand to Life",
    heading: "Creative Motion Graphics & Animation Services",
    description:
      "Leor Media crafts engaging motion graphics and animations that communicate your story with style, clarity, and impact — perfect for marketing, presentations, and digital content.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "2D Animation",
      description:
        "Custom 2D animations for explainer videos, advertisements, and social media content.",
      details: [
        "Character animation",
        "Infographic and data visualization",
        "Brand storytelling and promotional videos",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "3D Animation",
      description:
        "High-quality 3D animations to showcase products, architectural walkthroughs, and conceptual visuals.",
      details: [
        "Product demos and explainer videos",
        "Architectural visualization animations",
        "Technical and scientific animations",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Motion Graphics",
      description:
        "Dynamic visual content combining graphic design and animation to enhance brand messages.",
      details: [
        "Logo animations and intros",
        "Social media ads and promos",
        "Presentation and broadcast graphics",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Video Editing & Post-Production",
      description:
        "Professional editing, color grading, and effects to polish your video projects.",
      details: [
        "Cutting and sequencing",
        "Color correction and grading",
        "Visual effects and compositing",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Animation Package",
      price: "",
      features: [
        "Up to 30 seconds animation",
        "Simple graphics and transitions",
        "1 revision included",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Motion Graphics Package",
      price: "",
      features: [
        "Up to 90 seconds animation",
        "Custom graphics and voiceover integration",
        "3 revisions included",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Animation Suite",
      price: "",
      features: [
        "Up to 3 minutes animation",
        "Advanced 2D/3D animation and effects",
        "Unlimited revisions within scope",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Motion Graphics & Animation Services",
  subtitle:
    "Engage your audience with vibrant, memorable animations and motion graphics that elevate your brand and messaging.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What types of animation do you offer?",
      answer:
        "We offer 2D animations, 3D animations, motion graphics, and video post-production services tailored to your needs.",
    },
    {
      question: "Can you help with scriptwriting and storyboarding?",
      answer:
        "Yes, we assist in developing scripts and storyboards to ensure your message is clear and engaging.",
    },
    {
      question: "What formats do you deliver animations in?",
      answer:
        "We deliver animations in popular video formats such as MP4, MOV, and also provide web-optimized versions.",
    },
    {
      question: "How long does an animation project take?",
      answer:
        "Project duration varies by complexity, typically ranging from 1 to 4 weeks.",
    },
    {
      question: "Do you provide voiceover and sound design?",
      answer:
        "Yes, we can provide professional voiceover and sound design services upon request.",
    },
  ],
};

export const PhotoEditingAndRetouchingPageDetails = {
  SeoName: {
    seotitle: "PhotoEditingAndRetouchingPageDetailsseo",
  },
  section2: {
    tagline: "Perfect Your Visuals",
    heading: "Professional Photo Editing & Retouching Services",
    description:
      "Leor Media enhances your images with expert photo editing and retouching — from color correction to advanced manipulation — ensuring your visuals always look flawless and compelling.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Basic Photo Editing",
      description:
        "Color correction, cropping, resizing, and exposure adjustments for everyday image enhancements.",
      details: [
        "Brightness & contrast adjustment",
        "Color correction and white balance",
        "Cropping and resizing",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Advanced Retouching",
      description:
        "Detailed retouching to remove imperfections, smooth skin, and enhance subject appearance.",
      details: [
        "Skin smoothing and blemish removal",
        "Object removal and background cleanup",
        "Teeth whitening and eye enhancement",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Image Manipulation & Restoration",
      description:
        "Creative editing including background changes, photo restorations, and composite images.",
      details: [
        "Background removal or replacement",
        "Old photo restoration and repair",
        "Creative photo composites",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Batch Processing",
      description:
        "Efficient editing for large volumes of photos with consistent quality and quick turnaround.",
      details: [
        "Bulk color correction and resizing",
        "Consistent style and tone application",
        "Fast delivery for large projects",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Editing Package",
      price: "",
      features: [
        "Color correction and cropping",
        "Simple retouching",
        "Delivery within 24 hours",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Advanced Retouching Package",
      price: "",
      features: [
        "Detailed skin and object retouching",
        "Background cleanup",
        "Delivery within 48 hours",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Bulk Editing Package",
      price: "",
      features: [
        "Batch editing for 50+ images",
        "Consistent style and tone",
        "Priority turnaround",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: DefaultCoverImage,
  title: "Photo Editing & Retouching Services",
  subtitle:
    "Bring out the best in your photos with professional editing and retouching for personal, commercial, or marketing use.",
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What file formats do you accept for photo editing?",
      answer:
        "We accept JPEG, PNG, TIFF, and RAW files for editing and retouching.",
    },
    {
      question: "Can you match the editing style of my existing photos?",
      answer:
        "Yes, we can replicate your preferred style for consistent results across your photo collection.",
    },
    {
      question: "Do you offer rush delivery options?",
      answer:
        "Yes, expedited delivery is available for urgent projects upon request.",
    },
    {
      question: "Can you edit product photos for e-commerce?",
      answer:
        "Absolutely, we specialize in high-quality product photo editing tailored for online stores.",
    },
    {
      question: "Is there a minimum order quantity for bulk editing?",
      answer:
        "Bulk packages start at 50 images, but custom orders are also welcome.",
    },
  ],
};

//branding
export const BrandingCompany = {
  coverimage: BrandingCoverImage,
  title: "Branding",
  subtitle:
    "Leor Media is your trusted partner in creating strong, lasting brand identities.",
  coverImage: {
    src: BrandingCoverImage, // Update this path to the actual image path
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Branding That Builds Loyalty.",
    heading: "Craft a Brand That Connects and Converts.",
    description:
      "Your brand is more than just a logo — it’s the story, voice, and perception people associate with your business. At Leor Media, we help businesses establish meaningful, memorable brands that inspire trust and drive growth.",
  },

  services: [
    {
      icon: BrandID,
      title: "Brand Identity Design Exclusive",
      description:
        "Create a unified and powerful brand identity that reflects your values, voice, and market positioning across all platforms.",
      link: "/services/branding-comapny/brand-identity-design-exclusive",
    },
    {
      icon: BrandLogo,
      title: "Brand Logo Design",
      description:
        "Design iconic, versatile logos that leave a lasting impression and build recognition across digital and physical touchpoints.",
      link: "/services/branding-comapny/brand-logo-design",
    },
    {
      icon: BrandGuide,
      title: "Brand Guidelines",
      description:
        "Ensure consistency with a comprehensive brand guide covering logo usage, colors, typography, and visual direction for your team.",
      link: "/services/branding-comapny/brand-guidelines",
    },
    {
      icon: BrandPosition,
      title: "Brand Positioning",
      description:
        "Define your brand’s place in the market. We help clarify your value proposition and communicate it to your ideal audience.",
      link: "/services/branding-comapny/brand-positioning",
    },
    {
      icon: BrandStory,
      title: "Brand Storytelling",
      description:
        "Connect emotionally with your audience through compelling storytelling that communicates your mission, vision, and values.",
      link: "/services/branding-comapny/brand-storytelling",
    },
    {
      icon: BrandName,
      title: "Brand Naming",
      description:
        "Choose the perfect name for your brand, product, or service — unique, memorable, and aligned with your identity and audience.",
      link: "/services/branding-comapny/brand-naming",
    },
    {
      icon: VisualID,
      title: "Visual Identity Design",
      description:
        "Build a strong visual presence with cohesive graphics, icons, color systems, and design elements tailored to your brand.",
      link: "/services/branding-comapny/visual-identity-design",
    },
    {
      icon: BrandMessage,
      title: "Brand Messaging",
      description:
        "Craft a clear, consistent brand voice and messaging framework that resonates across all communication channels.",
      link: "/services/branding-comapny/brand-messaging",
    },
    {
      icon: BrandExp,
      title: "Brand Experience Design",
      description:
        "Design every customer interaction to reflect your brand — from packaging and service to UX and digital journeys.",
      link: "/services/branding-comapny/brand-experience-design",
    },
    {
      icon: BrandAwarness,
      title: "Brand Awareness Campaigns",
      description:
        "Increase your visibility and recognition through creative, targeted campaigns designed to build a strong market presence.",
      link: "/services/branding-comapny/brand-awareness-campaigns",
    },
    {
      icon: Rebranding,
      title: "Rebranding Services",
      description:
        "Refresh or reposition your brand with strategic rebranding that retains value while aligning with evolving goals or markets.",
      link: "/services/branding-comapny/rebranding-services",
    },
    {
      icon: BrandResearch,
      title: "Brand Research and Analysis",
      description:
        "Understand your audience and competition with deep brand analysis, market research, and insights that guide your strategy.",
      link: "/services/branding-comapny/brand-research-and-analysis",
    },
    {
      icon: BrandTracking,
      title: "Brand Tracking and Performance Evaluation",
      description:
        "Monitor your brand’s performance across channels with analytics and reporting that measure impact, awareness, and engagement.",
      link: "/services/branding-comapny/brand-tracking-and-performance-evaluation",
    },
  ],
};
export const BrandIdentityDesignExclusivePageDetails = {
  SeoName: {
    seotitle: "BrandIdentityDesignExclusivePageDetailsseo",
  },
  section2: {
    tagline: "Craft a Unique Brand Identity",
    heading: "Exclusive Brand Identity Design Services",
    description:
      "Leor Media offers bespoke brand identity solutions that set your business apart. From logo creation to comprehensive visual language, we ensure your brand speaks with clarity, consistency, and impact.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Custom Logo Design",
      description:
        "Create a distinctive logo that embodies your brand’s essence.",
      details: [
        "Original concepts tailored to your brand values.",
        "Multiple revisions for perfect alignment.",
        "High-resolution files for all media.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Color Palette & Typography",
      description:
        "Define colors and fonts that reflect your brand personality.",
      details: [
        "Strategic color selection for emotional impact.",
        "Typography choices for readability and style.",
        "Guidelines to maintain visual consistency.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Iconography & Graphics",
      description:
        "Design unique icons and graphic elements for versatile brand use.",
      details: [
        "Custom icon sets for digital and print.",
        "Scalable graphics for multiple platforms.",
        "Coherent visual style across all brand materials.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Collateral Design",
      description:
        "Develop business cards, letterheads, and other essential brand materials.",
      details: [
        "Professional templates aligned with brand identity.",
        "Print-ready formats with quality assurance.",
        "Consistent branding across all touchpoints.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Guidelines Creation",
      description:
        "Comprehensive brand manuals to ensure consistent application.",
      details: [
        "Usage rules for logos, colors, and fonts.",
        "Tone and voice guidelines for messaging.",
        "Templates and examples for internal teams.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Brand Identity Package",
      price: "",
      features: [
        "Logo design concepts",
        "Color palette and typography",
        "Basic brand collateral",
        "Delivery in 15 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Comprehensive Brand Identity",
      price: "",
      features: [
        "All Basic Package features",
        "Custom iconography & graphics",
        "Brand guidelines document",
        "Priority revisions",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Brand Identity Suite",
      price: "",
      features: [
        "Full service branding consultation",
        "Complete collateral suite design",
        "Brand strategy workshop",
        "Extended support and updates",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Exclusive Brand Identity Design",
  subtitle:
    "Elevate your brand with custom-crafted visual identities that resonate, inspire, and create lasting impressions.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is included in your brand identity design service?",
      answer:
        "We provide logo design, color palettes, typography, iconography, brand collateral, and comprehensive brand guidelines.",
    },
    {
      question: "How long does the design process take?",
      answer:
        "Typical projects take between 2 to 4 weeks depending on package and complexity.",
    },
    {
      question: "Can you create brand guidelines for existing logos?",
      answer:
        "Yes, we offer standalone brand guideline creation to maintain consistency across your brand assets.",
    },
    {
      question: "Do you provide revisions during the design process?",
      answer:
        "Absolutely. We include multiple revision rounds to ensure your brand identity perfectly aligns with your vision.",
    },
    {
      question: "Will I receive the original design files?",
      answer:
        "Yes, all packages include source files and all formats needed for print and digital use.",
    },
  ],
};

export const BrandLogoDesignPageDetails = {
  SeoName: {
    seotitle: "BrandLogoDesignPageDetailsseo",
  },
  section2: {
    tagline: "Create a Memorable Brand Mark",
    heading: "Professional Brand Logo Design Services",
    description:
      "Leor Media specializes in crafting unique and impactful logos that represent your brand’s identity and values. Our logo designs help you stand out and build instant recognition across all platforms.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Custom Logo Concepts",
      description:
        "Original logo designs tailored to your brand’s story and target audience.",
      details: [
        "Multiple initial concepts to choose from.",
        "Refinements based on your feedback.",
        "Versatile designs for all uses.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Logo Variations",
      description:
        "Deliver logos optimized for different backgrounds and formats.",
      details: [
        "Full color, black & white, and single color versions.",
        "Horizontal, vertical, and icon-only variants.",
        "Formats suitable for print, web, and social media.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Vector & Source Files",
      description:
        "High-quality source files that allow scalability and easy editing.",
      details: [
        "AI, EPS, SVG formats.",
        "PNG and JPEG for immediate use.",
        "Font and color specifications included.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Consultation",
      description: "Expert advice on logo usage and brand consistency.",
      details: [
        "Guidance on color application and placement.",
        "Recommendations for integrating logo with brand identity.",
        "Support for marketing and advertising needs.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Logo Package",
      price: "",
      features: [
        "3 initial logo concepts",
        "2 rounds of revisions",
        "Delivery in 7 days",
        "PNG and JPEG files",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Logo Package",
      price: "",
      features: [
        "5 initial concepts",
        "Unlimited revisions",
        "Vector files included",
        "Brand consultation",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Logo Suite",
      price: "",
      features: [
        "Complete logo system (primary + secondary logos)",
        "Logo usage guidelines",
        "Extended support & brand collateral templates",
        "Priority delivery in 5 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Logo Design Services",
  subtitle:
    "Get a professionally designed logo that captures your brand essence and makes a lasting impression across all touchpoints.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "How many logo concepts will I receive?",
      answer:
        "Depending on the package, you will get between 3 to 5 initial logo concepts to choose from.",
    },
    {
      question: "Can I request revisions to the logo?",
      answer:
        "Yes, we include multiple revision rounds to ensure the final logo meets your expectations.",
    },
    {
      question: "Will I get source files of the logo?",
      answer:
        "Absolutely. All packages include high-resolution vector source files for unlimited usage.",
    },
    {
      question: "How long does the logo design process take?",
      answer:
        "Typically, the process takes between 1 to 2 weeks depending on the package and feedback rounds.",
    },
    {
      question: "Can you help with logo usage guidelines?",
      answer:
        "Yes, premium packages include logo usage guidelines to maintain consistency across all brand materials.",
    },
  ],
};

export const BrandGuidelinesPageDetails = {
  SeoName: {
    seotitle: "BrandGuidelinesPageDetailsseo",
  },
  section2: {
    tagline: "Maintain Brand Consistency",
    heading: "Comprehensive Brand Guidelines Development",
    description:
      "Leor Media helps you create detailed brand guideline documents that ensure your brand identity remains consistent across all channels and touchpoints.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Logo Usage Rules",
      description:
        "Clear instructions on how to use your logo correctly in various contexts.",
      details: [
        "Proper logo spacing and sizing.",
        "Dos and don’ts for logo application.",
        "Color variations and background usage.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Color Palette",
      description:
        "Define your brand’s official color scheme for print and digital media.",
      details: [
        "Primary and secondary colors.",
        "Color codes (RGB, CMYK, HEX, Pantone).",
        "Usage guidelines for consistent application.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Typography",
      description:
        "Standardize fonts and text styles for all brand communications.",
      details: [
        "Primary and secondary typefaces.",
        "Font sizes, weights, and styles.",
        "Usage in headings, body text, and captions.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Visual Elements & Imagery",
      description:
        "Guidelines on icons, photography style, and graphic elements.",
      details: [
        "Icon style and usage.",
        "Photography guidelines and tone.",
        "Graphic elements and patterns.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Voice & Messaging",
      description:
        "Define the tone, language, and messaging style for consistent communication.",
      details: [
        "Voice characteristics and tone.",
        "Key messaging pillars.",
        "Examples of approved copy style.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Brand Guidelines",
      price: "",
      features: [
        "Logo usage rules",
        "Primary color palette",
        "Typography standards",
        "Delivery in 7 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Brand Guidelines",
      price: "",
      features: [
        "Includes basic package features",
        "Extended color palette",
        "Visual elements & imagery",
        "Brand voice guidelines",
        "Delivery in 10 days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Comprehensive Brand Book",
      price: "",
      features: [
        "Full guideline document",
        "Detailed messaging & tone",
        "Templates for brand assets",
        "Ongoing brand consulting",
        "Priority delivery in 7 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Guidelines Services",
  subtitle:
    "Ensure consistent brand presentation with professionally crafted brand guidelines that cover every aspect of your brand identity.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What are brand guidelines?",
      answer:
        "Brand guidelines are a set of rules and standards that dictate how your brand is presented visually and verbally to ensure consistency.",
    },
    {
      question: "Why do I need brand guidelines?",
      answer:
        "They help maintain a consistent brand image across all marketing channels and prevent misuse of your brand assets.",
    },
    {
      question: "Can brand guidelines be updated?",
      answer:
        "Yes, guidelines should evolve with your brand. We offer ongoing consulting for updates and refinements.",
    },
    {
      question: "Do you provide digital and print versions?",
      answer:
        "Absolutely. We deliver guidelines in both digital (PDF) and print-ready formats.",
    },
    {
      question: "How long does it take to create brand guidelines?",
      answer:
        "Depending on the package, it typically takes 1 to 2 weeks to develop comprehensive brand guidelines.",
    },
  ],
};

export const BrandPositioningPageDetails = {
  SeoName: {
    seotitle: "BrandPositioningPageDetailsseo",
  },
  section2: {
    tagline: "Define Your Market Edge",
    heading: "Strategic Brand Positioning Services",
    description:
      "Leor Media helps you carve a unique space in the market by defining your brand’s value proposition, target audience, and competitive differentiation.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Market Research & Analysis",
      description:
        "Understand your industry, competitors, and audience to identify opportunities.",
      details: [
        "Competitive landscape assessment.",
        "Customer behavior and preferences study.",
        "Trend identification and forecasting.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Value Proposition Development",
      description:
        "Craft a compelling brand promise that resonates with your target customers.",
      details: [
        "Unique selling points identification.",
        "Clear and concise messaging.",
        "Benefit-focused positioning statements.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Target Audience Segmentation",
      description:
        "Define and segment your ideal customers for tailored marketing strategies.",
      details: [
        "Demographic, psychographic profiling.",
        "Behavioral and needs-based segmentation.",
        "Persona creation for marketing alignment.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Differentiation Strategy",
      description:
        "Develop tactics to stand out from competitors and build brand loyalty.",
      details: [
        "Competitive advantage identification.",
        "Brand personality and tone definition.",
        "Messaging frameworks and positioning maps.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Positioning Statement Creation",
      description:
        "Deliver clear, memorable, and actionable brand positioning statements for internal and external use.",
      details: [
        "Crafting unique positioning statements.",
        "Aligning statements with brand strategy.",
        "Training and implementation support.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Positioning Plan",
      price: "",
      features: [
        "Market research summary",
        "Basic positioning statement",
        "Target audience overview",
        "Delivery in 7 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Advanced Positioning Plan",
      price: "",
      features: [
        "Detailed research & analysis",
        "Comprehensive positioning strategy",
        "Audience segmentation & personas",
        "Messaging framework",
        "Delivery in 12 days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Positioning Package",
      price: "",
      features: [
        "Full positioning strategy & roadmap",
        "Implementation workshops",
        "Ongoing consulting support",
        "Competitive monitoring",
        "Priority delivery in 10 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Positioning Services",
  subtitle:
    "Position your brand for success with strategic insights and messaging that captivate your ideal customers and differentiate you from competitors.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is brand positioning?",
      answer:
        "Brand positioning is the process of defining how your brand is perceived in the minds of your target customers compared to competitors.",
    },
    {
      question: "Why is brand positioning important?",
      answer:
        "It helps create a clear, distinctive image and message that attracts and retains your ideal customers.",
    },
    {
      question: "How long does brand positioning take?",
      answer:
        "Typically, it takes 1 to 3 weeks depending on research depth and strategy complexity.",
    },
    {
      question: "Can you help implement the positioning strategy?",
      answer:
        "Yes, we offer workshops, training, and consulting to ensure successful implementation.",
    },
    {
      question: "Do you provide ongoing support after positioning?",
      answer:
        "Absolutely. We provide monitoring and refinement services to keep your brand relevant and competitive.",
    },
  ],
};

export const BrandStorytellingPageDetails = {
  SeoName: {
    seotitle: "BrandStorytellingPageDetailsseo",
  },
  section2: {
    tagline: "Craft Stories That Connect",
    heading: "Compelling Brand Storytelling Services",
    description:
      "At Leor Media, we help you build authentic narratives that emotionally engage your audience and strengthen your brand identity across all channels.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Narrative Development",
      description:
        "Create a unique brand story that reflects your values, mission, and vision.",
      details: [
        "Identify core brand message and themes.",
        "Develop emotional and relatable story arcs.",
        "Align storytelling with business goals.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Content Creation",
      description:
        "Produce engaging content for websites, social media, videos, and marketing campaigns.",
      details: [
        "Blog posts and articles.",
        "Video scripts and storyboards.",
        "Social media storytelling posts.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Visual Storytelling",
      description:
        "Use design, imagery, and video to bring your brand story to life visually.",
      details: [
        "Brand videos and animations.",
        "Infographics and illustrations.",
        "Photography and imagery direction.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Customer Storytelling",
      description:
        "Highlight authentic customer experiences and testimonials to build trust.",
      details: [
        "Case studies and success stories.",
        "User-generated content campaigns.",
        "Social proof and reviews integration.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Storytelling Workshops",
      description:
        "Train your team on effective brand storytelling techniques and content creation.",
      details: [
        "Storytelling frameworks and methods.",
        "Content strategy alignment.",
        "Hands-on storytelling exercises.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Storytelling Package",
      price: "",
      features: [
        "Core brand narrative development",
        "One content piece (blog or social post)",
        "Delivery in 7 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Storytelling Package",
      price: "",
      features: [
        "Comprehensive brand story",
        "Multiple content formats (blogs, videos)",
        "Visual storytelling assets",
        "Delivery in 14 days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Storytelling Suite",
      price: "",
      features: [
        "Full brand storytelling strategy",
        "Content calendar & creation",
        "Storytelling workshops",
        "Customer storytelling campaigns",
        "Priority delivery in 10 days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Storytelling Services",
  subtitle:
    "Engage your audience with powerful stories that build emotional connections and elevate your brand presence.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why is brand storytelling important?",
      answer:
        "It helps create emotional connections with your audience, making your brand memorable and trustworthy.",
    },
    {
      question: "What types of content do you create?",
      answer:
        "We produce blogs, videos, social media posts, infographics, customer stories, and more.",
    },
    {
      question: "Can you help train my team on storytelling?",
      answer:
        "Yes, we offer workshops and hands-on sessions to improve your team's storytelling skills.",
    },
    {
      question: "How long does it take to develop a brand story?",
      answer:
        "Typically, 1 to 3 weeks depending on the depth and complexity of your brand narrative.",
    },
    {
      question: "Do you assist with ongoing content creation?",
      answer:
        "Absolutely. We provide content calendars and ongoing support to keep your brand story fresh and engaging.",
    },
  ],
};

export const BrandNamingPageDetails = {
  SeoName: {
    seotitle: "BrandNamingPageDetailsseo",
  },
  section2: {
    tagline: "Create a Name That Resonates",
    heading: "Professional Brand Naming Services",
    description:
      "Leor Media crafts memorable, meaningful, and market-ready brand names that capture your essence and appeal to your target audience.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Name Ideation & Brainstorming",
      description:
        "Collaborative sessions to generate creative and unique brand name options.",
      details: [
        "Market research and competitor analysis.",
        "Exploration of naming trends and styles.",
        "Brainstorming sessions with your team.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Linguistic & Cultural Checks",
      description:
        "Ensure your brand name is appropriate and effective across different languages and cultures.",
      details: [
        "Avoid negative or inappropriate meanings.",
        "Check for pronunciation and memorability.",
        "Verify cultural sensitivity and relevance.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Trademark & Domain Availability",
      description:
        "Verify legal availability and secure your brand name online.",
      details: [
        "Preliminary trademark clearance checks.",
        "Domain name availability search.",
        "Recommendations for alternative options.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Name Testing & Validation",
      description:
        "Gather feedback and validate potential names with your target audience.",
      details: [
        "Surveys and focus groups.",
        "Online polls and social listening.",
        "Data-driven name selection.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Naming Strategy & Brand Architecture",
      description:
        "Develop a coherent naming strategy aligned with your brand vision and portfolio.",
      details: [
        "Product and service naming.",
        "Sub-brand and extension strategies.",
        "Consistent naming conventions.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Naming Package",
      price: "",
      features: [
        "5 Name Suggestions",
        "Basic Linguistic Checks",
        "Domain Availability Report",
        "Delivery in 7 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Naming Package",
      price: "",
      features: [
        "15 Name Suggestions",
        "Trademark Pre-checks",
        "Audience Testing",
        "Delivery in 14 Days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Naming Suite",
      price: "",
      features: [
        "30+ Name Suggestions",
        "Comprehensive Trademark & Domain Checks",
        "Extensive Audience Validation",
        "Naming Strategy Development",
        "Priority Delivery in 10 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Naming Services",
  subtitle:
    "Find the perfect name that defines your brand’s identity and sets you apart in the marketplace.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why is a good brand name important?",
      answer:
        "A strong brand name enhances recall, builds trust, and communicates your brand’s personality effectively.",
    },
    {
      question: "Do you check if my chosen name is legally available?",
      answer:
        "We conduct preliminary trademark checks to help avoid legal conflicts and recommend further legal consultation.",
    },
    {
      question: "Can you help with domain name registration?",
      answer:
        "We verify domain availability and suggest suitable alternatives, but registration is done through domain providers.",
    },
    {
      question: "How long does the naming process take?",
      answer:
        "Typically 1 to 3 weeks depending on project scope and feedback cycles.",
    },
    {
      question: "Can I get multiple name options?",
      answer:
        "Yes, our packages provide multiple name suggestions tailored to your brand’s needs.",
    },
  ],
};

export const VisualIdentityDesignPageDetails = {
  SeoName: {
    seotitle: "VisualIdentityDesignPageDetailsseo",
  },
  section2: {
    tagline: "Build a Cohesive Visual Presence",
    heading: "Comprehensive Visual Identity Design Services",
    description:
      "Leor Media crafts striking visual identities that embody your brand’s core values and create lasting impressions across all customer touchpoints.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Logo Design & Variations",
      description:
        "Create a versatile logo system that works across platforms and mediums.",
      details: [
        "Primary and secondary logo versions.",
        "Black & white and color variations.",
        "Scalable vector files for print and digital.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Color Palette & Typography",
      description:
        "Define your brand’s color scheme and typography guidelines for consistency.",
      details: [
        "Primary, secondary, and accent colors.",
        "Font pairings and usage rules.",
        "Accessible and brand-aligned styles.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Iconography & Graphic Elements",
      description:
        "Develop unique icons and graphic components that support your brand story.",
      details: [
        "Custom icons tailored to your brand.",
        "Patterns, textures, and graphic motifs.",
        "Usage guidelines for digital and print.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Collateral Design",
      description:
        "Design essential brand materials such as business cards, letterheads, and presentation templates.",
      details: [
        "Consistent application of visual identity.",
        "Printable and digital-ready formats.",
        "Templates for internal and external use.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Style Guide",
      description:
        "Create a comprehensive manual documenting all visual identity elements and their proper usage.",
      details: [
        "Logo usage rules and restrictions.",
        "Color and typography standards.",
        "Examples and do’s & don’ts.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Visual Identity Package",
      price: "",
      features: [
        "Logo Design",
        "Primary Color Palette",
        "Typography Selection",
        "Delivery in 10 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Visual Identity Package",
      price: "",
      features: [
        "Logo Variations & Iconography",
        "Extended Color Palette",
        "Brand Collateral Templates",
        "Delivery in 15 Days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Visual Identity Suite",
      price: "",
      features: [
        "Complete Visual Identity System",
        "Comprehensive Brand Style Guide",
        "Custom Graphic Elements",
        "Priority Support & Delivery in 12 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Visual Identity Design Services",
  subtitle:
    "Establish a consistent and compelling visual language that strengthens your brand and engages your audience.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is included in a visual identity design?",
      answer:
        "It includes logos, color palettes, typography, icons, and brand collateral designs to create a unified look.",
    },
    {
      question: "Why is a brand style guide important?",
      answer:
        "It ensures consistent use of visual elements across all channels, helping maintain brand integrity.",
    },
    {
      question: "Can you update an existing visual identity?",
      answer:
        "Yes, we can refresh or redesign your current visual assets to better align with your brand goals.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Typically 2 to 4 weeks depending on complexity and client feedback.",
    },
    {
      question: "Do you provide digital and print-ready files?",
      answer:
        "Absolutely, all final deliverables include high-resolution files for both digital and print use.",
    },
  ],
};

export const BrandMessagingPageDetails = {
  SeoName: {
    seotitle: "BrandMessagingPageDetailsseo",
  },
  section2: {
    tagline: "Craft Your Brand’s Voice and Message",
    heading: "Strategic Brand Messaging Development",
    description:
      "Leor Media helps you develop clear, consistent, and compelling messaging that resonates with your target audience and reinforces your brand identity.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Core Message & Value Proposition",
      description:
        "Define what makes your brand unique and why customers should choose you.",
      details: [
        "Clear articulation of your brand’s purpose and values.",
        "Compelling value propositions tailored to your audience.",
        "Message hierarchy to prioritize key points.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Tagline & Slogan Creation",
      description:
        "Develop memorable and impactful taglines that capture your brand essence.",
      details: [
        "Short, catchy, and brand-aligned phrases.",
        "Multiple options to choose from.",
        "Refinement based on your feedback.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Tone of Voice & Communication Style",
      description:
        "Establish a consistent tone and style for all brand communications.",
      details: [
        "Formal, casual, playful, authoritative, or friendly tones.",
        "Guidelines for written and verbal communication.",
        "Adaptation for different channels and audiences.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Audience Segmentation & Messaging",
      description:
        "Tailor messages for different customer segments to increase relevance and engagement.",
      details: [
        "Identify key audience groups.",
        "Develop targeted messages for each segment.",
        "Create messaging frameworks for campaigns.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Messaging Guidelines & Documentation",
      description:
        "Provide a comprehensive guide to ensure consistent messaging across teams and channels.",
      details: [
        "Do’s and don’ts for brand language.",
        "Sample messaging templates.",
        "Training materials for internal teams.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Messaging Package",
      price: "",
      features: [
        "Core Message Definition",
        "Tagline Creation",
        "Basic Tone of Voice",
        "Delivery in 7 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Standard Messaging Package",
      price: "",
      features: [
        "Audience Segmentation",
        "Multiple Tagline Options",
        "Detailed Tone of Voice Guidelines",
        "Delivery in 10 Days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Messaging Suite",
      price: "",
      features: [
        "Comprehensive Messaging Framework",
        "Messaging Guidelines Document",
        "Internal Training Support",
        "Priority Delivery in 7 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Messaging Services",
  subtitle:
    "Communicate your brand’s unique story and values effectively with consistent and strategic messaging.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why is brand messaging important?",
      answer:
        "It helps create a clear and consistent narrative that connects with your audience and differentiates your brand.",
    },
    {
      question: "Can messaging evolve over time?",
      answer:
        "Yes, messaging should adapt to market trends, customer feedback, and brand growth while maintaining core consistency.",
    },
    {
      question: "Do you help with messaging for all channels?",
      answer:
        "Absolutely, we tailor messaging guidelines for websites, social media, advertising, and internal communications.",
    },
    {
      question: "How involved will I be in the process?",
      answer:
        "We collaborate closely with you for feedback and approvals to ensure messaging aligns perfectly with your vision.",
    },
    {
      question: "Can you help with crisis communication messaging?",
      answer:
        "Yes, we provide strategic messaging support for managing communications during challenging situations.",
    },
  ],
};

export const BrandExperienceDesignPageDetails = {
  SeoName: {
    seotitle: "BrandExperienceDesignPageDetailsseo",
  },
  section2: {
    tagline: "Design Meaningful Interactions",
    heading: "Create Exceptional Brand Experiences Across Touchpoints",
    description:
      "Leor Media crafts seamless and memorable brand experiences that engage customers emotionally and foster loyalty at every interaction.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Customer Journey Mapping",
      description:
        "Analyze and design customer journeys to deliver consistent and impactful experiences.",
      details: [
        "Identify key touchpoints and pain points.",
        "Create optimized journey flows.",
        "Personalize experiences based on behavior and preferences.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Omnichannel Experience Design",
      description:
        "Deliver a unified brand experience across digital, physical, and social channels.",
      details: [
        "Integrate online and offline touchpoints.",
        "Ensure consistent messaging and visuals.",
        "Enhance customer engagement and satisfaction.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Service Design & Innovation",
      description:
        "Design and improve services that align with brand values and customer expectations.",
      details: [
        "Develop service blueprints and workflows.",
        "Identify opportunities for innovation.",
        "Enhance usability and convenience.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Touchpoint Optimization",
      description:
        "Optimize every interaction point to maximize positive brand perception.",
      details: [
        "Evaluate current touchpoints for effectiveness.",
        "Implement enhancements based on data and feedback.",
        "Train staff to deliver brand-aligned experiences.",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Experience Metrics & Analytics",
      description:
        "Measure and analyze brand experience performance to drive continuous improvement.",
      details: [
        "Track customer satisfaction and loyalty metrics.",
        "Analyze feedback and behavior patterns.",
        "Adjust strategies based on insights.",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Experience Design",
      price: "",
      features: [
        "Customer Journey Mapping",
        "Touchpoint Analysis",
        "Experience Improvement Plan",
        "Delivery in 7 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Comprehensive Experience Design",
      price: "",
      features: [
        "Omnichannel Strategy",
        "Service Design Blueprint",
        "Touchpoint Optimization",
        "Delivery in 14 Days",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Experience Suite",
      price: "",
      features: [
        "Full Experience Strategy & Execution",
        "Analytics & Reporting",
        "Staff Training & Support",
        "Priority Delivery in 10 Days",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Experience Design Services",
  subtitle:
    "Elevate your brand by designing meaningful, consistent, and memorable experiences for your customers.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is brand experience design?",
      answer:
        "It’s the process of designing interactions and touchpoints that shape how customers perceive and feel about your brand.",
    },
    {
      question: "Why is an omnichannel experience important?",
      answer:
        "Customers engage with brands across multiple channels; a unified experience ensures consistency and stronger brand loyalty.",
    },
    {
      question: "How do you measure brand experience success?",
      answer:
        "Through metrics like customer satisfaction, Net Promoter Score, repeat purchases, and qualitative feedback.",
    },
    {
      question:
        "Can you help with both digital and physical brand experiences?",
      answer:
        "Yes, we design seamless experiences across websites, apps, stores, events, and more.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work with diverse sectors including retail, hospitality, technology, healthcare, and more.",
    },
  ],
};

export const BrandAwarenessCampaignsPageDetails = {
  SeoName: {
    seotitle: "BrandAwarenessCampaignsPageDetailsseo",
  },
  section2: {
    tagline: "Boost Your Brand Visibility",
    heading: "Strategic Brand Awareness Campaigns That Connect and Convert",
    description:
      "Leor Media creates powerful brand awareness campaigns designed to increase recognition, build trust, and drive customer engagement across multiple channels.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Target Audience Research",
      description:
        "Identify and understand your ideal customers to tailor campaigns that resonate.",
      details: [
        "Demographic and psychographic profiling",
        "Competitive landscape analysis",
        "Behavioral insights and preferences",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Multi-Channel Campaign Strategy",
      description:
        "Design integrated campaigns across social media, digital ads, PR, and offline channels.",
      details: [
        "Social media marketing and influencer partnerships",
        "Paid digital advertising (PPC, display ads)",
        "Event sponsorships and experiential marketing",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Creative Campaign Development",
      description:
        "Craft compelling visuals, messaging, and content that capture attention and communicate your brand story.",
      details: [
        "Concept ideation and storyboard creation",
        "Video production and graphic design",
        "Copywriting tailored to target audiences",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Campaign Execution & Management",
      description:
        "Implement and monitor campaigns to ensure maximum reach and impact.",
      details: [
        "Media buying and placement optimization",
        "Real-time performance tracking",
        "Budget management and ROI analysis",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Reporting & Insights",
      description:
        "Analyze campaign results to refine strategies and improve future brand awareness efforts.",
      details: [
        "Detailed analytics and reporting dashboards",
        "Customer sentiment analysis",
        "Recommendations for continuous improvement",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Awareness Package",
      price: "",
      features: [
        "Audience Research",
        "Social Media Campaign Setup",
        "Basic Creative Assets",
        "Campaign Monitoring",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Advanced Campaign Package",
      price: "",
      features: [
        "Multi-Channel Strategy",
        "Video and Graphic Production",
        "Paid Advertising Management",
        "Detailed Performance Reports",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Brand Awareness Suite",
      price: "",
      features: [
        "Full Campaign Management",
        "Influencer Partnerships",
        "Event Marketing Support",
        "Comprehensive Analytics & Optimization",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Awareness Campaign Services",
  subtitle:
    "Increase your brand’s visibility and customer engagement with expertly crafted awareness campaigns.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What channels do you use for brand awareness campaigns?",
      answer:
        "We leverage social media, digital ads, influencer marketing, PR, events, and traditional advertising.",
    },
    {
      question: "How do you measure brand awareness success?",
      answer:
        "Through metrics like reach, impressions, engagement rates, website traffic, and brand recall surveys.",
    },
    {
      question: "Can you handle campaigns for new and existing brands?",
      answer:
        "Yes, we design tailored strategies whether you’re launching a new brand or growing an established one.",
    },
    {
      question: "Do you provide creative content for campaigns?",
      answer:
        "Absolutely. We create videos, graphics, copy, and other assets aligned with your brand identity.",
    },
    {
      question: "How quickly can a campaign be launched?",
      answer:
        "Depending on the scope, campaigns can be planned and launched within 2-4 weeks.",
    },
  ],
};

export const RebrandingServicesPageDetails = {
  SeoName: {
    seotitle: "RebrandingServicesPageDetailsseo",
  },
  section2: {
    tagline: "Refresh and Reinvent Your Brand",
    heading:
      "Professional Rebranding Services to Elevate Your Business Identity",
    description:
      "Leor Media helps businesses successfully navigate the rebranding process to stay relevant, attract new customers, and reflect evolving company values.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Brand Audit & Analysis",
      description:
        "Comprehensive evaluation of your current brand to identify strengths, weaknesses, and growth opportunities.",
      details: [
        "Market positioning review",
        "Competitor benchmarking",
        "Customer perception analysis",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Visual Identity Redesign",
      description:
        "Update your logo, color palette, typography, and other visual elements to reflect your new brand direction.",
      details: [
        "Logo redesign and refinement",
        "Brand color and font selection",
        "Collateral design updates",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Messaging & Tone Refinement",
      description:
        "Craft clear, consistent messaging that resonates with your target audience and supports your rebranding goals.",
      details: [
        "Tagline and slogan development",
        "Brand voice guidelines",
        "Content strategy alignment",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Rebranding Strategy & Rollout",
      description:
        "Plan and execute a seamless transition across all platforms and touchpoints to ensure brand consistency.",
      details: [
        "Internal team alignment and training",
        "Customer communication planning",
        "Marketing campaign development",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Post-Rebranding Support",
      description:
        "Ongoing support to monitor brand performance and make adjustments as needed.",
      details: [
        "Brand tracking and feedback analysis",
        "Performance reporting",
        "Continuous brand optimization",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Rebranding Package",
      price: "",
      features: [
        "Brand Audit",
        "Logo Refresh",
        "Messaging Update",
        "Rollout Planning",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Comprehensive Rebranding Package",
      price: "",
      features: [
        "Full Visual Identity Redesign",
        "Messaging & Tone Refinement",
        "Marketing Rollout",
        "Post-Launch Support",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Rebranding Suite",
      price: "",
      features: [
        "Complete Brand Transformation",
        "Custom Strategy & Execution",
        "Team Training & Support",
        "Ongoing Brand Performance Monitoring",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Rebranding Services",
  subtitle:
    "Transform your brand identity to better connect with your audience and reflect your company’s evolution.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "What is included in a rebranding service?",
      answer:
        "It includes brand audit, visual redesign, messaging updates, strategy planning, rollout execution, and ongoing support.",
    },
    {
      question: "How long does a rebranding process take?",
      answer:
        "Typically, it takes 6 to 12 weeks depending on the scope and complexity of the project.",
    },
    {
      question: "Will rebranding affect my existing customers?",
      answer:
        "When done well, rebranding strengthens customer loyalty and attracts new audiences without losing existing ones.",
    },
    {
      question: "Can you help with digital and offline brand updates?",
      answer:
        "Yes, we ensure consistent rebranding across websites, social media, print materials, and other touchpoints.",
    },
    {
      question: "Do you offer support after the rebranding launch?",
      answer:
        "Absolutely, we provide ongoing brand performance monitoring and adjustment recommendations.",
    },
  ],
};

export const BrandResearchAndAnalysisPageDetails = {
  SeoName: {
    seotitle: "BrandResearchAndAnalysisPageDetailsseo",
  },
  section2: {
    tagline: "Understand Your Brand’s True Potential",
    heading: "In-Depth Brand Research & Analysis Services",
    description:
      "Leor Media provides comprehensive brand research and analysis to uncover insights that guide effective branding strategies and business growth.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Market Research",
      description:
        "Gather detailed data on your industry, competitors, and target audience to inform strategic decisions.",
      details: [
        "Competitive landscape assessment",
        "Customer demographics and psychographics",
        "Trend analysis and market opportunities",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Perception Analysis",
      description:
        "Evaluate how your brand is currently perceived by customers, stakeholders, and the market.",
      details: [
        "Surveys and feedback collection",
        "Social media sentiment analysis",
        "Customer experience reviews",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Equity Measurement",
      description:
        "Assess the value and strength of your brand in the marketplace to understand its impact on business performance.",
      details: [
        "Brand awareness tracking",
        "Brand loyalty and engagement metrics",
        "Financial value estimation",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "SWOT Analysis",
      description:
        "Identify your brand’s strengths, weaknesses, opportunities, and threats to build a robust branding strategy.",
      details: [
        "Internal and external factor assessment",
        "Strategic planning insights",
        "Risk mitigation recommendations",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Customer Journey Mapping",
      description:
        "Visualize the complete customer experience with your brand to identify pain points and opportunities for improvement.",
      details: [
        "Touchpoint analysis",
        "Experience optimization strategies",
        "Personalization opportunities",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Research Package",
      price: "",
      features: ["Market Overview", "Brand Perception Survey", "SWOT Summary"],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Advanced Analysis Package",
      price: "",
      features: [
        "Comprehensive Market & Competitor Research",
        "Brand Equity Measurement",
        "Customer Journey Mapping",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Insight Suite",
      price: "",
      features: [
        "Full Research & Analysis Portfolio",
        "Custom Reports & Strategic Recommendations",
        "Ongoing Brand Monitoring",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Research and Analysis",
  subtitle:
    "Unlock valuable insights about your brand, customers, and market to drive smarter business decisions.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why is brand research important?",
      answer:
        "It provides insights into market trends, customer perceptions, and competitive positioning to guide effective branding strategies.",
    },
    {
      question: "How do you conduct brand perception analysis?",
      answer:
        "We use surveys, social media monitoring, and customer feedback to understand how your brand is viewed.",
    },
    {
      question: "What is brand equity and why measure it?",
      answer:
        "Brand equity is the value your brand adds to your products or services. Measuring it helps assess brand strength and financial impact.",
    },
    {
      question: "Can brand research improve marketing efforts?",
      answer:
        "Absolutely. It helps tailor messaging, identify opportunities, and optimize customer engagement for better results.",
    },
    {
      question: "Do you provide customized research reports?",
      answer:
        "Yes, we deliver detailed, tailored reports that meet your specific business goals and branding needs.",
    },
  ],
};

export const BrandTrackingAndPerformanceEvaluationPageDetails = {
  SeoName: {
    seotitle: "BrandTrackingAndPerformanceEvaluationPageDetailsseo",
  },
  section2: {
    tagline: "Monitor Your Brand’s Impact Continuously",
    heading: "Comprehensive Brand Tracking & Performance Evaluation",
    description:
      "Leor Media helps you measure and evaluate your brand’s performance over time to ensure sustained growth and alignment with business goals.",
  },

  services: [
    {
      icon: AppMonetizationStrategy,
      title: "Brand Awareness Tracking",
      description:
        "Track how widely your brand is recognized across different markets and customer segments.",
      details: [
        "Surveys and brand recall studies",
        "Digital analytics and social listening",
        "Media coverage and share of voice analysis",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Brand Equity Monitoring",
      description:
        "Measure ongoing changes in brand equity to understand your brand’s value trajectory.",
      details: [
        "Customer loyalty and advocacy metrics",
        "Engagement and sentiment analysis",
        "Competitive benchmarking",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Performance KPIs & Metrics",
      description:
        "Define and track key performance indicators tailored to your brand strategy and business objectives.",
      details: [
        "Sales impact analysis",
        "Market share tracking",
        "Customer satisfaction and NPS scores",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Campaign Effectiveness Evaluation",
      description:
        "Assess the success of branding campaigns through data-driven analysis.",
      details: [
        "ROI measurement",
        "Audience reach and engagement",
        "Conversion tracking",
      ],
      link: "/contactus",
    },
    {
      icon: AppMonetizationStrategy,
      title: "Custom Reporting & Insights",
      description:
        "Receive regular, tailored reports that highlight insights, trends, and actionable recommendations.",
      details: [
        "Dashboard setup and maintenance",
        "Monthly and quarterly performance reviews",
        "Strategic adjustments and optimization",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Tracking Plan",
      price: "",
      features: [
        "Brand Awareness Reports",
        "Basic Equity Monitoring",
        "Quarterly Performance Reviews",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Advanced Evaluation Plan",
      price: "",
      features: [
        "Full KPI Tracking",
        "Campaign Effectiveness Analysis",
        "Monthly Custom Reports",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise Monitoring Suite",
      price: "",
      features: [
        "Comprehensive Brand & Performance Monitoring",
        "Real-time Dashboard Access",
        "Dedicated Strategic Consultation",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  coverimage: WebDesigningCoverImage,
  title: "Brand Tracking and Performance Evaluation",
  subtitle:
    "Ensure your brand stays strong and relevant with ongoing monitoring, analysis, and strategic adjustments.",
  coverImage: {
    src: WebDesigningCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "Why is brand tracking important?",
      answer:
        "Continuous tracking helps identify changes in brand perception and performance to respond proactively.",
    },
    {
      question: "How often do you provide performance reports?",
      answer:
        "We offer monthly and quarterly reports tailored to your needs and strategic goals.",
    },
    {
      question: "Can you help measure the success of branding campaigns?",
      answer:
        "Yes. We evaluate campaigns through ROI analysis, engagement metrics, and conversion tracking.",
    },
    {
      question: "What KPIs do you track for brand performance?",
      answer:
        "We track awareness, equity, customer satisfaction, market share, and sales impact among others.",
    },
    {
      question: "Do you offer customized dashboards for real-time monitoring?",
      answer:
        "Yes. We can set up dashboards that provide live insights and easy access to your brand’s health data.",
    },
  ],
};

//advertising
export const AdvertisingCompany = {
  coverimage: AdvertisitngCoverImage,
  title: "Advertising",
  subtitle:
    "Leor Media is a results-driven advertising agency delivering impactful campaigns across digital and traditional media.",
  coverImage: {
    src: AdvertisitngCoverImage, // Update this path to the actual image path
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Advertising That Drives Results.",
    heading: "Reach the Right Audience at the Right Time.",
    description:
      "At Leor Media, we create high-impact advertising strategies that cut through the noise. Whether it’s digital or traditional media, we help businesses increase visibility, generate leads, and grow revenue through data-backed campaigns.",
  },

  services: [
    {
      icon: DisplayAdvertising,
      title: "Display Advertising",
      description:
        "Boost your online visibility with eye-catching banner ads strategically placed across websites, apps, and digital platforms.",
      link: "/services/advertising-company/display-advertising",
    },
    {
      icon: VideoAdvertising,
      title: "Video Advertising",
      description:
        "Engage audiences with compelling video ads on YouTube, social media, and OTT platforms. Tell your brand story visually and effectively.",
      link: "/services/advertising-company/video-advertising",
    },
    {
      icon: NativeAdvertising,
      title: "Native Advertising",
      description:
        "Blend your promotional content seamlessly within editorial environments to build trust and increase engagement without being intrusive.",
      link: "/services/advertising-company/native-advertising",
    },
    {
      icon: ProgrammaticAdvertising,
      title: "Programmatic Advertising",
      description:
        "Leverage real-time bidding and automation to deliver personalized ads to the right audience at scale, with maximum efficiency.",
      link: "/services/advertising-company/programmatic-advertising",
    },
    {
      icon: OutdoorAdvertising,
      title: "Outdoor Advertising",
      description:
        "Capture attention with high-impact billboards, hoardings, and transit ads in strategic locations for strong offline brand presence.",
      link: "/services/advertising-company/outdoor-advertising",
    },
    {
      icon: PrintAdvertising,
      title: "Print Advertising",
      description:
        "Reach traditional audiences through newspapers, magazines, and brochures with professionally designed and placed print campaigns.",
      link: "/services/advertising-company/print-advertising",
    },
    {
      icon: RadioAdvertising,
      title: "Radio Advertising",
      description:
        "Tap into the power of audio storytelling by broadcasting your brand message across FM/AM radio and streaming platforms.",
      link: "/services/advertising-company/radio-advertising",
    },
    {
      icon: TVAdvertising,
      title: "TV Advertising",
      description:
        "Maximize your brand reach with television commercials tailored for regional or national broadcast on popular TV networks.",
      link: "/services/advertising-company/tv-advertising",
    },
    {
      icon: InGameAdvertising,
      title: "In-Game Advertising",
      description:
        "Advertise within mobile and console games with branded placements that resonate with tech-savvy, engaged gaming audiences.",
      link: "/services/advertising-company/ingame-advertising",
    },
    {
      icon: TheatreAdvertising,
      title: "Theatre Advertising",
      description:
        "Create lasting impressions with cinematic ads shown before movie screenings in theaters across targeted locations.",
      link: "/services/advertising-company/theater-advertising",
    },
  ],
};
export const DisplayAdvertisingPageDetails = {
  SeoName: {
    seotitle: "displayadvertising",
  },
  title: "Display Advertising Services",
  subtitle:
    "Leor Media crafts visually compelling and targeted banner ad campaigns to boost your online presence and drive results.",
  coverimage: AdvertisitngCoverImage, // replace with actual image import
  coverImage: {
    src: AdvertisitngCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Make Every Impression Count",
    heading: "Eye-Catching Banner Ads That Convert",
    description:
      "We design and manage display ad campaigns that grab attention and deliver measurable ROI. Our data-driven targeting ensures your brand reaches the right people across the web — on apps, websites, and social media platforms.",
  },

  services: [
    {
      icon: DisplayAdvertising,
      title: "Ad Design & Creative",
      description:
        "Custom-designed banners that align with your brand and messaging.",
      details: [
        "Static & Animated Banner Designs",
        "Mobile-Responsive Formats",
        "Ad Copywriting & CTA Optimization",
      ],
      link: "/contactus",
    },
    {
      icon: DisplayAdvertising,
      title: "Strategic Ad Placement",
      description: "Get your ads seen on high-traffic websites and apps.",
      details: [
        "Google Display Network (GDN)",
        "Premium Publisher Deals",
        "Audience-Based Targeting",
      ],
      link: "/contactus",
    },
    {
      icon: DisplayAdvertising,
      title: "Retargeting Campaigns",
      description:
        "Re-engage users who have interacted with your website or app.",
      details: [
        "Cross-Device Retargeting",
        "Cart Abandonment Ads",
        "Behavioral Triggers",
      ],
      link: "/contactus",
    },
    {
      icon: DisplayAdvertising,
      title: "Performance Tracking",
      description: "Transparent reporting to optimize ad performance.",
      details: [
        "Impressions & Clicks",
        "CTR, Conversions, ROI Reports",
        "A/B Testing & Heatmaps",
      ],
      link: "/contactus",
    },
    {
      icon: DisplayAdvertising,
      title: "Full Campaign Management",
      description: "End-to-end management of your display ad campaigns.",
      details: [
        "Creative Production",
        "Media Planning & Buying",
        "Budget Optimization",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Plan",
      price: "",
      features: [
        "3 Banner Designs",
        "GDN Placement",
        "Up to 1 Lakh Impressions",
        "Performance Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Plan",
      price: "",
      features: [
        "6 Custom Banners",
        "Retargeting Setup",
        "Up to 5 Lakh Impressions",
        "A/B Testing Reports",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Reach Plan",
      price: "",
      features: [
        "10+ Banners (Static/Animated)",
        "Premium Publisher Placements",
        "10 Lakh+ Impressions",
        "Dedicated Campaign Manager",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is display advertising?",
      answer:
        "Display advertising involves showing banner, image, or rich media ads across websites, apps, and platforms to promote your brand or products.",
    },
    {
      question: "Where will my display ads appear?",
      answer:
        "Your ads can appear on the Google Display Network, popular websites, mobile apps, and social media platforms based on targeting preferences.",
    },
    {
      question: "Do you handle design and ad copy?",
      answer:
        "Yes, we create professional ad creatives including design and engaging ad copy tailored to your campaign goals.",
    },
    {
      question: "Can I track how my display ads perform?",
      answer:
        "Absolutely. We provide detailed reports covering impressions, clicks, conversions, and ROI to help you measure campaign effectiveness.",
    },
    {
      question: "What is retargeting and do you support it?",
      answer:
        "Retargeting shows your ads to users who previously visited your site. We support advanced retargeting setups for improved conversion rates.",
    },
    {
      question: "Is there a minimum ad budget required?",
      answer:
        "We recommend a minimum monthly media budget based on your goals, but we offer scalable packages starting from .",
    },
  ],
};
export const VideoAdvertisingPageDetails = {
  SeoName: {
    seotitle: "videoadvertising",
  },
  title: "Video Advertising Services",
  subtitle:
    "Engage your audience with impactful video ads crafted by Leor Media — optimized for platforms like YouTube, Instagram, and OTT.",
  coverimage: DefaultCoverImage, // Replace later
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Video That Captures, Converts, and Communicates",
    heading: "High-Performance Video Advertising Campaigns",
    description:
      "We produce and promote powerful video ads tailored to your brand's goals. Whether it's for YouTube pre-rolls, social feeds, or OTT platforms, our videos cut through the noise and drive results.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "YouTube Video Ads",
      description: "Run in-stream and bumper ads directly on YouTube.",
      details: [
        "Skippable & Non-Skippable Ads",
        "YouTube Shorts Promotion",
        "Google Ads Campaign Setup",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Social Media Video Ads",
      description:
        "High-impact videos for platforms like Instagram & Facebook.",
      details: [
        "Vertical videos for Stories/Reels",
        "Square/Horizontal for Feeds",
        "Boosted Engagement & Reach",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "OTT Platform Ads",
      description: "Advertise on premium streaming platforms.",
      details: [
        "Ad insertions on Hotstar, SonyLiv, Zee5",
        "Geo & Demographic Targeting",
        "30-sec & 60-sec Professional Spots",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Video Ad Creation",
      description:
        "Scriptwriting, editing, and animation — all under one roof.",
      details: [
        "Motion Graphics & Product Videos",
        "Voiceover & Background Score",
        "Storyboarding & Revisions",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Video Promo",
      price: "",
      features: [
        "30-sec Motion Video Ad",
        "One Platform Upload",
        "Royalty-Free Music",
        "5-Day Delivery",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "YouTube/OTT Starter",
      price: "",
      features: [
        "1-min Video Ad",
        "YouTube/OTT Campaign Launch",
        "Targeting Setup",
        "Performance Report",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Full Campaign Suite",
      price: "",
      features: [
        "Script + 2-min Video Ad",
        "Multi-Platform Distribution",
        "Ad Spend Consultation",
        "2 Weeks Optimization Support",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What platforms do you support for video advertising?",
      answer:
        "We support YouTube, Facebook, Instagram, LinkedIn, and major OTT platforms like Disney+ Hotstar, Zee5, and SonyLiv.",
    },
    {
      question: "Do you handle video creation too?",
      answer:
        "Yes. We provide complete video production services including scripting, editing, voiceover, and animation.",
    },
    {
      question: "Can I run ads in regional languages?",
      answer:
        "Absolutely. We create and target video ads in English, Hindi, Telugu, Tamil, and other Indian languages as needed.",
    },
    {
      question: "How is success measured for video campaigns?",
      answer:
        "We track views, engagement rate, click-throughs, conversions, and other key performance metrics based on your campaign goals.",
    },
    {
      question: "Do you support remarketing with video?",
      answer:
        "Yes, we can run remarketing video ads to re-engage users who interacted with your brand earlier.",
    },
    {
      question: "What’s the ideal duration for a video ad?",
      answer:
        "It depends on the platform. Typically: 6–15 sec (bumper), 30 sec (YouTube/Instagram), 60 sec+ (OTT or brand videos).",
    },
  ],
};
export const NativeAdvertisingPageDetails = {
  SeoName: {
    seotitle: "nativeadvertising",
  },
  title: "Native Advertising Services",
  subtitle:
    "Blend your brand into editorial content with Leor Media’s native ads that inform, engage, and convert — without interrupting the user experience.",
  coverimage: DefaultCoverImage, // Replace later
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Seamless Integration, Maximum Engagement",
    heading: "Drive Trust & Clicks Through Native Ad Campaigns",
    description:
      "We craft native ads that match the look and feel of the platform they appear on — whether it's a news site, blog, or app — ensuring high engagement and brand trust.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Content-Based Native Ads",
      description:
        "Sponsored articles that educate while promoting your brand.",
      details: [
        "SEO-Optimized Sponsored Posts",
        "Editorial-Style Writing",
        "Custom CTA Placement",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "In-Feed Social Native Ads",
      description:
        "Promoted posts that appear naturally in social media feeds.",
      details: [
        "Facebook & Instagram Boosts",
        "LinkedIn Native Ads",
        "Auto-Play Video/Carousel Posts",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Programmatic Native Ads",
      description:
        "Automated placement of native ads on top news and blog sites.",
      details: [
        "Outbrain, Taboola, MGID Setup",
        "Headline + Thumbnail Optimization",
        "Geo & Interest-Based Targeting",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Sponsored Video & Widgets",
      description:
        "Engaging video or interactive widgets integrated within content.",
      details: [
        "On-Site Native Video Ads",
        "Recommendation Engine Widgets",
        "Brand Visibility Without Disruption",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Native Pack",
      price: "",
      features: [
        "1 Sponsored Blog Post",
        "1 Platform Promotion",
        "Basic Reporting",
        "Up to 25K Reach",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Business Reach Plan",
      price: "",
      features: [
        "2 Blog Posts + Social Push",
        "Taboola/Outbrain Setup",
        "Up to 1 Lakh Reach",
        "CTR & Conversion Reports",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Native Domination",
      price: "",
      features: [
        "Multi-Platform Content",
        "Video + Widget Integration",
        "Retargeting Included",
        "Detailed Campaign Dashboard",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is native advertising?",
      answer:
        "Native advertising is a form of paid media where the ad matches the form, feel, and function of the content of the platform it appears on.",
    },
    {
      question: "Where will my native ads appear?",
      answer:
        "Your ads can appear on top news websites, blogs, apps, and social media feeds depending on the campaign strategy.",
    },
    {
      question: "Do native ads perform better than display ads?",
      answer:
        "Yes, native ads often have higher engagement rates because they appear as natural content rather than intrusive banners.",
    },
    {
      question: "Can I track the performance of native ads?",
      answer:
        "Absolutely. We provide reports on impressions, CTR, engagement time, and conversions for each campaign.",
    },
    {
      question: "Do you write the content for native ads?",
      answer:
        "Yes, our team creates compelling, brand-safe content tailored to your goals and aligned with the platform style.",
    },
    {
      question: "Can I run native ads in regional languages?",
      answer:
        "Yes, we support native advertising in multiple Indian languages including Hindi, Telugu, Tamil, and more.",
    },
  ],
};
export const ProgrammaticAdvertisingPageDetails = {
  SeoName: {
    seotitle: "programmaticadvertising",
  },
  title: "Programmatic Advertising Services",
  subtitle:
    "Automate and optimize your digital ad buying with Leor Media's programmatic ad solutions across web, mobile, and video platforms.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Smarter Ad Buying with Precision Targeting",
    heading: "AI-Driven Programmatic Ad Campaigns",
    description:
      "Reach the right audience at the right time with data-powered programmatic advertising. We help you launch intelligent ad campaigns using real-time bidding (RTB) and audience segmentation.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Display & Banner Ads",
      description:
        "High-performance ads shown across premium websites and apps.",
      details: [
        "Google Display Network (GDN)",
        "Dynamic & Responsive Ads",
        "Geo & Device Targeting",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Programmatic Video Ads",
      description:
        "Stream video ads to target users across YouTube and OTT platforms.",
      details: [
        "In-Stream & Out-Stream Videos",
        "CPV & CPM Models",
        "YouTube, MX Player, Hotstar",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Native & Rich Media Ads",
      description:
        "Interactive and integrated ad formats for better engagement.",
      details: [
        "Programmatic Native Ads",
        "Carousel, Expandable Banners",
        "High CTR Formats",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Retargeting & Lookalike Ads",
      description:
        "Re-engage past visitors and reach similar high-intent audiences.",
      details: [
        "Pixel-Based Retargeting",
        "CRM & First-Party Data Integration",
        "Cross-Device Campaigns",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Programmatic Plan",
      price: "",
      features: [
        "Setup & Strategy Consultation",
        "1 Platform Campaign Launch",
        "Targeting & A/B Testing",
        "Basic Performance Reports",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Smart Audience Plan",
      price: "",
      features: [
        "Multi-Platform Campaigns",
        "Retargeting Setup",
        "Creative Ad Variations",
        "Detailed Weekly Reports",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Enterprise RTB Suite",
      price: "",
      features: [
        "Advanced DSP Integration",
        "Custom Audience Segmentation",
        "Lookalike + Retargeting",
        "Dedicated Campaign Manager",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is programmatic advertising?",
      answer:
        "Programmatic advertising is the automated process of buying and selling digital ads using software and AI for real-time bidding and targeting.",
    },
    {
      question: "Which platforms do you use for programmatic ads?",
      answer:
        "We use leading DSPs like Google DV360, Taboola, Outbrain, and custom integrations based on your business needs.",
    },
    {
      question: "Is programmatic only for large businesses?",
      answer:
        "Not at all. We have flexible packages suitable for startups, SMBs, and enterprise clients.",
    },
    {
      question: "Can I retarget website visitors using programmatic?",
      answer:
        "Yes. We set up tracking pixels and retargeting workflows to re-engage users across platforms.",
    },
    {
      question: "Do you optimize ads after launching?",
      answer:
        "Yes. We continuously monitor performance and optimize creatives, placements, and bidding for better results.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We track key metrics like impressions, clicks, conversions, view-through rates, and ROI using analytics dashboards.",
    },
  ],
};
export const OutdoorAdvertisingPageDetails = {
  SeoName: {
    seotitle: "outdooradvertising",
  },
  title: "Outdoor Advertising Services",
  subtitle:
    "Make your brand unmissable with high-impact outdoor advertising campaigns — from billboards to transit media — across major cities in India.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Unmatched Visibility, Unforgettable Impact",
    heading: "Dominate the Streets with Strategic Outdoor Ads",
    description:
      "Leor Media offers end-to-end outdoor advertising solutions that grab attention and boost brand awareness — where your audience lives, works, and travels.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Hoardings & Billboards",
      description: "Large format displays in high-traffic urban areas.",
      details: [
        "Static & Digital Billboards",
        "Prime Locations Across India",
        "Creative Design Support",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Transit Media Ads",
      description: "Ad placements on buses, autos, trains, and metro systems.",
      details: [
        "Bus & Auto Branding",
        "Metro & Railway Station Ads",
        "Mobile Van Campaigns",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Mall & Cinema Advertising",
      description: "Brand exposure in leisure and retail destinations.",
      details: [
        "Backlit Boards in Malls",
        "In-Cinema Slides & Promos",
        "Standees & Entry Branding",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Airport & Corporate Space Ads",
      description:
        "Target business and premium travelers with high-end placements.",
      details: [
        "Airport Panels & LED Displays",
        "Coworking & IT Park Branding",
        "Lounge & Reception Ads",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Starter Visibility Plan",
      price: "",
      features: [
        "1 Billboard or Transit Location",
        "Creative Design Assistance",
        "7-Day Display Time",
        "Basic Location Insights",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Urban Impact Pack",
      price: "",
      features: [
        "Multi-Location Display",
        "Transit + Hoarding Combo",
        "15-Day Campaign",
        "Photo Proofs & Report",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Citywide Branding Blitz",
      price: "",
      features: [
        "Pan-City Campaign Setup",
        "Billboard, Transit & Mall Ads",
        "30-Day Promotion",
        "Performance Mapping",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Where can you run outdoor ads?",
      answer:
        "We provide outdoor advertising across major cities and towns in India, including metros, highways, malls, and transit hubs.",
    },
    {
      question: "What’s the minimum duration for an outdoor ad?",
      answer:
        "Most outdoor campaigns require a minimum of 7 days, but we recommend at least 15–30 days for better visibility.",
    },
    {
      question: "Can I choose specific locations?",
      answer:
        "Yes. We’ll share a list of available locations based on your target audience and budget.",
    },
    {
      question: "Is creative design included?",
      answer:
        "Yes, we offer creative support for hoardings, vehicle wraps, and other formats as part of all packages.",
    },
    {
      question: "Will I get proof of display?",
      answer:
        "Absolutely. We provide photographic proof and a performance report for every campaign.",
    },
    {
      question: "Can you handle multi-city outdoor campaigns?",
      answer:
        "Yes. We specialize in planning and executing synchronized campaigns across multiple cities with centralized management.",
    },
  ],
};
export const PrintAdvertisingPageDetails = {
  SeoName: {
    seotitle: "printadvertising",
  },
  title: "Print Advertising Services",
  subtitle:
    "Reach targeted local and national audiences through compelling newspaper, magazine, and brochure advertisements with Leor Media.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Traditional Media, Modern Impact",
    heading: "Effective Print Ad Campaigns That Deliver Results",
    description:
      "We help your brand stand out in leading newspapers, magazines, and printed materials with expert design, placement, and distribution strategies tailored to your goals.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Newspaper Ads",
      description:
        "Reach mass audiences through top regional and national papers.",
      details: [
        "Classified & Display Ads",
        "Multi-Language Newspapers",
        "TOI, Eenadu, Hindu, Sakshi, and more",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Magazine Ads",
      description:
        "Place your brand in niche and lifestyle magazines for high engagement.",
      details: [
        "Fashion, Tech, Business & Health",
        "Regional & National Distribution",
        "Full Page, Half Page, Inserts",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Brochures & Flyers",
      description:
        "Design and print promotional brochures, leaflets, and flyers.",
      details: [
        "Creative Design & Copywriting",
        "Bulk Offset & Digital Printing",
        "Custom Paper & Finish Options",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Corporate Stationery & Branding",
      description:
        "Printed materials to support your business identity and communication.",
      details: [
        "Business Cards, Letterheads",
        "Branded Folders, Envelopes",
        "Event & Expo Collateral",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Local Print Pack",
      price: "",
      features: [
        "1 Newspaper Ad (Quarter Page)",
        "Single Language Publication",
        "Ad Design Included",
        "Basic Circulation Report",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Multi-Publication Plan",
      price: "",
      features: [
        "Ads in 2+ Newspapers or 1 Magazine",
        "Multi-City or Multi-Language Options",
        "Full Ad Design & Proofing",
        "Circulation & Coverage Report",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Premium Print Combo",
      price: "",
      features: [
        "Newspaper + Magazine + Flyers",
        "Print & Distribution Strategy",
        "Custom Creative Campaign",
        "Detailed Performance Insights",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Which newspapers do you advertise in?",
      answer:
        "We work with leading publications like Times of India, Hindu, Eenadu, Sakshi, Deccan Chronicle, Indian Express, and more.",
    },
    {
      question: "Is ad design included in print packages?",
      answer:
        "Yes, our team handles professional ad design tailored to each publication's format and audience.",
    },
    {
      question: "Can I run ads in multiple languages?",
      answer:
        "Absolutely. We support regional languages including Telugu, Hindi, Tamil, Kannada, and more based on your audience.",
    },
    {
      question: "Do you offer magazine ads?",
      answer:
        "Yes, we place ads in business, lifestyle, tech, and niche magazines with high circulation.",
    },
    {
      question: "Can you help with flyer printing and distribution?",
      answer:
        "Yes, we handle everything from flyer design to printing and local distribution based on your target area.",
    },
    {
      question: "How do you track performance in print ads?",
      answer:
        "We provide circulation estimates, and you can include QR codes, unique URLs, or phone numbers to track leads.",
    },
  ],
};
export const RadioAdvertisingPageDetails = {
  SeoName: {
    seotitle: "radioadvertising",
  },
  title: "Radio Advertising Services",
  subtitle:
    "Promote your brand on top FM radio stations across India with creative audio ads and powerful reach.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Speak to Millions, Instantly",
    heading: "Radio Campaigns That Build Recall and Response",
    description:
      "Leor Media crafts engaging radio ads that resonate with regional and national audiences — turning passive listeners into active customers.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "FM Radio Advertising",
      description:
        "Reach urban and local audiences through leading FM stations.",
      details: [
        "91.1 Radio City, Red FM, Big FM, Radio Mirchi & More",
        "Jingle Creation & Voiceovers",
        "Time Slot Planning",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Regional Language Ads",
      description: "Advertise in Telugu, Hindi, Tamil, Kannada, and more.",
      details: [
        "Regional Content Writing",
        "Native Voice Artists",
        "Localized Campaign Execution",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Jingle & Audio Production",
      description: "Custom audio ad creation tailored for radio broadcasting.",
      details: [
        "Scriptwriting & Storyboarding",
        "Male/Female Voiceovers",
        "Licensed Music & SFX",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Radio Sponsorships",
      description:
        "Sponsor segments, shows, or contests to amplify your message.",
      details: [
        "Show Mentions & Taglines",
        "RJ Endorsements",
        "Sponsored Contests & Promos",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Airtime Pack",
      price: "",
      features: [
        "5-10 Second Ad Slot",
        "1 Regional FM Station",
        "Ad Scheduling for 1 Day",
        "Jingle Assistance",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Mid-Tier Reach Pack",
      price: "",
      features: [
        "15-30 Second Jingle Ad",
        "Airing on 2+ Stations",
        "3-Day Campaign",
        "RJ Mentions Optional",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Prime Time Branding Pack",
      price: "",
      features: [
        "Premium Time Slot Ads",
        "Custom Jingle Creation",
        "7-Day Broadcasting",
        "Performance Report & Tracking",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Which radio stations do you work with?",
      answer:
        "We work with major FM stations like Radio Mirchi, Red FM, Big FM, Radio City, Fever FM, and more across multiple cities.",
    },
    {
      question: "Can you create the jingle for our radio ad?",
      answer:
        "Yes, we provide complete jingle production including scriptwriting, voiceovers, music, and studio-quality audio.",
    },
    {
      question: "Can I target specific regions or languages?",
      answer:
        "Absolutely. We offer regional language ads with native voice artists tailored for your audience’s geography and culture.",
    },
    {
      question: "How do you schedule radio ad timings?",
      answer:
        "We plan your ad slot based on your target audience and preferred times like morning drive or evening commute.",
    },
    {
      question: "Can we sponsor radio shows or segments?",
      answer:
        "Yes, we facilitate branded sponsorships including RJ mentions, taglines, contests, and customized content integrations.",
    },
    {
      question: "Is radio advertising still effective?",
      answer:
        "Radio remains highly effective for local branding and mass reach — especially in India’s regional and urban markets.",
    },
  ],
};
export const TvAdvertisingPageDetails = {
  SeoName: {
    seotitle: "tvadvertising",
  },
  title: "TV Advertising Services",
  subtitle:
    "Broadcast your brand to millions across national and regional TV channels with strategic media planning and impactful commercials.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Prime Time, Full Impact",
    heading: "Reach Mass Audiences with High-Impact TV Campaigns",
    description:
      "Leor Media helps brands get on air with targeted media buying, creative production, and expert planning across top TV channels in India.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "National TV Advertising",
      description: "Air your ad on popular national channels across India.",
      details: [
        "Star Plus, Sony, Colors, Zee TV, & More",
        "Prime Time & Non-Prime Time Options",
        "Full Media Buying & Scheduling",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Regional Channel Advertising",
      description: "Target specific states with language-focused channels.",
      details: [
        "ETV, Gemini TV, Maa TV, Sun TV, Zee Tamil",
        "Regional Language Production",
        "Tailored Media Planning",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "TV Commercial Production",
      description: "End-to-end video ad creation — script to screen.",
      details: [
        "Creative Concept & Storyboard",
        "Shooting, Editing, Voiceovers",
        "Post Production & Delivery",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Channel Sponsorships & Integrations",
      description:
        "Increase visibility via show sponsorship and branded content.",
      details: [
        "Segment Branding & Mentions",
        "Scroll Ads & Astons",
        "TV Show Placement & Endorsement",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Regional TV Starter",
      price: "",
      features: [
        "15-Second Ad Spot",
        "1 Regional Channel",
        "Non-Prime Time Slots",
        "Basic Media Planning",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "All-India TV Campaign",
      price: "",
      features: [
        "30-Second Commercial",
        "Airing on National + Regional Channels",
        "Prime Time Scheduling",
        "Ad Performance Report",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "TV Production + Promotion",
      price: "",
      features: [
        "TV Ad Creation (Script to Edit)",
        "Media Buying on 3+ Channels",
        "Performance Optimization",
        "Branded Content Option",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Which TV channels can I advertise on?",
      answer:
        "We offer ad slots on major national and regional TV channels such as Star Plus, Colors, Zee, Gemini TV, Maa TV, and more.",
    },
    {
      question: "Can you create the video ad for me?",
      answer:
        "Yes, we provide full production services including scripting, shooting, editing, and packaging your TV commercial.",
    },
    {
      question: "Is regional language content supported?",
      answer:
        "Absolutely. We produce and place ads in Telugu, Tamil, Hindi, Kannada, Malayalam, and more based on your audience.",
    },
    {
      question: "What are the best time slots to air my TV ad?",
      answer:
        "Prime time (7 PM - 10 PM) offers the highest reach but depends on your audience. We guide you based on your goals and budget.",
    },
    {
      question: "Can I sponsor shows or segments?",
      answer:
        "Yes. We offer integration with shows through segment sponsorships, scroll ads, and in-show brand placements.",
    },
    {
      question: "How is TV ad performance tracked?",
      answer:
        "While TV lacks exact digital metrics, we provide reach estimates, slot verification, and engagement suggestions using parallel digital tracking.",
    },
  ],
};
export const IngameAdvertisingPageDetails = {
  SeoName: {
    seotitle: "ingameadvertising",
  },
  title: "In-Game Advertising Services",
  subtitle:
    "Showcase your brand inside popular mobile and console games with immersive and interactive ad formats.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Gamify Your Brand Reach",
    heading: "Advertise Where Millions Play Daily",
    description:
      "Leor Media enables brands to appear inside mobile, PC, and console games — from rewarded videos to branded billboards — targeting active and engaged gamers.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "Mobile Game Ads",
      description: "Place your brand inside top Android and iOS games.",
      details: ["Rewarded Videos", "Interstitial Ads", "Playable Ad Creatives"],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "In-Game Product Placement",
      description: "Integrate brand elements within game environments.",
      details: [
        "3D Billboards & Posters",
        "Virtual Product Showcasing",
        "Sponsorship of Game Items",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Console & PC Game Advertising",
      description: "Appear in high-engagement PC and console games.",
      details: [
        "Pre-Roll & Mid-Roll Video Ads",
        "Native Sponsored Content",
        "Game Event Sponsorships",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "eSports & Game Influencer Ads",
      description: "Collaborate with streamers & eSports for brand visibility.",
      details: [
        "Sponsored Live Streams",
        "Branded Gaming Tournaments",
        "Game Influencer Partnerships",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Mobile Game Ad Pack",
      price: "",
      features: [
        "Rewarded Video Campaign",
        "Targeted to Android/iOS Gamers",
        "Creative Assistance",
        "7-Day Duration",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Immersive Game Placement",
      price: "",
      features: [
        "Branded Objects in Game World",
        "Console or PC Game Inclusion",
        "Custom Creative Collaboration",
        "Performance Insight Report",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "eSports Influencer Boost",
      price: "",
      features: [
        "Brand Promotion in Live Streams",
        "YouTube or Twitch Integration",
        "Cross-Channel Promotion",
        "Contest or Giveaway Hosting",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What is in-game advertising?",
      answer:
        "In-game advertising refers to brand promotions shown inside mobile, PC, or console games. It can include video ads, banners, 3D brand placement, or sponsored content.",
    },
    {
      question: "Which games can I advertise in?",
      answer:
        "We partner with mobile ad networks and game publishers to place ads inside popular casual, hyper-casual, and even mid-core games across genres.",
    },
    {
      question: "Do users interact with in-game ads?",
      answer:
        "Yes. Formats like rewarded video ads and playable demos generate high user engagement due to incentives and native placement.",
    },
    {
      question: "How do you target the right gamers?",
      answer:
        "We use interest, location, age, and platform-based targeting to ensure your brand appears to the right audience inside games.",
    },
    {
      question: "Can I track performance?",
      answer:
        "Yes. We provide metrics like impressions, click-through rates, completed views, and user actions depending on the format.",
    },
    {
      question: "Is influencer gaming part of this?",
      answer:
        "Yes. We offer influencer-led campaigns in gaming through streamers, YouTubers, and eSports players to boost visibility.",
    },
  ],
};
export const TheaterAdvertisingPageDetails = {
  SeoName: {
    seotitle: "theateradvertising",
  },
  title: "Theater Advertising Services",
  subtitle:
    "Advertise on the big screen across multiplexes and single screens to captivate your local audience before movies begin.",
  coverimage: DefaultCoverImage,
  coverImage: {
    src: DefaultCoverImage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  section2: {
    tagline: "Your Brand in the Spotlight",
    heading: "Reach Captive Audiences with Cinematic Ads",
    description:
      "Leor Media enables brands to advertise in cinemas with high-impact video ads and activations that play right before movie shows — engaging moviegoers like never before.",
  },

  services: [
    {
      icon: DefaultIcon,
      title: "On-Screen Video Ads",
      description: "Showcase your brand before blockbuster movies.",
      details: [
        "10 to 60-second Ad Spots",
        "Multiplexes & Local Screens",
        "Prime Show Targeting",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Cinema Branding & Standee Ads",
      description: "Use lobby space and offline branding inside theaters.",
      details: [
        "Banners, Posters, Standees",
        "Kiosk or Booth Activations",
        "Custom Display Design",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Multiplex Chain Advertising",
      description: "Ad placements across leading theater chains.",
      details: [
        "PVR, INOX, Cinepolis, Asian",
        "All-India or City-wise Plans",
        "High Footfall Locations",
      ],
      link: "/contactus",
    },
    {
      icon: DefaultIcon,
      title: "Movie Tie-In Campaigns",
      description: "Collaborate with upcoming movie releases.",
      details: [
        "Brand-Movie Co-Promotions",
        "Ticket Branding & Social Media",
        "On-Ground Theater Launch Events",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Local Theater Ad",
      price: "",
      features: [
        "15-Second Video Ad",
        "1 Local Theater / Screen",
        "1 Week Duration",
        "Slot-Time Customization",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Multiplex Chain Package",
      price: "",
      features: [
        "Ad on 10+ Screens (PVR/INOX)",
        "City-Wise Targeting",
        "Choice of Duration",
        "Creative Support",
      ],
      link: "/contactus",
      highlighted: true,
    },
    {
      title: "Theater + Offline Branding",
      price: "",
      features: [
        "Video Ad + Lobby Displays",
        "Custom Posters/Standees",
        "High-Engagement Venue Activation",
        "Reporting & Recap",
      ],
      link: "/contactus",
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "Where will my ad be shown?",
      answer:
        "Your video ad will play before movie shows in selected theaters, multiplexes, or single screens depending on your plan.",
    },
    {
      question: "Can I choose which theaters to advertise in?",
      answer:
        "Yes. You can choose specific cities, theaters, or multiplex chains like PVR, INOX, Cinepolis, and Asian Cinemas.",
    },
    {
      question: "How long can my ad be?",
      answer:
        "Typical durations are 10, 15, 30, or 60 seconds. The cost and placement may vary by length and screen location.",
    },
    {
      question: "Is creative production included?",
      answer:
        "We can assist with ad creation including script, shoot, and editing at additional cost or bundled in certain plans.",
    },
    {
      question: "Do you offer offline branding inside cinemas?",
      answer:
        "Yes. We provide poster, standee, and booth branding inside theater premises along with staff-assisted activations.",
    },
    {
      question: "How do I track the performance of my theater ad?",
      answer:
        "While there's no click tracking, we offer screen-wise placement reports, footfall data, and visual documentation of branding.",
    },
  ],
};
