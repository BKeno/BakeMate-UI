import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';

/**
 * Custom hook for fetching products data from the API.
 *
 * It returns the products, loading state, and any error that might have occurred during the fetch.
 * The hook initializes the products state to an empty array, loading to false, and error to null.
 * It uses an effect to call the `fetchProducts` API function when the component mounts.
 * The effect is dependent on the `fetchProducts` function and will re-run if that function changes.
 *
 * @returns {Object} An object containing the following:
 * - products: An array of product data.
 * - loading: A boolean representing the loading state.
 * - error: An error object or null if no error has occurred.
 */
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    
    loadProducts();
  }, []);

  return { products, loading, error };
};
