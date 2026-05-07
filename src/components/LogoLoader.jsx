import React, { useState, useEffect } from "react";
import logoLoaderSvg from "../assets/LeormediaLogo.svg";

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
    <div
      className={`fixed inset-0 flex justify-center items-center z-[200] transition-all duration-700 ease-in-out ${
        isLoading
          ? "opacity-100 visible bg-white"
          : "opacity-0 invisible bg-white/0"
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="relative flex justify-center items-center w-full max-w-lg p-6">
        <img
          src={logoLoaderSvg}
          alt="Leor Media Logo"
          className="relative w-[20%] max-w-sm sm:max-w-md z-[101]"
        />
      </div>
    </div>
  );
};

export default LogoLoader;
