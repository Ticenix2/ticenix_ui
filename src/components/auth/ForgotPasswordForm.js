import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate kullanıyoruz
import { resetPassword } from "../../services/authService"; // authService'den resetPassword fonksiyonunu import ediyoruz

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // Hata mesajları için state ekliyoruz
  const navigate = useNavigate(); // navigate fonksiyonunu oluşturduk

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await resetPassword({ email }); // E-posta adresini authService'e gönderiyoruz
      setMessage(response.message); // Başarılı işlem sonrası gelen mesajı gösteriyoruz

      // Şifre sıfırlama işlemi başarılı ise, kullanıcıyı login sayfasına yönlendiriyoruz
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md w-full space-y-6 mt-20">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Şifremi Unuttum</h2>
      <p className="text-center text-gray-500">
        Şifrenizi sıfırlamak için e-posta adresinizi girin.
      </p>
      
      {/* Mesajlar */}
      {message && (
        <div className="text-center text-green-500 font-medium">
          {message}
        </div>
      )}
      {error && (
        <div className="text-center text-red-500 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* E-Posta */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-Posta Adresiniz
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="E-Posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // E-posta bilgisini state'e kaydediyoruz
            required
          />
        </div>

        {/* Şifre sıfırlama butonu */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Şifreyi Sıfırla
          </button>
        </div>
      </form>

      {/* Giriş yapmaya yönlendiren link */}
      <div className="text-center text-sm mt-4">
        <span className="text-gray-500">Hesabınız var mı?</span>{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-orange-600 hover:underline"
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
