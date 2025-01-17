// services/authService.js
import axios from "axios";

// API'nin temel URL'ini buraya ekleyebilirsiniz
const API_URL = "http://localhost:5260/api/";

// Müşteri kaydı
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/customer/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Kayıt sırasında hata oluştu:", error);
    throw error;
  }
};

// Müşteri girişi
export const loginCustomer = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/customer/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Müşteri girişi sırasında hata oluştu:", error);
    throw error;
  }
};

// Admin girişi
export const loginAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, adminData);
    return response.data;
  } catch (error) {
    console.error("Admin girişi sırasında hata oluştu:", error);
    throw error;
  }
};

// Şifre sıfırlama (müşteriler için)
export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/customer/reset-password`, { email });
    return response.data;
  } catch (error) {
    console.error("Şifre sıfırlama sırasında hata oluştu:", error);
    throw error;
  }
};
