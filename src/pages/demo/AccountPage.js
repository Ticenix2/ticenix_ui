import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Lock, Mail, ArrowRightCircle } from "lucide-react";

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Giriş veya Kayıt formu gösterme durumu
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Giriş işlemi
      console.log("Giriş Yapıldı", { email, password });
    } else {
      // Kayıt işlemi
      console.log("Kayıt Yapıldı", { email, password, name });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        {isLogin ? "Giriş Yap" : "Kayıt Ol"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
              placeholder="Adınızı girin"
              required
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm text-gray-600">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-gray-600">
            Şifre
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Şifrenizi girin"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        {isLogin ? (
          <p>
            Hesabınız yok mu?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="text-blue-600 hover:underline"
            >
              Kayıt Ol
            </button>
          </p>
        ) : (
          <p>
            Zaten hesabınız var mı?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-600 hover:underline"
            >
              Giriş Yap
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
