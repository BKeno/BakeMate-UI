// pages/Products.jsx

import  { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import ProductsTable from "../components/ui/ProductsTable";
import { fetchProducts } from "../utils/api"; // Adjust the import path as needed

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <Card title="Product List">
      <ProductsTable products={products} />
    </Card>
  );
};

export default Products;

