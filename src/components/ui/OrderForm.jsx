// components/ui/OrderForm.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import DateInput from './DateInput'; 

import {
  isProductInBasket,
  showProductInBasketToast,
} from "../../utils/basketFunctions";


const OrderForm = ({ products, addToBasket, basket, selectedDate, setSelectedDate }) => {
  const [selectedProduct, setSelectedProduct] = useState(1); // always the product with id = 1 will be loaded
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure quantity is a number and greater than zero
    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const productToAdd = products.find((p) => p.id === selectedProduct);

    if (productToAdd) {
      // Check if the product is already in the basket
      if (isProductInBasket(basket, productToAdd.id)) {
        showProductInBasketToast();
        return; // Exit the function to stop adding the product
      }

      addToBasket(productToAdd, parsedQuantity);
      // Clear quantity input after adding to basket
      setQuantity('');
    }
  };

  return (
<form onSubmit={handleSubmit} className="form-control w-full px-4 py-2">
  {/* Date picker input on its own row */}
  <DateInput
        label="Date of delivery"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

  {/* Product select input on its own row */}
  <div className="mb-4">
    <label className="label">
      <span className="label-text">Product</span>
    </label>
    <select
      value={selectedProduct}
      onChange={(e) => setSelectedProduct(Number(e.target.value))}
      className="select select-bordered w-full bg-white bg-opacity-20 border-bakery-gold focus:border-bakery-focus focus:outline-none"
    >
      {products.map((product) => (
        <option key={product.id} value={product.id}>
          {product.name}
        </option>
      ))}
    </select>
  </div>

  {/* Quantity input on its own row, aligned flex-start */}
  <div className="mb-4 w-1/4">
    <label className="label">
      <span className="label-text">Quantity</span>
    </label>
    <input
      type="number"
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
      className="input input-bordered w-full max-w-xs bg-white bg-opacity-20 border-bakery-gold focus:border-bakery-focus focus:outline-none"
      min="1"
    />
  </div>

  {/* Submit button centered */}
  <div className="flex justify-center">
    <button
      type="submit"
      className="btn btn-primary max-w-xs mt-4"
    >
      Add to Basket
    </button>
  </div>
</form>
  );
};

OrderForm.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToBasket: PropTypes.func.isRequired,
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      totalPrice: PropTypes.number,
    })
  ).isRequired,
  selectedDate: PropTypes.string.isRequired, // Add propType for selectedDate
  setSelectedDate: PropTypes.func.isRequired, // Add propType for setSelectedDate
};

export default OrderForm;
