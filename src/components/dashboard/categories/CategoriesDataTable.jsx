import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

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
              SL. NO
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              NAME
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data?.map((item, index) => (
            <tr key={item.id}>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-900'>{index + 1}</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-900'>{item.name}</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap flex gap-2 justify-center'>
                <div className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 w-fit hover:p-2.5'>
                  <CiEdit className='text-sm hover:text-lg text-gray-900' />
                </div>
                <div className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 w-fit hover:p-2.5'>
                  <AiOutlineDelete className='text-sm hover:text-lg text-gray-900'  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesDataTable;
