import React from 'react';

const OfferSection = () => {
  return (
    <section className="bg-orange-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Büyük İndirimler ve Teklifler!
            </h2>
            <p className="text-lg mb-6">
              Şimdi alışveriş yapın ve %50'ye varan indirim fırsatlarını kaçırmayın!
            </p>
            <button className="bg-white text-orange-600 py-3 px-6 rounded-md text-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Şimdi Keşfet
            </button>
          </div>
          <div className="mt-8 sm:mt-0 sm:w-1/2">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Offer Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
