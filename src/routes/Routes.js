import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import PrivacyPolicy from "../components/Documents/PrivacyPolicy";
import TermsnConditions from "../components/Documents/TermsnConditions";
import ReturnPolicy from "../components/Documents/ReturnsPolicy";
import ShippingandDelivery from "../components/Documents/ShippingandDelivery";
import Disclaimer from "../components/Documents/Disclaimer";

import Error404 from "../components/Tools/Error404";
import Home from "./Home.js";
import Blog from "./Blogs/Blog";
import BlogFullPost from "./Blogs/BlogFullPost";
import Aboutus from "./Aboutus";
import Careers from "./Careers/careers";
import Contactus from "./Contactus.js";

import Services from "./Services/Services.js";
import Clients from "./Clients.js";
import Products from './Products.jsx'
import Portfolio from './Portfolio.jsx'

import FAQ from "./Faqs";

import SubPages from "../routes/Services/SubPages.js";
import WebDevelopment from "../routes/Services/WebDevelopment/Webdevelopment";

/*Advertising */
import Advertising from "../routes/Services/Advertising/Advertising";

/*Brand Services*/
import BrandServices from "../routes/Services/BrandServices/BrandServices";

/*Digital marketing */
import DigitalMarketing from "../routes/Services/DigitalMarketing/DigitalMarketing";

/*Mobile App Development */
import MobileAppDevelopment from "../routes/Services/MobileAppDevelopment/MobileAppDevelopment";
/*Graphic Design */

import MultiMedia from "../routes/Services/MultiMedia/MultiMedia.jsx";

export {
  /*Fixed */

  Navbar,Portfolio,
  Footer,
  PrivacyPolicy,
  TermsnConditions,
  Disclaimer,
  ShippingandDelivery,
  Error404,
  Home,
  Blog,
  BlogFullPost,
  Aboutus,
  Contactus,
  Careers,
  ReturnPolicy,
  Services,
  Clients,
  FAQ,
  SubPages,

  /*Web Development */
  WebDevelopment,

  /*Digital marketing */
  DigitalMarketing,

  /*Graphic Designing */
  MultiMedia,

  /*Advertising*/
  Advertising,

  /*Branding*/
  BrandServices,

  /*MobileApp*/
  MobileAppDevelopment,Products,
};
