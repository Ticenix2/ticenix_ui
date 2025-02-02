import React, { useState } from 'react';

// E-posta Girişi Bileşeni
const EmailInput = ({ value, onChange, error }) => (
  <div className="w-full sm:w-96">
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder="E-posta adresinizi girin"
      className={`w-full px-6 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out ${
        error ? 'border-2 border-red-500' : 'border-2 border-transparent'
      }`}
      aria-label="E-posta adresi"
      required
    />
    {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
  </div>
);

// Abonelik Başarı Bileşeni
const SuccessMessage = () => (
  <div className="bg-green-600 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg transform transition duration-300 ease-in-out scale-100 hover:scale-105">
    Başarıyla abone oldunuz! Teşekkürler!
  </div>
);

// Abonelik Hata Bileşeni
const ErrorMessage = ({ message }) => (
  <div className="mt-4 text-red-500 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
    {message}
  </div>
);

// Newsletter Bileşeni
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  // E-posta doğrulama ve abonelik işlemi
  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basit e-posta doğrulama
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    // Başarılı abonelik işlemi
    setIsSubscribed(true);
    setError('');
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 px-6 sm:px-8 lg:px-12 text-white shadow-xl rounded-lg">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Bültene Abone Olun ve İndirimleri Kaçırmayın!
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Yeni kampanyalar, fırsatlar ve özel indirimlerle dolu bültenimize abone olun. İlk siz haberdar olun!
        </p>

        {/* E-posta Abonelik Formu */}
        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} error={error} />
            <button
              type="submit"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 ease-in-out transform hover:scale-105"
              aria-label="Abone ol"
            >
              Abone Ol
            </button>
          </form>
        ) : (
          <SuccessMessage />
        )}

        {/* Hata Mesajı */}
        {error && <ErrorMessage message={error} />}
      </div>
    </section>
  );
};

export default Newsletter;
