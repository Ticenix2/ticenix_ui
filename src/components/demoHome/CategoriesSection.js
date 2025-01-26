import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesSection = () => {
  const categories = [
    { id: 1, name: 'Elektronik', image: '/images/electronics.jpg' },
    { id: 2, name: 'Moda', image: '/images/fashion.jpg' },
    { id: 3, name: 'Ev & Yaşam', image: '/images/home-living.jpg' },
    { id: 4, name: 'Güzellik', image: '/images/beauty.jpg' },
    { id: 5, name: 'Spor', image: '/images/sports.jpg' },
    { id: 6, name: 'Oyun', image: '/images/games.jpg' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Popüler Kategoriler</h2>
        <p className="text-lg text-gray-600 mb-12">
          İhtiyacınıza uygun kategorilerle alışverişe başlayın.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
