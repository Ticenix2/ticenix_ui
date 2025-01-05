import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // react-icons'dan göz ikonlarını import ettik

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md w-full space-y-6 mt-20">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Hoş Geldiniz</h2>
      <p className="text-center text-gray-500">
        E-ticaret dünyasına adım atın. Hesabınıza giriş yapın.
      </p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Kullanıcı Adı veya E-Posta
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Kullanıcı Adı veya E-Posta"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Şifre
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="mt-1 block w-full p-4 pl-4 pr-12 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Şifre"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-4 top-6 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <a
            href="/panel/forgot-password"
            className="text-sm text-gray-500 hover:underline"
          >
            Şifremi Unuttum
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
