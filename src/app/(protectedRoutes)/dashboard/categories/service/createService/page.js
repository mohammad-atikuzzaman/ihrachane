"use client";
import Link from "next/link";
import React from "react";

const CreateSubCategoryService = () => {
  return (
    <div className="p-10 bg-white min-h-screen  max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-10">
        Create New Sub Category Service
      </h2>

      {/* Form */}
      <form className="space-y-8">
        {/* Sub Category Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase">
            Sub Category Name
          </label>
          <input
            type="text"
            placeholder="Enter Sub Category Name Text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Select + Upload */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Select Sub Category */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase">
              Select Sub Category
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none">
              <option>Choose a Sub Category</option>
              <option>Category A</option>
              <option>Category B</option>
            </select>
          </div>

          {/* Upload Banner Image */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase">
              Upload Banner Image (1080x720)
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Sub Paragraph */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase">
            Sub Paragraph
          </label>
          <textarea
            rows="5"
            placeholder="Enter Text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-2 cursor-pointer rounded-md shadow hover:bg-orange-700"
          >
            Submit
          </button>
          <Link href={'/dashboard/categories/service'}><button
            type="button"
            className="bg-orange-200 cursor-pointer text-gray-700 px-6 py-2 rounded-md shadow hover:bg-orange-300"
          >
            Back
          </button></Link>
        </div>
      </form>
    </div>
  );
};

export default CreateSubCategoryService;
