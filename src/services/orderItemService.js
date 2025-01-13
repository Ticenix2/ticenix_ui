import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Backend API URL'sini buraya koyun

// OrderItem'ları almak
export const fetchOrderItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orderitems`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order items:', error);
    throw error;
  }
};

// Yeni OrderItem eklemek
export const addOrderItem = async (newOrderItem) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orderitems`, newOrderItem);
    return response.data;
  } catch (error) {
    console.error('Error adding order item:', error);
    throw error;
  }
};

// OrderItem güncelleme
export const updateOrderItem = async (orderItemId, updatedOrderItem) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/orderitems/${orderItemId}`, updatedOrderItem);
    return response.data;
  } catch (error) {
    console.error('Error updating order item:', error);
    throw error;
  }
};

// OrderItem silme
export const deleteOrderItem = async (orderItemId) => {
  try {
    await axios.delete(`${API_BASE_URL}/orderitems/${orderItemId}`);
  } catch (error) {
    console.error('Error deleting order item:', error);
    throw error;
  }
};

// Belirli bir siparişin öğelerini almak
export const fetchOrderItemsByOrder = async (orderId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orderitems/order/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order items by order:', error);
    throw error;
  }
};
