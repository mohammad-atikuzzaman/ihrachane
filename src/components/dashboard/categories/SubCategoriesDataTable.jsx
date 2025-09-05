"use client";

import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "@/utils/axiosPublic"; // তোমার axios wrapper

const SubCategoriesDataTable = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 5,
  });

  // fetch data from API
  const fetchData = async (page = 1, limit = 5) => {
    try {
      const res = await getData(
        `/api/sub-categories?page=${page}&limit=${limit}`
      );

      setData(res?.data || []);
      setPagination({
        currentPage: res?.meta?.currentPage || 1,
        totalPages: res?.meta?.totalPages || 1,
        limit: res?.meta?.limit || 5,
      });
    } catch (error) {
      console.error("Failed to fetch sub-categories:", error);
    }
  };

  useEffect(() => {
    fetchData(pagination.currentPage, pagination.limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (page) => {
    if (page > 0 && page <= pagination.totalPages) {
      fetchData(page, pagination.limit);
    }
  };
  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              SL. NO
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((item, index) => (
            <tr key={item?._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {(pagination.currentPage - 1) * pagination.limit + index + 1}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item?.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2 justify-center">
                <Link
                  href={`/dashboard/categories/sub-list/${item?._id}`}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 w-fit cursor-pointer"
                >
                  <CiEdit className="text-sm text-gray-900" />
                </Link>
                <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 w-fit cursor-pointer">
                  <AiOutlineDelete className="text-sm text-gray-900" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1}
          className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(pagination.totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded border text-sm ${
              pagination.currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={pagination.currentPage === pagination.totalPages}
          className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SubCategoriesDataTable;
