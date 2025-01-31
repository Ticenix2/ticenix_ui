import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginCustomer, loginAdmin } from "../../services/authService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Kullanıcının admin mi yoksa müşteri mi olduğunu belirler
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Giriş işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let response;

      if (isAdmin) {
        // Admin girişi
        response = await loginAdmin({ email, password });
        console.log("Admin girişi başarılı:", response);
        navigate("/admin/dashboard"); // Admin sayfasına yönlendir
      } else {
        // Müşteri girişi
        response = await loginCustomer({ email, password });
        if(response){
          console.log("Müşteri girişi başarılı:", response);
          const id = response.userId
          navigate(`/profile-complete/${id}`); // Ana sayfaya yönlendir

        }
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Giriş işlemi sırasında bir hata oluştu."
      );
      console.error(err);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-20 p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Giriş Yap</h2>
      <p className="text-center text-gray-500">
        Hesabınıza giriş yaparak alışverişe başlayın.
      </p>

      {/* Hata mesajı */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* E-Posta */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-Posta
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="E-Posta"
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
            onChange={(e) => setPassword(e.target.value)}
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

        {/* Admin Girişi Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isAdmin"
            checked={isAdmin}
            onChange={() => setIsAdmin((prev) => !prev)}
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor="isAdmin" className="ml-2 text-sm text-gray-600">
            Admin olarak giriş yap
          </label>
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

      {/* Kayıt ol linki */}
      <p className="text-center text-sm text-gray-600">
        Henüz bir hesabınız yok mu?{" "}
        <button
          onClick={() => navigate("/register")}
          className="text-orange-600 hover:underline"
        >
          Kayıt Ol
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
