import axios from "axios";

const API_URL = "http://localhost:5129/api"; // Gerekirse HTTPS'yi de dene

const handleRequestError = (error) => {
  console.error("API Hatası:", error);
  throw error.response?.data?.message || "Sunucu hatası!";
};

// Müşteri kaydı
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/customer/register`, userData);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Müşteri girişi
export const loginCustomer = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/customer/login`, userData);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Admin girişi
export const loginAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, adminData);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Müşteri şifre sıfırlama
export const resetCustomerPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/customer/reset-password`, { email });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Admin şifre sıfırlama
export const resetAdminPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/admin/reset-password`, { email });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
