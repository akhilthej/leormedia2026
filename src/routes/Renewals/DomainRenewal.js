import React, { useState, useEffect } from "react";
import axios from "axios";
import { CRUD_Domains, CRUD_Price_table, DOMAIN_PAY, DOMAIN_PAY_VERIFY } from "../../hooks/Apis";
import {
  FaGlobe,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaSearch,
  FaUserCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaCreditCard,
} from "react-icons/fa"; 

function PublicRenewal() {
  const [domainInput, setDomainInput] = useState("");
  const [domainInfo, setDomainInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [autoSearchLoading, setAutoSearchLoading] = useState(false);
  const [error, setError] = useState("");
  const [pricingOptions, setPricingOptions] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Fetch pricing options on component mount
  useEffect(() => {
    const fetchPricingOptions = async () => {
      try {
        const res = await fetch(CRUD_Price_table);
        const data = await res.json();
        if (!data.error) {
          setPricingOptions(data);
        }
      } catch (err) {
        console.error("Failed to fetch pricing options", err);
      }
    };
    fetchPricingOptions();
  }, []);

  // Auto-search for domain from URL parameter on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const domainFromUrl = urlParams.get('domain');
    
    if (domainFromUrl) {
      const decodedDomain = decodeURIComponent(domainFromUrl);
      setDomainInput(decodedDomain);
      // Auto-trigger search after a brief delay to ensure component is ready
      setTimeout(() => {
        handleDomainSearch(true);
      }, 500);
    }
  }, []);

  const handleDomainSearch = async (isAutoSearch = false) => {
    if (!domainInput.trim()) {
      setError("Please enter a domain name");
      return;
    }

    if (isAutoSearch) {
      setAutoSearchLoading(true);
    } else {
      setLoading(true);
    }
    
    setError("");
    setDomainInfo(null);
    setSelectedPlan(null);
    setPaymentSuccess(false);

    try {
      // Normalize domain input
      const normalizedDomain = domainInput
        .toLowerCase()
        .replace(/https?:\/\//, '')
        .replace(/^www\./, '')
        .trim();

      const res = await fetch(CRUD_Domains);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else if (data.length === 0) {
        setError("No domains found in the system.");
      } else {
        // Find exact domain match
        const domain = data.find(d => 
          d.user_domain.toLowerCase() === normalizedDomain
        );

        if (!domain) {
          setError(`Domain "${normalizedDomain}" not found. Please check the domain name and try again.`);
          return;
        }

        setDomainInfo(domain);
        
        // Pre-fill customer details if available
        if (domain.customer_name || domain.user_name) {
          setCustomerDetails(prev => ({
            ...prev,
            name: domain.customer_name || domain.user_name || ""
          }));
        }
        
        // Auto-select the most popular plan (usually 2 years)
        if (pricingOptions.length > 0) {
          const popularPlan = pricingOptions.find(plan => plan.popular) || pricingOptions[0];
          setSelectedPlan(popularPlan);
        }
        
        // Check domain status
        const expiryDate = new Date(domain.expiry_date);
        const today = new Date();
        const isExpired = expiryDate < today;
        const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
        
        if (isExpired) {
          setError(`This domain expired on ${domain.expiry_date}. Please renew to continue service.`);
        } else if (daysUntilExpiry <= 30) {
          setError(`Warning: This domain expires in ${daysUntilExpiry} days. We recommend renewing now.`);
        }
      }
    } catch (err) {
      console.error("Domain search error:", err);
      setError("Failed to search for domain. Please try again.");
    } finally {
      if (isAutoSearch) {
        setAutoSearchLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCustomerDetailChange = (field, value) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = async () => {
    if (!domainInfo || !selectedPlan) {
      setError("Please select a renewal plan");
      return;
    }

    // Validate customer details
    if (!customerDetails.name.trim() || !customerDetails.email.trim() || !customerDetails.phone.trim()) {
      setError("Please fill in all customer details");
      return;
    }

    // Basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(customerDetails.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Basic phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(customerDetails.phone.replace(/\D/g, ''))) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setPaymentLoading(true);
    setError("");

    try {
      const { data } = await axios.post(
        DOMAIN_PAY,
        {
          name: customerDetails.name,
          email: customerDetails.email,
          phone: customerDetails.phone,
          amount: parseInt(selectedPlan.price_inr) * 100, // Convert to paise
          customer_code: `public_${Date.now()}`,
        }
      );

      if (data.error) {
        throw new Error(data.error);
      }

      const options = {
        key: data.razorpay_key,
        amount: data.amount,
        currency: "INR",
        name: "Leor Media",
        description: `Renewal for ${domainInfo.user_domain} - ${selectedPlan.duration_label}`,
        order_id: data.order_id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              DOMAIN_PAY_VERIFY,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                order_id: data.order_id,
                razorpay_signature: response.razorpay_signature,
                name: customerDetails.name,
                email: customerDetails.email,
                phone: customerDetails.phone,
                amount: data.amount,
                domain: domainInfo.user_domain,
                duration_days: selectedPlan.duration_days,
              }
            );

            if (verifyRes.data.success) {
              setPaymentSuccess(true);
              setError("");
            } else {
              throw new Error(verifyRes.data.error || 'Payment verification failed');
            }
          } catch (err) {
            console.error("Verification error:", err);
            setError("Payment verification failed. Please contact support.");
          } finally {
            setPaymentLoading(false);
          }
        },
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.phone,
        },
        theme: { color: "#0f172a" },
        modal: {
          ondismiss: function() {
            setPaymentLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (err) {
      console.error("Payment initiation failed", err);
      setError(err.response?.data?.error || err.message || "Payment initiation failed. Please try again.");
      setPaymentLoading(false);
    }
  };

  const handleNewSearch = () => {
    setDomainInput("");
    setDomainInfo(null);
    setSelectedPlan(null);
    setPaymentSuccess(false);
    setCustomerDetails({ name: "", email: "", phone: "" });
    setError("");
    
    // Clear URL parameter
    const url = new URL(window.location);
    url.searchParams.delete('domain');
    window.history.replaceState({}, '', url);
  };

  // Calculate days until expiry
  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get status color and message
  const getDomainStatus = (expiryDate) => {
    const days = getDaysUntilExpiry(expiryDate);
    
    if (days < 0) {
      return { color: "text-red-600", message: "Expired", bg: "bg-red-50", border: "border-red-200" };
    } else if (days <= 7) {
      return { color: "text-red-500", message: "Expiring Soon", bg: "bg-red-50", border: "border-red-200" };
    } else if (days <= 30) {
      return { color: "text-orange-500", message: "Renewal Due", bg: "bg-orange-50", border: "border-orange-200" };
    } else {
      return { color: "text-green-600", message: "Active", bg: "bg-green-50", border: "border-green-200" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Domain Renewal Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Renew your domain hosting quickly and securely. All in one place.
          </p>
        </div>

        {/* Auto-search loading indicator */}
        {autoSearchLoading && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
            <p className="text-gray-600">Loading domain information...</p>
          </div>
        )}

        {/* Success Message */}
        {paymentSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-center">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">Payment Successful!</h2>
            <p className="text-green-700 mb-4">
              Your domain <strong>{domainInfo?.user_domain}</strong> has been successfully renewed for {selectedPlan?.duration_label}.
            </p>
            <button
              onClick={handleNewSearch}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Renew Another Domain
            </button>
          </div>
        )}

        {!paymentSuccess && !autoSearchLoading && (
          <>
            {/* Domain Search Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Domain Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={domainInput}
                      onChange={(e) => setDomainInput(e.target.value)}
                      placeholder="example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && handleDomainSearch()}
                    />
                    <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Enter your domain without http:// or www (e.g., example.com)
                  </p>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => handleDomainSearch(false)}
                    disabled={loading}
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <FaSearch />
                    {loading ? "Searching..." : "Search Domain"}
                  </button>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-start gap-2">
                  <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Domain Information & Renewal Options */}
            {domainInfo && (
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaGlobe className="text-blue-600" />
                    Domain Information
                  </h2>
                  {domainInfo.expiry_date && (
                    <div className={`mt-2 md:mt-0 px-3 py-1 rounded-full border ${getDomainStatus(domainInfo.expiry_date).bg} ${getDomainStatus(domainInfo.expiry_date).border}`}>
                      <span className={`text-sm font-semibold ${getDomainStatus(domainInfo.expiry_date).color}`}>
                        {getDomainStatus(domainInfo.expiry_date).message}
                      </span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {/* Domain Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FaGlobe className="text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-600">Domain Name</p>
                        <p className="font-semibold text-lg text-gray-800">{domainInfo.user_domain}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaUserCircle className="text-green-500" />
                      <div>
                        <p className="text-sm text-gray-600">Customer Name</p>
                        <p className="font-semibold text-gray-800">{domainInfo.customer_name || domainInfo.user_name || "N/A"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-purple-500" />
                      <div>
                        <p className="text-sm text-gray-600">Expiry Date</p>
                        <p className="font-semibold text-gray-800">{domainInfo.expiry_date}</p>
                        <p className="text-xs text-gray-500">
                          {getDaysUntilExpiry(domainInfo.expiry_date) > 0 
                            ? `${getDaysUntilExpiry(domainInfo.expiry_date)} days remaining`
                            : `${Math.abs(getDaysUntilExpiry(domainInfo.expiry_date))} days ago`
                          }
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaMoneyBillWave className="text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-600">Current Tier</p>
                        <p className="font-semibold text-gray-800">{domainInfo.tier}</p>
                      </div>
                    </div>
                  </div>

                  {/* Renewal Plans */}
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Renewal Plan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pricingOptions.map((plan) => (
                        <div
                          key={plan.id}
                          onClick={() => handlePlanSelect(plan)}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                            selectedPlan?.id === plan.id
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                          }`}
                        >
                          <div className="text-center">
                            <h4 className="font-bold text-lg text-gray-800">{plan.duration_label}</h4>
                            <p className="text-2xl font-bold text-blue-600 my-2">₹{plan.price_inr}</p>
                            <p className="text-sm text-gray-600">{plan.duration_days} days</p>
                            {selectedPlan?.id === plan.id && (
                              <div className="mt-2 text-green-600 text-sm font-semibold">
                                <FaCheckCircle className="inline mr-1" />
                                Selected
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Customer Details & Payment */}
                {selectedPlan && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCreditCard className="text-green-500" />
                      Customer Details & Payment
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={customerDetails.name}
                            onChange={(e) => handleCustomerDetailChange('name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={customerDetails.email}
                            onChange={(e) => handleCustomerDetailChange('email', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={customerDetails.phone}
                            onChange={(e) => handleCustomerDetailChange('phone', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your 10-digit phone number"
                            maxLength="10"
                          />
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-gray-800 mb-3">Order Summary</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Domain:</span>
                            <span className="font-semibold">{domainInfo.user_domain}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Plan:</span>
                            <span className="font-semibold">{selectedPlan.duration_label}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>{selectedPlan.duration_days} days</span>
                          </div>
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total Amount:</span>
                              <span className="text-blue-600">₹{selectedPlan.price_inr}</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handlePayment}
                          disabled={paymentLoading}
                          className={`w-full mt-4 ${
                            paymentLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                          } text-white font-semibold py-3 px-4 rounded-lg shadow transition duration-200 flex items-center justify-center gap-2`}
                        >
                          <FaCreditCard />
                          {paymentLoading ? 'Processing...' : `Pay ₹${selectedPlan.price_inr} Now`}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Features Section */}
        {!domainInfo && !paymentSuccess && !autoSearchLoading && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Why Renew With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaGlobe className="text-blue-600 text-xl" />
                </div>
                <h4 className="font-semibold mb-2">99.9% Uptime</h4>
                <p className="text-sm text-gray-600">Reliable hosting with guaranteed uptime</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaMoneyBillWave className="text-green-600 text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Best Prices</h4>
                <p className="text-sm text-gray-600">Competitive pricing with no hidden fees</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCalendarAlt className="text-purple-600 text-xl" />
                </div>
                <h4 className="font-semibold mb-2">Easy Renewal</h4>
                <p className="text-sm text-gray-600">Quick and secure renewal process</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicRenewal;