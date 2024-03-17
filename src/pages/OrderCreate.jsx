// pages/OrderCreate.jsx

import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import OrderForm from "../components/ui/OrderForm";
import BasketTable from "../components/ui/BasketTable";
import { fetchProducts, addOrder } from "../utils/api"; // Adjust the import path as needed

const OrderCreate = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const removeFromBasket = (productId) => {
    setBasket(basket.filter((item) => item.id !== productId));
  };

  const addToBasket = (product, quantity) => {
    const newProduct = {
      ...product,
      quantity: quantity,
      totalPrice: product.price * quantity,
    };
    setBasket([...basket, newProduct]);
  };


  // ORDER CREATE BLOCK START 
  const handleSendOrder = async () => {
    if (basket.length === 0) {
      alert("Basket is empty.");
      return;
    }

// Construct the order details with required information
const orderDetails = {
  order: basket.map(item => ({
    Date: new Date().toISOString(), // or use a selectedDate state if you have a date picker in the form
    orderingPerson: 'Gergő (Déryné Konyha)',     // or the actual user identifier if available
    productId: item.id,
    productName: item.name,
    quantity: item.quantity
  }))
};
    try {
      const response = await addOrder(orderDetails);
      console.log("Order sent successfully:", response);
      // Add post-order success handling here (e.g., clear basket, show success message)
    } catch (error) {
      console.error("Failed to send order:", error);
      // Add error handling here (e.g., show error message)
    }
  };


  return (
    <Card title="Create Order">
      <OrderForm
        products={products}
        addToBasket={addToBasket}
        basket={basket}
      />

      <BasketTable basket={basket} removeFromBasket={removeFromBasket} />
      {basket.length > 0 && (
        <div className="flex justify-center mt-4">
          <button className="btn btn-primary" onClick={handleSendOrder}>
            Send Order
          </button>
        </div>
      )}
    </Card>
  );
};

export default OrderCreate;
