import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa"; // react-icons'dan göz ve ok ikonlarını import ettik
import { useNavigate } from "react-router-dom"; // useNavigate kullanıyoruz
import { registerUser } from "../../services/authService"; // authService'den registerUser fonksiyonunu import ediyoruz

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Hata mesajı state'i
  const navigate = useNavigate(); // navigate fonksiyonunu oluşturduk

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Kayıt işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Şifre ve Şifre Tekrarı kontrolü
    if (password !== confirmPassword) {
      setError("Şifreler uyuşmuyor.");
      return;
    }

    try {
      const userData = { username, email, password }; // Form verilerini bir araya getirdik
      const response = await registerUser(userData); // registerUser fonksiyonu ile backend'e veri gönderiyoruz
      console.log("Kayıt başarılı:", response);
      navigate("/login"); // Kayıt başarılıysa login sayfasına yönlendiriyoruz
    } catch (err) {
      setError("Kayıt işlemi sırasında bir hata oluştu.");
      console.error(err);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Login sayfasına yönlendirme
  };

  return (
    <div className="max-w-md w-full space-y-6 mt-20">
      {/* Sağ üst köşe Giriş Yap butonu */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLoginRedirect}
          className="flex items-center text-lg text-orange-600 hover:underline"
        >
          Giriş Yap
          <FaArrowRight className="ml-1 w-5 h-5" />
        </button>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 text-center">Kayıt Ol</h2>
      <p className="text-center text-gray-500">
        E-ticaret dünyasına katılın. Hesabınızı oluşturun.
      </p>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>} {/* Hata mesajı */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Kullanıcı Adı */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Kullanıcı Adı
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Kullanıcı adını state'e kaydediyoruz
            className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Kullanıcı Adı"
            required
          />
        </div>

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
            onChange={(e) => setEmail(e.target.value)} // E-Posta bilgisini state'e kaydediyoruz
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

        {/* Şifre Tekrar */}
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Şifreyi Tekrarla
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Şifreyi tekrar kaydediyoruz
            className="mt-1 block w-full p-4 pl-4 pr-12 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Şifreyi Tekrarla"
            required
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute inset-y-0 right-4 top-6 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Kullanıcı Sözleşmesi */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            Kullanıcı Sözleşmesini kabul ediyorum
          </label>
        </div>

        {/* Kayıt Ol Butonu */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
