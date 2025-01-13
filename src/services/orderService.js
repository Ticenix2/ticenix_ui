import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Backend API URL'sini buraya koyun

// Siparişleri almak
export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Yeni sipariş eklemek
export const addOrder = async (newOrder) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, newOrder);
    return response.data;
  } catch (error) {
    console.error('Error adding order:', error);
    throw error;
  }
};

// Sipariş güncelleme
export const updateOrder = async (orderId, updatedOrder) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/orders/${orderId}`, updatedOrder);
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

// Sipariş silme
export const deleteOrder = async (orderId) => {
  try {
    await axios.delete(`${API_BASE_URL}/orders/${orderId}`);
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};

// Belirli bir müşteri tarafından yapılan siparişleri almak
export const fetchOrdersByCustomer = async (customerId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/customer/${customerId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders by customer:', error);
    throw error;
  }
};
