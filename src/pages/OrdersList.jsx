// OrdersList.jsx
import Card from '../components/ui/Card';
import DateInput from '../components/ui/DateInput';
import DataListTable from '../components/ui/DataListTable';
import { useDateRangeData } from '../hooks/useDateRangeData'; // Assuming you have this custom hook
import { fetchOrdersByDateRange } from '../utils/api';

const OrdersList = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    data: orders,
    loading,
    handleFilter,
  } = useDateRangeData(fetchOrdersByDateRange); // Adjust the hook according to its implementation

  const columns = [
    { header: 'ID', accessor: 'id' },
    { 
      header: 'Date', 
      accessor: item => new Date(item.orderDate).toLocaleDateString('hu-HU', {
        month: '2-digit',
        day: '2-digit',
      }).replace(' ', '')
    },
    { header: 'User', accessor: 'orderingPerson' },
    { header: 'Name', accessor: 'productName' },
    { header: 'No', accessor: 'quantity', className: 'text-right' },
    { 
      header: 'Tot', 
      accessor: item => new Intl.NumberFormat('hu-HU', { 
        style: 'currency', 
        currency: 'HUF', 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
      }).format(item.totalPrice), 
      className: 'text-right' 
    },
  ];

  return (
    <Card title="List Orders by Delivery Date">
      <DateInput
        label="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <DateInput
        label="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <div className="flex justify-center">
        <button onClick={handleFilter} className="btn btn-primary max-w-xs mt-4">
          Filter Orders
        </button>
      </div>
      <DataListTable data={orders} loading={loading} columns={columns} />
    </Card>
  );
};

export default OrdersList;
