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
  Blog,
  BlogFullPost,
  FAQ,
} from "./routes/Routes";

import seoData from "./assets/data/seo.json";

import {
  /*Wedding Planners */
  WeddingPlanners,
  /*Digital marketing */
  DigitalMarketing,
  /*MultiMedia */
  /*Advertising*/
  Advertising,

  /*Branding*/
  BrandServices,

  SubPages,
  Calculator,
} from "./routes/Routes";

import {
  WeddingPlannersPageData,
  WeddingPlannersDetailPageData,
  AdvertisingCompany,
  AdvertisementDetailPageData,
  BrandingCompany,
  BrandingDetailPageData,
  DigitalMarketingCompany,
  DigitalMediaMarketingDetailPageData,
} from "./assets/data/PageData";








const routes = [
  { path: "/", element: <Home /> },
  { path: "/*", element: <Error404 /> },



  { path: "/blogs", element: <Blog /> },
  { path: "/blogs/:slug", element: <BlogFullPost /> },

  { path: "/aboutus", element: <Aboutus /> },
  { path: "/contactus", element: <Contactus /> },


  { path: "/Legal/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/Legal/terms-and-conditions", element: <TermsnConditions /> },
  { path: "/Legal/return-policy", element: <ReturnPolicy /> },
  { path: "/Legal/shipping-and-delivery", element: <ShippingandDelivery /> },
  { path: "/Legal/disclaimer", element: <Disclaimer /> },

  { path: "/services", element: <Services /> },
  { path: "/frequently-asked-questions", element: <FAQ /> },


  /*---------Wedding Planners---------*/
  { path: "/services/wedding-planners", element: <WeddingPlanners /> },
  {
    path: "/services/wedding-planners/:category",
    element: <SubPages pageData={WeddingPlannersDetailPageData} seoData={seoData} />,
  },
  /*---------Wedding Planners End---------*/




  /*---------Digital Media Marketing---------*/
  {
    path: "/services/digital-media-marketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/services/digital-media-marketing/:category",
    element: (
      <SubPages
        pageData={DigitalMediaMarketingDetailPageData}
        seoData={seoData}
      />
    ),
  },
  /*---------Digital Media Marketing End---------*/

  /*---------Branding---------*/
  { path: "/services/branding", element: <BrandServices /> },
  {
    path: "/services/branding/:category",
    element: <SubPages pageData={BrandingDetailPageData} seoData={seoData} />,
  },
  /*---------Branding End---------*/

  /*---------Advertisement---------*/
  { path: "/services/advertisement", element: <Advertising /> },
  {
    path: "/services/advertisement/:category",
    element: (
      <SubPages pageData={AdvertisementDetailPageData} seoData={seoData} />
    ),
  },
  /*---------Advertisement End---------*/
];

export function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Reduced time as animation is removed
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  // Any route that starts with "/auth" (e.g., /auth/dashboard, /auth/contactus)
  const isAuthRoute =
    location.pathname.startsWith("/auth") &&

    window.scrollTo(0, 0);

  return (
    <>
      <LogoLoader isLoading={isLoading} />
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
