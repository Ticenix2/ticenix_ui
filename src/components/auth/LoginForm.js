import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa"; // FaArrowRight ok simgesi ekledik
import { useNavigate } from "react-router-dom"; // useNavigate kullanıyoruz
import { loginUser } from "../../services/authService"; // authService'den loginUser fonksiyonunu import ediyoruz

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState(""); // E-posta veya kullanıcı adı
  const [password, setPassword] = useState(""); // Şifre
  const [error, setError] = useState(""); // Hata mesajı
  const navigate = useNavigate(); // navigate fonksiyonunu oluşturduk

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { emailOrUsername, password }; // Kullanıcı bilgilerini alıyoruz
      const response = await loginUser(userData); // loginUser fonksiyonu ile backend'e veri gönderiyoruz

      console.log("Giriş başarılı:", response);
      navigate("/profile-complete"); // Başarılı giriş sonrasında dashboard'a yönlendiriyoruz
    } catch (err) {
      setError("Giriş işlemi sırasında bir hata oluştu.");
      console.error(err);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register"); // Kayıt sayfasına yönlendirme
  };

  return (
    <div className="max-w-md w-full space-y-6 mt-20">
      {/* Sağ üst köşe Kayıt Ol butonu */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleRegisterRedirect}
          className="flex items-center text-lg text-orange-600 hover:underline"
        >
          Kayıt Ol
          <FaArrowRight className="ml-1 w-5 h-5" />
        </button>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 text-center">Hoş Geldiniz</h2>
      <p className="text-center text-gray-500">
        E-ticaret dünyasına adım atın. Hesabınıza giriş yapın.
      </p>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>} {/* Hata mesajı */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Kullanıcı Adı veya E-Posta */}
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
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)} // Kullanıcı adı ya da e-posta bilgisini state'e kaydediyoruz
            className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Kullanıcı Adı veya E-Posta"
            required
          />
        </div>

        {/* Şifre */}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Şifreyi state'e kaydediyoruz
            className="mt-1 block w-full p-4 pl-4 pr-12 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Şifre"
            required
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

        {/* Şifremi Unuttum */}
        <div className="flex items-center justify-between">
          <a
            href="/forgot-password"
            className="text-sm text-gray-500 hover:underline"
          >
            Şifremi Unuttum?
          </a>
        </div>

        {/* Giriş Yap Butonu */}
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
