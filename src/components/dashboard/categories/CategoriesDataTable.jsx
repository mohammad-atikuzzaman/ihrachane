// components/DataTable.jsx
const CategoriesDataTable = () => {
  const data = [
    { id: 1, name: "Product Sourcing" },
    { id: 2, name: "Supplier Verification" },
    { id: 3, name: "Air Freight" },
    { id: 4, name: "Sea Freight" },
  ];

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              NAME
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map((item) => (
            <tr key={item.id}>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-900'>{item.id}</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-900'>{item.name}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesDataTable;
