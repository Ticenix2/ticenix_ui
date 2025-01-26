import React from 'react';

const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0 sm:text-4xl">
            Şimdi Alışveriş Yapın, %30'a Varan İndirim Kazanın!
          </h2>
          <p className="text-lg sm:ml-6 sm:text-xl mb-4 sm:mb-0">
            Tüm ürünlerde geçerli büyük indirim fırsatını kaçırmayın.
          </p>
        </div>
        <div>
          <button className="bg-white text-orange-600 py-3 px-8 rounded-md text-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Hemen Alışveriş Yap
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
