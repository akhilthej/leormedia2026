import { CONTACTUS_API } from "../hooks/Apis";
import { ContactUsCover, ourproducts_contact } from "../assets/data/Imagedata";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaChevronRight,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import React, { useState, useMemo } from "react";
import { GlobalData } from "../assets/data/GlodalData";
import { Helmet } from "react-helmet-async";
import seoData from "../assets/data/seo.json";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Subject options for dropdown
  const subjectOptions = [
    "Wedding Planning",
    "Corporate Events",
    "Social & Birthday Parties",
    "Entertainment & Music Shows",
    "Digital Marketing & SEO",
    "Website & App Development",
    "Other",
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please use our WhatsApp number for faster response.",
    },
    {
      question: "What information should I include in my project inquiry?",
      answer:
        "Please include your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can understand your needs and provide an accurate proposal.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we offer free initial consultations to discuss your project requirements and provide preliminary advice. This helps us understand your needs and determine how we can best assist you.",
    },
    {
      question: "What types of projects do you work on?",
      answer:
        "We work on a wide range of projects including professional event planning, wedding management, website development, branding, digital marketing, and e-commerce solutions.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the project planning phase.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Memoize FAQ section
  const faqSection = useMemo(
    () => (
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-3 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium">{faq.question}</span>
              <FaChevronRight
                className={`transition-transform ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-3 bg-gray-50 text-sm text-gray-700 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    ),
    [openIndex]
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    setLoading(true);
    try {
      const response = await fetch(CONTACTUS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const { title, description, keywords, canonical, ogImage } =
    seoData.contactus;

  const contactMethods = [
    {
      icon: <HiOutlineMail className="text-xl" />,
      label: "Email",
      value: GlobalData.company.companyEmail,
      href: `mailto:${GlobalData.company.companyEmail}`,
      color: "text-primary",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: GlobalData.company.companyPhone,
      href: `tel:${GlobalData.company.companyPhone}`,
      color: "text-green-600",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Chat with us",
      href: GlobalData.company.companyWhatsapp,
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white my-6 mt-28">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section
        className="py-12 md:py-20 px-4 rounded-lg mx-4"
        style={{
          backgroundImage: `url("${ContactUsCover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Get in touch,
            <br />
            we'd love to hear from you.
          </h1>
          <p className="text-sm opacity-90 mb-6">
            You can contact us through mail or you can get in touch at our
            digital office.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contactus"
              className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FaPhone className="mr-2" /> Get in Touch
            </Link>
            <a
              href={GlobalData.company.companyWhatsapp}
              className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />

              <div className="grid md:grid-cols-2 gap-4">
                {["name", "email", "phone"].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      placeholder={
                        field === "name"
                          ? "Your full name"
                          : field === "email"
                          ? "your.email@example.com"
                          : "+91 00000 00000"
                      }
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      required
                    />
                  </div>
                ))}

                {/* Subject Dropdown */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-primary hover:bg-primary-100 text-white shadow-sm"
                }`}
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600">
                Whether you're ready to begin a project or just want to explore
                possibilities, we're here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-full bg-gray-100 mr-4 ${method.color}`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{method.label}</p>
                    <p className="font-semibold text-gray-900">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Quick Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${GlobalData.company.companyEmail}`}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-primary transition-colors"
                >
                  <FaEnvelope className="text-primary" />
                  <span className="text-sm font-medium">Email</span>
                </a>
                <a
                  href={`tel:${GlobalData.company.companyPhone}`}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-primary transition-colors"
                >
                  <FaPhone className="text-green-600" />
                  <span className="text-sm font-medium">Call</span>
                </a>
                <a
                  href={GlobalData.company.companyWhatsapp}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-primary transition-colors"
                >
                  <FaWhatsapp className="text-green-500" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="px-4 max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-[14px] text-center mb-6">
          Find answers to common questions about our programs and academy.
        </p>
        {faqSection}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. We're just a message away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${GlobalData.company.companyEmail}`}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-100 transition-colors font-medium"
            >
              <FaEnvelope />
              Start with Email
            </a>
            <a
              href={GlobalData.company.companyWhatsapp}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
