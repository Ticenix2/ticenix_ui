// services/authService.js
import axios from "axios";

// API'nin temel URL'ini buraya ekleyebilirsiniz
const API_URL = "http://localhost:5000/api";

// Müşteri kaydı
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/customer`, userData); // Customer register API çağrısı
    return response.data;
  } catch (error) {
    console.error("Kayıt sırasında hata oluştu:", error);
    throw error;
  }
};

// Müşteri girişi
export const loginCustomer = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/customer`, userData); // Customer login API çağrısı
    return response.data;
  } catch (error) {
    console.error("Müşteri girişi sırasında hata oluştu:", error);
    throw error;
  }
};

// Admin girişi
export const loginAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, adminData); // Admin login API çağrısı
    return response.data;
  } catch (error) {
    console.error("Admin girişi sırasında hata oluştu:", error);
    throw error;
  }
};

// Müşteri şifre sıfırlama
export const resetCustomerPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/customer/reset-password`, { email }); // Customer reset password API çağrısı
    return response.data;
  } catch (error) {
    console.error("Müşteri şifre sıfırlama sırasında hata oluştu:", error);
    throw error;
  }
};

// Admin şifre sıfırlama
export const resetAdminPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/admin/reset-password`, { email }); // Admin reset password API çağrısı
    return response.data;
  } catch (error) {
    console.error("Admin şifre sıfırlama sırasında hata oluştu:", error);
    throw error;
  }
};
