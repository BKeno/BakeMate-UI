/**
 * Checks if a product is already present in the basket.
 *
 * @param {Array} basket - The current state of the basket containing product items.
 * @param {number} productId - The ID of the product to check for in the basket.
 * @returns {boolean} - Returns true if the product is found in the basket, false otherwise.
 */
export const isProductInBasket = (basket, productId) => {
    return basket.some(item => item.id === productId);
  };
  
/**
 * Displays "This product is already in the basket."
 *
 */
  export const showProductInBasketToast = () => {
    // Using a simple alert as a placeholder for the toast
    alert("This product is already in the basket.");
  };
