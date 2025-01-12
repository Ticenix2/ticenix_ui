import React from "react";
import Logo from "../components/Logo";
import Image from "../components/auth/Image";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";


const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sol Form Alanı */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-lg p-8 relative">
        <Logo />
        <ForgotPasswordForm />
      </div>

      {/* Sağ Görsel Alanı */}
      <Image />
    </div>
  );
};

export default LoginPage;
