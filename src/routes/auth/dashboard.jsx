import { useAuth } from "../../hooks/AuthContext";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaCut,
  FaBalanceScale,
  FaHeartbeat,
  FaLaptopCode,
  FaUserTie,
  FaSchool,
  FaUtensils,
  FaEnvelope,
  FaPhoneAlt,
  FaRedo,
  FaChartLine,
  FaServer,
  FaGlobe,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

function Dashboard() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-red-600">
        Please log in to view your dashboard.
      </div>
    );
  }

  const stats = [
    { icon: FaServer, label: "Active Domains", value: "12", color: "from-blue-500 to-cyan-500" },
    { icon: FaShieldAlt, label: "Security Status", value: "Protected", color: "from-green-500 to-emerald-500" },
    { icon: FaChartLine, label: "Uptime", value: "99.9%", color: "from-purple-500 to-pink-500" },
    { icon: FaGlobe, label: "Global Reach", value: "24/7", color: "from-orange-500 to-red-500" },
  ];

  const quickActions = [
    {
      icon: FaRedo,
      label: "Domain Renewal",
      description: "Renew your hosting services",
      path: "/auth/dashboard/renewal",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: RiSecurePaymentFill,
      label: "Payment History",
      description: "View transaction records",
      path: "/auth/dashboard/paymenthistory",
      color: "from-green-500 to-teal-500",
    },
  ];

  const industries = [
    { icon: FaShoppingCart, label: "Retail", color: "text-blue-500" },
    { icon: FaCut, label: "Salons", color: "text-pink-500" },
    { icon: FaBalanceScale, label: "Legal & Finance", color: "text-purple-500" },
    { icon: FaHeartbeat, label: "Healthcare", color: "text-red-500" },
    { icon: FaLaptopCode, label: "IT Companies", color: "text-cyan-500" },
    { icon: FaUserTie, label: "Freelancers", color: "text-indigo-500" },
    { icon: FaSchool, label: "Education", color: "text-green-500" },
    { icon: FaUtensils, label: "Restaurants", color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Welcome Header */}
      <div className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-12 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-yellow-100 text-lg">
                Here's what's happening with your account today
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-yellow-100 text-sm">Logged in as</p>
                <p className="font-semibold">{user.email}</p>
              </div>
              <button
                onClick={logout}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm border border-white/30"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 -mt-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="text-white text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Link
              key={action.label}
              to={action.path}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${action.color} group-hover:scale-110 transition-transform duration-200`}>
                    <action.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {action.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {action.description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <FaRocket className="text-gray-400 group-hover:text-yellow-500 transform group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaUserTie className="text-yellow-500" />
            Account Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <FaEnvelope className="text-yellow-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="text-gray-800 font-medium break-all">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <FaPhoneAlt className="text-yellow-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone Number</p>
                <p className="text-gray-800 font-medium">{user.phone_number}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We build efficient, scalable software tailored to each sector. 
              From retail to healthcare, we've got you covered globally.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="group text-center p-6 rounded-xl border-2 border-gray-100 hover:border-yellow-200 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`p-4 rounded-full bg-gray-100 group-hover:bg-white inline-flex items-center justify-center mb-3 transition-colors duration-200`}>
                  <industry.icon className={`text-3xl ${industry.color}`} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {industry.label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <FaShieldAlt className="text-green-500" />
            <span>Your account is secured with enterprise-grade encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;