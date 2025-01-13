import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Backend API URL'sini buraya koyun

// Tüm ürünleri almak
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Yeni ürün eklemek
export const addProduct = async (newProduct) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, newProduct);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Ürün güncelleme
export const updateProduct = async (productId, updatedProduct) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/products/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Ürün silme
export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_BASE_URL}/products/${productId}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Kategoriye göre ürünleri almak
export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

// Ürün ID'sine göre ürün almak
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

// Ürün stok güncelleme
export const updateProductStock = async (productId, stockData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/products/${productId}/stock`, stockData);
    return response.data;
  } catch (error) {
    console.error('Error updating product stock:', error);
    throw error;
  }
};

// Ürün stok miktarını almak
export const fetchProductStock = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/stock`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product stock:', error);
    throw error;
  }
};
