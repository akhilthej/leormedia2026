import React, { useState, useMemo } from "react";
import { HiChevronDown, HiSearch } from "react-icons/hi";
import {
  EventDetailPageData,
  MobileAppDesignDetails,
  EcommerceAppDevelopmentDetails,
  WebDesignPageDetails,
  UserInterfaceDesignPageDetails,
} from "../assets/data/PageData";
import seoData from "../assets/data/seo.json";
import { Helmet } from "react-helmet-async";

const { title, description, keywords, canonical, ogImage } = seoData.faq;

// Reusable FAQ section component
const FaqSection = ({ title, faqs, openIndex, toggle, offset }) => (
  <section className="py-8 px-4 max-w-4xl mx-auto">
    <div className="mb-8">
      <p className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 py-2">
        {title}
      </p>
    </div>

    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const currentIndex = offset + index;
        const isOpen = openIndex === currentIndex;

        return (
          <div
            key={currentIndex}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
          >
            <button
              onClick={() => toggle(currentIndex)}
              className="w-full flex items-center justify-between px-6 py-4 bg-white font-medium text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            >
              <span className="text-left text-lg font-semibold pr-4">
                {faq.question}
              </span>
              <span
                className={`transition-transform duration-300 text-xl text-blue-600 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <HiChevronDown />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 py-5 bg-gray-50 text-gray-700 border-t border-gray-200">
                <div className="text-base leading-relaxed">{faq.answer}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </section>
);

// Main component
function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("all");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections = [
    {
      id: "events",
      title: "Frequently Asked Questions - Event Planning",
      data: EventDetailPageData.faqs,
    },
    {
      id: "mobile-app",
      title: "Frequently Asked Questions - Mobile App Design",
      data: MobileAppDesignDetails.faqs,
    },
    {
      id: "ecommerce",
      title: "Frequently Asked Questions - Ecommerce",
      data: EcommerceAppDevelopmentDetails.faqs,
    },
    {
      id: "web-design",
      title: "Frequently Asked Questions - Web Design",
      data: WebDesignPageDetails.faqs,
    },
    {
      id: "ui-design",
      title: "Frequently Asked Questions - UI Design",
      data: UserInterfaceDesignPageDetails.faqs,
    },
  ];

  // Combine all FAQs with their section info for search
  const allFaqs = useMemo(() => {
    const faqList = [];
    let currentIndex = 0;
    
    faqSections.forEach(section => {
      section.data.forEach(faq => {
        faqList.push({
          ...faq,
          sectionId: section.id,
          sectionTitle: section.title,
          globalIndex: currentIndex,
        });
        currentIndex++;
      });
    });
    
    return faqList;
  }, [faqSections]);

  // Filter FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) {
      if (activeSection === "all") {
        return allFaqs;
      }
      return allFaqs.filter(faq => faq.sectionId === activeSection);
    }

    const query = searchQuery.toLowerCase();
    const filtered = allFaqs.filter(
      faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );

    if (activeSection !== "all") {
      return filtered.filter(faq => faq.sectionId === activeSection);
    }

    return filtered;
  }, [searchQuery, activeSection, allFaqs]);

  // Group filtered FAQs by section for display
  const groupedFilteredFaqs = useMemo(() => {
    const groups = {};
    
    filteredFaqs.forEach(faq => {
      if (!groups[faq.sectionId]) {
        groups[faq.sectionId] = {
          title: faq.sectionTitle,
          faqs: [],
          section: faqSections.find(s => s.id === faq.sectionId)
        };
      }
      groups[faq.sectionId].faqs.push(faq);
    });
    
    return groups;
  }, [filteredFaqs, faqSections]);

  // Calculate total FAQs in each section for offset
  const calculateSectionOffsets = () => {
    const offsets = {};
    let currentOffset = 0;
    
    faqSections.forEach(section => {
      offsets[section.id] = currentOffset;
      currentOffset += section.data.length;
    });
    
    return offsets;
  };

  const sectionOffsets = calculateSectionOffsets();

  // Handle search and open the first matching FAQ
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() && filteredFaqs.length > 0) {
      // Open the first matching FAQ
      setOpenIndex(filteredFaqs[0].globalIndex);
    }
  };

  // Clear search and reset
  const handleClearSearch = () => {
    setSearchQuery("");
    setActiveSection("all");
    setOpenIndex(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Leor Media" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical Link */}
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-8 space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for questions or answers..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSection("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All FAQs
            </button>
            {faqSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.title.split(" - ")[1] || section.title}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                Found <span className="font-bold">{filteredFaqs.length}</span>{" "}
                result{filteredFaqs.length !== 1 ? "s" : ""} for "
                <span className="font-bold">{searchQuery}</span>"
                {activeSection !== "all" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="font-bold">
                      {faqSections.find(s => s.id === activeSection)?.title.split(" - ")[1]}
                    </span>
                  </span>
                )}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-12">
          {searchQuery ? (
            // Display filtered results
            Object.keys(groupedFilteredFaqs).length > 0 ? (
              Object.entries(groupedFilteredFaqs).map(([sectionId, sectionData]) => (
                <section key={sectionId} className="py-8 px-4 max-w-4xl mx-auto">
                  <div className="mb-8">
                    <p className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 py-2">
                      {sectionData.title}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {sectionData.faqs.map((faq) => {
                      const isOpen = openIndex === faq.globalIndex;

                      return (
                        <div
                          key={faq.globalIndex}
                          className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
                        >
                          <button
                            onClick={() => toggle(faq.globalIndex)}
                            className="w-full flex items-center justify-between px-6 py-4 bg-white font-medium text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                          >
                            <span className="text-left text-lg font-semibold pr-4">
                              {faq.question}
                            </span>
                            <span
                              className={`transition-transform duration-300 text-xl text-blue-600 flex-shrink-0 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              <HiChevronDown />
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 py-5 bg-gray-50 text-gray-700 border-t border-gray-200">
                              <div className="text-base leading-relaxed">{faq.answer}</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No results found for "{searchQuery}"
                </p>
                <button
                  onClick={handleClearSearch}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear search
                </button>
              </div>
            )
          ) : (
            // Display all FAQs grouped by section
            faqSections.map((section) => (
              <FaqSection
                key={section.id}
                title={section.title}
                faqs={section.data}
                openIndex={openIndex}
                toggle={toggle}
                offset={sectionOffsets[section.id]}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Faqs;