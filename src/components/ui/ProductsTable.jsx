// components/ui/ProductsTable.jsx

import PropTypes from 'prop-types';

const ProductsTable = ({ products }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* Table head */}
        <thead className=" text-bakery-brown">
        <tr className="border-b-2 border-bakery-cream"> {/* Thicker bottom border for header */}
    <th className="font-semibold uppercase p-2">Name</th>
    <th className="font-semibold uppercase p-2">Price</th>
    {/* ... more headers */}
  </tr>
        </thead>
        <tbody>
          {/* Map through products to render table rows */}
          {products.map((product, index) => (
            <tr key={index} className="border-b border-bakery-cream">
              <td>{product.name}</td>
              <td className="text-right">{product.price}</td>
              {/* Add more product details as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductsTable;

