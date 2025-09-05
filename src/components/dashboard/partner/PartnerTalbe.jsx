import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

const PartnerTable = () => {
  const data = [
    { id: 1, name: "partner 1" },
    { id: 2, name: "partner 2" },
    { id: 3, name: "partner 3" },
    { id: 4, name: "partner 4" },
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
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              LOGO
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
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-900'>{item?.logo || ""}</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap flex gap-2 justify-center'>
              <Link
                  href={`/dashboard/partner/${item.id}`}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 w-fit cursor-pointer"
                >
                  <CiEdit className="text-sm text-gray-900" />
                </Link>
                <div className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 w-fit cursor-pointer'>
                  <AiOutlineDelete className='text-sm text-gray-900' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartnerTable;
