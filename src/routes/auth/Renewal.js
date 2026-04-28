import React, { useEffect, useState } from "react";
import { CRUD_Domains, CRUD_Price_table, DOMAIN_PAY, DOMAIN_PAY_VERIFY } from "../../hooks/Apis";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import {
  FaGlobe,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaLayerGroup,
  FaUserCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaSearch,
  FaCreditCard,
  FaLock,
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaPowerOff,
  FaServer,
  FaPlay,
  FaStop,
  FaBan,
} from "react-icons/fa";

function Renewal() {
  const { user } = useAuth();
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pricingOptions, setPricingOptions] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState({});
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [serverActionLoading, setServerActionLoading] = useState({});

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const url = `${CRUD_Domains}?customer_userId=${user.id}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          setDomains(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch your domains");
      } finally {
        setLoading(false);
      }
    };

    const fetchPricingOptions = async () => {
      try {
        const res = await fetch(CRUD_Price_table);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          setPricingOptions(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch pricing options");
      }
    };

    if (user?.id) {
      fetchDomains();
      fetchPricingOptions();
    } else {
      setError("User ID is not available");
      setLoading(false);
    }
  }, [user]);

  const handlePlanChange = (domainId, priceInr) => {
    const selectedPlan = pricingOptions.find(
      (option) => option.price_inr === priceInr
    );
    setSelectedPlans((prev) => ({ ...prev, [domainId]: selectedPlan }));
    // Reset payment status when plan changes
    setPaymentProcessing(null);
    setPaymentSuccess(null);
  };

  const handleServerAction = async (domainId, action) => {
    setServerActionLoading(prev => ({ ...prev, [domainId]: true }));
    setError("");

    try {
      const domain = domains.find(d => d.id === domainId);
      if (!domain) {
        throw new Error("Domain not found");
      }

      const response = await fetch(CRUD_Domains, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: domainId,
          server: action,
          customer_userId: user.id,
          business_status: domain.business_status || "Yes"
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Update the domain in local state
        setDomains(prev => prev.map(d => 
          d.id === domainId ? { ...d, server: action } : d
        ));
      } else {
        throw new Error(data.message || "Failed to update server status");
      }
    } catch (err) {
      console.error("Server action error:", err);
      setError(err.message || "Failed to update server status");
    } finally {
      setServerActionLoading(prev => ({ ...prev, [domainId]: false }));
    }
  };

  const handlePayment = async (domainId) => {
    const domain = domains.find((d) => d.id === domainId);
    const plan = selectedPlans[domainId];
    
    if (!plan || !domain) {
      setError("Please select a renewal plan first");
      return;
    }

    setPaymentProcessing(domainId);
    setError("");

    try {
      const { data } = await axios.post(
        DOMAIN_PAY,
        {
          name: user.name || "",
          email: user.email || "",
          phone: user.phone_number || "",
          amount: parseInt(plan.price_inr) * 100,
          customer_code: user.id,
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
        description: `Renewal for ${domain.user_domain} - ${plan.duration_label}`,
        order_id: data.order_id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              DOMAIN_PAY_VERIFY,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                order_id: data.order_id,
                razorpay_signature: response.razorpay_signature,
                name: user.name || "",
                email: user.email || "",
                phone: user.phone_number || "",
                amount: data.amount,
                domain: domain.user_domain,
                duration_days: plan.duration_days,
              }
            );

            if (verifyRes.data.success) {
              setPaymentSuccess(domainId);
              setPaymentProcessing(null);
              // Refresh domains to get updated expiry dates
              const url = `${CRUD_Domains}?customer_userId=${user.id}`;
              const res = await fetch(url);
              const updatedDomains = await res.json();
              if (!updatedDomains.error) {
                setDomains(updatedDomains);
              }
            } else {
              throw new Error(verifyRes.data.error || 'Payment verification failed');
            }
          } catch (err) {
            console.error("Verification error:", err);
            setError("Payment verification failed. Please contact support.");
            setPaymentProcessing(null);
          }
        },
        prefill: {
          name: user.name || "",
          email: user.email || "",
          contact: user.phone_number || "",
        },
        theme: { color: "#f59e0b" },
        modal: {
          ondismiss: function() {
            setPaymentProcessing(null);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (err) {
      console.error("Payment initiation failed", err);
      setError(err.response?.data?.error || err.message || "Payment initiation failed. Please try again.");
      setPaymentProcessing(null);
    }
  };

  const getDomainStatus = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const daysUntilExpiry = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilExpiry < 0) {
      return { 
        status: "expired", 
        color: "red", 
        text: "Expired", 
        icon: FaExclamationTriangle,
        badgeColor: "bg-red-100 text-red-800 border-red-200"
      };
    } else if (daysUntilExpiry <= 7) {
      return { 
        status: "critical", 
        color: "orange", 
        text: "Expiring Soon", 
        icon: FaExclamationTriangle,
        badgeColor: "bg-orange-100 text-orange-800 border-orange-200"
      };
    } else if (daysUntilExpiry <= 30) {
      return { 
        status: "warning", 
        color: "yellow", 
        text: "Renewal Due", 
        icon: FaClock,
        badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-200"
      };
    } else {
      return { 
        status: "active", 
        color: "green", 
        text: "Active", 
        icon: FaCheckCircle,
        badgeColor: "bg-green-100 text-green-800 border-green-200"
      };
    }
  };

  const getServerStatusConfig = (serverStatus) => {
    switch (serverStatus) {
      case 'on':
        return {
          color: 'green',
          text: 'Running',
          icon: FaPlay,
          badgeColor: 'bg-green-100 text-green-800 border-green-200',
          nextAction: 'off',
          nextActionText: 'Stop Server',
          nextActionIcon: FaStop
        };
      case 'off':
        return {
          color: 'gray',
          text: 'Stopped',
          icon: FaStop,
          badgeColor: 'bg-gray-100 text-gray-800 border-gray-200',
          nextAction: 'on',
          nextActionText: 'Start Server',
          nextActionIcon: FaPlay
        };
      case 'disable':
        return {
          color: 'red',
          text: 'Disabled',
          icon: FaBan,
          badgeColor: 'bg-red-100 text-red-800 border-red-200',
          nextAction: 'on',
          nextActionText: 'Enable Server',
          nextActionIcon: FaPlay
        };
      default:
        return {
          color: 'gray',
          text: 'Unknown',
          icon: FaServer,
          badgeColor: 'bg-gray-100 text-gray-800 border-gray-200',
          nextAction: 'on',
          nextActionText: 'Start Server',
          nextActionIcon: FaPlay
        };
    }
  };

  const filteredDomains = domains.filter((domain) => {
    const status = getDomainStatus(domain.expiry_date);
    
    // Apply status filter
    if (filter === "expired" && status.status !== "expired") return false;
    if (filter === "active" && status.status !== "active") return false;
    if (filter === "expiring" && !["critical", "warning"].includes(status.status)) return false;

    // Apply search filter
    if (searchTerm && !domain.user_domain.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your domains...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
          <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent mb-4">
            My Domains
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and renew your hosting services
          </p>
        </div>

        {/* Payment Success Banner */}
        {paymentSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xl" />
              <div>
                <p className="text-green-800 font-semibold">Payment Successful!</p>
                <p className="text-green-700 text-sm">
                  Your domain has been successfully renewed.
                </p>
              </div>
              <button
                onClick={() => setPaymentSuccess(null)}
                className="ml-auto text-green-600 hover:text-green-800"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <FaExclamationTriangle className="text-red-500 text-xl" />
              <div>
                <p className="text-red-800 font-semibold">Payment Error</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
              <button
                onClick={() => setError("")}
                className="ml-auto text-red-600 hover:text-red-800"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}

        {/* Stats Summary */}
        {domains.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-gray-800">{domains.length}</div>
              <div className="text-sm text-gray-600">Total Domains</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-green-600">
                {domains.filter(d => getDomainStatus(d.expiry_date).status === "active").length}
              </div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {domains.filter(d => ["critical", "warning"].includes(getDomainStatus(d.expiry_date).status)).length}
              </div>
              <div className="text-sm text-gray-600">Need Renewal</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-red-600">
                {domains.filter(d => getDomainStatus(d.expiry_date).status === "expired").length}
              </div>
              <div className="text-sm text-gray-600">Expired</div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your domains..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Domains", color: "gray" },
                { key: "active", label: "Active", color: "green" },
                { key: "expiring", label: "Need Renewal", color: "orange" },
                { key: "expired", label: "Expired", color: "red" },
              ].map(({ key, label, color }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    filter === key
                      ? `bg-${color}-500 text-white shadow-lg`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Domains List */}
        {filteredDomains.length > 0 ? (
          <div className="grid gap-6">
            {filteredDomains.map((domain) => {
              const status = getDomainStatus(domain.expiry_date);
              const StatusIcon = status.icon;
              const selectedPlan = selectedPlans[domain.id];
              const remainingDays = Math.ceil((new Date(domain.expiry_date) - new Date()) / (1000 * 60 * 60 * 24));
              const isProcessing = paymentProcessing === domain.id;
              const isSuccess = paymentSuccess === domain.id;
              
              const serverConfig = getServerStatusConfig(domain.server);
              const ServerStatusIcon = serverConfig.icon;
              const NextActionIcon = serverConfig.nextActionIcon;
              const isServerActionLoading = serverActionLoading[domain.id];

              return (
                <div
                  key={domain.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Domain Header */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                          <FaGlobe className="text-2xl text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {domain.user_domain}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${status.badgeColor}`}>
                              <StatusIcon className="text-sm" />
                              <span className="text-sm font-medium">
                                {status.status === "expired" 
                                  ? `Expired ${Math.abs(remainingDays)}d ago` 
                                  : `${remainingDays} days left`
                                }
                              </span>
                            </div>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${serverConfig.badgeColor}`}>
                              <ServerStatusIcon className="text-sm" />
                              <span className="text-sm font-medium">
                                {serverConfig.text}
                              </span>
                            </div>
                            {isSuccess && (
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-green-100 text-green-800 border-green-200">
                                <FaCheck className="text-sm" />
                                <span className="text-sm font-medium">Renewed</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border">
                          <FaLayerGroup className="text-purple-500" />
                          <span className="text-sm font-medium text-gray-600">
                            {domain.tier} Plan
                          </span>
                        </div>
                        
                        {/* Server Control Button */}
                        <button
                          onClick={() => handleServerAction(domain.id, serverConfig.nextAction)}
                          disabled={isServerActionLoading || status.status === "expired"}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                            isServerActionLoading
                              ? "bg-gray-400 text-white cursor-not-allowed"
                              : serverConfig.nextAction === 'on'
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : serverConfig.nextAction === 'off'
                                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                                  : "bg-red-500 hover:bg-red-600 text-white"
                          }`}
                        >
                          {isServerActionLoading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Updating...
                            </>
                          ) : (
                            <>
                              <NextActionIcon className="text-sm" />
                              {serverConfig.nextActionText}
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Domain Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="flex items-center gap-3">
                        <FaUserCircle className="text-yellow-500 text-xl" />
                        <div>
                          <p className="text-sm text-gray-500">Account Name</p>
                          <p className="font-semibold text-gray-800">{domain.user_name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-green-500 text-xl" />
                        <div>
                          <p className="text-sm text-gray-500">Purchased</p>
                          <p className="font-semibold text-gray-800">{domain.purchased_date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-red-500 text-xl" />
                        <div>
                          <p className="text-sm text-gray-500">Expires</p>
                          <p className="font-semibold text-gray-800">{domain.expiry_date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Domain Validity</span>
                        <span>{remainingDays > 0 ? `${remainingDays} days remaining` : 'Domain expired'}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            status.status === "expired" ? "bg-red-500" :
                            status.status === "critical" ? "bg-orange-500" :
                            status.status === "warning" ? "bg-yellow-500" : "bg-green-500"
                          }`}
                          style={{
                            width: `${Math.max(5, Math.min(100, (remainingDays / 365) * 100))}%`
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Renewal Section */}
                    <div className="border-t pt-6">
                      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Select Renewal Plan
                          </label>
                          <select
                            value={selectedPlan?.price_inr || ""}
                            onChange={(e) => handlePlanChange(domain.id, e.target.value)}
                            disabled={isProcessing || isSuccess}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                          >
                            <option value="">Choose renewal duration...</option>
                            {pricingOptions.map((option) => (
                              <option key={option.id} value={option.price_inr}>
                                {option.duration_label} - ₹{option.price_inr}
                              </option>
                            ))}
                          </select>
                        </div>

                        {selectedPlan && (
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 min-w-[140px]">
                              <div className="text-center">
                                <p className="text-sm text-gray-600">Total</p>
                                <p className="text-2xl font-bold text-yellow-700">
                                  ₹{selectedPlan.price_inr}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {selectedPlan.duration_days} days
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => handlePayment(domain.id)}
                              disabled={isProcessing || isSuccess}
                              className={`font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                                isProcessing || isSuccess
                                  ? "bg-gray-400 text-white cursor-not-allowed"
                                  : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white hover:shadow-xl transform hover:scale-105"
                              }`}
                            >
                              {isProcessing ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                  Processing...
                                </>
                              ) : isSuccess ? (
                                <>
                                  <FaCheck />
                                  Renewed
                                </>
                              ) : (
                                <>
                                  <FaCreditCard />
                                  Pay Now
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Security Notice */}
                      {selectedPlan && !isProcessing && !isSuccess && (
                        <div className="mt-4 flex items-center gap-2 text-green-600 text-sm">
                          <FaLock className="text-xs" />
                          <span>Secure SSL encrypted payment</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 max-w-md mx-auto">
              <FaGlobe className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {domains.length === 0 ? "No domains found" : "No matching domains"}
              </h3>
              <p className="text-gray-600 mb-6">
                {domains.length === 0 
                  ? "You don't have any domains associated with your account yet." 
                  : `No domains match your current search or filter.`}
              </p>
              {domains.length === 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-sm text-yellow-800">
                    Contact support if you believe you should see domains here.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Renewal;