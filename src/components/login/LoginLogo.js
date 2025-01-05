import React from "react";

const LoginLogo = () => {
  return (
    <div className="absolute top-6 left-6 flex items-center">
      {/* Logo */}
      <img src="/images/logo.png" alt="Ticenix Logo" className="h-12" />
      {/* Firma Adı */}
      <span className="ml-3 text-4xl font-bold text-orange-600">Ticenix</span>
    </div>
  );
};

export default LoginLogo;
