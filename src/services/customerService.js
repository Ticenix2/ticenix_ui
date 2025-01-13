import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Backend API URL'sini buraya koyun

// Müşterileri almak
export const fetchCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

// Yeni müşteri eklemek
export const addCustomer = async (newCustomer) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/customers`, newCustomer);
    return response.data;
  } catch (error) {
    console.error('Error adding customer:', error);
    throw error;
  }
};

// Müşteri güncelleme
export const updateCustomer = async (customerId, updatedCustomer) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/customers/${customerId}`, updatedCustomer);
    return response.data;
  } catch (error) {
    console.error('Error updating customer:', error);
    throw error;
  }
};

// Müşteri silme
export const deleteCustomer = async (customerId) => {
  try {
    await axios.delete(`${API_BASE_URL}/customers/${customerId}`);
  } catch (error) {
    console.error('Error deleting customer:', error);
    throw error;
  }
};
