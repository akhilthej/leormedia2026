import { useEffect, useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DigitalmarketingIcon,
  Advertisingicon,
  Graphicdesignicon,
  Webdevelopmenticon,
  Mobileappicon,
  Brandingicon,
} from "../../assets/data/icon_data";
import {
  eventsLink,
  digitalMarketingLinks,
  multimediaLinks,
  brandingLinks,
  advertisingLinks,
  moreLinks,
} from "./MenuItems";
import {
  faBars,
  faPhone,
  faEnvelope,
  faChevronDown,
  faChevronUp,
  faGlobe,
  faMobile,
  faRing,
  faNetworkWired,
  faPaintBrush,
  faTrademark,
  faBullhorn,
  faTools,
  faCommentDots,
  faRightToBracket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import NavbarLogo from "../../assets/LeormediaLogo.svg";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { GlobalData } from "../../assets/data/GlodalData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Reusable DropdownMenu component
const DropdownMenu = memo(
  ({ isOpen, links, imageSrc, onMouseEnter, onMouseLeave, closeAllMenus }) => {
    if (!isOpen) return null;

    const isCategorized = links.length > 0 && links[0].category;

    return (
      <div
        className="origin-top-right fixed mt-2 right-0 w-screen rounded-md bg-white divide-y divide-gray-200 z-50 shadow-2xl overflow-y-auto max-h-[85vh]"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex container mx-auto">
          {isCategorized ? (
            <div className="flex flex-wrap w-full p-6 gap-y-8">
              {links.map((category, catIdx) => (
                <div
                  key={catIdx}
                  className="w-1/5 min-w-[200px] px-4 border-r border-gray-100 last:border-0"
                >
                  <h3 className="text-yellow-600 font-bold text-[11px] uppercase tracking-widest border-b border-yellow-500/20 pb-2 mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    {category.links.map((link) => (
                      <a
                        href={link.path}
                        key={link.path}
                        onClick={closeAllMenus}
                      >
                        <div className="flex items-center gap-3 p-2 hover:bg-yellow-50 rounded-lg transition-all group">
                          <FontAwesomeIcon
                            icon={link.icon}
                            className="text-gray-400 group-hover:text-yellow-500 text-xs w-4"
                          />
                          <span className="text-[12px] text-gray-700 group-hover:text-gray-900 font-medium">
                            {link.title}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex w-full">
              {(() => {
                const numColumns = Math.min(
                  links.length > 15
                    ? 5
                    : links.length > 10
                      ? 4
                      : links.length > 5
                        ? 3
                        : 2,
                  5,
                );
                const linksPerColumn = Math.ceil(links.length / numColumns);
                const columns = Array.from({ length: numColumns }, (_, i) =>
                  links.slice(i * linksPerColumn, (i + 1) * linksPerColumn),
                );

                return columns.map((columnLinks, colIndex) => (
                  <div key={colIndex} className={`w-1/${numColumns} p-6`}>
                    {columnLinks.map((link) => (
                      <a
                        href={link.path}
                        key={link.path}
                        onClick={closeAllMenus}
                      >
                        <div className="block px-4 py-3 text-[13px] text-gray-700 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors duration-200 rounded-lg mb-1">
                          <div className="flex items-start">
                            <FontAwesomeIcon
                              className="mt-1 mr-3 text-lg"
                              icon={link.icon}
                            />
                            <div>
                              <span className="font-semibold block mb-0.5">
                                {link.title}
                              </span>
                              <p className="text-[11px] text-gray-500 leading-tight">
                                {link.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ));
              })()}
            </div>
          )}

          {imageSrc && !isCategorized && (
            <div className="w-1/3 p-6 flex flex-col justify-center items-center bg-gray-50">
              <img
                className="w-full max-w-sm object-contain mb-4"
                src={imageSrc}
                alt="Service Image"
              />
              <div className="text-center">
                <a href="/services" className="inline-block">
                  <h2 className="text-gray-900 hover:text-yellow-400 cursor-pointer font-bold text-lg flex items-center gap-2 transition-colors">
                    Explore All Services{" "}
                    <span className="text-yellow-500">➤</span>
                  </h2>
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Discover our comprehensive suite of digital solutions.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    Events: false,
    weddings: false,
    digitalMarketing: false,
    multimedia: false,
    branding: false,
    advertising: false,
    more: false,
    mobileMenu: false,
  });
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
  const [closeTimeouts, setCloseTimeouts] = useState({}); // Per-menu timeouts
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Detect lg screens

  const closeAllMenus = () => {
    setOpenMenus({
      Events: false,
      weddings: false,
      digitalMarketing: false,
      multimedia: false,
      branding: false,
      advertising: false,
      more: false,
      mobileMenu: false,
    });
  };

  const handleMouseEnter = (menuKey, hasLinks) => {
    if (!hasLinks) return;

    if (closeTimeouts[menuKey]) {
      clearTimeout(closeTimeouts[menuKey]);
      setCloseTimeouts((prev) => ({ ...prev, [menuKey]: null }));
    }
    closeAllMenus();
    setOpenMenus((prev) => ({ ...prev, [menuKey]: true }));
  };

  const handleMouseLeave = (menuKey, hasLinks) => {
    if (!hasLinks) return;

    const timeout = setTimeout(() => {
      setOpenMenus((prev) => ({ ...prev, [menuKey]: false }));
    }, 300);

    setCloseTimeouts((prev) => ({ ...prev, [menuKey]: timeout }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Prevent body scrolling when mobile menu is open
    if (isOpen && !isLargeScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isLargeScreen]);

  useEffect(() => {
    const checkScreenSize = () => {
      const largeScreen = window.innerWidth >= 1024; // lg breakpoint
      setIsLargeScreen(largeScreen);

      // Close mobile menu when switching to large screen
      if (largeScreen && isOpen) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isOpen]);

  const NavImages = {
    link1: Webdevelopmenticon,
    link2: DigitalmarketingIcon,
    link3: Brandingicon,
    link4: Advertisingicon,
    link5: Mobileappicon,
    link6: Graphicdesignicon,
  };

  const menuConfigs = [
    {
      key: "Events",
      title: "Events",
      href: "/services/events",
      links: eventsLink,
      imageSrc: NavImages.link1,
      icon: faGlobe,
    },
    {
      key: "weddings",
      title: "Wedding Planners (vivahamco.com)",
      href: "https://www.vivahamco.com/",
      links: [],
      icon: faRing,
    },
    {
      key: "digitalMarketing",
      title: "Digital Marketing",
      href: "/services/digital-marketing-company",
      links: digitalMarketingLinks,
      imageSrc: NavImages.link2,
      icon: faNetworkWired,
    },
    {
      key: "multimedia",
      title: "Multimedia",
      href: "/services/multimedia-company",
      links: multimediaLinks,
      imageSrc: NavImages.link6,
      icon: faPaintBrush,
    },
    {
      key: "branding",
      title: "Branding",
      href: "/services/branding-comapny",
      links: brandingLinks,
      imageSrc: NavImages.link3,
      icon: faTrademark,
    },
    {
      key: "advertising",
      title: "Advertising",
      href: "/services/advertising-company",
      links: advertisingLinks,
      imageSrc: NavImages.link4,
      icon: faBullhorn,
    },
   
    {
      key: "contactus",
      title: "Get in-Touch",
      href: "/contactus",
      links: [],
      imageSrc: null,
      icon: faCommentDots,
    },
    {
      key: "AboutUs",
      title: "About Us",
      href: "/aboutus",
      links: [],
      imageSrc: null,
      icon: faRightToBracket,
    },
    {
      key: "Login",
      title: "Login",
      href: "/auth/login",
      links: [],
      imageSrc: null,
      icon: faRightToBracket,
    },
  ];

  const toggleMobileSubmenu = (key) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenMobileSubmenus({});
  };

  return (
    <section
      className={`origin-top-right fixed  w-full top-0 z-50 shadow-md backdrop-blur-sm transition-colors duration-500 ${
        scrolled ? "bg-white/95" : "bg-white"
      }`}
    >
      {/* Main navbar */}
      <div className="sm:px-4 w-full h-18 flex justify-between items-center text-gray-800 relative">
        <a href="/" className="z-50">
          <img
            className="p-2 h-auto w-[60px]  "
            src={NavbarLogo}
            alt="leormedia_logo"
          />
        </a>

        <div className="justify-end">
          <ul className="flex items-center">
            {/* Dynamic desktop menu items */}
            {menuConfigs.slice(0, -1).map((menu) => (
              <li
                key={menu.key}
                className="relative inline-block text-left hidden lg:block"
                onMouseEnter={() =>
                  handleMouseEnter(menu.key, menu.links.length > 0)
                }
                onMouseLeave={() =>
                  handleMouseLeave(menu.key, menu.links.length > 0)
                }
              >
                <div className="inline-flex font-normal antialiased justify-center items-center gap-1 w-full rounded-md px-3 py-2 text-[13px] text-gray-800 hover:text-yellow-500 cursor-pointer transition-colors">
                 
                  <a href={menu.href}>{menu.title}</a>

                  {/* Toggle Chevron Up/Down */}
                  {menu.links.length > 0 && (
                    <FontAwesomeIcon
                      icon={openMenus[menu.key] ? faChevronUp : faChevronDown}
                      className="text-[10px] ml-1 transition-transform duration-200"
                    />
                  )}
                </div>

                <DropdownMenu
                  isOpen={openMenus[menu.key]}
                  links={menu.links}
                  imageSrc={menu.imageSrc}
                  onMouseEnter={() =>
                    handleMouseEnter(menu.key, menu.links.length > 0)
                  }
                  onMouseLeave={() =>
                    handleMouseLeave(menu.key, menu.links.length > 0)
                  }
                  closeAllMenus={closeAllMenus}
                />
              </li>
            ))}

            {/* Hamburger Button */}
            <li className="p-2 z-50 relative lg:hidden">
              <button
                className="text-gray-800 hover:text-yellow-500 transition-colors p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon
                  icon={isOpen ? faTimes : faBars}
                  className="text-2xl transition-transform duration-300"
                />
              </button>
            </li>

            {/* More Menu for Desktop */}
            <li
              className="relative hidden lg:block"
              onMouseEnter={() => handleMouseEnter("more", true)}
              onMouseLeave={() => handleMouseLeave("more", true)}
            >
              <button className="text-gray-800 hover:text-yellow-500 px-3 py-2">
                <FontAwesomeIcon icon={faBars} className="text-xl" />
              </button>
              <DropdownMenu
                isOpen={openMenus.more}
                links={moreLinks}
                imageSrc={NavImages.link4}
                onMouseEnter={() => handleMouseEnter("more", true)}
                onMouseLeave={() => handleMouseLeave("more", true)}
                closeAllMenus={closeAllMenus}
              />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[60] flex flex-col transition-transform duration-500 ease-in-out lg:hidden h-screen ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile Menu Header (Sticky) */}
        <div className="flex-none flex justify-between items-center p-4 border-b border-gray-200 bg-white/95 backdrop-blur-md">
          <a href="/" onClick={handleLinkClick}>
            <img className="h-10 w-auto" src={NavbarLogo} alt="csd_logo" />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 p-2 rounded-full hover:bg-gray-100 hover:text-yellow-500 transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 pb-20">
          <div className="flex flex-col">
            {menuConfigs.map((menu, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                {menu.links.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(menu.key)}
                      className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 hover:text-yellow-500 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 flex justify-center text-gray-500 group-hover:text-yellow-500 transition-colors">
                          <FontAwesomeIcon icon={menu.icon} />
                        </span>
                        <span>{menu.title}</span>
                      </div>
                      <FontAwesomeIcon
                        icon={
                          openMobileSubmenus[menu.key]
                            ? faChevronUp
                            : faChevronDown
                        }
                        className={`text-sm text-gray-500 transition-transform duration-300 ${
                          openMobileSubmenus[menu.key] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openMobileSubmenus[menu.key]
                          ? "max-h-[1000px] opacity-100 mb-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-8 border-l border-gray-200 pl-4">
                        {menu.links[0]?.category ? (
                          menu.links.map((category, catIdx) => (
                            <div key={catIdx} className="mb-6 last:mb-0">
                              <h4 className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-3">
                                {category.category}
                              </h4>
                              <div className="space-y-3">
                                {category.links.map((sub, idx) => (
                                  <a
                                    key={idx}
                                    href={sub.path}
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-3 py-1 group"
                                  >
                                    <FontAwesomeIcon
                                      icon={sub.icon}
                                      className="text-gray-400 group-hover:text-yellow-500 text-xs w-4"
                                    />
                                    <span className="text-sm text-gray-700 group-hover:text-black">
                                      {sub.title}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="grid grid-cols-1 gap-2">
                            {menu.links.map((sub, idx) => (
                              <a
                                key={idx}
                                href={sub.path}
                                onClick={handleLinkClick}
                                className="block py-2 text-sm text-gray-600 hover:text-black hover:translate-x-1 transition-all"
                              >
                                <span className="block font-medium">
                                  {sub.title}
                                </span>
                                {sub.description && (
                                  <span className="text-[10px] text-gray-600 line-clamp-1">
                                    {sub.description}
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={menu.href}
                    onClick={handleLinkClick}
                    className="w-full flex items-center gap-4 py-4 text-lg font-medium text-gray-800 hover:text-yellow-500 transition-colors group"
                  >
                    <span className="w-8 flex justify-center text-gray-500 group-hover:text-yellow-500 transition-colors">
                      <FontAwesomeIcon icon={menu.icon} />
                    </span>
                    <span>{menu.title}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Contact Footer */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-yellow-500 font-semibold mb-4 uppercase text-sm tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${GlobalData.company.companyPhone}`}
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                onClick={handleLinkClick}
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500">
                  <FontAwesomeIcon icon={faPhone} size="sm" />
                </div>
                <span>{GlobalData.company.companyPhone}</span>
              </a>
              <a
                href={`mailto:${GlobalData.company.companyEmail}`}
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                onClick={handleLinkClick}
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />
                </div>
                <span>{GlobalData.company.companyEmail}</span>
              </a>
            </div>

            <div className="flex gap-4 mt-6 justify-center text-center">
              <a
                href={GlobalData.company.companyfacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
                onClick={handleLinkClick}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href={GlobalData.company.companyinstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all"
                onClick={handleLinkClick}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={GlobalData.company.companytwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-sky-500 hover:text-white transition-all"
                onClick={handleLinkClick}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
