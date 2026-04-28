import { googlereview } from "../../assets/data/icon_data";

import footer_csd from "../../assets/LogoFooter.svg";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
                  Leor Media offers creative event management, branding, and
                  advertising solutions that elevate your brand and connect with
                  your audience effectively.
                </p>

                <div className="flex space-x-6 text-secondary pt-2">
                  <a href={GlobalData.company.companyfacebook} className="hover:text-primary transition-colors">
                    <FaFacebookF size={18} />
                  </a>
                  <a href={GlobalData.company.companyinstagram} className="hover:text-primary transition-colors">
                    <FaInstagram size={18} />
                  </a>
                  <a href={GlobalData.company.companytwitter} className="hover:text-primary transition-colors">
                    <FaXTwitter size={18} />
                  </a>
                  <a href={GlobalData.company.companypinterest} className="hover:text-primary transition-colors">
                    <FaPinterestP size={18} />
                  </a>
                  <a href={GlobalData.company.companylinkedin} className="hover:text-primary transition-colors">
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
                <div>
                  <p className="font-medium text-secondary uppercase tracking-wider">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/services/events" className="hover:text-primary transition-colors"> Events </a>
                    <a href="https://www.vivahamco.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"> Wedding </a>
                    <a href="/services/digital-marketing-company" className="hover:text-primary transition-colors"> Digital Marketing </a>
                    <a href="/services/branding-comapny" className="hover:text-primary transition-colors"> Branding </a>
                    <a href="/services/advertising-company" className="hover:text-primary transition-colors"> Advertising </a>
                    <a href="/services/multimedia-company" className="hover:text-primary transition-colors"> Multimedia </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-secondary uppercase tracking-wider">Useful links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/aboutus" className="hover:text-primary transition-colors"> About Us </a>
                    <a href="/services" className="hover:text-primary transition-colors"> Services </a>
                    <a href="/portfolio" className="hover:text-primary transition-colors"> Gallery </a>
                    <a href="/contactus" className="hover:text-primary transition-colors"> Contact Us </a>
                    <a href="/blogs" className="hover:text-primary transition-colors"> Blogs </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-secondary uppercase tracking-wider">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/Legal/privacy-policy" className="hover:text-primary transition-colors"> Privacy Policy </a>
                    <a href="/Legal/terms-and-conditions" className="hover:text-primary transition-colors"> Terms & Conditions </a>
                    <a href="/Legal/return-policy" className="hover:text-primary transition-colors"> Cancellation & Refund Policy </a>
                    <a href="/Legal/disclaimer" className="hover:text-primary transition-colors"> Disclaimer </a>
                    <a href="/Legal/shipping-and-delivery" className="hover:text-primary transition-colors"> Shipping & Delivery </a>
                  </nav>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start border-t border-gray-800 pt-8">
              <div>
                <p className="font-medium text-secondary mb-4 uppercase tracking-wider">Address</p>
                <p className="text-[13px] text-secondary leading-relaxed">
                  flot no 404, 4th Floor, Near GVK Plaza, Gurudwara, Madhuranagar,<br />
                  Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016
                </p>
              </div>
              <div className="h-48 w-full rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2397366200476!2d83.30672910000003!3d17.7333397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943260a034961%3A0xa55201e3106a886a!2sLeormedia!5e0!3m2!1sen!2sin!4v1777386710467!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Leor Media Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="flex items-center justify-center mt-8">
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
        className="flex flex-col fixed right-2 z-50 items-center"
        style={{
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        }}
      >
        {/* WhatsApp Button Container */}
        <div className="group relative flex flex-col">
          {/* Main Button */}
          <a
            href={GlobalData.company.companyWhatsapp}
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

        </div>
      </div>
    </main>
  );
};

export default Footer;
