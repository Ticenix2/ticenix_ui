import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Gerçek kategori görselleri
const categories = [
  { 
    name: 'Elektronik', 
    image: 'https://cdn.pixabay.com/photo/2017/01/23/19/30/smartphone-2001673_1280.jpg',
    link: '/category/electronics', 
    description: 'Akıllı telefonlar, bilgisayarlar, televizyonlar ve daha fazlası.'
  },
  { 
    name: 'Moda', 
    image: 'https://cdn.pixabay.com/photo/2016/03/27/19/40/woman-1284411_1280.jpg',
    link: '/category/fashion', 
    description: 'Giyim, aksesuar, ayakkabı ve tüm moda ürünleri burada.'
  },
  { 
    name: 'Ev & Yaşam', 
    image: 'https://cdn.pixabay.com/photo/2017/08/06/18/04/living-room-2591257_1280.jpg',
    link: '/category/home', 
    description: 'Ev eşyaları, mobilya, mutfak gereçleri ve daha fazlası.'
  },
  { 
    name: 'Gıda', 
    image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
    link: '/category/food', 
    description: 'Taze gıda ürünleri, atıştırmalıklar ve içecekler.'
  },
  { 
    name: 'Kitaplar', 
    image: 'https://cdn.pixabay.com/photo/2016/09/09/22/55/book-1659717_1280.jpg',
    link: '/category/books', 
    description: 'En iyi kitaplar, romanlar, eğitim kitapları ve daha fazlası.'
  },
  { 
    name: 'Güzellik & Kişisel Bakım', 
    image: 'https://cdn.pixabay.com/photo/2017/08/07/01/02/spa-2598691_1280.jpg',
    link: '/category/beauty', 
    description: 'Cilt bakım ürünleri, makyaj malzemeleri, parfümler ve daha fazlası.'
  },
];

const Categories = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Popüler Kategoriler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <Link to={category.link} className="w-full h-full">
                <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${category.image})` }}></div>
                
                <div className="text-center py-6 px-6">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                    {category.name}
                  </h3>
                  <p className="text-md text-gray-500 mt-2">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
