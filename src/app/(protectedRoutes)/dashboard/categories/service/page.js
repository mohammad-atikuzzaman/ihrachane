"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getData } from "@/utils/axiosPublic"; // তোমার axios wrapper

const SubCategoryServicePage = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 5,
  });

  // Fetch data from API
  const fetchData = async (page = 1, limit = 5) => {
    try {
      const res = await getData(
        `/api/sub-categories/services?page=${page}&limit=${limit}`
      );

      setData(res?.data || []);
      setPagination({
        currentPage: res?.meta?.currentPage || 1,
        totalPages: res?.meta?.totalPages || 1,
        limit: res?.meta?.limit || 5,
      });
    } catch (error) {
      console.error("Failed to fetch sub-category services:", error);
    }
  };

  useEffect(() => {
    fetchData(pagination.currentPage, pagination.limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  const handlePageChange = (page) => {
    if (page > 0 && page <= pagination.totalPages) {
      fetchData(page, pagination.limit);
    }
  };

  return (
    <div className="p-6 flex justify-center">
      {/* Card Wrapper */}
      <div className="bg-white shadow-md rounded-xl w-full max-w-4xl p-6">
        {/* Header + Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Sub Category Service List
          </h2>
          <Link href={"/dashboard/categories/service/createService"}>
            <button className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white px-4 py-2 rounded-lg shadow">
              Add Sub Category
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="text-gray-500 text-left border-b">
                <th className="px-6 py-3">SL. NO</th>
                <th className="px-6 py-3">NAME</th>
                <th className="px-6 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item?._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } hover:bg-gray-50 transition`}
                >
                  <td className="px-6 py-4">
                    {(pagination.currentPage - 1) * pagination.limit +
                      index +
                      1}
                  </td>
                  <td className="px-6 py-4">{item?.serviceName}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <Link
                      href={`/dashboard/categories/service/${item?._id}`}
                      className="p-2 rounded-full hover:bg-blue-100 text-blue-600"
                    >
                      <FaEdit />
                    </Link>
                    <button className="p-2 rounded-full hover:bg-red-100 text-red-600">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
    </div>
  );
};

export default SubCategoryServicePage;
