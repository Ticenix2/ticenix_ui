import React, { useState, useEffect } from 'react';
import { fetchCategories, updateCategory, deleteCategory, addCategory } from '../../services/categoryService';

function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  // Kategorileri al
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error('Kategoriler alınırken bir hata oluştu', error);
      }
    };
    loadCategories();
  }, []);

  // Kategori düzenle
  const handleEditCategory = async (categoryId) => {
    if (!editCategoryName.trim()) return;

    try {
      const updatedCategory = { categoryName: editCategoryName };
      await updateCategory(categoryId, updatedCategory);
      setCategories(categories.map(category => 
        category.categoryId === categoryId ? { ...category, categoryName: editCategoryName } : category
      ));
      setEditCategoryId(null);
      setEditCategoryName('');
      alert('Kategori başarıyla güncellendi!');
    } catch (error) {
      alert('Kategori güncellenirken bir hata oluştu');
    }
  };

  // Kategori sil
  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      setCategories(categories.filter(category => category.categoryId !== categoryId));
      alert('Kategori başarıyla silindi!');
    } catch (error) {
      alert('Kategori silinirken bir hata oluştu');
    }
  };

  // Yeni kategori ekle
  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return;

    try {
      const categoryData = { categoryName: newCategoryName };
      const addedCategory = await addCategory(categoryData);
      setCategories([...categories, addedCategory]);
      setNewCategoryName('');
      setIsAddingCategory(false);
      alert('Yeni kategori başarıyla eklendi!');
    } catch (error) {
      alert('Yeni kategori eklenirken bir hata oluştu');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Ürün Kategorileri</h1>
        <button
          onClick={() => setIsAddingCategory(!isAddingCategory)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {isAddingCategory ? 'Kategoriyi Gizle' : 'Yeni Kategori Ekle'}
        </button>
      </div>

      {/* Yeni Kategori Ekleme Alanı */}
      {isAddingCategory && (
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="p-3 border border-gray-300 rounded-md"
              placeholder="Yeni kategori adı"
            />
            <button
              onClick={handleAddCategory}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Ekle
            </button>
          </div>
        </div>
      )}

      {/* Kategoriler Listesi */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Mevcut Kategoriler</h2>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.categoryId} className="flex justify-between items-center border-b py-3">
              {editCategoryId === category.categoryId ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={editCategoryName}
                    onChange={(e) => setEditCategoryName(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md"
                    required
                  />
                  <button
                    onClick={() => handleEditCategory(category.categoryId)}
                    className="ml-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                  >
                    Güncelle
                  </button>
                  <button
                    onClick={() => setEditCategoryId(null)}
                    className="ml-2 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                  >
                    İptal
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-800">{category.categoryName}</span>
                  <div className="ml-4 flex space-x-2">
                    <button
                      onClick={() => {
                        setEditCategoryId(category.categoryId);
                        setEditCategoryName(category.categoryName);
                      }}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.categoryId)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategories;
