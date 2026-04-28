import { goodfirms, googlereview } from "../../assets/data/icon_data";

import footer_csd from "../../assets/LogoFooter.svg";

import { ImFacebook2, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";

import { GlobalData } from "../../assets/data/GlodalData";

import FooterLogo1 from "./FooterLogo1.png";
import FooterLogo2 from "./FooterLogo2.png";
import FooterLogo3 from "./FooterLogo3.png";
import FooterLogo4 from "./FooterLogo4.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-black  justify-center ">
      {/* Footer */}
      <section className="bg-black pb-5">
        <footer>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-9 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <a href="/">
                  <img
                    src={footer_csd}
                    alt="footer_csd"
                    width="80"
                    height="80"
                  />
                </a>
                <p className="max-w-xs mt-4 text-[12px] text-secondary ">
                  We are a web Developing & Designing company with a mission to
                  help build there business online. We accomplish this by
                  continuously developing technology, giving expert assistance,
                  and ensuring a flawless online website experience.
                  <br />
                </p>

                <div className="flex space-x-6 text-secondary pt-2">
                  <a href={GlobalData.company.companyfacebook}>
                    <ImFacebook2 />
                  </a>
                  <a href={GlobalData.company.companyinstagram}>
                    <ImInstagram />
                  </a>
                  <a href={GlobalData.company.companytwitter}>
                    <ImTwitter />
                  </a>
                  <a href={GlobalData.company.companygit}>
                    <ImGithub />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium text-secondary">Company</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/aboutus"> About us </a>
                    <a href="/clients"> Clients </a>
                    <a href="/products"> Products </a>
                    <a href="/portfolio"> Portfolio </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-secondary">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/services/events">
                      {" "}
                      Events{" "}
                    </a>
                    <a href="https://www.vivahamco.com/" target="_blank" rel="noopener noreferrer">
                      {" "}
                      Weddings{" "}
                    </a>
                    <a href="/services/digital-marketing-company">
                      {" "}
                      Digital Marketing{" "}
                    </a>
                    <a href="/services/branding-comapny"> Branding </a>
                    <a href="/services/advertising-company"> Advertising </a>
                    <a href="/services/multimedia-company"> Multimedia </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-secondary">Helpful Links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/contactus"> Contact </a>
                    <a href="/frequently-asked-questions"> FAQs </a>
                    <a href={GlobalData.company.companyWhatsapp}> Live Chat </a>

                    <a href="/domain-renewal"> Domain Renewal </a>
                    <a href="https://search.google.com/local/writereview?placeid=ChIJM0IEPqRRmg0RyLQAP_5varc">
                      Google Map Review{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-secondary">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/Legal/privacy-policy"> Privacy Policy </a>
                    <a href="/Legal/terms-and-conditions">
                      <div> Terms & Conditions </div>
                    </a>

                    <a href="/Legal/return-policy">
                      <div> Cancellation & Refund Policy </div>
                    </a>

                    <a href="/Legal/disclaimer">
                      <div> Disclaimer </div>
                    </a>

                    <a href="/Legal/shipping-and-delivery">
                      <div> Shipping & Delivery </div>
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <a
                className="p-2"
                href="https://www.goodfirms.co/company/cyber-space-digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 rounded-sm hover:animate-pulse max-w-full"
                  src={goodfirms}
                  alt="goodfirms_icon"
                  width="120"
                  height="50"
                />
              </a>
              <a
                className="p-2"
                href="https://g.page/r/Cci0AD_-b2q3EAI/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 hover:animate-pulse max-w-full"
                  src={googlereview}
                  alt="googlereview_icon"
                  width="120"
                  height="50"
                />
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 my-6" />

            {/* Bottom Logos */}
            <p className="text-secondary text-center text-[12px] py-2">
              Registered on
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap ">
              {[FooterLogo1, FooterLogo2, FooterLogo3, FooterLogo4].map(
                (logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`footer_logo_${i}`}
                    className="h-10 sm:h-12 hover:animate-pulse rounded-sm"
                  />
                )
              )}
            </div>

            <div className="h-px my-8 border-0 bg-gray-600" />
            <p
              id="copyright"
              className="cursor-default text-center text-[12px] text-secondary"
            >
              © 2018-<span> {currentYear} </span>
              <span className="font-bold">leormedia.com.</span> All Rights
              Reserved.
              <br />A Development & Designer Community ( #CSD )
            </p>
            <div className="flex pt-4 justify-center text-secondary text-[12px] space-x-4">
              <a href="/Legal/privacy-policy">Privacy Policy</a>
              <a href="/Legal/terms-and-conditions">Terms & Conditions</a>
              <a href="/Legal/disclaimer">Disclaimer</a>
              <a href="/sitemap.xml">Site Map</a>
            </div>
          </div>
        </footer>
        <section />
      </section>

      <div
        className="flex flex-col fixed left-2 z-50 items-center"
        style={{
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        }}
      >
        {/* WhatsApp Button Container */}
        <div className="group relative flex flex-col">
          {/* Main Button */}
          <a
            href="https://wa.me/918143407758"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 transform hover:rotate-[-5deg] group-hover:bg-[#128C7E]"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={28} />

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full border-2 border-white animate-bounce">
              <span className="relative">!</span>
            </span>
          </a>

          {/* Tooltip Text */}
          <div className="absolute left-full top-1/2 ml-3 transform -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg translate-x-[-10px] group-hover:translate-x-0">
            Chat with us on WhatsApp!
            {/* Tooltip Arrow */}
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-900"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
