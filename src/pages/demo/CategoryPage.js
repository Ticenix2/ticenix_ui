import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Edit } from 'lucide-react';

// Başlangıç kategorileri
const initialCategories = [
  { name: 'Elektronik', image: 'https://cdn.pixabay.com/photo/2017/01/23/19/30/smartphone-2001673_1280.jpg', link: '/category/electronics', description: 'Telefon, bilgisayar, televizyon ve daha fazlası.' },
  { name: 'Moda', image: 'https://cdn.pixabay.com/photo/2016/03/27/19/40/woman-1284411_1280.jpg', link: '/category/fashion', description: 'Giyim, ayakkabı ve aksesuar ürünleri burada.' },
  { name: 'Ev & Yaşam', image: 'https://cdn.pixabay.com/photo/2017/08/06/18/04/living-room-2591257_1280.jpg', link: '/category/home', description: 'Mobilya, mutfak gereçleri ve dekorasyon ürünleri.' },
];

const CategoryPage = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newCategory, setNewCategory] = useState({ name: '', image: '', description: '' });

  // Kategori Ekle veya Güncelle
  const handleSaveCategory = () => {
    if (!newCategory.name || !newCategory.image || !newCategory.description) return;

    if (editIndex !== null) {
      // Güncelleme işlemi
      const updatedCategories = [...categories];
      updatedCategories[editIndex] = { ...newCategory, link: `/category/${newCategory.name.toLowerCase()}` };
      setCategories(updatedCategories);
    } else {
      // Yeni kategori ekleme
      setCategories([...categories, { ...newCategory, link: `/category/${newCategory.name.toLowerCase()}` }]);
    }

    setNewCategory({ name: '', image: '', description: '' });
    setIsModalOpen(false);
    setEditIndex(null);
  };

  // Kategori Silme
  const handleDeleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  // Kategori Düzenleme
  const handleEditCategory = (index) => {
    setNewCategory(categories[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Popüler Kategoriler
        </h2>

        {/* Kategori Listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <Link to={category.link} className="w-full h-full">
                <div
                  className="w-full h-60 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="text-center py-6 px-6">
                  <h3 className="text-2xl font-semibold text-gray-800 transition duration-300">
                    {category.name}
                  </h3>
                  <p className="text-md text-gray-500 mt-2">
                    {category.description}
                  </p>
                </div>
              </Link>

              {/* Düzenle ve Sil Butonları */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <button onClick={() => handleEditCategory(index)} className="bg-yellow-500 text-white p-2 rounded">
                  <Edit size={20} />
                </button>
                <button onClick={() => handleDeleteCategory(index)} className="bg-red-500 text-white p-2 rounded">
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Kategori Ekle Kartı */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col items-center justify-center bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
            onClick={() => {
              setNewCategory({ name: '', image: '', description: '' });
              setEditIndex(null);
              setIsModalOpen(true);
            }}
          >
            <div className="w-full h-60 flex items-center justify-center bg-gray-100 text-gray-600 text-6xl">
              +
            </div>
            <div className="text-center py-6 px-6">
              <h3 className="text-2xl font-semibold text-gray-800 transition duration-300">
                Kategori Ekle
              </h3>
              <p className="text-md text-gray-500 mt-2">
                Yeni bir kategori eklemek için tıklayın.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Modal (Ekle / Düzenle) */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h3 className="text-2xl font-semibold mb-4">
                {editIndex !== null ? 'Kategoriyi Düzenle' : 'Yeni Kategori Ekle'}
              </h3>
              <input
                type="text"
                placeholder="Kategori Adı"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Resim URL"
                value={newCategory.image}
                onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Açıklama"
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                className="w-full p-2 border rounded mb-4"
              />
              <div className="flex justify-end">
                <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
                  İptal
                </button>
                <button onClick={handleSaveCategory} className="bg-blue-600 text-white px-4 py-2 rounded">
                  {editIndex !== null ? 'Güncelle' : 'Ekle'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
