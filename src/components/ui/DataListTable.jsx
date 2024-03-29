// components/ui/DataListTable.jsx
import PropTypes from 'prop-types';

/**
 * Generic data table component that renders a table based on provided data and column definitions.
 * 
 * @param {Array} data - Array of data objects to display in the table.
 * @param {boolean} loading - Indicates if data is currently being loaded.
 * @param {Array} columns - Configuration for table columns, including header text and data accessors.
 * @returns JSX.Element - The rendered table element.
 */
const DataListTable = ({ data, loading, columns }) => {
  return (
    <div className="overflow-x-auto w-full mt-7">
      <table className="table w-full table-xs">
        <thead className="text-bakery-brown">
          <tr className="border-b-2 border-bakery-cream">
            {columns.map((column) => (
              <th key={column.header} className="font-semibold uppercase p-2">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="text-center">Loading...</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index} className="border-b border-bakery-cream">
                {columns.map((column) => (
                  <td key={`${index}-${column.accessor}`} className={column.className}>
                    {typeof column.accessor === 'function' ? column.accessor(item) : item[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

DataListTable.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
      className: PropTypes.string, // Optional: className for <td>
    })
  ).isRequired,
};

export default DataListTable;
