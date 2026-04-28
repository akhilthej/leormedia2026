import React, { useState, useEffect } from "react";
import logoLoaderSvg from "../assets/LogoLoader.svg";

const LogoLoader = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);

  const handleTransitionEnd = () => {
    if (!isLoading) setShouldRender(false);
  };

  // Show again when loading starts
  useEffect(() => {
    if (isLoading) setShouldRender(true);
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <>
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-subtle-float {
          animation: subtleFloat 3s ease-in-out infinite;
          animation-delay: 1.5s; 
        }
      `}</style>
      <div
        className={`fixed inset-0 flex justify-center items-center z-[200] transition-all duration-1000 ease-in-out ${
          isLoading
            ? "opacity-100 visible bg-white/80 backdrop-blur-lg"
            : "opacity-0 invisible bg-white/0 backdrop-blur-none"
        }`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="relative flex justify-center items-center w-full max-w-lg p-6">
          {/* Subtle glowing animated orbs behind the logo */}
          <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-red-500/20 rounded-full blur-[60px] animate-pulse pointer-events-none mix-blend-multiply"></div>
          
          <img
            src={logoLoaderSvg}
            alt="Logo Loader"
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl logoGroup z-[101] drop-shadow-2xl animate-subtle-float"
          />
        </div>
      </div>
    </>
  );
};

export default LogoLoader;
