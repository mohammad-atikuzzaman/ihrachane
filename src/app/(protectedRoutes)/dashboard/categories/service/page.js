"use client";
import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const SubCategoryServicePage = () => {
  // Dummy data
  const data = [
    { id: 1, name: "Md Atikuzzaman" },
    { id: 2, name: "Nasim Mondol" },
    { id: 3, name: "Ashraful Tusar" },
  ];

  return (
    <div className="p-6  flex justify-center">
      {/* Card Wrapper */}
      <div className="bg-white shadow-md rounded-xl w-full max-w-4xl p-6">
        {/* Header + Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Sub Category Service List
          </h2>
          <Link href={'/dashboard/categories/service/createService'}><button className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white px-4 py-2 rounded-lg shadow">
            Add Sub Category
          </button></Link>
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
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-200"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <button className="p-2 rounded-full hover:bg-blue-100 text-blue-600 transition">
                      <FaEdit />
                    </button>
                    <button className="p-2 rounded-full hover:bg-red-100 text-red-600 transition">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryServicePage;
