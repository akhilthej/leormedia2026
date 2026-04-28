import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { Login_api } from "../../hooks/Apis";
import { FiEye, FiEyeOff, FiLock, FiUser, FiArrowRight, FiShield, FiGlobe, FiServer } from "react-icons/fi";
import { CSDLogoAbout } from "../../assets/data/icon_data";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (user) navigate("/auth/dashboard");
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(Login_api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) login(data.user);
      else setError(data.message || "Login failed");
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4EEE2] to-[#E8D9C0] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFB624]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f37a20]/15 rounded-full blur-3xl"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#FFB624] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#f37a20] rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-[#E8D9C0] rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-sm">
          {/* Logo & Title */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFB624] to-[#f37a20] flex items-center justify-center shadow-lg">
                  <img
                    src={CSDLogoAbout}
                    alt="Leor Media"
                    className="w-10 h-10"
                  />
                </div>
                {/* Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f37a20] rounded-full border-2 border-white animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Secure Access</h1>
            <p className="text-gray-600 text-sm mt-1">Leor Media Portal</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-xl border border-[#E8D9C0] p-5 shadow-lg">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email/Phone */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" size={16} />
                  </div>
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-[#E8D9C0] bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FFB624] focus:border-[#FFB624] transition-all"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" size={16} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full pl-9 pr-10 py-2.5 text-sm rounded-lg border border-[#E8D9C0] bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FFB624] focus:border-[#FFB624] transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-600 text-xs text-center">{error}</p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`w-full py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#FFB624] to-[#f37a20] hover:shadow-md active:scale-95"
                } text-gray-900 flex items-center justify-center gap-2`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-800/30 border-t-gray-800 rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Access Portal</span>
                    <FiArrowRight
                      className={`transform transition-transform duration-200 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    />
                  </>
                )}
              </button>
            </form>

            {/* Help Text */}
            <div className="mt-4 pt-3 border-t border-[#F4EEE2]">
              <p className="text-gray-500 text-xs text-center">
                Need account access? Contact support
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-6">
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#f37a20] rounded-full animate-pulse"></div>
              <span className="text-gray-700 text-sm">Enterprise Security</span>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-2 rounded-lg bg-white/50 border border-[#E8D9C0]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB624] to-[#FFB624]/30 flex items-center justify-center mb-1">
                  <FiShield className="text-gray-800" size={14} />
                </div>
                <span className="text-gray-600 text-xs">Secure</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-white/50 border border-[#E8D9C0]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f37a20] to-[#f37a20]/30 flex items-center justify-center mb-1">
                  <FiServer className="text-gray-800" size={14} />
                </div>
                <span className="text-gray-600 text-xs">Reliable</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-white/50 border border-[#E8D9C0]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB624] to-[#f37a20]/30 flex items-center justify-center mb-1">
                  <FiGlobe className="text-gray-800" size={14} />
                </div>
                <span className="text-gray-600 text-xs">Global</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Leor Media
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}