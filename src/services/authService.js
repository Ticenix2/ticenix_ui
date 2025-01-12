// services/authService.js
import axios from "axios";

// API'nin temel URL'ini buraya ekleyebilirsiniz
const API_URL = "https://api.example.com"; 

// Kayıt olma işlemi
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Kayıt sırasında hata oluştu:", error);
    throw error;
  }
};

// Giriş yapma işlemi
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Giriş sırasında hata oluştu:", error);
    throw error;
  }
};

// Şifre sıfırlama işlemi
export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { email });
    return response.data;
  } catch (error) {
    console.error("Şifre sıfırlama sırasında hata oluştu:", error);
    throw error;
  }
};
