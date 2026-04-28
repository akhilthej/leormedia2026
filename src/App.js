import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LogoLoader from "./components/LogoLoader";
import {
  Navbar,
  Footer,
  PrivacyPolicy,
  TermsnConditions,
  Disclaimer,
  ShippingandDelivery,
  ReturnPolicy,
  Error404,
  Home,
  Aboutus,
  Contactus,
  Services,
  Careers,
  Blog,
  BlogFullPost,
  FAQ,
  Clients,
  Products,
  Portfolio,
} from "./routes/Routes";

import seoData from "./assets/data/seo.json";

import Notification from "./components/Tools/Notifications";


import PrivateRoute from "./hooks/PrivateRoute";
import Login from "./routes/auth/login";

import AdminNavbar from "./routes/auth/Navbar/AdminNavbar.js";
import Dashboard from "./routes/auth/dashboard";
import AdminContactus from "./routes/auth/Admin/AdminContactus.jsx";
import Leads from "./routes/auth/Admin/Leads.jsx";
import PaymentHistory from "./routes/auth/PaymentHistory";
import Renewal from "./routes/auth/Renewal";
import WebsitesCheck from "./routes/auth/Admin/WebsitesCheck";
import GoogelAnalytics from "./routes/auth/Admin/GoogelAnalytics.jsx";

import {
  /*Web Development */
  WebDevelopment,
  /*Digital marketing */
  DigitalMarketing,
  /*MultiMedia */
  MultiMedia,
  /*Advertising*/
  Advertising,

  /*Branding*/
  BrandServices,

  /*MobileApp*/
  MobileAppDevelopment,
  SubPages,
  Calculator,
} from "./routes/Routes";

import {
  EventsPageData,
  EventDetailPageData,
} from "./assets/data/PageData";
import {
  DisplayAdvertisingPageDetails,
  VideoAdvertisingPageDetails,
  NativeAdvertisingPageDetails,
  ProgrammaticAdvertisingPageDetails,
  OutdoorAdvertisingPageDetails,
  PrintAdvertisingPageDetails,
  RadioAdvertisingPageDetails,
  TvAdvertisingPageDetails,
  IngameAdvertisingPageDetails,
  TheaterAdvertisingPageDetails,
} from "./assets/data/PageData";
import {
  MobileAppDesignDetails,
  IOSAppDevelopmentDetails,
  AndroidAppDevelopmentDetails,
  CrossPlatformAppDevelopmentDetails,
  AppPrototypingDetails,
  AppTestingandQualityAssuranceDetails,
  AppMaintenanceandSupportDetails,
  AppSecurityDetails,
  AppMonetizationStrategyDetails,
  AppStoreOptimizationDetails,
  EcommerceAppDevelopmentDetails,
} from "./assets/data/PageData";
import {
  LogoDesignPageDetails,
  BrandIdentityDesignPageDetails,
  PrintDesignPageDetails,
  WebDesignPageDetails,
  UserInterfaceDesignPageDetails,
  UserExperienceDesignPageDetails,
  PackagingDesignPageDetails,
  PosterAndFlyerDesignPageDetails,
  BrochureDesignPageDetails,
  BannerDesignPageDetails,
  IllustrationServicesPageDetails,
  InfographicDesignPageDetails,
  SocialMediaGraphicsPageDetails,
  EbookAndPrintBookCoverDesignPageDetails,
  TShirtAndMerchandiseDesignPageDetails,
  SignageAndBillboardDesignPageDetails,
  BusinessCardAndStationeryDesignPageDetails,
  RenderingAndVisualizationPageDetails,
  MotionGraphicsAndAnimationPageDetails,
  PhotoEditingAndRetouchingPageDetails,
} from "./assets/data/PageData";

import {
  SearchEngineOptimizationPageDetails,
  ContentMarketingPageDetails,
  SocialMediaMarketingPageDetails,
  EmailMarketingPageDetails,
  PayPerClickAdvertisingPageDetails,
  AffiliateMarketingPageDetails,
  AnalyticsAndDataAnalysisPageDetails,
  ConversionRateOptimizationPageDetails,
  MobileMarketingPageDetails,
  VideoMarketingPageDetails,
  LocalSeoAndMarketingPageDetails,
  EcommerceMarketingPageDetails,
  MarketingAutomationPageDetails,
  RemarketingRetargetingPageDetails,
  InfluencerMarketingPageDetails,
} from "./assets/data/PageData";

import {
  BrandIdentityDesignExclusivePageDetails,
  BrandLogoDesignPageDetails,
  BrandGuidelinesPageDetails,
  BrandPositioningPageDetails,
  BrandStorytellingPageDetails,
  BrandNamingPageDetails,
  VisualIdentityDesignPageDetails,
  BrandMessagingPageDetails,
  BrandExperienceDesignPageDetails,
  BrandAwarenessCampaignsPageDetails,
  RebrandingServicesPageDetails,
  BrandResearchAndAnalysisPageDetails,
  BrandTrackingAndPerformanceEvaluationPageDetails,
} from "./assets/data/PageData";



const routes = [
  { path: "/", element: <Home /> },
  { path: "/*", element: <Error404 /> },

  { path: "/auth/login", element: <Login /> },
  {
    path: "/auth/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },

  {
    path: "/auth/contactus",
    element: (
      <PrivateRoute>
        <AdminContactus />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth/leads",
    element: (
      <PrivateRoute>
        <Leads />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth/dashboard/paymenthistory",
    element: (
      <PrivateRoute>
        <PaymentHistory />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth/google-analytics",
    element: (
      <PrivateRoute>
        <GoogelAnalytics />
      </PrivateRoute>
    ),
  },

  {
    path: "/auth/dashboard/websitecheck",
    element: (
      <PrivateRoute>
        <WebsitesCheck />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth/dashboard/renewal",
    element: (
      <PrivateRoute>
        <Renewal />
      </PrivateRoute>
    ),
  },

  { path: "/blogs", element: <Blog /> },
  { path: "/blogs/:slug", element: <BlogFullPost /> },

  { path: "/aboutus", element: <Aboutus /> },
  { path: "/careers", element: <Careers /> },
  { path: "/clients", element: <Clients /> },
  { path: "/products", element: <Products /> },
  { path: "/contactus", element: <Contactus /> },


  { path: "/Legal/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/Legal/terms-and-conditions", element: <TermsnConditions /> },
  { path: "/Legal/return-policy", element: <ReturnPolicy /> },
  { path: "/Legal/shipping-and-delivery", element: <ShippingandDelivery /> },
  { path: "/Legal/disclaimer", element: <Disclaimer /> },

  { path: "/services", element: <Services /> },
  { path: "/frequently-asked-questions", element: <FAQ /> },

  { path: "/portfolio", element: <Portfolio /> },

  /*---------Events---------*/
  { path: "/services/events", element: <WebDevelopment /> },
  {
    path: "/services/events/:category",
    element: <SubPages pageData={EventDetailPageData} seoData={seoData} />,
  },
  /*---------Events End---------*/

  /*---------MobileAppDevelopment---------*/

  {
    path: "/services/mobile-app-development-company",
    element: <MobileAppDevelopment />,
  },

  {
    path: "/services/mobile-app-development-company/mobile-app-design",
    element: <SubPages pageData={MobileAppDesignDetails} seoData={seoData} />,
  },
  {
    path: "/services/mobile-app-development-company/ios-application-development",
    element: <SubPages pageData={IOSAppDevelopmentDetails} seoData={seoData} />,
  },
  {
    path: "/services/mobile-app-development-company/android-app-development",
    element: (
      <SubPages pageData={AndroidAppDevelopmentDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/mobile-app-development-company/cross-platform-app-development",
    element: (
      <SubPages
        pageData={CrossPlatformAppDevelopmentDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/mobile-app-development-company/app-prototyping",
    element: <SubPages pageData={AppPrototypingDetails} seoData={seoData} />,
  },
  {
    path: "/services/mobile-app-development-company/app-testing-and-quality-assurance",
    element: (
      <SubPages
        pageData={AppTestingandQualityAssuranceDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/mobile-app-development-company/app-maintenance-and-support",
    element: (
      <SubPages pageData={AppMaintenanceandSupportDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/mobile-app-development-company/app-security",
    element: <SubPages pageData={AppSecurityDetails} seoData={seoData} />,
  },
  {
    path: "/services/mobile-app-development-company/app-monetization-strategy",
    element: (
      <SubPages pageData={AppMonetizationStrategyDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/mobile-app-development-company/app-store-optimization",
    element: (
      <SubPages pageData={AppStoreOptimizationDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/mobile-app-development-company/ecommerce-app-development",
    element: (
      <SubPages pageData={EcommerceAppDevelopmentDetails} seoData={seoData} />
    ),
  },
  /*---------MobileAppDevelopment End---------*/

  /*---------Multimedia---------*/
  { path: "/services/multimedia-company", element: <MultiMedia /> },

  {
    path: "/services/multimedia-company/logo-design",
    element: <SubPages pageData={LogoDesignPageDetails} seoData={seoData} />,
  },

  {
    path: "/services/multimedia-company/brand-identity-design",
    element: (
      <SubPages pageData={BrandIdentityDesignPageDetails} seoData={seoData} />
    ),
  },

  {
    path: "/services/multimedia-company/print-design",
    element: <SubPages pageData={PrintDesignPageDetails} seoData={seoData} />,
  },
  {
    path: "/services/multimedia-company/web-design",
    element: <SubPages pageData={WebDesignPageDetails} seoData={seoData} />,
  },
  {
    path: "/services/multimedia-company/user-interface-design",
    element: (
      <SubPages pageData={UserInterfaceDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/user-experience-design",
    element: (
      <SubPages pageData={UserExperienceDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/packaging-design",
    element: (
      <SubPages pageData={PackagingDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/poster-and-flyer-design",
    element: (
      <SubPages pageData={PosterAndFlyerDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/brochure-design",
    element: (
      <SubPages pageData={BrochureDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/banner-design",
    element: <SubPages pageData={BannerDesignPageDetails} seoData={seoData} />,
  },
  {
    path: "/services/multimedia-company/illustration-services",
    element: (
      <SubPages pageData={IllustrationServicesPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/infographic-design",
    element: (
      <SubPages pageData={InfographicDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/social-media-graphics",
    element: (
      <SubPages pageData={SocialMediaGraphicsPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/multimedia-company/ebook-and-print-book-cover-design",
    element: (
      <SubPages
        pageData={EbookAndPrintBookCoverDesignPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/multimedia-company/t-shirt-and-merchandise-design",
    element: (
      <SubPages
        pageData={TShirtAndMerchandiseDesignPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/multimedia-company/signage-and-billboard-design",
    element: (
      <SubPages
        pageData={SignageAndBillboardDesignPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/multimedia-company/business-card-and-stationery-design",
    element: (
      <SubPages
        pageData={BusinessCardAndStationeryDesignPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/multimedia-company/rendering-and-visualization",
    element: (
      <SubPages
        pageData={RenderingAndVisualizationPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/multimedia-company/motion-graphics-and-animation",
    element: (
      <SubPages
        pageData={MotionGraphicsAndAnimationPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/multimedia-company/photo-editing-and-retouching",
    element: (
      <SubPages
        pageData={PhotoEditingAndRetouchingPageDetails}
        seoData={seoData}
      />
    ),
  },
  /*---------Multimedia End---------*/

  /*---------DigitalMarketing---------*/
  {
    path: "/services/digital-marketing-company",
    element: <DigitalMarketing />,
  },
  {
    path: "/services/digital-marketing-company/search-engine-optimization",
    element: (
      <SubPages
        pageData={SearchEngineOptimizationPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/digital-marketing-company/content-marketing",
    element: (
      <SubPages pageData={ContentMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/social-media-marketing",
    element: (
      <SubPages pageData={SocialMediaMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/email-marketing",
    element: (
      <SubPages pageData={EmailMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/pay-per-click-advertising",
    element: (
      <SubPages
        pageData={PayPerClickAdvertisingPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/digital-marketing-company/affiliate-marketing",
    element: (
      <SubPages pageData={AffiliateMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/analytics-and-data-analysis",
    element: (
      <SubPages
        pageData={AnalyticsAndDataAnalysisPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/digital-marketing-company/conversion-rate-optimization",
    element: (
      <SubPages
        pageData={ConversionRateOptimizationPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/digital-marketing-company/mobile-marketing",
    element: (
      <SubPages pageData={MobileMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/video-marketing",
    element: (
      <SubPages pageData={VideoMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/local-seo-and-marketing",
    element: (
      <SubPages pageData={LocalSeoAndMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/ecommerce-marketing",
    element: (
      <SubPages pageData={EcommerceMarketingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/marketing-automation",
    element: (
      <SubPages pageData={MarketingAutomationPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/digital-marketing-company/remarketing-retargeting",
    element: (
      <SubPages
        pageData={RemarketingRetargetingPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/digital-marketing-company/influencer-marketing",
    element: (
      <SubPages pageData={InfluencerMarketingPageDetails} seoData={seoData} />
    ),
  },
  /*---------DigitalMarketing End---------*/

  /*---------BrandServices---------*/
  { path: "/services/branding-comapny", element: <BrandServices /> },

  {
    path: "/services/branding-comapny/brand-identity-design-exclusive",
    element: (
      <SubPages
        pageData={BrandIdentityDesignExclusivePageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/branding-comapny/brand-logo-design",
    element: (
      <SubPages pageData={BrandLogoDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-guidelines",
    element: (
      <SubPages pageData={BrandGuidelinesPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-positioning",
    element: (
      <SubPages pageData={BrandPositioningPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-storytelling",
    element: (
      <SubPages pageData={BrandStorytellingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-naming",
    element: <SubPages pageData={BrandNamingPageDetails} seoData={seoData} />,
  },
  {
    path: "/services/branding-comapny/visual-identity-design",
    element: (
      <SubPages pageData={VisualIdentityDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-messaging",
    element: (
      <SubPages pageData={BrandMessagingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-experience-design",
    element: (
      <SubPages pageData={BrandExperienceDesignPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-awareness-campaigns",
    element: (
      <SubPages
        pageData={BrandAwarenessCampaignsPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/branding-comapny/rebranding-services",
    element: (
      <SubPages pageData={RebrandingServicesPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/branding-comapny/brand-research-and-analysis",
    element: (
      <SubPages
        pageData={BrandResearchAndAnalysisPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/branding-comapny/brand-tracking-and-performance-evaluation",
    element: (
      <SubPages
        pageData={BrandTrackingAndPerformanceEvaluationPageDetails}
        seoData={seoData}
      />
    ),
  },
  /*---------BrandServices End---------*/

  /*---------Advertising---------*/
  { path: "/services/advertising-company", element: <Advertising /> },

  {
    path: "/services/advertising-company/display-advertising",
    element: (
      <SubPages pageData={DisplayAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/advertising-company/video-advertising",
    element: (
      <SubPages pageData={VideoAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/advertising-company/native-advertising",
    element: (
      <SubPages pageData={NativeAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/advertising-company/programmatic-advertising",
    element: (
      <SubPages
        pageData={ProgrammaticAdvertisingPageDetails}
        seoData={seoData}
      />
    ),
  },
  {
    path: "/services/advertising-company/outdoor-advertising",
    element: (
      <SubPages pageData={OutdoorAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/advertising-company/print-advertising",
    element: (
      <SubPages pageData={PrintAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/advertising-company/radio-advertising",
    element: (
      <SubPages pageData={RadioAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/advertising-company/tv-advertising",
    element: <SubPages pageData={TvAdvertisingPageDetails} seoData={seoData} />,
  },
  {
    path: "/services/advertising-company/ingame-advertising",
    element: (
      <SubPages pageData={IngameAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  {
    path: "/services/advertising-company/theater-advertising",
    element: (
      <SubPages pageData={TheaterAdvertisingPageDetails} seoData={seoData} />
    ),
  },
  /*---------Advertising End---------*/
];

export function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Loader visible for 2.5 seconds to accommodate animation

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Any route that starts with "/auth" (e.g., /auth/dashboard, /auth/contactus)
  const isAuthRoute =
    location.pathname.startsWith("/auth") &&
    location.pathname !== "/auth/login";

  window.scrollTo(0, 0);

  return (
    <>
      <LogoLoader isLoading={isLoading} />
      {isAuthRoute && <AdminNavbar />}
      {!isAuthRoute && <Navbar />}

      <div className="flex flex-1">
        <div
          className={`flex-1 min-w-0 transition-all duration-300 ${isAuthRoute ? "mt-14 md:ml-64" : "mt-0"
            }`}
        >
          <Routes location={location} key={location.pathname}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>

          {!isAuthRoute && <Footer />}
        </div>
      </div>
    </>
  );
}

export default App;
