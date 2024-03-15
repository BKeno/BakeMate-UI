// utils/api.js

import axios from 'axios';

// Base URL of your Express.js API
const API_BASE_URL = 'http://localhost:3000'; // Adjust the port if necessary

// Fetch Products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
