// InvoicesList.jsx
import Card from '../components/ui/Card';
import DateInput from '../components/ui/DateInput';
import DataListTable from '../components/ui/DataListTable';
import { useDateRangeData } from '../hooks/useDateRangeData'; // Assuming you have adapted this hook for fetching
import { fetchInvoicesByDateRange } from '../utils/api';

const InvoicesList = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    data: invoices,
    loading,
    handleFilter,
  } = useDateRangeData(fetchInvoicesByDateRange); // Use your custom hook here

  // Adjust column definitions as necessary for invoices
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Date', accessor: item => new Date(item.invoiceDate).toLocaleDateString() },
    { header: 'User', accessor: 'invoicingPerson' },
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
    <Card title="List Invoices">
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
          Filter Invoices
        </button>
      </div>
      <DataListTable data={invoices} loading={loading} columns={columns} />
    </Card>
  );
};

export default InvoicesList;
