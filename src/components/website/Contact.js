import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url("/images/contact-bg.jpg")' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Sorularınızı yanıtlamak için buradayız. Aşağıdaki yöntemlerden birini kullanarak bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-600 text-white p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6.75L12 12l9-5.25"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  E-posta
                </h4>
                <p className="text-gray-600">
                  <a
                    href="mailto:support@ticenix.com"
                    className="hover:text-orange-600 transition"
                  >
                    support@ticenix.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-600 text-white p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75h.008v.008h-.008V6.75zm0 0h-7.5a4.5 4.5 0 00-4.5 4.5v7.5a4.5 4.5 0 004.5 4.5h7.5a4.5 4.5 0 004.5-4.5v-7.5a4.5 4.5 0 00-4.5-4.5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Telefon
                </h4>
                <p className="text-gray-600">
                  <a
                    href="tel:+905555555555"
                    className="hover:text-orange-600 transition"
                  >
                    +90 555 555 55 55
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">
              Bize Mesaj Gönderin
            </h4>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Adınızı girin"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="E-posta adresinizi girin"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Mesajınızı yazın"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
