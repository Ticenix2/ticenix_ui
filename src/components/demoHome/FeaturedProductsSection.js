import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProductsSection = ({ featuredProducts }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts && featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500">Şu anda öne çıkan ürünler yok.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
