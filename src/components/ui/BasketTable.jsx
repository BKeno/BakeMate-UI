// components/ui/BasketTable.jsx

import PropTypes from 'prop-types';

const BasketTable = ({ basket, removeFromBasket }) => {
  return (
    <div className="overflow-x-auto w-full mt-7">
      <table className="table w-full table-xs">
        {/* Table head */}
        <thead className="text-bakery-brown">
          <tr className="border-b-2 border-bakery-cream">
            <th className="font-semibold uppercase p-2">Name</th>
            <th className="font-semibold uppercase p-2">Quantity</th>
            <th className="font-semibold uppercase p-2">Price</th>
            <th className="font-semibold uppercase p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
  {basket.map((item, index) => (
    <tr key={index} className="border-b border-bakery-cream">
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.totalPrice}</td>
      <td>
        <button onClick={() => removeFromBasket(item.id)} className="btn btn-error btn-xs">
          Remove
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

BasketTable.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};


export default BasketTable;
