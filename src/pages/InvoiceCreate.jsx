// pages/InvoiceCreate.jsx

import { useState } from "react";
import Card from "../components/ui/Card";
import OrderForm from "../components/ui/OrderForm";
import BasketTable from "../components/ui/BasketTable";
import { addInvoice } from "../utils/api";
import { useProducts } from '../hooks/useProducts';

/**
 * This page component is responsible for creating new invoices.
 * It leverages the useProducts hook for fetching product data from the API.
 * Users can select products to add to a basket and submit an invoice.
 * It manages the state for the basket, selected date, and loading status.
 */
const InvoiceCreate = () => {
  // Using the useProducts hook to manage fetching products
  const { products, loading, error } = useProducts();

  // State for the basket and loading indicator
  const [basket, setBasket] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [isLoading, setIsLoading] = useState(false);

  // Handlers for the basket functionality
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

  // Handler for creating an invoice
  const handleCreateInvoice = async () => {
    if (basket.length === 0) {
      alert("Basket is empty.");
      return;
    }

    setIsLoading(true); // Activate loader

    // Construct the invoice details
    const invoiceDetails = {
      invoice: basket.map((item) => ({
        Date: selectedDate,
        invoicingPerson: "Gergő", // Update as necessary
        productId: item.id,
        productName: item.name,
        quantity: item.quantity,
        price: item.price
      })),
    };

    try {
      const response = await addInvoice(invoiceDetails); // Adjust API call
      alert(response.message);
      setBasket([]); // Clear basket after successful submission
    } catch (error) {
      alert('Could not send invoice.');
      console.error("Failed to send invoice:", error);
    } finally {
      setIsLoading(false); // Stop loader in any case
    }
  };

  // Render the component UI
  return (
    <Card title="Create Invoice">
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
                onClick={handleCreateInvoice}
                disabled={isLoading}
              >
                {isLoading && <span className="loading loading-ball loading-xs"></span>}
                Create Invoice
              </button>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default InvoiceCreate;
