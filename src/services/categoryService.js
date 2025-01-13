// src/services/categoryService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Backend API URL'sini buraya koyun

// Kategorileri Getir (Tümünü Listeleme)
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Tek Kategoriyi Getir (ID ile)
export const fetchCategoryById = async (categoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with ID ${categoryId}:`, error);
    throw error;
  }
};

// Yeni Kategori Ekle
export const addCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/categories`, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

// Kategori Güncelle (ID ile)
export const updateCategory = async (categoryId, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/categories/${categoryId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating category with ID ${categoryId}:`, error);
    throw error;
  }
};

// Kategori Sil (ID ile)
export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting category with ID ${categoryId}:`, error);
    throw error;
  }
};
