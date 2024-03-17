// components/ui/OrderForm.jsx

import PropTypes from 'prop-types';
import { useState } from "react";

import {
  isProductInBasket,
  showProductInBasketToast,
} from "../../utils/basketFunctions";

const OrderForm = ({ products, addToBasket, basket }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedProduct, setSelectedProduct] = useState(1); // always the product with id = 1 will be loaded
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const productToAdd = products.find((p) => p.id === selectedProduct);

    if (productToAdd) {
      // Check if the product is already in the basket
      if (isProductInBasket(basket, productToAdd.id)) {
        showProductInBasketToast();
        return; // Exit the function to stop adding the product
      }

      addToBasket(productToAdd, quantity);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control w-full px-4 py-2">
      {/* Date picker input on its own row */}
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Date of delivery</span>
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="input input-bordered w-full bg-white bg-opacity-20 border-primary focus:border-bakery-focus focus:outline-none"
        />
      </div>

      {/* Flex container for product and quantity inputs */}
      <div className="flex items-center gap-4 mb-4">
        {/* Product select input taking 3/4 of the space */}
        <div className="flex-grow">
          <label className="label">
            <span className="label-text">Product</span>
          </label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(Number(e.target.value))}
            className="select select-bordered w-full bg-white bg-opacity-20 border-primary focus:border-bakery-focus focus:outline-none"
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity input taking 1/4 of the space */}
        <div className="w-1/4">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full bg-white bg-opacity-20 border-primary focus:border-bakery-focus focus:outline-none"
            min="1"
          />
        </div>
      </div>

      {/* Submit button centered */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="btn btn-primary max-w-xs mt-4 bg-bakery-gold text-white"
        >
          Add to Basket
        </button>
      </div>
    </form>
  );
};

OrderForm.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // Add any other product properties that are used
  })).isRequired,
  addToBasket: PropTypes.func.isRequired,
  basket: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number,
    // Add any other basket item properties that are used
  })).isRequired,
};

export default OrderForm;
