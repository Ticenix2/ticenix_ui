import React from "react";
import LoginLogo from "../components/login/LoginLogo";
import LoginForm from "../components/login/LoginForm";
import LoginImage from "../components/login/LoginImage";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sol Form Alanı */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-lg p-8 relative">
        <LoginLogo />
        <LoginForm />
      </div>

      {/* Sağ Görsel Alanı */}
      <LoginImage />
    </div>
  );
};

export default LoginPage;
