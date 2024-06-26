// pages/OrderCreate.jsx

import { useState } from 'react';
import Card from '../components/ui/Card';
import OrderForm from '../components/ui/OrderForm';
import BasketTable from '../components/ui/BasketTable';
import { addOrder } from '../utils/api'; 
import { useProducts } from '../hooks/useProducts';

/**
 * This page component is responsible for creating new orders.
 * It utilizes the useProducts hook to fetch and display products.
 * Users can add products to a basket and submit the order.
 * It manages the state for the basket, selected date, and loading status.
 */
const OrderCreate = () => {
  // State for the basket and loading indicator
  const [basket, setBasket] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [isLoading, setIsLoading] = useState(false);

  // useProducts hook to manage fetching products
  const { products, loading, error } = useProducts();

  // Handler to remove a product from the basket
  const removeFromBasket = (productId) => {
    setBasket(basket.filter((item) => item.id !== productId));
  };

  // Handler to add a product to the basket
  const addToBasket = (product, quantity) => {
    const newProduct = {
      ...product,
      quantity: quantity,
      totalPrice: product.price * quantity,
    };
    setBasket([...basket, newProduct]);
  };

  // Handler to send the order
  const handleSendOrder = async () => {
    if (basket.length === 0) {
      alert("Basket is empty.");
      return;
    }

    setIsLoading(true); // Activate loader

    // Construct the order details
    const orderDetails = {
      order: basket.map((item) => ({
        Date: selectedDate,
        orderingPerson: "Gergő", // or the actual user identifier if available
        productId: item.id,
        productName: item.name,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await addOrder(orderDetails);
      alert(response.message);
      setBasket([]); // Reset basket after successful order creation
    } catch (error) {
      alert('Could not send order.');
      console.error("Failed to send order:", error);
    } finally {
      setIsLoading(false); // Stop loader in any case
    }
  };

  // Render the component UI
  return (
    <Card title="Create Order">
      {loading && <p>Loading products...</p>}
      {error && <p>Error fetching products: {error.message}</p>}
      {!loading && !error && (
        <>
          <OrderForm
            products={products}
            addToBasket={addToBasket}
            basket={basket}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <BasketTable basket={basket} removeFromBasket={removeFromBasket} />
          {basket.length > 0 && (
            <div className="flex justify-center mt-4">
              <button 
                className="btn btn-primary max-w-xs mt-4" 
                onClick={handleSendOrder}
                disabled={isLoading}
              >
                {isLoading && <span className="loading loading-ball loading-xs"></span>}
                Send Order
              </button>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default OrderCreate;
