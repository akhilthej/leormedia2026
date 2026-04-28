import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FcHome,
  FcMenu,
  FcServices,
  FcMoneyTransfer,
  FcContacts,
  FcBusinessContact,
  FcSettings,
  FcStatistics,
  FcDownRight,
  FcUpRight,
  FcGlobe,
  FcBrokenLink,
  FcAreaChart
} from "react-icons/fc";
import { GlobalData, Companylogo } from "../../../assets/data/GlodalData";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../../../hooks/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { user, loading, logout } = useAuth();

  const [openIndex, setOpenIndex] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);
  const [isReferSidebarOpen, setIsReferSidebarOpen] = useState(false);
  const [isQuickSelectSidebarOpen, setIsQuickSelectSidebar] = useState(false);

  const toggleProfileSidebar = () => {
    setIsProfileSidebarOpen(!isProfileSidebarOpen);
    setIsReferSidebarOpen(false);
    setIsQuickSelectSidebar(false);
  };

  const toggleReferSidebar = () => {
    setIsReferSidebarOpen(!isReferSidebarOpen);
    setIsProfileSidebarOpen(false);
    setIsQuickSelectSidebar(false);
  };

  const closeAllSidebars = () => {
    setIsProfileSidebarOpen(false);
    setIsReferSidebarOpen(false);
    setIsQuickSelectSidebar(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const showNavbar = location.pathname !== "/";

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Define all nav sections
  const allNavSections = [
    {
      title: "",
      links: [
        {
          name: "Dashboard",
          description: "Overview of your account",
          path: "/auth/dashboard",
          icon: <FcHome className="text-lg" />,
        },
      ].filter(Boolean),
    },
    {
      title: "Customer Panel",
      links: [
        {
          name: "Domain Renewal",
          description: "Renew your hosting services",
          path: "/auth/dashboard/renewal",
          icon: <FcBrokenLink className="text-lg" />,
        },
        {
          name: "Payment History",
          description: "View your transaction history",
          path: "/auth/dashboard/paymenthistory",
          icon: <FcMoneyTransfer className="text-lg" />,
        },
        {
          name: "Go to Website",
          description: "View your transaction history",
          path: "/",
          icon: <FcGlobe className="text-lg" />,
        },
      ].filter(Boolean),
    },
    {
      title: "Admin Tools",
      links: [
        {
          name: "Google Analytics",
          description: "Website traffic analytics",
          path: "/auth/google-analytics",
          icon: <FcStatistics className="text-lg" />,
        },

        {
          name: "Contact Forms",
          description: "Manage contact submissions",
          path: "/auth/contactus",
          icon: <FcContacts className="text-lg" />,
        },
        {
          name: "Leads Management",
          description: "Customer leads and inquiries",
          path: "/auth/leads",
          icon: <FcBusinessContact className="text-lg" />,
        },
        {
          name: "All Websites",
          description: "System administration panel",
          path: "/auth/dashboard/websitecheck",
          icon: <FcSettings className="text-lg" />,
        },
      ].filter(Boolean),
    },
  ];

  // Filter nav sections based on user role
  const navSections = allNavSections.filter((section) => {
    if (section.title === "Admin Tools") {
      // Only show Admin Tools if user is admin
      return user?.role === "admin";
    }
    // Show all other sections for all users
    return true;
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  const NavLink = ({ link, onClick, isDropdown = false }) => (
    <Link
      to={link.path}
      className={`flex items-center p-2 rounded-lg transition-all duration-200 group ${location.pathname === link.path
          ? "bg-black text-white shadow-lg"
          : "text-gray-700 hover:bg-gray-100 hover:text-black"
        } ${isDropdown ? "pl-8 text-sm" : ""}`}
      onClick={onClick}
    >
      <div className="mr-3">{link.icon}</div>
      <div className="flex-col flex leading-tight">
        <span className="font-medium text-sm">{link.name}</span>
        <span className="text-[10px]">{link.description}</span>
      </div>
    </Link>
  );

  const NavItemWithDropdown = ({ link, index }) => (
    <div className="mb-1">
      <button
        onClick={() => toggleDropdown(index)}
        className={`flex items-center justify-between w-full p-2 rounded-lg transition-all duration-200 group ${location.pathname === link.path ||
            (link.dropdown &&
              link.dropdown.some((item) => location.pathname === item.path))
            ? "bg-black text-white shadow-lg"
            : "text-gray-700 hover:bg-gray-100 hover:text-black"
          }`}
      >
        <div className="flex items-center">
          <div className="mr-3">{link.icon}</div>
          <div className="flex-col flex text-left leading-tight">
            <span className="font-medium text-sm">{link.name}</span>
            <span className="text-[10px]">{link.description}</span>
          </div>
        </div>
        {openDropdown === index ? (
          <FcUpRight className="text-sm" />
        ) : (
          <FcDownRight className="text-sm" />
        )}
      </button>

      {openDropdown === index && link.dropdown && (
        <div className="mt-1 ml-3 border-l-2 border-gray-200 pl-2 space-y-1">
          {link.dropdown.map((dropdownLink, dropdownIndex) => (
            <NavLink
              key={dropdownIndex}
              link={dropdownLink}
              onClick={() => {
                if (window.innerWidth < 768) {
                  closeSidebar();
                }
                setOpenDropdown(null);
              }}
              isDropdown={true}
            />
          ))}
        </div>
      )}
    </div>
  );

  if (!showNavbar) return null;

  return (
    <>
      {/* Main Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 z-50 left-0 pt-14 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out 
    md:translate-x-0 md:w-64
    ${isSidebarOpen
            ? "translate-x-0 w-64"
            : "-translate-x-full w-0 md:translate-x-0 md:w-64"
          }
  `}
      >
        {/* Scrollable Section - Always show on desktop, conditionally on mobile */}
        <div
          className={`flex flex-col overflow-y-auto h-[calc(100vh-120px)] custom-scrollbar px-3 py-4 ${isSidebarOpen ? "block" : "hidden md:block"
            }`}
        >
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              {section.title && (
                <div className="text-xs font-semibold text-gray-500 uppercase px-3 py-2 tracking-wider">
                  {section.title}
                </div>
              )}
              <div className="space-y-1">
                {section.links.map((link, linkIndex) =>
                  link.dropdown ? (
                    <NavItemWithDropdown
                      key={link.path}
                      link={link}
                      index={`${sectionIndex}-${linkIndex}`}
                    />
                  ) : (
                    <NavLink
                      key={link.path}
                      link={link}
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          closeSidebar();
                        }
                      }}
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Bottom Section - Always show on desktop, conditionally on mobile */}
        <div
          className={`absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white ${isSidebarOpen ? "block" : "hidden md:block"
            }`}
        >
          <button
            onClick={logout}
            className="flex items-center justify-center w-full p-2 text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg transition-all duration-200 group"
          >
            <span className="font-medium text-sm">Logout</span>
            <IoMdLogOut className="text-xl ml-3" />
          </button>
        </div>
      </div>

      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm h-14">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="text-gray-900 hover:bg-gray-100 rounded-lg transition duration-200 md:hidden p-1"
            >
              {isSidebarOpen ? <div>X</div> : <FcMenu className="text-xl" />}
            </button>

            {/* Logo */}
            <Link to="/auth/dashboard" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center font-bold text-black">
                <img
                  src={Companylogo}
                  alt="Company Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-gray-900">
                {GlobalData.company.companyName}
              </div>
              {/* Show user role if available */}
              {user?.role && (
                <div className="text-xs text-gray-500 text-right">
                  {user.role === "admin" ? "Administrator" : "Customer"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
