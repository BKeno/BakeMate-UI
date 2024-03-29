// utils/api.js

import axios from 'axios';

/**
 * Fetches all products from the backend API.
 * 
 * This asynchronous function requests the full list of products from the backend
 * server using a GET request. It utilizes Axios for HTTP requests. If the request
 * succeeds, it returns the data part of the response containing the products. In
 * case of an error, it logs the error and rethrows it for handling elsewhere.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`/api/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
};

/**
 * Sends a new order to the backend API.
 * 
 * This function submits order details to the backend server via a POST request.
 * The orderDetails object should contain all necessary information about the
 * order. Axios is used to handle the HTTP request. If successful, the function
 * returns the response data from the server. In case of failure, it logs and
 * rethrows the encountered error.
 *
 * @param {Object} orderDetails - Object containing the details of the order.
 * @returns {Promise<Object>} A promise that resolves to the response from the order submission endpoint.
 */
export const addOrder = async (orderDetails) => {
    try {
      const response = await axios.post(`/api/orders`, orderDetails);
      return response.data;
    } catch (error) {
      console.error('Error sending order:', error);
      throw error;
    }
};

/**
 * Fetches orders from the backend API based on a specified date range.
 * 
 * This function retrieves orders that fall within a given start and end date.
 * It constructs a query string with these dates and sends a GET request to the
 * backend. The function uses the Fetch API. If the response is successful, it
 * returns the JSON parsed list of orders. If there is a network or server error,
 * it throws an exception with an error message.
 *
 * @param {String} startDate - The start date for filtering orders.
 * @param {String} endDate - The end date for filtering orders.
 * @returns {Promise<Array>} A promise that resolves to an array of orders within the specified date range.
 */
export const fetchOrdersByDateRange = async (startDate, endDate) => {
    const response = await fetch(`/api/orders?startDate=${startDate}&endDate=${endDate}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
};

/**
 * Sends a new invoice to the backend API.
 * 
 * This function submits invoice details to the backend server via a POST request.
 * The orderDetails object should contain all necessary information about the
 * invoice. Axios is used to handle the HTTP request. If successful, the function
 * returns the response data from the server. In case of failure, it logs and
 * rethrows the encountered error.
 *
 * @param {Object} invoiceDetails - Object containing the details of the invoice.
 * @returns {Promise<Object>} A promise that resolves to the response from the invoice submission endpoint.
 */
export const addInvoice = async (invoiceDetails) => {
  try {
    const response = await axios.post(`/api/invoices`, invoiceDetails);
    return response.data;
  } catch (error) {
    console.error('Error sending invoice:', error);
    throw error;
  }
};


/**
 * Fetches invoices from the backend API based on a specified date range.
 * 
 * This function retrieves invoices that fall within a given start and end date.
 * It constructs a query string with these dates and sends a GET request to the
 * backend. The function uses the Fetch API. If the response is successful, it
 * returns the JSON parsed list of invoices. If there is a network or server error,
 * it throws an exception with an error message.
 *
 * @param {String} startDate - The start date for filtering invoices.
 * @param {String} endDate - The end date for filtering invoices.
 * @returns {Promise<Array>} A promise that resolves to an array of invoices within the specified date range.
 */
export const fetchInvoicesByDateRange = async (startDate, endDate) => {
  try {
    const response = await axios.get(`/api/invoices`, {
      params: { startDate, endDate }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw error;
  }
};