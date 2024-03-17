// utils/api.js

import axios from 'axios';

// Base URL of your Express.js API
const API_BASE_URL = 'http://192.168.0.206:3000'; // Adjust the port if necessary

/**
 * Fetch products from the API.
 * @returns {Promise} A promise that resolves to the list of products.
 */
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  /**
 * Send an order to the API.
 * @param {Object} orderDetails - The details of the order to send.
 * @returns {Promise} A promise that resolves to the response of the order API.
 */
export const addOrder = async (orderDetails) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/orders`, orderDetails);
      return response.data;
    } catch (error) {
      console.error('Error sending order:', error);
      throw error;
    }
  };