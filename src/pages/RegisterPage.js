import React from "react";
import Logo from "../components/Logo";
import RegisterForm from "../components/auth/RegisterForm";
import Image from "../components/auth/Image";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sol Form Alanı */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-lg p-8 relative">
        <Logo/>
        <RegisterForm />
      </div>

      {/* Sağ Görsel Alanı */}
      <Image />
    </div>
  );
};

export default RegisterPage;
